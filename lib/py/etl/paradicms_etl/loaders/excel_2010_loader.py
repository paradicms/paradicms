import json
import logging
from pathlib import Path
from types import ModuleType
from typing import Tuple, List, Optional, Any, Iterable

from openpyxl import Workbook
from rdflib import Graph

from paradicms_etl.model import Model
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import bind_namespaces


def _get_excel_2010_compatible_json_ld_object_value(
    json_ld_object_value: Any,
) -> Any:
    if json_ld_object_value is None:
        return None
    elif isinstance(json_ld_object_value, dict):
        if (
            len(json_ld_object_value) == 2
            and json_ld_object_value.get("@language") == "en"
            and "@value" in json_ld_object_value
        ):
            return json_ld_object_value["@value"]
        else:
            return None
    elif isinstance(json_ld_object_value, list):
        for sub_value in json_ld_object_value:
            valid_sub_value = _get_excel_2010_compatible_json_ld_object_value(sub_value)
            if valid_sub_value is not None:
                return valid_sub_value
    else:
        return json_ld_object_value


class Excel2010Loader:
    def __init__(
        self,
        *,
        xlsx_file_path: Path,
        additional_namespace_modules: Tuple[ModuleType, ...] = ()
    ):
        self.__additional_namespace_modules = additional_namespace_modules
        self.__logger = logging.getLogger(__name__)
        self.__xlsx_file_path = xlsx_file_path
        self.__workbook = Workbook()

    def __call__(self, *, flush: bool, models: Iterable[Model]) -> Iterable[Model]:
        for model in models:
            if not isinstance(model, ResourceBackedModel):
                self.__logger.warning(
                    "unable to handle non-%s: %s",
                    ResourceBackedModel.__name__,
                    model.__class__.__name__,
                )
                continue

            try:
                sheet = self.__workbook.get_sheet_by_name(model.__class__.__name__)
                new_sheet = False
            except KeyError:
                sheet = self.__workbook.create_sheet(model.__class__.__name__)
                new_sheet = True
            sheet_header: Optional[List[str]] = None

            model_graph = Graph()
            bind_namespaces(
                model_graph.namespace_manager,
                additional_namespace_modules=self.__additional_namespace_modules,
            )
            model.to_rdf(graph=model_graph)
            model_json_ld_object = json.loads(
                model_graph.serialize(
                    context=model.__class__.json_ld_context(), format="json-ld"
                )
            )
            model_json_ld_object.pop("@context")
            model_json_ld_object.pop("@type", None)

            if sheet_header is None:
                sheet_header = []
                for key in model_json_ld_object.keys():
                    if key.startswith("http://") or key.startswith("https://"):
                        continue
                    sheet_header.append(key)
                if new_sheet:
                    sheet.append(sheet_header)

            model_row = []
            model_row_non_empty = False
            for key in sheet_header:
                value = _get_excel_2010_compatible_json_ld_object_value(
                    model_json_ld_object.get(key, None)
                )
                if value is not None:
                    model_row.append(value)
                    model_row_non_empty = True
                else:
                    model_row.append("")
            if model_row_non_empty:
                sheet.append(model_row)

            yield model

        if flush:
            self.__workbook.save(str(self.__xlsx_file_path))
