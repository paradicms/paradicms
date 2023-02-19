from abc import ABC, abstractmethod
from typing import Optional

import rdflib
from rdflib import Graph
from rdflib.resource import Resource

import paradicms_etl
from paradicms_etl.utils.module_namespaces import module_namespaces

_EXCLUDE_NAMESPACE_PREFIXES_FROM_JSON_LD_CONTEXT = {"brick", "csvw", "odrl2", "prof", "qb", "sosa", "ssn", "vann", "void", "xmlns"}

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
            if namespace_prefix in _EXCLUDE_NAMESPACE_PREFIXES_FROM_JSON_LD_CONTEXT:
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
