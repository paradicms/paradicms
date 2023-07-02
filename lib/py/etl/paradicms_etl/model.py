from abc import ABC, abstractmethod
from typing import Optional, Any, Dict, Tuple

import rdflib
from rdflib import Graph, URIRef
from rdflib.resource import Resource

import paradicms_etl
from paradicms_etl.namespaces.bind_namespaces import EXCLUDE_RDFLIB_NAMESPACE_PREFIXES
from paradicms_etl.utils.module_namespaces import module_namespaces


class Model(ABC):
    @classmethod
    @abstractmethod
    def from_rdf(cls, resource: Resource):
        raise NotImplementedError

    @classmethod
    def json_ld_context(cls) -> Dict[str, Any]:
        """
        Return a JSON-LD context that can be used to parse/serialize a JSON version of this model.
        """

        context = {"@version": 1.1}
        for namespace_prefix, namespace in module_namespaces(
            rdflib.namespace, paradicms_etl.namespaces
        ).items():
            if namespace_prefix in EXCLUDE_RDFLIB_NAMESPACE_PREFIXES:
                continue
            context[namespace_prefix] = str(namespace)
        return context

    @property
    def label(self) -> Optional[str]:
        return None

    @classmethod
    @abstractmethod
    def rdf_type_uri(cls) -> URIRef:
        raise NotImplementedError

    @property
    def same_as_uris(self) -> Tuple[URIRef, ...]:
        return ()

    @abstractmethod
    def to_rdf(self, graph: Graph) -> Resource:
        raise NotImplementedError

    @property
    @abstractmethod
    def uri(self) -> Optional[URIRef]:
        raise NotImplementedError
