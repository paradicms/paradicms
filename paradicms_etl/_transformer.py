from abc import abstractmethod
from typing import Generator, Optional, Union

from rdflib import URIRef

from paradicms_etl._model import _Model
from paradicms_etl._pipeline_phase import _PipelinePhase
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.rights import Rights


class _Transformer(_PipelinePhase):
    @abstractmethod
    def transform(self, **kwds) -> Generator[_Model, None, None]:
        """
        Transform previously-extracted data.
        :param kwds: merged dictionary of initial extract kwds and the result of extract
        :return: generator of models
        """

    def _transform_collection_from_arguments(
        self,
        *,
        collection_title: str,
        collection_uri: str,
        institution_uri: Union[str, URIRef],
        **kwds
    ) -> Collection:
        if not isinstance(institution_uri, URIRef):
            institution_uri = URIRef(str(institution_uri))

        return Collection(
            institution_uri=institution_uri,
            title=collection_title,
            uri=URIRef(collection_uri),
        )

    def _transform_institution_from_arguments(
        self,
        *,
        institution_name: str,
        institution_uri: str,
        institution_rights: Optional[str] = None,
        **kwds
    ) -> Institution:
        return Institution(
            name=institution_name,
            rights=Rights(holder=institution_name, statement=institution_rights)
            if institution_rights is not None
            else None,
            uri=URIRef(institution_uri),
        )

    def _transform_institution_image_from_arguments(
        self,
        *,
        institution_image_uri: Optional[str] = None,
        institution_uri: str,
        **kwds
    ) -> Optional[Image]:
        if institution_image_uri is None:
            return None
        return Image.create(
            depicts_uri=URIRef(institution_uri),
            institution_uri=URIRef(institution_uri),
            uri=URIRef(institution_image_uri),
        )
