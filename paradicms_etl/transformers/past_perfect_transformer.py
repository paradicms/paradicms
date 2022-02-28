from typing import Tuple, Union
from urllib.parse import quote

from rdflib import URIRef, DCTERMS

from paradicms_etl.models.image import Image
from paradicms_etl.models.property import Property
from paradicms_etl.models.work import Work
from paradicms_etl.transformer import Transformer


class PastPerfectTransformer(Transformer):
    def __init__(self, work_uri_prefix: str, **kwds):
        Transformer.__init__(self, **kwds)
        self.__kwds = kwds
        self.__work_uri_prefix = work_uri_prefix

    def _convert_database_object_attribute_values_to_properties(
        self,
        attribute_values: Union[None, str, Tuple[str, ...]],
        property_uri: URIRef,
    ) -> Tuple[Property, ...]:
        if attribute_values is None:
            return ()
        if isinstance(attribute_values, str):
            return (Property(property_uri, attribute_values),)
        elif isinstance(attribute_values, tuple):
            return tuple(
                Property(property_uri, property_value)
                for property_value in attribute_values
            )
        else:
            raise NotImplementedError(type(attribute_values))

    def _get_database_object_properties(self, database_object) -> Tuple[Property, ...]:
        from pastpy.database_object import DatabaseObject

        assert isinstance(database_object, DatabaseObject)

        properties = []
        for property_uri, attribute_values in (
            (
                DCTERMS.alternative,
                database_object.othername,
            ),
            (DCTERMS.date, database_object.date),
            (DCTERMS.description, database_object.description),
            (DCTERMS.identifier, database_object.id),
            (DCTERMS.title, database_object.title),
        ):
            properties.extend(
                self._convert_database_object_attribute_values_to_properties(
                    attribute_values, property_uri
                )
            )
        return tuple(properties)

    def transform(self, database):
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

            work = Work.from_fields(
                collection_uris=(collection.uri,),
                institution_uri=institution.uri,
                properties=self._get_database_object_properties(database_object),
                title=database_object.name,
                uri=URIRef(self.__work_uri_prefix + quote(database_object.id)),
            )
            yield work

            for database_image in database_object.images:
                assert isinstance(database_image, DatabaseImage)

                if database_image.full_size_url is None:
                    continue

                if not database_image.full_size_url.endswith(".jpg"):
                    self._logger.warn(
                        "invalid image full size URL: %s", database_image.full_size_url
                    )
                    continue

                full_size_image = Image.from_fields(
                    depicts_uri=work.uri,
                    uri=URIRef(database_image.full_size_url),
                )
                yield full_size_image

                yield Image.from_fields(
                    depicts_uri=work.uri,
                    original_image_uri=full_size_image.uri,
                    uri=URIRef(database_image.thumbnail_url),
                )
