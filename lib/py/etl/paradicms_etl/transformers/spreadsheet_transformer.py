import json
import logging
from typing import Set, Type, Dict, Any, List, Union
from urllib.parse import quote

from rdflib import URIRef, RDF, Graph
from rdflib.namespace import Namespace
from stringcase import spinalcase

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.root_model_classes import (
    ROOT_MODEL_CLASSES_BY_NAME,
    ROOT_MODEL_CLASSES_BY_SNAKE_CASE_NAME,
)
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SpreadsheetTransformer:
    def __init__(
        self,
        *,
        pipeline_id: str,
    ):
        self.__logger = logging.getLogger(__name__)
        self.__pipeline_id = pipeline_id

        self.__json_ld_context = {"ss": str(self.__pipeline_namespace)}
        for (
            model_type_name,
            model_class,
        ) in ROOT_MODEL_CLASSES_BY_SNAKE_CASE_NAME.items():
            self.__json_ld_context["ss-" + model_type_name] = str(
                self.__model_type_namespace(model_class=model_class)
            )

    def __call__(self, sheets: Dict[str, Any]):
        for sheet_name, sheet in sheets.items():
            rows = sheet["rows"]
            model_class = ROOT_MODEL_CLASSES_BY_NAME.get(sheet_name)
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
                row_dict: Dict[str, Union[str, List[str]]] = {}
                for header_cell, data_cell in zip(header_row, data_row):
                    header_cell = header_cell.strip()
                    if not header_cell:
                        continue

                    if data_cell is None:
                        continue
                    if isinstance(data_cell, str):
                        data_cell = data_cell.strip()
                        if not data_cell:
                            continue
                        try:
                            data_cell = json.loads(data_cell)
                        except json.JSONDecodeError:
                            pass

                    existing_row_dict_value = row_dict.get(header_cell)
                    if existing_row_dict_value is None:
                        row_dict[header_cell] = data_cell
                    elif isinstance(existing_row_dict_value, list):
                        # Allow multiple columns with the same header
                        existing_row_dict_value.append(data_cell)
                    else:
                        row_dict[header_cell] = [
                            existing_row_dict_value,
                            data_cell,
                        ]

                # Parse the row multi-dict as a JSON-LD object

                # Synthesize an @id key if there isn't one
                if "@id" not in row_dict:
                    row_dict["@id"] = self.__model_uri(
                        model_class=model_class,
                        model_id=str(row_i),
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

                resource.add(RDF.type, getattr(CMS, model_class.__name__))

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
