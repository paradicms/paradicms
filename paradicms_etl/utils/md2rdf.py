import yaml
from markdown_it import MarkdownIt
from markdown_it.renderer import RendererHTML
from markdown_it.tree import SyntaxTreeNode
from mdit_py_plugins.front_matter import front_matter_plugin
from rdflib import Graph


class __Md2rdfSyntaxTreeNodeVisitor:
    """
    Visit the abstract syntax tree of a Markdown document, creating a dictionary of key-value pairs.
    """

    def __init__(self, markdown_it: MarkdownIt):
        self.__result = {}
        self.__markdown_it = markdown_it

    def _visit_front_matter_node(self, front_matter_node: SyntaxTreeNode):
        self.__result.update(yaml.load(front_matter_node.content))

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

    def visit_node(self, node: SyntaxTreeNode):
        method = getattr(self, "_visit_" + node.type + "_node")
        method(node)
        return self.__result

    def _visit_paragraph_node(self, paragraph_node: SyntaxTreeNode):
        if not self.__current_heading_id:
            raise ValueError(
                "paragraph must be under a link header: " + paragraph_node.pretty()
            )

        paragraph_html = (
            RendererHTML()
            .render(
                paragraph_node.to_tokens(), options=self.__markdown_it.options, env={}
            )
            .strip()
        )
        try:
            # Concatenate multiple paragraphs under the same header
            self.__result[self.__current_heading_id] += paragraph_html
        except KeyError:
            self.__result[self.__current_heading_id] = paragraph_html

    def _visit_root_node(self, root_node: SyntaxTreeNode):
        for child_node in root_node.children:
            self.visit_node(child_node)


def md2rdf(md: str) -> Graph:
    """
    Converts a Markdown string to an RDF graph.
    """

    markdown_it = MarkdownIt().use(front_matter_plugin)
    tokens = markdown_it.parse(md)
    ast = SyntaxTreeNode(tokens)

    for key, value in (
        __Md2rdfSyntaxTreeNodeVisitor(markdown_it=markdown_it).visit_node(ast).items()
    ):
        print(key, value)
