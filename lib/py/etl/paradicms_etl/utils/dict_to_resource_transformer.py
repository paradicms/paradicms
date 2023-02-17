from typing import Dict, Any, Tuple, Optional, Union, Type, List

import rdflib.namespace
from rdflib import URIRef, DCTERMS, Graph, Namespace
from rdflib.namespace import DefinedNamespace
from rdflib.resource import Resource
from rdflib.term import Node, Literal, BNode, Identifier

import paradicms_etl.namespaces
from paradicms_etl.utils.module_namespaces import module_namespaces


class DictToResourceTransformer:
    DEFAULT_NAMESPACE_DEFAULT = DCTERMS
    NAMESPACES_BY_PREFIX_DEFAULT = module_namespaces(
        (rdflib.namespace, paradicms_etl.namespaces)
    )

    def __init__(
        self,
        *,
        default_namespace: Union[Type[DefinedNamespace], Namespace] = None,
        graph: Optional[Graph] = None,
        namespaces_by_prefix: Optional[
            Dict[str, Union[Type[DefinedNamespace], Namespace]]
        ] = None,
        resource_identifier_default: Optional[Identifier] = None,
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
        self.__resource_identifier_default = resource_identifier_default

    def transform_dict_to_resource(self, dict_: Dict[str, Any]) -> Resource:
        # Lazily create the Resource to allow its identifier to be specified as rdf:subject in the dict.
        resource = None

        # Buffer the statements so that we can handle the model's URI first
        statements = []
        for key, value in dict_.items():
            property_uri = self.transform_key_to_property_uri(key)
            value_nodes = self.transform_value_to_nodes(value)

            for value_node in value_nodes:
                if property_uri == rdflib.RDF.subject:
                    # Front matter specifies the model's URI
                    # Preemptively create the result rdflib Resource so it doesn't use the default URI (synthesized from the model id and type)
                    if resource is not None:
                        raise ValueError("only one subject URI can be specified")
                    if not isinstance(value_node, URIRef):
                        raise TypeError(
                            "subject URI must be a URIRef, not a "
                            + str(type(value_node))
                        )
                    resource = self.__graph.resource(value_node)

            statements.append((property_uri, value_node))

        if resource is None:
            if self.__resource_identifier_default is None:
                raise ValueError("no rdf:subject in metadata and no default specified")
            resource = self.__graph.resource(self.__resource_identifier_default)

        for property_uri, value_node in statements:
            resource.add(property_uri, value_node)

        return resource

    def transform_key_to_property_uri(self, key: str) -> URIRef:
        """
        Transform a key to an RDF property (identified by a URI).
        """
        return self.__transform_str_to_uri(key)

    def transform_value_to_nodes(self, value: object) -> Tuple[Node, ...]:
        """
        Transform a value to one or more RDF nodes.
        """

        if isinstance(value, (bool, float, int)):
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
            nodes: List[Node] = []
            for sub_value in value:
                nodes.extend(self.transform_value_to_nodes(sub_value))
            return tuple(nodes)
        elif isinstance(value, str):
            if len(value) > 2 and value[0] == "<" and value[-1] == ">":
                return (self.__transform_str_to_uri(value[1:-1]),)
            else:
                return (Literal(value),)
        else:
            raise NotImplementedError("unsupported value type: " + str(type(value)))

    def __transform_str_to_uri(self, str_: str) -> URIRef:
        str_split = str_.split(":", 1)
        if len(str_split) == 1:
            # Unqualified
            return self.__default_namespace[str_]

        namespace_prefix = str_split[0].lower()
        try:
            namespace = self.__namespaces_by_prefix[namespace_prefix]
        except KeyError:
            # str_ is likely http://example.com, https://example.com, urn:example:other, and so on
            return URIRef(str_)
        return namespace[str_split[1]]
