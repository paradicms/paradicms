import logging
from typing import Type, Dict, Any
from urllib.parse import quote

from rdflib import URIRef, RDF, Graph
from rdflib.namespace import Namespace
from stringcase import snakecase

from paradicms_etl.models.named_model import NamedModel
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
            for row_i, row in enumerate(rows):
                if row_i == 0:
                    header_row = row
                    continue

                data_row = row
                assert header_row is not None
                assert len(header_row) == len(data_row)

                # Convert each row to a multi-dict
                row_dict = {}
                for header_cell, data_cell in zip(header_row, data_row):
                    stripped_header_cell = header_cell.strip()
                    if not stripped_header_cell:
                        continue

                    stripped_data_cell = data_cell.strip()
                    if not stripped_data_cell:
                        continue

                    existing_row_dict_value = row_dict.get(stripped_header_cell)
                    if existing_row_dict_value is None:
                        row_dict[stripped_header_cell] = stripped_data_cell
                    elif isinstance(existing_row_dict_value, list):
                        # Allow multiple columns with the same header
                        existing_row_dict_value.append(stripped_data_cell)
                    else:
                        row_dict[stripped_header_cell] = [
                            existing_row_dict_value,
                            stripped_data_cell,
                        ]

                # Parse the row multi-dict as a JSON-LD object

                # Synthesize an @id key if there isn't one
                if "@id" not in row_dict:
                    row_dict["@id"] = self.__model_uri(
                        model_id=str(row_i),
                        model_type_name=snakecase(model_class.__name__),
                    )

                json_ld_context = safe_dict_update(
                    model_class.json_ld_context(), self.__json_ld_context
                )

                graph = Graph()
                graph.parse(data=row_dict, context=json_ld_context, format="json-ld")

                # The graph should have a single named subject
                uri_subjects = {
                    subject
                    for subject in graph.subjects()
                    if isinstance(subject, URIRef)
                }
                if len(uri_subjects) == 1:
                    resource = graph.resource(uri_subjects.pop())
                else:
                    raise ValueError(
                        f"row {row_i} in sheet {sheet_name} has {len(uri_subjects)} named subjects"
                    )

                resource.add(RDF.type, getattr(CMS, model_class.__name__))

                yield model_class(resource)

    def __model_type_namespace(self, *, model_class: Type[NamedModel]) -> Namespace:
        return Namespace(
            f"{self.__pipeline_namespace}{snakecase(model_class.__name__)}:"
        )

    def __model_uri(self, *, model_class: Type[NamedModel], model_id: str) -> URIRef:
        return self.__model_type_namespace(model_class=model_class)[quote(model_id)]

    @property
    def __pipeline_namespace(self) -> Namespace:
        return Namespace(f"urn:spreadsheet:{self.__pipeline_id}:")
