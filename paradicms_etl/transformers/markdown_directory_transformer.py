from logging import Logger
from typing import Dict, Optional, Tuple, Union
from urllib.parse import quote

import rdflib.namespace
import yaml
from markdown_it import MarkdownIt
from markdown_it.renderer import RendererHTML
from markdown_it.tree import SyntaxTreeNode
from mdit_py_plugins.front_matter import front_matter_plugin
from rdflib import DCTERMS, Graph, Literal, URIRef
from rdflib.resource import Resource
from rdflib.term import Node

import paradicms_etl
from paradicms_etl._transformer import _Transformer
from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.creative_commons_rights_statements import (
    CreativeCommonsRightsStatements,
)
from paradicms_etl.models.dublin_core_property_definitions import (
    DublinCorePropertyDefinitions,
)
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.markdown_directory import MarkdownDirectory
from paradicms_etl.models.person import Person
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.work import Work
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
                key = "abstract"

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
                "default institution must be supplied if default collection is"
            )
        self.__default_collection = default_collection
        self.__default_institution = default_institution

    @staticmethod
    def model_uri(*, pipeline_id: str, model_type: str, model_id: str) -> URIRef:
        return URIRef(
            f"urn:markdown:{pipeline_id}:{quote(model_type)}:{quote(model_id)}"
        )

    # Rather than managing the state of the transform as variable assignments in a particular order,
    # create a class instance per transform invocation.
    # The state includes things like the default institution, which is synthesized if needed.
    class __TransformInvocation:
        # Constants
        __COLLECTION_MODEL_TYPE = "collection"
        __IMAGE_MODEL_TYPE = "image"
        __INSTITUTION_MODEL_TYPE = "institution"
        __WORK_MODEL_TYPE = "work"

        __MODEL_CLASSES_BY_TYPE = {}
        __MODEL_CLASSES_BY_TYPE[__COLLECTION_MODEL_TYPE] = Collection
        __MODEL_CLASSES_BY_TYPE[__IMAGE_MODEL_TYPE] = Image
        __MODEL_CLASSES_BY_TYPE[__INSTITUTION_MODEL_TYPE] = Institution
        __MODEL_CLASSES_BY_TYPE["person"] = Person
        __MODEL_CLASSES_BY_TYPE[__WORK_MODEL_TYPE] = Work

        def __init__(
            self,
            *,
            default_collection: Optional[Collection],
            default_institution: Optional[Institution],
            logger: Logger,
            markdown_directory: MarkdownDirectory,
            pipeline_id: str,
        ):
            if default_collection is not None:
                default_collection = default_collection
            self.__default_collection = default_collection
            if default_institution is not None:
                self.__default_institution = default_institution
            self.__default_institution = default_institution
            self.__logger = logger
            self.__markdown_directory = markdown_directory
            self.__pipeline_id = pipeline_id
            self.__transformed_models_by_type = {}  # Then by id
            self.__transformed_models_by_uri = {}
            self.__untransformed_image_file_entries_by_model_type = {}
            for image_file_entry in markdown_directory.image_file_entries:
                self.__untransformed_image_file_entries_by_model_type.setdefault(
                    image_file_entry.model_type, {}
                )[image_file_entry.model_id] = image_file_entry
            self.__untransformed_markdown_file_entries_by_model_type = {}
            for markdown_file_entry in markdown_directory.markdown_file_entries:
                self.__untransformed_markdown_file_entries_by_model_type.setdefault(
                    markdown_file_entry.model_type, []
                ).append(markdown_file_entry)

        def __buffer_transformed_model(
            self, *, model_id: str, model_type: str, transformed_model: _NamedModel
        ):
            assert (
                transformed_model.uri not in self.__transformed_models_by_uri
            ), transformed_model.uri
            self.__transformed_models_by_uri[transformed_model.uri] = transformed_model

            transformed_models_by_type = self.__transformed_models_by_type.setdefault(
                model_type, {}
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
                model_id = "default"
                model_type = self.__COLLECTION_MODEL_TYPE
                self.__default_collection = Collection.from_fields(
                    institution_uri=self.__get_or_synthesize_default_institution().uri,
                    title="Default collection",
                    uri=MarkdownDirectoryTransformer.model_uri(
                        pipeline_id=self.__pipeline_id,
                        model_type=model_type,
                        model_id=model_id,
                    ),
                )
                self.__buffer_transformed_model(
                    model_id=model_id,
                    model_type=model_type,
                    transformed_model=self.__default_collection,
                )
            return self.__default_collection

        def __get_or_synthesize_default_institution(self) -> Institution:
            if self.__default_institution is None:
                model_id = "default"
                model_type = self.__INSTITUTION_MODEL_TYPE
                self.__default_institution = Institution.from_fields(
                    name="Default institution",
                    uri=MarkdownDirectoryTransformer.model_uri(
                        pipeline_id=self.__pipeline_id,
                        model_type=model_type,
                        model_id=model_id,
                    ),
                )
                self.__buffer_transformed_model(
                    model_id=model_id,
                    model_type=model_type,
                    transformed_model=self.__default_institution,
                )
            return self.__default_institution

        def __set_resource_institution_uri(self, resource: Resource) -> Resource:
            if resource.value(CMS.institution) is None:
                resource.add(
                    CMS.institution, self.__get_or_synthesize_default_institution().uri
                )
            return resource

        def __transform_collection_markdown_file_entries(self) -> None:
            for (
                markdown_file_entry
            ) in self.__untransformed_markdown_file_entries_by_model_type.pop(
                self.__COLLECTION_MODEL_TYPE, tuple()
            ):
                collection_resource = self.__set_resource_institution_uri(
                    self.__transform_markdown_file_entry_to_resource(
                        markdown_file_entry
                    )
                )
                if collection_resource.value(DCTERMS.title) is None:
                    collection_resource.add(
                        rdflib.namespace.FOAF.depicts,
                        Literal(markdown_file_entry.model_id),
                    )

                collection = self.__transform_resource_to_model(
                    model_resource=collection_resource,
                    model_type=markdown_file_entry.model_type,
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
                    model_type=markdown_file_entry.model_type,
                    transformed_model=collection,
                )

        def __transform_image_markdown_file_entries(self) -> None:
            for (
                markdown_file_entry
            ) in self.__untransformed_markdown_file_entries_by_model_type.pop(
                self.__IMAGE_MODEL_TYPE, tuple()
            ):
                image_resource = self.__set_resource_institution_uri(
                    self.__transform_markdown_file_entry_to_resource(
                        markdown_file_entry
                    )
                )

                if image_resource.value(rdflib.namespace.FOAF.depicts) is None:
                    # If the .md image metadata has no depicts but its model_id corresponds with a model_id of another type,
                    # synthesize a depicts.
                    for (
                        model_type,
                        transformed_models_by_id,
                    ) in self.__transformed_models_by_type.items():
                        if model_type == self.__IMAGE_MODEL_TYPE:
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
                        image_resource.add(
                            rdflib.namespace.FOAF.depicts, transformed_model.uri
                        )
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
                            markdown_file_entry.model_type, {}
                        ).pop(markdown_file_entry.model_id, None)
                    )
                    if image_file_entry is not None:
                        assert isinstance(
                            image_file_entry, MarkdownDirectory.ImageFileEntry
                        )
                        image = image.replace(src=image_file_entry.path.as_uri())

                self.__buffer_transformed_model(
                    model_id=markdown_file_entry.model_id,
                    model_type=markdown_file_entry.model_type,
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
                        model_type=self.__IMAGE_MODEL_TYPE,
                        transformed_model=Image.from_fields(
                            depicts_uri=transformed_model.uri,
                            src=image_file_entry.path.as_uri(),
                            uri=MarkdownDirectoryTransformer.model_uri(
                                pipeline_id=self.__pipeline_id,
                                model_id=image_file_entry.model_id,
                                model_type=self.__IMAGE_MODEL_TYPE,
                            ),
                        ),
                    )

        def __transform_institution_markdown_file_entries(self) -> None:
            for (
                markdown_file_entry
            ) in self.__untransformed_markdown_file_entries_by_model_type.pop(
                self.__INSTITUTION_MODEL_TYPE, tuple()
            ):
                institution_resource = self.__transform_markdown_file_entry_to_resource(
                    markdown_file_entry
                )
                if institution_resource.value(rdflib.namespace.FOAF.name) is None:
                    institution_resource.add(
                        rdflib.namespace.FOAF.name,
                        Literal(markdown_file_entry.model_id),
                    )

                institution = self.__transform_resource_to_model(
                    model_resource=institution_resource,
                    model_type=markdown_file_entry.model_type,
                )
                if self.__default_institution is None:
                    self.__default_institution = institution
                    self.__logger.debug(
                        "using first institution %s as the default institution",
                        self.__default_institution.uri,
                    )
                self.__buffer_transformed_model(
                    model_id=markdown_file_entry.model_id,
                    model_type=markdown_file_entry.model_type,
                    transformed_model=institution,
                )

        def __transform_markdown_file_entry_to_resource(
            self, markdown_file_entry: MarkdownDirectory.MarkdownFileEntry
        ) -> Resource:
            return MarkdownDirectoryTransformer._MarkdownToResourceTransformer.visit_document(
                markdown_file_entry.markdown_source,
                model_uri=MarkdownDirectoryTransformer.model_uri(
                    pipeline_id=self.__pipeline_id,
                    model_type=markdown_file_entry.model_type,
                    model_id=markdown_file_entry.model_id,
                ),
                pipeline_id=self.__pipeline_id,
            )

        def __transform_work_markdown_file_entries(
            self,
        ):
            for (
                markdown_file_entry
            ) in self.__untransformed_markdown_file_entries_by_model_type.pop(
                self.__WORK_MODEL_TYPE, tuple()
            ):
                work_resource = self.__set_resource_institution_uri(
                    self.__transform_markdown_file_entry_to_resource(
                        markdown_file_entry
                    )
                )
                if work_resource.value(CMS.collection) is None:
                    work_resource.add(
                        CMS.collection,
                        self.__get_or_synthesize_default_collection().uri,
                    )
                if work_resource.value(DCTERMS.title) is None:
                    work_resource.add(
                        DCTERMS.title, Literal(markdown_file_entry.model_id)
                    )

                work_ = self.__transform_resource_to_model(
                    model_resource=work_resource,
                    model_type=markdown_file_entry.model_type,
                )
                self.__buffer_transformed_model(
                    model_id=markdown_file_entry.model_id,
                    model_type=markdown_file_entry.model_type,
                    transformed_model=work_,
                )

        def __transform_other_markdown_file_entries(self) -> None:
            for (
                model_type,
                markdown_file_entries,
            ) in self.__untransformed_markdown_file_entries_by_model_type.items():
                if model_type == self.__IMAGE_MODEL_TYPE:
                    continue
                for markdown_file_entry in markdown_file_entries:
                    self.__buffer_transformed_model(
                        model_id=markdown_file_entry.model_id,
                        model_type=markdown_file_entry.model_type,
                        transformed_model=self.__transform_resource_to_model(
                            model_resource=self.__transform_markdown_file_entry_to_resource(
                                markdown_file_entry
                            ),
                            model_type=markdown_file_entry.model_type,
                        ),
                    )

        def __transform_resource_to_model(
            self, *, model_resource: Resource, model_type: str
        ) -> _NamedModel:
            model_class = self.__MODEL_CLASSES_BY_TYPE[model_type]
            model = model_class.from_rdf(model_resource)
            return model

    def transform(self, markdown_directory: MarkdownDirectory):
        yield from CreativeCommonsLicenses.as_tuple()
        yield from CreativeCommonsRightsStatements.as_tuple()
        yield from DublinCorePropertyDefinitions.as_tuple()
        yield from RightsStatementsDotOrgRightsStatements.as_tuple()

        yield from self.__TransformInvocation(
            default_collection=self.__default_collection,
            default_institution=self.__default_institution,
            logger=self._logger,
            markdown_directory=markdown_directory,
            pipeline_id=self._pipeline_id,
        )()
