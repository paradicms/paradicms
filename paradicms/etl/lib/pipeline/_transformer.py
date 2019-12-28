import logging
from abc import ABC, abstractmethod

from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF

from paradicms.etl.lib.model.institution import Institution


class _Transformer(ABC):
    def __init__(self):
        self._logger = logging.getLogger(self.__class__.__name__)

    @abstractmethod
    def transform(self, **kwds) -> Graph:
        """
        Transform previously-extracted data.
        :param kwds: merged dictionary of initial extract kwds and the result of extract
        :return: Graph containing models
        """

    def _transform_institution_from_arguments(
            self, *,
            graph: Graph,
            institution_name: str,
            institution_rights: str,
            institution_uri: str,
            **_kwds
    ) -> Institution:
        institution = Institution(graph=graph, uri=URIRef(institution_uri))
        institution.resource.add(DCTERMS.rights, Literal(institution_rights))
        institution.resource.add(FOAF.name, Literal(institution_name))
        return institution
