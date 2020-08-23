from typing import Tuple

from paradicms_etl._pipeline import _Pipeline
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.object import Object
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definitions import PropertyDefinitions


class _PastPerfectPipeline(_Pipeline):
    @classmethod
    def add_arguments(cls, arg_parser, **kwds):
        _Pipeline.add_arguments(cls, arg_parser, **kwds)
        cls._add_institution_arguments(arg_parser)

    def transform(self, database):
        yield from PropertyDefinitions.as_tuple()

        institution = self._transform_institution_from_arguments(**self.__kwds)
        yield institution

        collection = Collection(
            institution_uri=institution.uri, title=institution.name,
        )
        yield collection

        for object_ in database.objects():
            yield Object(
                collection_uris=(collection.uri,),
                institution_uri=institution.uri,
                properties=self._get_object_properties(object_),
                title=object_.title,
            )

    def _get_object_properties(self, object_) -> Tuple[Property, ...]:
        from pastpy.database_object import DatabaseObject

        assert isinstance(object_, DatabaseObject)

        return ()
