from typing import Dict, Optional, Tuple, Union

import yaml
from mdit_py_plugins.front_matter import front_matter_plugin
from rdflib import DCTERMS, Graph, Literal, URIRef
import rdflib.namespace
from rdflib.resource import Resource
from rdflib.term import Node

import paradicms_etl
from markdown_it import MarkdownIt
from markdown_it.renderer import RendererHTML
from markdown_it.tree import SyntaxTreeNode
from paradicms_etl._model import _Model
from paradicms_etl._transformer import _Transformer
from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.object import Object
from paradicms_etl.models.person import Person
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definitions import PropertyDefinitions
from paradicms_etl.models.rights import Rights


class MarkdownDirectoryTransformer(_Transformer):
    """
    Transform a directory of Markdown files to a set of models.

    See MarkdownDirectoryExtractor for the expected directory structure.

    The transformation process works in three passes:
    1. Transform the Markdown AST to key-value pairs, where keys are strings and values can be any builtin type (scalars like str or int, sequences, and dicts).
       a. Front matter in YAML is trivially converted to key-value pairs.
       b. Paragraphs without a heading have an implied key of "label". The paragraph is converted to an HTML string value.
       c. Paragraphs with a heading must have a link in the heading of the form [](#key). The paragraph is converted to an HTML string value.
    2. Transform key-value pairs to an RDF graph.
       a. The root subject is the document. The key-value pairs are (document, key, value) triples.
       b. Keys are translated to property URIs: "ns_property" or simply "property". In the former case, the namespace prefix "ns" is looked up to form the URI. In the latter case, a default namespace (typically Dublin Core terms) is used.
       c. Scalar values are converted to RDF literals, except string values that are surrounded by < and >, which are treated as URI references.
       d. Sequence values create RDF lists.
       e. Map values create blank nodes, and the conversion is applied recursively.
    3. Transform the RDF graph to a model.

    All passes are implemented using the visitor pattern.
    """

    class _MarkdownAstToKeyValuePairsTransformer:
        def __init__(self, *, markdown_it: MarkdownIt):
            self.__current_heading_id = None
            self.__markdown_it = markdown_it
            self.__result = {}

        def _render_node_as_html(self, node: SyntaxTreeNode) -> str:
            return (
                RendererHTML()
                .render(node.to_tokens(), options=self.__markdown_it.options, env={})
                .strip()
            )

        def _visit_front_matter_node(self, front_matter_node: SyntaxTreeNode):
            self.__result.update(yaml.load(front_matter_node.content))

        def _visit_heading_node(self, heading_node: SyntaxTreeNode):
            if len(heading_node.children) != 1:
                raise ValueError(
                    "expected heading node to have a single child: "
                    + heading_node.pretty()
                )
            heading_inline_node = heading_node.children[0]
            if len(heading_inline_node.children) != 1:
                raise ValueError(
                    "expected heading inline node to have a single child: "
                    + heading_node.pretty()
                )
            heading_link_node = heading_inline_node.children[0]
            if heading_link_node.type != "link":
                raise ValueError(
                    "expected heading inline node to have a single link child: "
                    + heading_node.pretty()
                )
            if "href" not in heading_link_node.attrs:
                raise ValueError(
                    "expected heading link node to have an href: "
                    + heading_node.pretty()
                )
            heading_link_href = heading_link_node.attrs["href"]
            if not heading_link_href.startswith("#"):
                raise ValueError(
                    "expected heading link node href to start with #: "
                    + heading_node.pretty()
                )
            self.__current_heading_id = heading_link_href[1:].strip()
            if not self.__current_heading_id:
                raise ValueError(
                    "expected heading link node href to start with # and have content: "
                    + heading_node.pretty()
                )

        @classmethod
        def visit_document(cls, markdown: str) -> Dict[str, object]:
            markdown_it = MarkdownIt().use(front_matter_plugin)
            tokens = markdown_it.parse(markdown)
            ast = SyntaxTreeNode(tokens)
            inst = cls(markdown_it=markdown_it)
            inst._visit_node(ast)
            return inst.__result

        def _visit_node(self, node: SyntaxTreeNode):
            method = getattr(self, "_visit_" + node.type + "_node")
            method(node)

        def _visit_paragraph_node(self, paragraph_node: SyntaxTreeNode):
            paragraph_html = self._render_node_as_html(paragraph_node)

            property_key = self.__current_heading_id
            if property_key is None:
                property_key = "label"

            try:
                # Concatenate multiple paragraphs under the same header
                self.__result[property_key] += paragraph_html
            except KeyError:
                self.__result[property_key] = paragraph_html

        def _visit_root_node(self, root_node: SyntaxTreeNode):
            for child_node in root_node.children:
                self._visit_node(child_node)

    class _MarkdownGraphToModelTransformer:
        def __init__(self, *, collection_uri: URIRef, institution_uri: URIRef):
            self.__collection_uri = collection_uri
            self.__institution_uri = institution_uri

        def visit_graph(
            self, *, model_resource: Resource, model_type: str
        ) -> _NamedModel:
            method = getattr(self, f"_visit_{model_type}_graph")
            return method(model_resource)

        def _visit_object_graph(self, object_resource: Resource) -> Object:
            return Object.from_rdf(
                object_resource,
                collection_uris=(self.__collection_uri,),
                institution_uri=self.__institution_uri,
            )

        def _visit_person_graph(self, person_resource: Resource) -> Person:
            return Person.from_rdf(person_resource)

    class _MarkdownKeyValuePairsToGraphTransformer:
        def __init__(
            self,
            *,
            model_uri: URIRef,
            default_namespace: rdflib.Namespace = DCTERMS,
            namespaces_by_prefix: Optional[Dict[str, rdflib.Namespace]] = None,
        ):
            self.__default_namespace = default_namespace
            if namespaces_by_prefix is None:
                namespaces_by_prefix = {}
                for namespace_module in (rdflib.namespace, paradicms_etl.namespace):
                    for attr in dir(namespace_module):
                        if attr.upper() != attr:
                            continue
                        value = getattr(namespace_module, attr)
                        if not isinstance(value, rdflib.Namespace) and not isinstance(
                            value, rdflib.namespace.ClosedNamespace
                        ):
                            continue
                        namespaces_by_prefix[attr.lower()] = value
            self.__namespaces_by_prefix = namespaces_by_prefix.copy()
            self.__result = Graph().resource(model_uri)

        def visit_key_value_pairs(self, key_value_pairs: Dict[str, object]) -> Resource:
            for key, value in key_value_pairs.items():
                self._visit_key_value_pair(key, value)
            return self.__result

        def _visit_key_value_pair(self, key: str, value: object):
            property_uri = self._visit_key(key)
            value_nodes = self._visit_value(value)
            if isinstance(value_nodes, Node):
                value_nodes = (value_nodes,)
            for value_node in value_nodes:
                self.__result.add(property_uri, value_node)

        def _visit_key(self, key: str) -> URIRef:
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

        def _visit_value(self, value: object) -> Union[Node, Tuple[Node, ...]]:
            """
            Transform a value to an RDF node or a sequence of nodes.

            If a sequence of nodes is returned, there are multiple values (objects) for the associated key (propert).
            """

            if isinstance(value, (bool, int, str)):
                return Literal(value)
            elif isinstance(value, dict):
                raise NotImplementedError("return a blank node")
            elif isinstance(value, (list, tuple)):
                nodes = tuple(self._visit_value(value) for value in value)
                if all(nodes, lambda node: isinstance(node, Literal)):
                    return nodes
                else:
                    raise NotImplementedError("return an RDF list")
            else:
                raise NotImplementedError("unsupported value type: " + type(value))

    def __init__(self, **kwds):
        _Transformer.__init__(self, **kwds)
        self.__kwds = kwds

    def transform(self, markdown: Dict[str, Dict[str, str]]):
        yield from PropertyDefinitions.as_tuple()

        institution = self._transform_institution_from_arguments(**self.__kwds)
        yield institution

        institution_image = self._transform_institution_image_from_arguments(
            **self.__kwds
        )
        if institution_image is not None:
            yield institution_image

        collection = self._transform_collection_from_arguments(**self.__kwds)
        yield collection

        for model_type in markdown.keys():
            for model_id, markdown_str in markdown[model_type].items():
                yield self._MarkdownGraphToModelTransformer(
                    collection_uri=collection.uri, institution_uri=institution.uri
                ).visit_graph(
                    model_type=model_type,
                    model_resource=self._MarkdownKeyValuePairsToGraphTransformer(
                        model_uri=URIRef(
                            f"urn:markdown:{self._pipeline_id}:{model_type}:{model_id}"
                        )
                    ).visit_key_value_pairs(
                        self._MarkdownAstToKeyValuePairsTransformer.visit_document(
                            markdown_str
                        )
                    ),
                )
