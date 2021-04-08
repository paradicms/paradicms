import yaml
from markdown_it import MarkdownIt
from markdown_it.renderer import RendererHTML
from markdown_it.tree import SyntaxTreeNode
from mdit_py_plugins.front_matter import front_matter_plugin
from rdflib import Graph


class MarkdownToRdfConverter:
    """
    Convert a Markdown string to an RDF Graph by calling the .convert classmethod.

    .convert creates an instance of the class, which implements a visitor pattern over a Markdown syntax tree. The _visit* methods are designed to be overridable.

    The conversion process works in two passes:
    1. Convert the Markdown to key-value pairs, where keys are strings and values can be any builtin type (scalars like str or int, sequences, and dicts).
       a. Front matter in YAML is trivially converted to key-value pairs.
       b. Paragraphs without a heading have an implied key of "label". The paragraph is converted to an HTML string value.
       c. Paragraphs with a heading must have a link in the heading of the form [](#key). The paragraph is converted to an HTML string value.
    2. Convert key-value pairs to RDF.
       a. The root subject is the document. The key-value pairs are (document, key, value) triples.
       b. Keys are translated to property URIs: "ns_property" or simply "property". In the former case, the namespace prefix "ns" is looked up to form the URI. In the latter case, a default namespace (typically Dublin Core terms) is used.
       c. Scalar values are converted to RDF literals, except string values that are surrounded by < and >, which are treated as URI references.
       d. Sequence values create RDF lists.
       e. Map values create blank nodes, and the conversion is applied recursively.
    """

    def __init__(self, *, markdown_it: MarkdownIt):
        self.__current_heading_id = None
        self.__markdown_it = markdown_it
        self.__properties = {}

    @classmethod
    def convert(cls, md: str) -> Graph:
        markdown_it = MarkdownIt().use(front_matter_plugin)
        tokens = markdown_it.parse(md)
        ast = SyntaxTreeNode(tokens)
        visitor = cls(markdown_it=markdown_it)
        visitor._visit_node(ast)

    def __join_node_children(self, node: SyntaxTreeNode) -> str:
        child_node_strs = []
        for child_node in node.children:
            child_node_str = self._visit_node(child_node)
            assert isinstance(child_node_str, str), type(child_node_str)
            child_node_strs.append(child_node_str)
        return "".join(child_node_strs)

    def _render_node_as_html(self, node: SyntaxTreeNode) -> str:
        return (
            RendererHTML()
            .render(node.to_tokens(), options=self.__markdown_it.options, env={})
            .strip()
        )

    def _visit_code_block_node(self, code_block_node: SyntaxTreeNode) -> str:
        return self._render_node_as_html(code_block_node)

    def _visit_em_node(self, em_node: SyntaxTreeNode) -> str:
        return f"<em>{self.__join_node_children(em_node)}</em>"

    def _visit_front_matter_node(self, front_matter_node: SyntaxTreeNode):
        self.__properties.update(yaml.load(front_matter_node.content))

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

    def _visit_inline_node(self, inline_node: SyntaxTreeNode) -> str:
        return self.__join_node_children(inline_node)

    def _visit_link_node(self, link_node: SyntaxTreeNode) -> str:
        return self._render_node_as_html(link_node)

    def _visit_node(self, node: SyntaxTreeNode):
        method = getattr(self, "_visit_" + node.type + "_node")
        return method(node)

    def _visit_paragraph_node(self, paragraph_node: SyntaxTreeNode):
        paragraph_html = self.__join_node_children(paragraph_node)

        property_key = self.__current_heading_id
        if property_key is None:
            property_key = "label"

        try:
            # Concatenate multiple paragraphs under the same header
            self.__properties[property_key] += paragraph_html
        except KeyError:
            self.__properties[property_key] = paragraph_html

    def _visit_root_node(self, root_node: SyntaxTreeNode):
        for child_node in root_node.children:
            self._visit_node(child_node)

        for key, value in self.__properties.items():
            print(key, value)

    def _visit_strong_node(self, strong_node: SyntaxTreeNode):
        return f"<strong>{self.__join_node_children(strong_node)}</strong>"

    def _visit_text_node(self, text_node: SyntaxTreeNode) -> str:
        assert not text_node.children
        return text_node.content
