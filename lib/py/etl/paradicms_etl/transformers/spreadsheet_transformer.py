import json
import logging
from typing import Set, Type, Dict, Any, List, Union, TypeVar, Optional
from urllib.parse import quote

from PIL.Image import Image
from rdflib import URIRef, Graph
from rdflib.namespace import Namespace
from stringcase import spinalcase, snakecase

from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.root_model import RootModel
from paradicms_etl.models.root_model_classes_by_name import ROOT_MODEL_CLASSES_BY_NAME
from paradicms_etl.utils.safe_dict_update import safe_dict_update

_MultidictKeyT = TypeVar("_MultidictKeyT")
_MultidictValueT = TypeVar("_MultidictValueT")


def _multidict_add(
    multidict: Dict[_MultidictKeyT, Union[_MultidictValueT, List[_MultidictValueT]]],
    key: _MultidictKeyT,
    value: _MultidictValueT,
):
    """
    Helper function to add a value to a multidict
    """

    existing_value = multidict.get(key)
    if existing_value is None:
        multidict[key] = value
    elif isinstance(existing_value, list):
        existing_value.append(value)
    else:
        multidict[key] = [
            existing_value,
            value,
        ]


class SpreadsheetTransformer:
    def __init__(
        self,
        *,
        pipeline_id: str,
        root_model_classes_by_name: Optional[Dict[str, Type[RootModel]]] = None,
    ):
        self.__logger = logging.getLogger(__name__)
        self.__pipeline_id = pipeline_id
        if root_model_classes_by_name is None:
            root_model_classes_by_name = ROOT_MODEL_CLASSES_BY_NAME
        self.__root_model_classes_by_alias = root_model_classes_by_name.copy()

        self.__json_ld_context = {"ss": str(self.__pipeline_namespace)}
        for (
            model_class_name,
            model_class,
        ) in root_model_classes_by_name.items():
            self.__json_ld_context["ss-" + spinalcase(model_class_name)] = str(
                self.__model_type_namespace(model_class=model_class)
            )
            for model_class_name_variation in (
                snakecase(model_class_name),
                spinalcase(model_class_name),
            ):
                if model_class_name_variation not in self.__root_model_classes_by_alias:
                    self.__root_model_classes_by_alias[
                        model_class_name_variation
                    ] = model_class

    def __call__(self, sheets: Dict[str, Any]):
        for sheet_name, sheet in sheets.items():
            rows = sheet["rows"]
            for sheet_name_variant in (sheet_name, sheet_name.split()[0]):
                model_class = self.__root_model_classes_by_alias.get(sheet_name_variant)
                if model_class is not None:
                    break
            if model_class is None:
                self.__logger.warning(
                    "sheet %s does not correspond to a model class", sheet_name
                )
                continue

            header_row = None
            resource_identifiers: Set[URIRef] = set()
            for row_i, row in enumerate(rows):
                if row_i == 0:
                    header_row = row
                    continue

                data_row = row
                assert header_row is not None
                assert len(header_row) == len(data_row)

                # Convert each row to a multi-dict
                row_dict: Dict[str, Union[Any, List[Any]]] = {}
                for header_cell, data_cell in zip(header_row, data_row):
                    if header_cell is None:
                        continue
                    header_cell = header_cell.strip()
                    if not header_cell:
                        continue

                    if data_cell is None:
                        continue

                    if isinstance(data_cell, str):
                        stripped_data_cell = data_cell.strip()
                        if not stripped_data_cell:
                            continue
                        try:
                            json_ready_data_cell = json.loads(stripped_data_cell)
                        except json.JSONDecodeError:
                            json_ready_data_cell = stripped_data_cell
                    elif isinstance(data_cell, Image):
                        json_ready_data_cell = ImageData.from_pil_image(
                            data_cell
                        ).to_json_ld()
                    else:
                        json_ready_data_cell = data_cell

                    _multidict_add(row_dict, header_cell, json_ready_data_cell)

                # Parse the row multi-dict as a JSON-LD object

                # Synthesize an @id key if there isn't one
                if "@id" not in row_dict:
                    row_dict["@id"] = str(
                        self.__model_uri(
                            model_class=model_class,
                            model_id=str(row_i),
                        )
                    )

                json_ld_context = safe_dict_update(
                    model_class.json_ld_context(), self.__json_ld_context
                )

                graph = Graph()
                graph.parse(data=row_dict, context=json_ld_context, format="json-ld")  # type: ignore

                # The graph should have a single named subject
                uri_subjects = {
                    subject
                    for subject in graph.subjects()
                    if isinstance(subject, URIRef)
                }
                if len(uri_subjects) == 0:
                    self.__logger.debug(
                        "row %d in sheet %s has %d named subjects",
                        row_i,
                        sheet_name,
                        len(uri_subjects),
                    )
                    break
                elif len(uri_subjects) == 1:
                    resource = graph.resource(uri_subjects.pop())
                else:
                    raise ValueError(
                        f"row {row_i} in sheet {sheet_name} has {len(uri_subjects)} named subjects"
                    )

                if resource.identifier in resource_identifiers:
                    raise ValueError(
                        f"row {row_i} in sheet {sheet_name} has duplicate identifier: {resource.identifier}"
                    )
                resource_identifiers.add(resource.identifier)

                # Add back the images once we know the format

                yield model_class(resource)

    def __model_type_namespace(
        self, *, model_class: Type[ResourceBackedModel]
    ) -> Namespace:
        return Namespace(
            f"{self.__pipeline_namespace}{spinalcase(model_class.__name__)}:"
        )

    def __model_uri(
        self, *, model_class: Type[ResourceBackedModel], model_id: str
    ) -> URIRef:
        return self.__model_type_namespace(model_class=model_class)[quote(model_id)]

    @property
    def __pipeline_namespace(self) -> Namespace:
        return Namespace(f"urn:spreadsheet:{self.__pipeline_id}:")
