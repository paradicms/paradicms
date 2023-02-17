import logging
from typing import Dict, Optional, Union, Type
from urllib.parse import quote

from rdflib import URIRef, RDF
from rdflib.namespace import DefinedNamespace, Namespace
from stringcase import snakecase

from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.root_model_classes import (
    ROOT_MODEL_CLASSES_BY_NAME,
    ROOT_MODEL_CLASSES_BY_SNAKE_CASE_NAME,
)
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.dict_to_resource_transformer import DictToResourceTransformer


class SpreadsheetTransformer:
    def __init__(
        self,
        *,
        pipeline_id: str,
        namespaces_by_prefix: Optional[
            Dict[str, Union[Type[DefinedNamespace], Namespace]]
        ] = None,
    ):
        self.__logger = logging.getLogger(__name__)
        self.__pipeline_id = pipeline_id

        if namespaces_by_prefix is None:
            namespaces_by_prefix = (
                DictToResourceTransformer.NAMESPACES_BY_PREFIX_DEFAULT
            )
        namespaces_by_prefix = namespaces_by_prefix.copy()
        if "spreadsheet" in namespaces_by_prefix:
            raise ValueError("the namespace prefix 'spreadsheet' is reserved")
        namespaces_by_prefix["spreadsheet"] = self.__pipeline_namespace
        for (
            model_type_name,
            model_class,
        ) in ROOT_MODEL_CLASSES_BY_SNAKE_CASE_NAME.items():
            if model_type_name not in namespaces_by_prefix:
                namespaces_by_prefix[model_type_name] = self.__model_type_namespace(
                    model_class=model_class
                )
            else:
                self.__logger.debug(
                    "namespace prefix '%s' already mapped, can't use for internal model type reference",
                    model_type_name,
                )
        self.__namespaces_by_prefix = namespaces_by_prefix
        self.__namespaces_by_prefix = namespaces_by_prefix.copy()

    def __call__(self, **sheets):
        for sheet_name, sheet_data in sheets.items():
            model_class = ROOT_MODEL_CLASSES_BY_NAME.get(sheet_name)
            if model_class is None:
                self.__logger.warning(
                    "sheet %s does not correspond to a model class", sheet_name
                )
                continue

            for row_i, row in enumerate(sheet_data):
                row_id = row.pop("id", None)
                resource = DictToResourceTransformer(
                    default_namespace=model_class.DEFAULT_NAMESPACE,
                    namespaces_by_prefix=self.__namespaces_by_prefix,
                    resource_identifier_default=self.__model_uri(
                        model_class=model_class,
                        model_id=row_id if row_id is not None else str(row_i),
                    ),
                ).transform_dict_to_resource(row)
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
