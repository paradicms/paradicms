from abc import abstractmethod
from typing import Generator

from rdflib import URIRef

from paradicms_etl._model import _Model
from paradicms_etl._pipeline_phase import _PipelinePhase
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

    def _transform_institution_from_arguments(
        self, *, institution_name: str, institution_rights: str, institution_uri: str
    ) -> Institution:
        return Institution(
            name=institution_name,
            rights=Rights(holder=institution_name, statements=(institution_rights,),),
            uri=URIRef(institution_uri),
        )
