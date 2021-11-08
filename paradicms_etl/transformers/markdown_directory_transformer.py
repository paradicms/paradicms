from logging import Logger
from typing import Dict, Optional, Tuple, Type
from urllib.parse import quote

import rdflib.namespace
import stringcase
import yaml
from markdown_it import MarkdownIt
from markdown_it.renderer import RendererHTML
from markdown_it.tree import SyntaxTreeNode
from mdit_py_plugins.front_matter import front_matter_plugin
from rdflib import DCTERMS, FOAF, Graph, Literal, RDF, RDFS, URIRef
from rdflib.resource import Resource
from rdflib.term import Node, BNode

import paradicms_etl
from paradicms_etl._transformer import _Transformer
from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.dublin_core_property_definitions import (
    DublinCorePropertyDefinitions,
)
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.license import License
from paradicms_etl.models.markdown_directory import MarkdownDirectory
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.models.property_value_definition import PropertyValueDefinition
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.vra_core_property_definitions import (
    VraCorePropertyDefinitions,
)
from paradicms_etl.models.work import Work
from paradicms_etl.namespace import CMS


def _create_namespaces_by_prefix_default() -> Dict[str, rdflib.Namespace]:
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
    return namespaces_by_prefix


__MODEL_TYPES = (
    Collection,
    Image,
    Institution,
    License,
    Organization,
    Person,
    PropertyDefinition,
    PropertyValueDefinition,
    RightsStatement,
    Work,
)

__MODEL_TYPES_BY_NAME = {
    stringcase.snakecase(model_type.__name__): model_type
    for model_type in __MODEL_TYPES
}

_MODEL_TYPE_LABEL_PROPERTIES = {
    Collection: DCTERMS.title,
    Image: RDFS.label,
    Institution: FOAF.name,
    Organization: FOAF.name,
    Person: FOAF.name,
    Work: DCTERMS.title,
}


