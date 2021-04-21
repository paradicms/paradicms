from typing import Tuple, Union
from urllib.parse import quote

from rdflib import URIRef

from paradicms_etl._transformer import _Transformer
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.object import Object
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.models.dublin_core_property_definitions import (
    DublinCorePropertyDefinitions,
)


class _PastPerfectTransformer(_Transformer):
    def __init__(self, object_uri_prefix: str, **kwds):
        _Transformer.__init__(self, **kwds)
        self.__kwds = kwds
        self.__object_uri_prefix = object_uri_prefix

    def _convert_database_object_attribute_values_to_properties(
        self,
        attribute_values: Union[None, str, Tuple[str, ...]],
        property_definition: PropertyDefinition,
    ) -> Tuple[Property, ...]:
        if attribute_values is None:
            return ()
        if isinstance(attribute_values, str):
            return (Property(property_definition, attribute_values),)
        elif isinstance(attribute_values, tuple):
            return tuple(
                Property(property_definition, property_value)
                for property_value in attribute_values
            )
        else:
            raise NotImplementedError(type(attribute_values))

    def _get_database_object_properties(self, database_object) -> Tuple[Property, ...]:
        from pastpy.database_object import DatabaseObject

        assert isinstance(database_object, DatabaseObject)

        properties = []
        for property_definition, attribute_values in (
            (
                DublinCorePropertyDefinitions.ALTERNATIVE_TITLE,
                database_object.othername,
            ),
            (DublinCorePropertyDefinitions.DATE, database_object.date),
            (DublinCorePropertyDefinitions.DESCRIPTION, database_object.description),
            (DublinCorePropertyDefinitions.IDENTIFIER, database_object.id),
            (DublinCorePropertyDefinitions.TITLE, database_object.title),
        ):
            properties.extend(
                self._convert_database_object_attribute_values_to_properties(
                    attribute_values, property_definition
                )
            )
        return tuple(properties)

    def transform(self, database):
        yield from DublinCorePropertyDefinitions.as_tuple()

        institution = self._transform_institution_from_arguments(**self.__kwds)
        yield institution

        institution_image = self._transform_institution_image_from_arguments(
            **self.__kwds
        )
        if institution_image is not None:
            yield institution_image

        collection = self._transform_collection_from_arguments(**self.__kwds)
        yield collection

        from pastpy.database_object import DatabaseObject
        from pastpy.database_image import DatabaseImage

        for database_object in database.objects():
            assert isinstance(database_object, DatabaseObject)

            assert database_object.name is not None

            object_ = Object(
                collection_uris=(collection.uri,),
                institution_uri=institution.uri,
                properties=self._get_database_object_properties(database_object),
                title=database_object.name,
                uri=URIRef(self.__object_uri_prefix + quote(database_object.id)),
            )
            yield object_

            for database_image in database_object.images:
                assert isinstance(database_image, DatabaseImage)

                if database_image.full_size_url is None:
                    continue

                if not database_image.full_size_url.endswith(".jpg"):
                    self._logger.warn(
                        "invalid image full size URL: %s", database_image.full_size_url
                    )
                    continue

                full_size_image = Image.create(
                    depicts_uri=object_.uri,
                    institution_uri=institution.uri,
                    uri=URIRef(database_image.full_size_url),
                )
                yield full_size_image

                yield Image.create(
                    depicts_uri=object_.uri,
                    institution_uri=institution.uri,
                    original_image_uri=full_size_image.uri,
                    uri=URIRef(database_image.thumbnail_url),
                )
