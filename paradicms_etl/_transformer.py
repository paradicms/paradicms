import logging
from abc import ABC, abstractmethod
from typing import Generator, Optional

from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF

from paradicms_etl._model import _Model
from paradicms_etl.models.institution import Institution
from paradicms_etl.namespace import CMS, CONTACT, DCMITYPE, EXIF, PROV, SCHEMA, TIME


class _Transformer(ABC):
    def __init__(self):
        self._logger = logging.getLogger(self.__class__.__name__)

    @property
    def _new_graph(self) -> Graph:
        graph = Graph()
        graph.namespace_manager.bind("cms", CMS)
        graph.namespace_manager.bind("contact", CONTACT)
        graph.namespace_manager.bind("dcmitype", DCMITYPE)
        graph.namespace_manager.bind("dcterms", DCTERMS)
        graph.namespace_manager.bind("exif", EXIF)
        graph.namespace_manager.bind("foaf", FOAF)
        graph.namespace_manager.bind("prov", PROV)
        graph.namespace_manager.bind("schema", SCHEMA)
        graph.namespace_manager.bind("time", TIME)
        return graph

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
