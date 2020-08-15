from abc import abstractmethod
from typing import Generator, Optional

from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF

from paradicms_etl._model import _Model
from paradicms_etl._pipeline_phase import _PipelinePhase
from paradicms_etl.models.institution import Institution
from paradicms_etl.namespace import CMS


class _Transformer(_PipelinePhase):
    @abstractmethod
    def transform(self, **kwds) -> Generator[_Model, None, None]:
        """
        Transform previously-extracted data.
        :param kwds: merged dictionary of initial extract kwds and the result of extract
        :return: generator of models
        """

    def _transform_institution_from_arguments(
        self, *,
        graph: Graph,
        institution_name: str,
        institution_rights: str,
        institution_uri: str,
        institution_owner: Optional[str] = None,
        **_kwds
    ) -> Institution:
        institution = Institution(graph=graph, uri=URIRef(institution_uri))
        institution.resource.add(DCTERMS.rights, Literal(institution_rights))
        institution.resource.add(FOAF.name, Literal(institution_name))
        if institution_owner is not None:
            institution.owner = URIRef(institution_owner)
        else:
            institution.owner = CMS.public
        return institution
