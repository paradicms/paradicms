from typing import Optional, Type, Dict

import rdflib
import yaml
from markdown_it import MarkdownIt
from markdown_it.renderer import RendererHTML
from markdown_it.tree import SyntaxTreeNode
from mdit_py_plugins.front_matter import front_matter_plugin
from rdflib import Graph, URIRef, Literal, BNode, RDF
from rdflib.resource import Resource
from rdflib.term import Identifier

from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.yaml_to_rdf_transformer import YamlToRdfTransformer


class MarkdownToResourceTransformer:
    def __init__(
        self,
        *,
        markdown_it: MarkdownIt,
        front_matter_to_rdf_transformer: Optional[YamlToRdfTransformer] = None,
        graph: Optional[Graph] = None,
        resource_identifier_default: Optional[Identifier] = None,
    ):
        self.__current_heading_id = None
        if front_matter_to_rdf_transformer is None:
            front_matter_to_rdf_transformer = YamlToRdfTransformer()
        self.__front_matter_to_rdf_transformer = front_matter_to_rdf_transformer
        self.__markdown_it = markdown_it
        if graph is None:
            graph = Graph()
        self.__graph = graph
        self.__resource_identifier_default = resource_identifier_default
        self.__result = None  # Create lazily

    def _render_node_as_html(self, node: SyntaxTreeNode) -> str:
        return (
            RendererHTML()
            .render(node.to_tokens(), options=self.__markdown_it.options, env={})
            .strip()
        )

    @property
    def _result(self) -> Resource:
        """
        Lazily create the result rdflib Resource.

        The front matter can specify an identifier (URIRef) for the Resource, in which case the
        front matter visitor preemptively creates the result rdflib Resource.

        If the
        """
        if self.__result is None:
            if self.__resource_identifier_default is None:
                raise ValueError("no rdf:subject in .md and no default specified")
            self.__result = self.__graph.resource(self.__resource_identifier_default)
        return self.__result

    def _visit_front_matter_node(self, front_matter_node: SyntaxTreeNode):
        front_matter_dict = yaml.load(front_matter_node.content, Loader=yaml.FullLoader)

        # Buffer the statements so that we can handle the model's URI first
        front_matter_statements = []
        for (
            property_uri,
            value_node,
        ) in self.__front_matter_to_rdf_transformer.transform_dict_to_resource_statements(
            front_matter_dict
        ):
            if property_uri == rdflib.RDF.subject:
                # Front matter specifies the model's URI
                # Preemptively create the result rdflib Resource so it doesn't use the default URI (synthesized from the model id and type)
                if self.__result is not None:
                    raise ValueError("only one subject URI can be specified")
                if not isinstance(value_node, URIRef):
                    raise TypeError(
                        "subject URI must be a URIRef, not a " + type(value_node)
                    )
                self.__result = self.__graph.resource(value_node)
                continue

            front_matter_statements.append((property_uri, value_node))

        for property_uri, value_node in front_matter_statements:
            self._result.add(property_uri, value_node)

    def _visit_heading_node(self, heading_node: SyntaxTreeNode):
        if len(heading_node.children) != 1:
            raise ValueError(
                "expected heading node to have a single child: " + heading_node.pretty()
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
                "expected heading link node to have an href: " + heading_node.pretty()
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
            key = "abstract"

        property_uri = (
            self.__front_matter_to_rdf_transformer.transform_key_to_property_uri(key)
        )

        existing_value = self._result.value(property_uri)
        if existing_value is None:
            self._result.add(property_uri, Literal(html))
        elif isinstance(existing_value, Literal):
            # Concatenate multiple paragraphs under the same header
            self._result.set(property_uri, Literal(existing_value.toPython() + html))
        elif isinstance(existing_value, Resource):
            # #27: the frontmatter had a dict for this property, which was transformed into a bnode
            # Assume that bnode was intended to be a Text model
            # Set the rdf:type and use the HTML here as the value of the Text model
            assert isinstance(existing_value.identifier, BNode)
            text_resource = existing_value
            text_resource.add(RDF.type, CMS.Text)
            existing_text_value = text_resource.value(RDF.value)
            # Concatenate multiple paragraphs as needed
            if existing_text_value is None:
                text_resource.add(RDF.value, Literal(html))
            else:
                text_resource.set(
                    RDF.value, Literal(existing_text_value.toPython() + html)
                )
        else:
            self._result.set(property_uri, Literal(html))

    @classmethod
    def transform(cls, markdown: str, **kwds) -> Resource:
        markdown_it = MarkdownIt().use(front_matter_plugin)
        tokens = markdown_it.parse(markdown)
        ast = SyntaxTreeNode(tokens)
        inst = cls(markdown_it=markdown_it, **kwds)
        inst._visit_node(ast)
        return inst._result

    def _visit_node(self, node: SyntaxTreeNode):
        try:
            method = getattr(self, "_visit_" + node.type + "_node")
        except AttributeError:
            method = self._visit_default_node
        method(node)

    def _visit_root_node(self, root_node: SyntaxTreeNode):
        for child_node in root_node.children:
            self._visit_node(child_node)
