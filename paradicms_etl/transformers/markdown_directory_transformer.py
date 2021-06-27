from typing import Dict, Generator, Optional, Tuple, Union
from urllib.parse import quote

from copy import deepcopy
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
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.creative_commons_rights_statements import (
    CreativeCommonsRightsStatements,
)
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.object import Object
from paradicms_etl.models.opaque_named_model import OpaqueNamedModel
from paradicms_etl.models.person import Person
from paradicms_etl.models.dublin_core_property_definitions import (
    DublinCorePropertyDefinitions,
)
from paradicms_etl.models.property import Property
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.namespace import CMS


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

    class _MarkdownToResourceTransformer:
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
                            return MarkdownDirectoryTransformer.model_uri(
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
            front_matter_dict = yaml.load(
                front_matter_node.content, Loader=yaml.FullLoader
            )
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
        def visit_document(cls, markdown: str, **kwds) -> Resource:
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

    def __init__(
        self,
        default_institution: Optional[Institution] = None,
        default_collection: Optional[Collection] = None,
        **kwds,
    ):
        _Transformer.__init__(self, **kwds)
        if default_institution is None and default_collection is not None:
            raise ValueError(
                "default institutin must be supplied if default collection is"
            )
        self.__default_collection = default_collection
        self.__default_institution = default_institution

    @staticmethod
    def model_uri(*, pipeline_id: str, model_type: str, model_id: str) -> URIRef:
        return URIRef(
            f"urn:markdown:{pipeline_id}:{quote(model_type)}:{quote(model_id)}"
        )

    def __opacify_model(self, model: _NamedModel) -> OpaqueNamedModel:
        graph = Graph()
        model_resource = model.to_rdf(graph=graph)
        return self.__transform_resource_to_model(
            model_resource=model_resource, model_type=model.__class__.__name__
        )

    def __synthesize_default_collection(
        self, *, institution_uri: URIRef
    ) -> OpaqueNamedModel:
        return self.__opacify_model(
            Collection(
                institution_uri=institution_uri,
                title="Default collection",
                uri=self.model_uri(
                    pipeline_id=self._pipeline_id,
                    model_type="collection",
                    model_id="default",
                ),
            )
        )

    def __synthesize_default_institution(self) -> OpaqueNamedModel:
        return self.__opacify_model(
            Institution(
                name="Default institution",
                uri=self.model_uri(
                    pipeline_id=self._pipeline_id,
                    model_type="institution",
                    model_id="default",
                ),
            )
        )

    def transform(self, markdown: Dict[str, Dict[str, str]]):
        yield from CreativeCommonsLicenses.as_tuple()
        yield from CreativeCommonsRightsStatements.as_tuple()
        yield from DublinCorePropertyDefinitions.as_tuple()
        yield from RightsStatementsDotOrgRightsStatements.as_tuple()

        markdown = deepcopy(markdown)

        # default_institution and default_collection are yielded when they're created or transformed
        default_institution = self.__default_institution
        if default_institution is not None:
            yield default_institution
        else:
            # If the directory has institution models, use the first of them as the default institution
            institutions = self.__transform_institutions(markdown)
            if institutions:
                yield from institutions
                default_institution = institutions[0]
                self._logger.debug(
                    "using the first institution %s as the default institution",
                    default_institution.uri,
                )

        default_collection = self.__default_collection
        if default_collection is not None:
            yield default_collection
        else:
            # If the directory has collection models, use the first that belongs to the default institution as the default collection
            collections = self.__transform_collections(markdown)
            if collections:
                yield from collections
                default_collection = next(
                    (
                        collection
                        for collection in collections
                        if collection.institution_uri == default_institution.uri
                    ),
                    None,
                )
                if default_collection is not None:
                    self._logger.debug(
                        "using first collection %s that belongs to the default institution %s as the default collection",
                        default_collection.uri,
                        default_institution.uri,
                    )

        for model_type in markdown.keys():
            for model_id, markdown_str in markdown[model_type].items():
                # Only certain model types should have the default collection and/or institution added to them
                # if they have no explicit collection and/or institution statement
                model_resource = self.__transform_markdown_to_resource(
                    markdown_str=markdown_str, model_id=model_id, model_type=model_type
                )

                # Order is important: may need to synthesize the default institution before the default collection

                # Add an institution statement to some models if none was made explicitly
                if model_type in ("collection", "image", "object"):
                    if model_resource.value(CMS.institution) is None:
                        if default_institution is None:
                            # No default institution was specified (see above)
                            # Synthesize one and yield it
                            default_institution = (
                                self.__synthesize_default_institution()
                            )
                            yield default_institution

                        model_resource.add(CMS.institution, default_institution.uri)

                # Add a collection statement to some models if none was made explicitly
                if model_type in ("object",):
                    if model_resource.value(CMS.collection) is None:
                        if default_collection is None:
                            # No default collection was specified (see above)
                            # Synthesize one and yield it
                            default_collection = self.__synthesize_default_collection(
                                institution_uri=default_institution.uri
                            )
                            yield default_collection

                        model_resource.add(CMS.collection, default_collection.uri)

                yield self.__transform_resource_to_model(
                    model_resource=model_resource, model_type=model_type
                )

    def __transform_collections(
        self, inout_markdown: Dict[str, Dict[str, str]]
    ) -> Tuple[OpaqueNamedModel, ...]:
        collection_model_type = "collection"
        return tuple(
            self.__transform_resource_to_model(
                model_resource=self.__transform_markdown_to_resource(
                    markdown_str=markdown_str,
                    model_id=model_id,
                    model_type=collection_model_type,
                ),
                model_type=collection_model_type,
            )
            for model_id, markdown_str in inout_markdown.pop(
                collection_model_type, {}
            ).items()
        )

    def __transform_institutions(
        self, inout_markdown: Dict[str, Dict[str, str]]
    ) -> Tuple[OpaqueNamedModel, ...]:
        institution_model_type = "institution"
        return tuple(
            self.__transform_resource_to_model(
                model_resource=self.__transform_markdown_to_resource(
                    markdown_str=markdown_str,
                    model_id=model_id,
                    model_type=institution_model_type,
                ),
                model_type=institution_model_type,
            )
            for model_id, markdown_str in inout_markdown.pop(
                institution_model_type, {}
            ).items()
        )

    def __transform_markdown_to_resource(
        self,
        *,
        markdown_str: str,
        model_id: str,
        model_type: str,
    ) -> Resource:
        return self._MarkdownToResourceTransformer.visit_document(
            markdown_str,
            model_uri=self.model_uri(
                pipeline_id=self._pipeline_id,
                model_type=model_type,
                model_id=model_id,
            ),
            pipeline_id=self._pipeline_id,
        )

    def __transform_resource_to_model(
        self, *, model_resource: Resource, model_type: str
    ) -> OpaqueNamedModel:
        model_properties = []
        for p, o in model_resource.predicate_objects():
            if isinstance(o, Node):
                value = o
            elif isinstance(o, Resource):
                value = o.identifier
            else:
                raise TypeError(type(o))
            model_properties.append(Property(p.identifier, value))

        return OpaqueNamedModel(
            properties=tuple(model_properties),
            type=CMS[model_type.capitalize()],
            uri=model_resource.identifier,
        )
