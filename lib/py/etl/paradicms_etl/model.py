from abc import ABC, abstractmethod
from typing import Optional

import rdflib
from rdflib import Graph
from rdflib.resource import Resource

import paradicms_etl
from paradicms_etl.namespaces.bind_namespaces import EXCLUDE_RDFLIB_NAMESPACE_PREFIXES
from paradicms_etl.utils.module_namespaces import module_namespaces


class Model(ABC):
    @classmethod
    def json_ld_context(cls):
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
        pass

    @classmethod
    @abstractmethod
    def from_rdf(cls, resource: Resource):
        pass

    @abstractmethod
    def to_rdf(self, graph: Graph) -> Resource:
        pass
