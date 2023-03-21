from typing import Optional, Dict, Any

import yaml
from markdown_it import MarkdownIt
from markdown_it.renderer import RendererHTML
from markdown_it.tree import SyntaxTreeNode
from mdit_py_plugins.front_matter import front_matter_plugin
from rdflib import RDF

from paradicms_etl.namespaces import CMS


class MarkdownToDictTransformer:
    def __init__(self, *, markdown_it: MarkdownIt):
        self.__current_heading_id: Optional[str] = None
        self.__markdown_it = markdown_it
        self.__result: Dict[str, Any] = {}

    def _render_node_as_html(self, node: SyntaxTreeNode) -> str:
        return (
            RendererHTML()
            .render(node.to_tokens(), options=self.__markdown_it.options, env={})
            .strip()
        )

    def _visit_front_matter_node(self, front_matter_node: SyntaxTreeNode):
        front_matter_dict = yaml.load(front_matter_node.content, Loader=yaml.FullLoader)
        self.__result = front_matter_dict.copy()

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
        heading_link_href = str(heading_link_node.attrs["href"])
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

        existing_value = self.__result.get(key)
        if existing_value is None:
            self.__result[key] = html
        elif isinstance(existing_value, dict):
            # #27: the frontmatter had a dict for this key
            # Assume the frontmatter was specifying properties for a Text model e.g., the license
            existing_value["@type"] = str(CMS.Text)
            existing_text_value = existing_value.get(str(RDF.value))
            # Concatenate multiple paragraphs as needed
            if existing_text_value is None:
                existing_value[str(RDF.value)] = html
            else:
                existing_value[str(RDF.value)] = str(existing_text_value) + html
        else:
            # Concatenate multiple paragraphs under the same header
            self.__result[key] = str(existing_value) + html

    @classmethod
    def transform(cls, markdown: str, **kwds) -> Dict[str, Any]:
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