def _model_type_by_name(name: str):
    return __MODEL_TYPES_BY_NAME[name.lower()]


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

    _DEFAULT_INSTITUTION_MODEL_ID = "default"
    NAMESPACES_BY_PREFIX_DEFAULT = _create_namespaces_by_prefix_default()

    class _MarkdownToResourceTransformer:
        def __init__(
            self,
            *,
            default_namespace: rdflib.Namespace,
            markdown_it: MarkdownIt,
            model_id: str,
            model_type: Type[_NamedModel],
            namespaces_by_prefix: Dict[str, rdflib.Namespace],
            pipeline_id: str,
        ):
            self.__current_heading_id = None
            self.__markdown_it = markdown_it
            self.__default_namespace = default_namespace
            self.__graph = Graph()
            self.__model_id = model_id
            self.__model_type = model_type
            self.__namespaces_by_prefix = namespaces_by_prefix
            self.__pipeline_id = pipeline_id
            self.__result = None  # Create lazily

        def _convert_front_matter_value_to_rdf_nodes(
            self, value: object
        ) -> Tuple[Node, ...]:
            """
            Transform a value to one or more RDF nodes.
            """

            if isinstance(value, (bool, int)):
                return (Literal(value),)
            elif isinstance(value, dict):
                bnode_resource = self.__graph.resource(BNode())
                for sub_key, sub_value in value.items():
                    property_uri = self._convert_key_to_property_uri(sub_key)
                    sub_value_nodes = self._convert_front_matter_value_to_rdf_nodes(
                        sub_value
                    )
                    for sub_value_node in sub_value_nodes:
                        bnode_resource.add(property_uri, sub_value_node)
                return (bnode_resource.identifier,)
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
                            return (
                                MarkdownDirectoryTransformer.model_uri(
                                    pipeline_id=self.__pipeline_id,
                                    model_type=_model_type_by_name(uri_value_split[1]),
                                    model_id=uri_value_split[2],
                                ),
                            )
                    return (URIRef(uri_value),)
                else:
                    return (Literal(value),)
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

        @property
        def _result(self) -> Resource:
            """
            Lazily create the result rdflib Resource.

            The front matter can specify an identifier (URIRef) for the Resource, in which case the
            front matter visitor preemptively creates the result rdflib Resource.

            If the
            """
            if self.__result is None:
                model_uri = MarkdownDirectoryTransformer.model_uri(
                    pipeline_id=self.__pipeline_id,
                    model_type=self.__model_type,
                    model_id=self.__model_id,
                )
                self.__result = self.__graph.resource(model_uri)
            return self.__result

        def _visit_front_matter_node(self, front_matter_node: SyntaxTreeNode):
            front_matter_dict = yaml.load(
                front_matter_node.content, Loader=yaml.FullLoader
            )

            # Buffer the statements so that we can handle the model's URI first
            front_matter_statements = []
            for key, value in front_matter_dict.items():
                property_uri = self._convert_key_to_property_uri(key)
                value_nodes = self._convert_front_matter_value_to_rdf_nodes(value)

                if property_uri == rdflib.RDF.subject:
                    # Front matter specifies the model's URI
                    # Preemptively create the result rdflib Resource so it doesn't use the default URI (synthesized from the model id and type)
                    if self.__result is not None:
                        raise ValueError("only one subject URI can be specified")
                    if len(value_nodes) > 1:
                        raise ValueError("only one subject URI can be specified")
                    if not isinstance(value_nodes[0], URIRef):
                        raise TypeError(
                            "subject URI must be a URIRef, not a "
                            + type(value_nodes[0])
                        )
                    self.__result = self.__graph.resource(value_nodes[0])
                    continue

                for value_node in value_nodes:
                    front_matter_statements.append((property_uri, value_node))

            for property_uri, value_node in front_matter_statements:
                self._result.add(property_uri, value_node)

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
                key = "abstract"

            property_uri = self._convert_key_to_property_uri(key)

            existing_value = self._result.value(property_uri)
            if existing_value is None:
                self._result.add(property_uri, Literal(html))
            elif isinstance(existing_value, Literal):
                # Concatenate multiple paragraphs under the same header
                self._result.set(
                    property_uri, Literal(existing_value.toPython() + html)
                )
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
                        property_uri, Literal(existing_text_value.toPython() + html)
                    )
            else:
                self._result.set(property_uri, Literal(html))

        @classmethod
        def visit_document(cls, markdown: str, **kwds) -> Resource:
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

    def __init__(
        self,
        default_institution: Optional[Institution] = None,
        default_collection: Optional[Collection] = None,
        default_namespace=DCTERMS,
        namespaces_by_prefix: Optional[Dict[str, rdflib.Namespace]] = None,
        **kwds,
    ):
        _Transformer.__init__(self, **kwds)
        if default_institution is None and default_collection is not None:
            raise ValueError(
                "default institution must be supplied if default collection is"
            )
        self.__default_collection = default_collection
        self.__default_institution = default_institution
        self.__default_namespace = default_namespace
        if namespaces_by_prefix is None:
            namespaces_by_prefix = self.NAMESPACES_BY_PREFIX_DEFAULT
        self.__namespaces_by_prefix = namespaces_by_prefix.copy()

    @staticmethod
    def default_collection_uri(*, markdown_directory_name: str, pipeline_id: str):
        return MarkdownDirectoryTransformer.model_uri(
            pipeline_id=pipeline_id,
            model_type=Collection,
            model_id=markdown_directory_name,
        )

    @staticmethod
    def default_institution_uri(*, pipeline_id: str):
        return MarkdownDirectoryTransformer.model_uri(
            pipeline_id=pipeline_id,
            model_type=Institution,
            model_id=MarkdownDirectoryTransformer._DEFAULT_INSTITUTION_MODEL_ID,
        )

    @staticmethod
    def model_uri(
        *, pipeline_id: str, model_type: Type[_NamedModel], model_id: str
    ) -> URIRef:
        return URIRef(
            f"urn:markdown:{pipeline_id}:{quote(stringcase.snakecase(model_type.__name__))}:{quote(model_id)}"
        )

    # Rather than managing the state of the transform as variable assignments in a particular order,
    # create a class instance per transform invocation.
    # The state includes things like the default institution, which is synthesized if needed.
    class __TransformInvocation:
        def __init__(
            self,
            *,
            default_collection: Optional[Collection],
            default_institution: Optional[Institution],
            default_namespace: rdflib.Namespace,
            logger: Logger,
            markdown_directory: MarkdownDirectory,
            namespaces_by_prefix: Dict[str, rdflib.Namespace],
            pipeline_id: str,
        ):
            self.__default_collection = default_collection
            self.__default_institution = default_institution
            self.__default_namespace = default_namespace
            self.__logger = logger
            self.__markdown_directory = markdown_directory
            self.__namespaces_by_prefix = namespaces_by_prefix
            self.__pipeline_id = pipeline_id
            self.__transformed_models_by_type = {}  # Then by id
            self.__transformed_models_by_uri = {}
            self.__untransformed_image_file_entries_by_model_type = {}
            for image_file_entry in markdown_directory.image_file_entries:
                self.__untransformed_image_file_entries_by_model_type.setdefault(
                    _model_type_by_name(image_file_entry.model_type), {}
                )[image_file_entry.model_id] = image_file_entry
            self.__untransformed_markdown_file_entries_by_model_type = {}
            for markdown_file_entry in markdown_directory.markdown_file_entries:
                self.__untransformed_markdown_file_entries_by_model_type.setdefault(
                    _model_type_by_name(markdown_file_entry.model_type), []
                ).append(markdown_file_entry)

        def __buffer_transformed_model(
            self,
            *,
            model_id: str,
            transformed_model: _NamedModel,
        ):
            assert (
                transformed_model.uri not in self.__transformed_models_by_uri
            ), transformed_model.uri
            self.__transformed_models_by_uri[transformed_model.uri] = transformed_model

            transformed_models_by_type = self.__transformed_models_by_type.setdefault(
                transformed_model.__class__, {}
            )
            assert model_id not in transformed_models_by_type
            transformed_models_by_type[model_id] = transformed_model

        def __call__(self) -> Tuple[_NamedModel, ...]:
            # Order is important
            self.__transform_institution_markdown_file_entries()
            self.__transform_collection_markdown_file_entries()
            self.__transform_work_markdown_file_entries()
            self.__transform_other_markdown_file_entries()
            self.__transform_image_markdown_file_entries()
            self.__transform_image_file_entries()
            return tuple(self.__transformed_models_by_uri.values())

        def __get_or_synthesize_default_collection(self) -> Collection:
            if self.__default_collection is None:
                model_id = self.__markdown_directory.name
                model_type = Collection
                self.__default_collection = Collection.from_fields(
                    institution_uri=self.__get_or_synthesize_default_institution().uri,
                    title=self.__markdown_directory.name,
                    uri=MarkdownDirectoryTransformer.default_collection_uri(
                        markdown_directory_name=self.__markdown_directory.name,
                        pipeline_id=self.__pipeline_id,
                    ),
                )
                self.__buffer_transformed_model(
                    model_id=model_id,
                    transformed_model=self.__default_collection,
                )
                self.__logger.info("synthesized default collection %s", model_id)
            return self.__default_collection

        def __get_or_synthesize_default_institution(self) -> Institution:
            if self.__default_institution is None:
                model_id = MarkdownDirectoryTransformer._DEFAULT_INSTITUTION_MODEL_ID
                self.__default_institution = Institution.from_fields(
                    name="Default institution",
                    uri=MarkdownDirectoryTransformer.default_institution_uri(
                        pipeline_id=self.__pipeline_id
                    ),
                )
                self.__buffer_transformed_model(
                    model_id=model_id,
                    transformed_model=self.__default_institution,
                )
            return self.__default_institution

        def __set_resource_institution_uri(self, resource: Resource) -> None:
            if resource.value(CMS.institution) is None:
                resource.add(
                    CMS.institution, self.__get_or_synthesize_default_institution().uri
                )

        def __set_resource_label(
            self, *, model_id: str, model_type: Type[_NamedModel], resource: Resource
        ) -> None:
            label_property = _MODEL_TYPE_LABEL_PROPERTIES.get(model_type)
            if label_property is None:
                return
            if resource.value(label_property) is None:
                resource.add(
                    label_property,
                    Literal(model_id),
                )

        def __transform_collection_markdown_file_entries(self) -> None:
            for (
                markdown_file_entry
            ) in self.__untransformed_markdown_file_entries_by_model_type.pop(
                Collection, tuple()
            ):
                collection_resource = self.__transform_markdown_file_entry_to_resource(
                    markdown_file_entry
                )

                self.__set_resource_institution_uri(collection_resource)
                self.__set_resource_label(
                    model_id=markdown_file_entry.model_id,
                    model_type=Collection,
                    resource=collection_resource,
                )

                collection = self.__transform_resource_to_model(
                    model_resource=collection_resource,
                    model_type=_model_type_by_name(markdown_file_entry.model_type),
                )
                if self.__default_collection is None:
                    if self.__default_institution is not None:
                        collection_institution_uri = collection_resource.value(
                            CMS.institution
                        )
                        if collection_institution_uri is not None:
                            assert isinstance(collection_institution_uri, Resource)
                            collection_institution_uri = (
                                collection_institution_uri.identifier
                            )
                        if collection_institution_uri == self.__default_institution.uri:
                            self.__default_collection = collection
                            self.__logger.debug(
                                "using first collection %s that belongs to the default institution %s as the default collection",
                                self.__default_collection.uri,
                                self.__default_institution.uri,
                            )

                self.__buffer_transformed_model(
                    model_id=markdown_file_entry.model_id,
                    transformed_model=collection,
                )

        def __transform_image_markdown_file_entries(self) -> None:
            for (
                markdown_file_entry
            ) in self.__untransformed_markdown_file_entries_by_model_type.pop(
                Image, tuple()
            ):
                image_resource = self.__transform_markdown_file_entry_to_resource(
                    markdown_file_entry
                )

                if image_resource.value(FOAF.depicts) is None:
                    # If the .md image metadata has no depicts but its model_id corresponds with a model_id of another type,
                    # synthesize a depicts.
                    for (
                        model_type,
                        transformed_models_by_id,
                    ) in self.__transformed_models_by_type.items():
                        if model_type == Image:
                            continue
                        transformed_model = transformed_models_by_id.get(
                            markdown_file_entry.model_id
                        )
                        if transformed_model is None:
                            self.__logger.warning(
                                "image markdown %s has no depicts statement and does not correspond to another model",
                                markdown_file_entry.model_id,
                            )
                            continue
                        image_resource.add(FOAF.depicts, transformed_model.uri)
                        self.__logger.debug(
                            "image markdown %s has no depicts statement but corresponds to the model %s, adding depicts statement",
                            markdown_file_entry.model_id,
                            transformed_model.uri,
                        )
                        break

                image = Image.from_rdf(resource=image_resource)

                # If the .md image metadata has no src and there is a sibling image file (i.e., a .jpg) with the same model id (i.e., file stem) as the Markdown file,
                # use that image file as the src.
                if image.src is None:
                    image_file_entry = (
                        self.__untransformed_image_file_entries_by_model_type.get(
                            _model_type_by_name(markdown_file_entry.model_type), {}
                        ).pop(markdown_file_entry.model_id, None)
                    )
                    if image_file_entry is not None:
                        assert isinstance(
                            image_file_entry, MarkdownDirectory.ImageFileEntry
                        )
                        image = image.replace(src=image_file_entry.path.as_uri())

                self.__buffer_transformed_model(
                    model_id=markdown_file_entry.model_id,
                    transformed_model=image,
                )

        def __transform_image_file_entries(self) -> None:
            # Transform any image files (.jpg, etc.) that are siblings to an .md file of any model type
            # For example:
            # collection/somecollection.md
            # collection/somecollection.jpg
            # will synthesize an Image that depicts somecollection's URI.
            # This implies that all other models must be transformed first.

            for (
                model_type,
                image_file_entries_by_model_id,
            ) in self.__untransformed_image_file_entries_by_model_type.items():
                transformed_models_of_type = self.__transformed_models_by_type.get(
                    model_type, {}
                )

                for (
                    model_id,
                    image_file_entry,
                ) in image_file_entries_by_model_id.items():
                    transformed_model = transformed_models_of_type.get(model_id)
                    if transformed_model is None:
                        self.__logger.warning(
                            "image file %s does not have a sibling .md file",
                            image_file_entry.path,
                        )
                        continue

                    # Image file corresponds to a model Markdown file
                    # Synthesize an Image model
                    self.__logger.debug(
                        "synthesizing an Image model for the model %s",
                        transformed_model.uri,
                    )
                    self.__buffer_transformed_model(
                        model_id=image_file_entry.model_id,
                        transformed_model=Image.from_fields(
                            depicts_uri=transformed_model.uri,
                            src=image_file_entry.path.as_uri(),
                            uri=MarkdownDirectoryTransformer.model_uri(
                                pipeline_id=self.__pipeline_id,
                                model_id=image_file_entry.model_id,
                                model_type=Image,
                            ),
                        ),
                    )

        def __transform_institution_markdown_file_entries(self) -> None:
            for (
                markdown_file_entry
            ) in self.__untransformed_markdown_file_entries_by_model_type.pop(
                Institution, tuple()
            ):
                institution_resource = self.__transform_markdown_file_entry_to_resource(
                    markdown_file_entry
                )
                self.__set_resource_label(
                    model_id=markdown_file_entry.model_id,
                    model_type=Institution,
                    resource=institution_resource,
                )

                institution = self.__transform_resource_to_model(
                    model_resource=institution_resource,
                    model_type=Institution,
                )
                if self.__default_institution is None:
                    self.__default_institution = institution
                    self.__logger.debug(
                        "using first institution %s as the default institution",
                        self.__default_institution.uri,
                    )
                self.__buffer_transformed_model(
                    model_id=markdown_file_entry.model_id,
                    transformed_model=institution,
                )

        def __transform_markdown_file_entry_to_resource(
            self, markdown_file_entry: MarkdownDirectory.MarkdownFileEntry
        ) -> Resource:
            return MarkdownDirectoryTransformer._MarkdownToResourceTransformer.visit_document(
                markdown_file_entry.markdown_source,
                default_namespace=self.__default_namespace,
                model_id=markdown_file_entry.model_id,
                model_type=_model_type_by_name(markdown_file_entry.model_type),
                namespaces_by_prefix=self.__namespaces_by_prefix,
                pipeline_id=self.__pipeline_id,
            )

        def __transform_work_markdown_file_entries(
            self,
        ):
            for (
                markdown_file_entry
            ) in self.__untransformed_markdown_file_entries_by_model_type.pop(
                Work, tuple()
            ):
                work_resource = self.__transform_markdown_file_entry_to_resource(
                    markdown_file_entry
                )
                self.__set_resource_institution_uri(work_resource)
                self.__set_resource_label(
                    model_id=markdown_file_entry.model_id,
                    model_type=Work,
                    resource=work_resource,
                )

                if work_resource.value(CMS.collection) is None:
                    work_resource.add(
                        CMS.collection,
                        self.__get_or_synthesize_default_collection().uri,
                    )

                work_ = self.__transform_resource_to_model(
                    model_resource=work_resource,
                    model_type=Work,
                )
                self.__buffer_transformed_model(
                    model_id=markdown_file_entry.model_id,
                    transformed_model=work_,
                )

        def __transform_other_markdown_file_entries(self) -> None:
            for (
                model_type,
                markdown_file_entries,
            ) in self.__untransformed_markdown_file_entries_by_model_type.items():
                if model_type == Image:
                    continue
                for markdown_file_entry in markdown_file_entries:
                    model_resource = self.__transform_markdown_file_entry_to_resource(
                        markdown_file_entry
                    )
                    self.__set_resource_label(
                        model_id=markdown_file_entry.model_id,
                        model_type=model_type,
                        resource=model_resource,
                    )

                    try:
                        transformed_model = self.__transform_resource_to_model(
                            model_resource=model_resource,
                            model_type=_model_type_by_name(
                                markdown_file_entry.model_type
                            ),
                        )
                    except KeyError:
                        self.__logger.warning(
                            "unknown model type: %s", markdown_file_entry.model_type
                        )
                        continue

                    self.__buffer_transformed_model(
                        model_id=markdown_file_entry.model_id,
                        transformed_model=transformed_model,
                    )

        def __transform_resource_to_model(
            self, *, model_resource: Resource, model_type: Type[_NamedModel]
        ) -> _NamedModel:
            return model_type.from_rdf(model_resource)

    def transform(self, markdown_directory: MarkdownDirectory):
        yield_known_licenses = True
        yield_known_property_definitions = True
        yield_known_rights_statements = True

        for model in self.__TransformInvocation(
            default_collection=self.__default_collection,
            default_institution=self.__default_institution,
            default_namespace=self.__default_namespace,
            logger=self._logger,
            markdown_directory=markdown_directory,
            namespaces_by_prefix=self.__namespaces_by_prefix,
            pipeline_id=self._pipeline_id,
        )():
            yield model

            if isinstance(model, License):
                yield_known_licenses = False
            elif isinstance(model, PropertyDefinition):
                yield_known_property_definitions = False
            elif isinstance(model, RightsStatement):
                yield_known_rights_statements = False

        if yield_known_licenses:
            # If no licenses came from the Markdown directory, yield known licenses
            yield from CreativeCommonsLicenses.as_tuple()

        if yield_known_property_definitions:
            # If no property definitions came from the Markdown directory, yield known property definitions
            yield from DublinCorePropertyDefinitions.as_tuple()
            yield from VraCorePropertyDefinitions.as_tuple()

        if yield_known_rights_statements:
            # If no rights statements came from the Markdown directory, yield known rights statements
            yield from RightsStatementsDotOrgRightsStatements.as_tuple()
