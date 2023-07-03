import json
import logging
from typing import Type, Dict, Any, List, Union, TypeVar, Optional
from urllib.parse import quote

from PIL.Image import Image
from rdflib import URIRef
from rdflib.namespace import Namespace
from stringcase import spinalcase

from paradicms_etl.models.cms.cms_image_data import CmsImageData
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.root_model_classes_by_name import (
    ROOT_MODEL_CLASSES_BY_NAME,
)
from paradicms_etl.utils.json_object_to_model_transformer import (
    JsonObjectToModelTransformer,
)
from paradicms_etl.utils.root_model_classes_by_alias import root_model_classes_by_alias

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
        image_data_class: Optional[Type[ImageData]] = None,
        root_model_classes_by_name: Optional[
            Dict[str, Type[ResourceBackedModel]]
        ] = None,
    ):
        self.__logger = logging.getLogger(__name__)
        if image_data_class is None:
            image_data_class = CmsImageData
        self.__image_data_class = image_data_class
        if root_model_classes_by_name is None:
            root_model_classes_by_name = ROOT_MODEL_CLASSES_BY_NAME
        self.__json_object_to_model_transformer = JsonObjectToModelTransformer(
            pipeline_id=pipeline_id,
            root_model_classes_by_name=root_model_classes_by_name,
        )
        self.__root_model_classes_by_alias = root_model_classes_by_alias(
            root_model_classes_by_name
        )

    def __call__(self, sheets: Dict[str, Any]):
        for sheet_name, sheet in sheets.items():
            rows = sheet["rows"]
            root_model_class = self.__root_model_classes_by_alias.get(sheet_name)
            if root_model_class is None:
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
                        json_ready_data_cell = self.__image_data_class.from_pil_image(
                            data_cell
                        ).to_json_ld()
                    else:
                        json_ready_data_cell = data_cell

                    _multidict_add(row_dict, header_cell, json_ready_data_cell)

                yield self.__json_object_to_model_transformer(
                    json_object=row_dict,
                    model_class=root_model_class,
                    model_id=sheet_name + ":" + str(row_i),
                )

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
