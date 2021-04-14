from typing import Dict, Optional, Tuple, Union
from urllib.parse import quote

import rdflib.namespace
import yaml
from mdit_py_plugins.front_matter import front_matter_plugin
from rdflib import DCTERMS, Graph, Literal, URIRef
from rdflib.resource import Resource
from rdflib.term import Node

import paradicms_etl
from markdown_it import MarkdownIt
from markdown_it.renderer import RendererHTML
from markdown_it.tree import SyntaxTreeNode
from paradicms_etl._transformer import _Transformer
from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.object import Object
from paradicms_etl.models.person import Person
from paradicms_etl.models.property_definitions import PropertyDefinitions


class MarkdownDirectoryTransformer(_Transformer):
    """
    Transform a directory of Markdown files to a set of models.

    See MarkdownDirectoryExtractor for the expected directory structure.

    The transformation process works in three passes:
    1. Transform the Markdown AST to an RDF graph, where keys are strings and values can be any builtin type (scalars like str or int, sequences, and dicts).
       a. Front matter in YAML is trivially converted to key-value pairs.
       b. Paragraphs without a heading have an implied key of "label". The paragraph is converted to an HTML string value.
       c. Paragraphs with a heading must have a link in the heading of the form [](#key). The paragraph is converted to an HTML string value.
    2. Transform key-value pairs to an RDF graph.
       a. The root subject is the document. The key-value pairs are (document, key, value) triples.
       b. Keys are translated to property URIs: "ns_property" or simply "property". In the former case, the namespace prefix "ns" is looked up to form the URI. In the latter case, a default namespace (typically Dublin Core terms) is used.
       c. Scalar values are converted to RDF literals.
       d. Paragraphs are always considered string RDF literals.
       e. Some front matter values are handled differently:
           i. String values that are surrounded by < and >, which are treated as URI references.
           ii. Sequence values create RDF lists.
           iii. Map values create blank nodes, and the conversion is applied recursively.
    3. Transform the RDF graph to a model.
    """

    class _MarkdownAstToGraphTransformer:
        def __init__(
            self,
            *,
            markdown_it: MarkdownIt,
            model_uri: URIRef,
            pipeline_id: str,
            default_namespace: rdflib.Namespace = DCTERMS,
            namespaces_by_prefix: Optional[Dict[str, rdflib.Namespace]] = None,
        ):
            self.__current_heading_id = None
            self.__markdown_it = markdown_it
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
            self.__pipeline_id = pipeline_id
            self.__result = Graph().resource(model_uri)

        def _convert_front_matter_value_to_rdf_node(
            self, value: object
        ) -> Union[Node, Tuple[Node, ...]]:
            """
            Transform a value to an RDF node or a sequence of nodes.

            If a sequence of nodes is returned, there are multiple values (objects) for the associated key (propert).
            """

            if isinstance(value, (bool, int)):
                return Literal(value)
            elif isinstance(value, dict):
                raise NotImplementedError("return a blank node")
            elif isinstance(value, (list, tuple)):
                nodes = tuple(self._visit_value(value) for value in value)
                if all(nodes, lambda node: isinstance(node, Literal)):
                    return nodes
                else:
                    raise NotImplementedError("return an RDF list")
            elif isinstance(value, str):
                if len(value) > 2 and value[0] == "<" and value[-1] == ">":
                    # Consider a URI like </person/X> to be a link to another model in the same Markdown directory,
                    # and translate it to
                    uri_value = value[1:-1]
                    if uri_value.startswith("/"):
                        uri_value_split = uri_value.split("/", 2)
                        if len(uri_value_split) == 3:
                            return MarkdownDirectoryTransformer._model_uri(
                                pipeline_id=self.__pipeline_id,
                                model_type=uri_value_split[1],
                                model_id=uri_value_split[2],
                            )
                    return URIRef(uri_value)
                else:
                    return Literal(value)
            else:
                raise NotImplementedError("unsupported value type: " + type(value))

        def _convert_key_to_property_uri(self, key: str) -> URIRef:
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

        def _render_node_as_html(self, node: SyntaxTreeNode) -> str:
            return (
                RendererHTML()
                .render(node.to_tokens(), options=self.__markdown_it.options, env={})
                .strip()
            )

        def _visit_front_matter_node(self, front_matter_node: SyntaxTreeNode):
            front_matter_dict = yaml.load(front_matter_node.content)
            for key, value in front_matter_dict.items():
                property_uri = self._convert_key_to_property_uri(key)
                value_nodes = self._convert_front_matter_value_to_rdf_node(value)
                if isinstance(value_nodes, Node):
                    value_nodes = (value_nodes,)
                for value_node in value_nodes:
                    self.__result.add(property_uri, value_node)

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

        def _visit_default_node(self, node: SyntaxTreeNode):
            html = self._render_node_as_html(node)

            key = self.__current_heading_id
            if key is None:
                key = "description"

            property_uri = self._convert_key_to_property_uri(key)

            existing_value = self.__result.value(property_uri)
            if existing_value is None:
                self.__result.add(property_uri, Literal(html))
            elif isinstance(existing_value, Literal):
                # Concatenate multiple paragraphs under the same header
                self.__result.set(
                    property_uri, Literal(existing_value.toPython() + html)
                )
            else:
                self.__result.set(property_uri, Literal(html))

        @classmethod
        def visit_document(cls, markdown: str, **kwds) -> Dict[str, object]:
            markdown_it = MarkdownIt().use(front_matter_plugin)
            tokens = markdown_it.parse(markdown)
            ast = SyntaxTreeNode(tokens)
            inst = cls(markdown_it=markdown_it, **kwds)
            inst._visit_node(ast)
            return inst.__result

        def _visit_node(self, node: SyntaxTreeNode):
            try:
                method = getattr(self, "_visit_" + node.type + "_node")
            except AttributeError:
                method = self._visit_default_node
            method(node)

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
                    collection_uri=collection.uri,
                    institution_uri=institution.uri,
                ).visit_graph(
                    model_type=model_type,
                    model_resource=self._MarkdownAstToGraphTransformer.visit_document(
                        markdown_str,
                        model_uri=self._model_uri(
                            pipeline_id=self._pipeline_id,
                            model_type=model_type,
                            model_id=model_id,
                        ),
                        pipeline_id=self._pipeline_id,
                    ),
                )

    @staticmethod
    def _model_uri(*, pipeline_id: str, model_type: str, model_id: str) -> URIRef:
        return URIRef(
            f"urn:markdown:{pipeline_id}:{quote(model_type)}:{quote(model_id)}"
        )
