from inspect import isclass
from typing import Dict, Any, Tuple, Generator, Optional

import rdflib
from rdflib import URIRef, DCTERMS, Graph
from rdflib.term import Node, Literal, BNode

import paradicms_etl


def _create_namespaces_by_prefix_default() -> Dict[str, rdflib.Namespace]:
    namespaces_by_prefix = {}
    for namespace_module in (rdflib.namespace, paradicms_etl.namespaces):
        for attr in dir(namespace_module):
            if attr.upper() != attr:
                continue
            value = getattr(namespace_module, attr)
            if (
                isinstance(value, rdflib.namespace.Namespace)
                or isinstance(value, rdflib.namespace.ClosedNamespace)
                or (
                    isclass(value)
                    and issubclass(value, rdflib.namespace.DefinedNamespace)
                )
            ):
                namespaces_by_prefix[attr.lower()] = value
    return namespaces_by_prefix


class YamlToRdfTransformer:
    DEFAULT_NAMESPACE_DEFAULT = DCTERMS
    NAMESPACES_BY_PREFIX_DEFAULT = _create_namespaces_by_prefix_default()

    def __init__(
        self,
        *,
        default_namespace: Optional[rdflib.Namespace] = None,
        graph: Optional[Graph] = None,
        namespaces_by_prefix: Optional[Dict[str, rdflib.Namespace]] = None,
    ):
        if default_namespace is None:
            default_namespace = self.DEFAULT_NAMESPACE_DEFAULT
        self.__default_namespace = default_namespace
        if graph is None:
            graph = Graph()
        self.__graph = graph
        if namespaces_by_prefix is None:
            namespaces_by_prefix = self.NAMESPACES_BY_PREFIX_DEFAULT
        self.__namespaces_by_prefix = namespaces_by_prefix.copy()

    def transform_dict_to_resource_statements(
        self, yaml_: Dict[str, Any]
    ) -> Generator[Tuple[URIRef, Node], None, None]:
        for key, value in yaml_.items():
            property_uri = self.transform_key_to_property_uri(key)
            value_nodes = self.transform_value_to_nodes(value)

            for value_node in value_nodes:
                yield (property_uri, value_node)

    def transform_key_to_property_uri(self, key: str) -> URIRef:
        """
        Transform a key to an RDF property (identified by a URI).
        """
        key_split = key.split("_", 1)
        if len(key_split) == 1:
            # Unqualified key
            return self.__default_namespace[key]

        namespace_prefix = key_split[0].lower()
        try:
            namespace = self.__namespaces_by_prefix[namespace_prefix]
        except KeyError:
            raise ValueError(f"no such namespace {namespace_prefix}: {key}")
        return namespace[key_split[1]]

    def transform_value_to_nodes(self, value: object) -> Tuple[Node, ...]:
        """
        Transform a value to one or more RDF nodes.
        """

        if isinstance(value, (bool, int)):
            return (Literal(value),)
        elif isinstance(value, dict):
            bnode_resource = self.__graph.resource(BNode())
            for sub_key, sub_value in value.items():
                property_uri = self.transform_key_to_property_uri(sub_key)
                sub_value_nodes = self.transform_value_to_nodes(sub_value)
                for sub_value_node in sub_value_nodes:
                    bnode_resource.add(property_uri, sub_value_node)
            return (bnode_resource.identifier,)
        elif isinstance(value, (list, tuple)):
            nodes = []
            for sub_value in value:
                nodes.extend(self.transform_value_to_nodes(sub_value))
            return tuple(nodes)
        elif isinstance(value, str):
            if len(value) > 2 and value[0] == "<" and value[-1] == ">":
                return (URIRef(self._transform_uri_value_to_node(value[1:-1])),)
            else:
                return (Literal(value),)
        else:
            raise NotImplementedError("unsupported value type: " + type(value))

    def _transform_uri_value_to_node(self, value: str) -> URIRef:
        return URIRef(value)
