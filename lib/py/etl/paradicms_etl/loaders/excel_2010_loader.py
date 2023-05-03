import json
from pathlib import Path
from types import ModuleType
from typing import Tuple, Type, Dict, List, Optional, Any, Iterable

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
        self.__xlsx_file_path = xlsx_file_path
        self.__workbook = Workbook()

    def __call__(self, *, flush: bool, models: Iterable[Model]):
        models_by_class: Dict[Type[Model], List[Model]] = {}
        for model in models:
            models_by_class.setdefault(model.__class__, []).append(model)

        for model_class, model_class_models in models_by_class.items():
            try:
                sheet = self.__workbook.get_sheet_by_name(model_class.__name__)
                new_sheet = False
            except KeyError:
                sheet = self.__workbook.create_sheet(model_class.__name__)
                new_sheet = True
            sheet_header: Optional[List[str]] = None

            for model in model_class_models:
                graph = Graph()
                bind_namespaces(
                    graph.namespace_manager,
                    additional_namespace_modules=self.__additional_namespace_modules,
                )
                model.to_rdf(graph=graph)
                assert issubclass(model_class, ResourceBackedModel)
                json_ld_object = json.loads(
                    graph.serialize(
                        context=model_class.json_ld_context(), format="json-ld"
                    )
                )
                json_ld_object.pop("@context")
                json_ld_object.pop("@type", None)

                if sheet_header is None:
                    sheet_header = []
                    for key in json_ld_object.keys():
                        if key.startswith("http://") or key.startswith("https://"):
                            continue
                        sheet_header.append(key)
                    if new_sheet:
                        sheet.append(sheet_header)

                row = []
                row_non_empty = False
                for key in sheet_header:
                    value = _get_excel_2010_compatible_json_ld_object_value(
                        json_ld_object.get(key, None)
                    )
                    if value is not None:
                        row.append(value)
                        row_non_empty = True
                    else:
                        row.append("")
                if row_non_empty:
                    sheet.append(row)

        if flush:
            self.__workbook.save(str(self.__xlsx_file_path))
