import json
import logging
from logging import Logger
from typing import Dict, Optional, Tuple, Type, List
from urllib.parse import quote

import yaml
from rdflib import FOAF, Graph, Literal, URIRef, Namespace, RDF
from rdflib.resource import Resource
from stringcase import snakecase
from yaml import FullLoader

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.license import License
from paradicms_etl.models.markdown_directory import MarkdownDirectory
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.root_model_classes import (
    ROOT_MODEL_CLASSES_BY_SNAKE_CASE_NAME,
)
from paradicms_etl.models.work import Work
from paradicms_etl.models.work_creation import WorkCreation
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.markdown_to_dict_transformer import (
    MarkdownToDictTransformer,
)
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class MarkdownDirectoryTransformer:
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
           ii. Sequence values create multiple RDF statements with the same subject and predicate.
           iii. Map values create blank nodes, and the conversion is applied recursively.
    3. Transform the RDF graph to a model.
    """

    _DEFAULT_INSTITUTION_MODEL_ID = "default"

    def __init__(
        self,
        *,
        default_institution: Optional[Institution] = None,
        default_collection: Optional[Collection] = None,
        pipeline_id: str,
    ):
        if default_institution is None and default_collection is not None:
            raise ValueError(
                "default institution must be supplied if default collection is"
            )
        self.__default_collection = default_collection
        self.__default_institution = default_institution
        self.__logger = logging.getLogger(__name__)
        self.__pipeline_id = pipeline_id

    @staticmethod
    def default_collection_uri(
        *, markdown_directory_name: str, pipeline_id: str
    ) -> URIRef:
        return MarkdownDirectoryTransformer._model_uri(
            pipeline_id=pipeline_id,
            model_type_name="collection",
            model_id=markdown_directory_name,
        )

    @staticmethod
    def default_institution_uri(*, pipeline_id: str) -> URIRef:
        return MarkdownDirectoryTransformer._model_uri(
            pipeline_id=pipeline_id,
            model_type_name="institution",
            model_id=MarkdownDirectoryTransformer._DEFAULT_INSTITUTION_MODEL_ID,
        )

    @staticmethod
    def _model_type_namespace(*, model_type_name: str, pipeline_id: str) -> Namespace:
        return Namespace(
            f"{MarkdownDirectoryTransformer._pipeline_namespace(pipeline_id=pipeline_id)}{quote(model_type_name)}:"
        )

    @staticmethod
    def _model_uri(*, model_id: str, model_type_name: str, pipeline_id: str) -> URIRef:
        return MarkdownDirectoryTransformer._model_type_namespace(
            model_type_name=model_type_name, pipeline_id=pipeline_id
        )[quote(model_id)]

    @staticmethod
    def _pipeline_namespace(*, pipeline_id: str) -> Namespace:
        return Namespace(f"urn:markdown:{pipeline_id}:")

    # Rather than managing the state of the transform as variable assignments in a particular order,
    # create a class instance per transform invocation.
    # The state includes things like the default institution, which is synthesized if needed.
    class __TransformInvocation:
        __METADATA_FILE_TO_JSON_LD_OBJECT_TRANSFORMERS = {
            "json": lambda metadata_file_entry: json.loads(metadata_file_entry.source),
            "md": lambda metadata_file_entry: MarkdownToDictTransformer.transform(
                markdown=metadata_file_entry.source,
            ),
            "yaml": lambda metadata_file_entry: yaml.load(
                metadata_file_entry.source, Loader=FullLoader
            ),
        }

        def __init__(
            self,
            *,
            default_collection: Optional[Collection],
            default_institution: Optional[Institution],
            logger: Logger,
            markdown_directory: MarkdownDirectory,
            pipeline_id: str,
        ):
            self.__default_collection = default_collection
            self.__default_institution = default_institution
            self.__logger = logger
            self.__markdown_directory = markdown_directory
            self.__pipeline_id = pipeline_id
            self.__transformed_models_by_class: Dict[
                Type, Dict[str, NamedModel]
            ] = {}  # Then by id
            self.__transformed_models_by_uri: Dict[str, NamedModel] = {}
            self.__untransformed_image_file_entries_by_model_class: Dict[
                MarkdownDirectoryTransformer.__TransformInvocation.__ModelTypeTraits,
                Dict[str, MarkdownDirectory.ImageFileEntry],
            ] = {}
            for image_file_entry in markdown_directory.image_file_entries:
                self.__untransformed_image_file_entries_by_model_class.setdefault(
                    ROOT_MODEL_CLASSES_BY_SNAKE_CASE_NAME[image_file_entry.model_type],
                    {},
                )[image_file_entry.model_id] = image_file_entry
            self.__untransformed_metadata_file_entries_by_model_class: Dict[
                MarkdownDirectoryTransformer.__TransformInvocation.__ModelTypeTraits,
                List[MarkdownDirectory.MetadataFileEntry],
            ] = {}
            for metadata_file_entry in markdown_directory.metadata_file_entries:
                self.__untransformed_metadata_file_entries_by_model_class.setdefault(
                    ROOT_MODEL_CLASSES_BY_SNAKE_CASE_NAME[
                        metadata_file_entry.model_type
                    ],
                    [],
                ).append(metadata_file_entry)

        def __buffer_transformed_model(
            self,
            *,
            model_id: str,
            transformed_model: NamedModel,
        ):
            assert (
                transformed_model.uri not in self.__transformed_models_by_uri
            ), transformed_model.uri
            self.__transformed_models_by_uri[transformed_model.uri] = transformed_model

            transformed_models_by_type = self.__transformed_models_by_class.setdefault(
                transformed_model.__class__, {}
            )
            assert model_id not in transformed_models_by_type
            transformed_models_by_type[model_id] = transformed_model

        def __call__(self) -> Tuple[NamedModel, ...]:
            # Order is important
            self.__transform_institution_metadata_file_entries()
            self.__transform_collection_metadata_file_entries()
            self.__transform_work_metadata_file_entries()
            self.__transform_work_event_metadata_file_entries()
            self.__transform_other_metadata_file_entries()
            self.__transform_image_metadata_file_entries()
            self.__transform_image_file_entries()
            return tuple(self.__transformed_models_by_uri.values())

        def __get_or_synthesize_default_collection(self) -> Collection:
            if self.__default_collection is None:
                model_id = self.__markdown_directory.name
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
            self,
            *,
            model_id: str,
            model_class: Type[NamedModel],
            resource: Resource,
        ) -> None:
            label_property = getattr(model_class, "LABEL_PROPERTY", None)
            if label_property is None:
                return
            if resource.value(label_property) is None:
                resource.add(
                    label_property,
                    Literal(model_id),
                )

        def __transform_collection_metadata_file_entries(self) -> None:
            model_class = Collection
            for (
                metadata_file_entry
            ) in self.__untransformed_metadata_file_entries_by_model_class.pop(
                model_class, tuple()
            ):
                collection_resource = self.__transform_metadata_file_entry_to_resource(
                    metadata_file_entry=metadata_file_entry
                )

                self.__set_resource_institution_uri(collection_resource)
                self.__set_resource_label(
                    model_class=model_class,
                    model_id=metadata_file_entry.model_id,
                    resource=collection_resource,
                )

                collection: Collection = self.__transform_resource_to_model(
                    model_class=model_class,
                    model_resource=collection_resource,
                )  # type: ignore
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
                    model_id=metadata_file_entry.model_id,
                    transformed_model=collection,
                )

        def __transform_image_metadata_file_entries(self) -> None:
            model_class = Image
            for (
                metadata_file_entry
            ) in self.__untransformed_metadata_file_entries_by_model_class.pop(
                model_class, tuple()
            ):
                image_resource = self.__transform_metadata_file_entry_to_resource(
                    metadata_file_entry=metadata_file_entry
                )

                if image_resource.value(FOAF.depicts) is None:
                    # If the .md image metadata has no depicts but its model_id corresponds with a model_id of another type,
                    # synthesize a depicts.
                    for (
                        model_class,
                        transformed_models_by_id,
                    ) in self.__transformed_models_by_class.items():
                        if model_class == Image:
                            continue
                        transformed_model = transformed_models_by_id.get(
                            metadata_file_entry.model_id
                        )
                        if transformed_model is None:
                            self.__logger.warning(
                                "image markdown %s has no depicts statement and does not correspond to another model",
                                metadata_file_entry.model_id,
                            )
                            continue
                        image_resource.add(FOAF.depicts, transformed_model.uri)
                        self.__logger.debug(
                            "image markdown %s has no depicts statement but corresponds to the model %s, adding depicts statement",
                            metadata_file_entry.model_id,
                            transformed_model.uri,
                        )
                        break

                image = Image.from_rdf(resource=image_resource)

                # If the .md image metadata has no src and there is a sibling image file (i.e., a .jpg) with the same model id (i.e., file stem) as the Markdown file,
                # use that image file as the src.
                if image.src is None:
                    image_file_entry = (
                        self.__untransformed_image_file_entries_by_model_class.get(
                            ROOT_MODEL_CLASSES_BY_SNAKE_CASE_NAME[
                                metadata_file_entry.model_type
                            ],
                            {},
                        ).pop(metadata_file_entry.model_id, None)
                    )
                    if image_file_entry is not None:
                        assert isinstance(
                            image_file_entry, MarkdownDirectory.ImageFileEntry
                        )
                        image = image.replace(src=image_file_entry.path.as_uri())

                self.__buffer_transformed_model(
                    model_id=metadata_file_entry.model_id,
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
                model_class,
                image_file_entries_by_model_id,
            ) in self.__untransformed_image_file_entries_by_model_class.items():
                transformed_models_of_class = self.__transformed_models_by_class.get(
                    model_class, {}
                )

                for (
                    model_id,
                    image_file_entry,
                ) in image_file_entries_by_model_id.items():
                    transformed_model = transformed_models_of_class.get(model_id)
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
                            uri=MarkdownDirectoryTransformer._model_uri(
                                pipeline_id=self.__pipeline_id,
                                model_id=image_file_entry.model_id,
                                model_type_name=snakecase(Image.__name__),
                            ),
                        ),
                    )

        def __transform_institution_metadata_file_entries(self) -> None:
            model_class = Institution
            for (
                metadata_file_entry
            ) in self.__untransformed_metadata_file_entries_by_model_class.pop(
                model_class, tuple()
            ):
                institution_resource = self.__transform_metadata_file_entry_to_resource(
                    metadata_file_entry=metadata_file_entry
                )
                self.__set_resource_label(
                    model_id=metadata_file_entry.model_id,
                    model_class=model_class,
                    resource=institution_resource,
                )

                institution: Institution = self.__transform_resource_to_model(
                    model_resource=institution_resource,
                    model_class=model_class,
                )  # type: ignore
                if self.__default_institution is None:
                    self.__default_institution = institution
                    self.__logger.debug(
                        "using first institution %s as the default institution",
                        self.__default_institution.uri,
                    )
                self.__buffer_transformed_model(
                    model_id=metadata_file_entry.model_id,
                    transformed_model=institution,
                )

        def __transform_metadata_file_entry_to_resource(
            self, metadata_file_entry: MarkdownDirectory.MetadataFileEntry
        ) -> Resource:
            model_class = ROOT_MODEL_CLASSES_BY_SNAKE_CASE_NAME[
                metadata_file_entry.model_type
            ]

            graph = Graph()

            resource_identifier_default = MarkdownDirectoryTransformer._model_uri(
                model_id=metadata_file_entry.model_id,
                model_type_name=snakecase(model_class.__name__),
                pipeline_id=self.__pipeline_id,
            )

            try:
                if (
                    metadata_file_entry.format
                    in self.__METADATA_FILE_TO_JSON_LD_OBJECT_TRANSFORMERS
                ):
                    json_ld_object = (
                        self.__METADATA_FILE_TO_JSON_LD_OBJECT_TRANSFORMERS[
                            metadata_file_entry.format
                        ](metadata_file_entry)
                    )

                    if "@id" not in json_ld_object:
                        json_ld_object["@id"] = resource_identifier_default

                    json_ld_context_updates = {"md": str(MarkdownDirectoryTransformer._pipeline_namespace(pipeline_id=self.__pipeline_id))}
                    for model_type_name in ROOT_MODEL_CLASSES_BY_SNAKE_CASE_NAME.keys():
                            json_ld_context_updates[
                                "md-" + model_type_name
                            ] = str(MarkdownDirectoryTransformer._model_type_namespace(
                                model_type_name=model_type_name, pipeline_id=self.__pipeline_id
                            ))
                    json_ld_context = safe_dict_update(model_class.json_ld_context(), json_ld_context_updates)

                    graph.parse(
                        data=json_ld_object,
                        context=json_ld_context,
                        format="json-ld"
                    )
                else:
                    # Assume it's an RDF serialization
                    graph.parse(
                        data=metadata_file_entry.source,
                        format=metadata_file_entry.format,
                        publicID=resource_identifier_default,
                    )
            except Exception as e:
                raise ValueError(f"error deserializing {metadata_file_entry}") from e

            graph_str = graph.serialize(format="turtle")

            uri_subjects = {
                subject for subject in graph.subjects() if isinstance(subject, URIRef)
            }
            if len(uri_subjects) == 1:
                resource = graph.resource(uri_subjects.pop())
            else:
                raise ValueError(
                    f"metadata file {metadata_file_entry.model_type}/{metadata_file_entry.model_id}.{metadata_file_entry.format} has {len(uri_subjects)} named subjects"
                )

            expected_rdf_type = getattr(CMS, model_class.__name__)
            actual_rdf_type = resource.value(RDF.type)
            if actual_rdf_type is None:
                resource.add(RDF.type, expected_rdf_type)
            else:
                if not isinstance(actual_rdf_type, Resource):
                    raise ValueError(f"{metadata_file_entry} rdf:type is not a URI")
                if actual_rdf_type.identifier != expected_rdf_type:
                    raise ValueError(
                        f"{metadata_file_entry} rdf_type is {actual_rdf_type.identifier}, expected {expected_rdf_type}"
                    )

            return resource

        def __transform_other_metadata_file_entries(self) -> None:
            for (
                model_class,
                metadata_file_entries,
            ) in self.__untransformed_metadata_file_entries_by_model_class.items():
                if model_class == Image:
                    continue
                for metadata_file_entry in metadata_file_entries:
                    model_resource = self.__transform_metadata_file_entry_to_resource(
                        metadata_file_entry
                    )
                    self.__set_resource_label(
                        model_id=metadata_file_entry.model_id,
                        model_class=model_class,
                        resource=model_resource,
                    )
                    self.__buffer_transformed_model(
                        model_id=metadata_file_entry.model_id,
                        transformed_model=self.__transform_resource_to_model(
                            model_resource=model_resource,
                            model_class=model_class,
                        ),
                    )

        def __transform_resource_to_model(
            self, *, model_class: Type[NamedModel], model_resource: Resource
        ) -> NamedModel:
            return model_class.from_rdf(model_resource)

        def __transform_work_metadata_file_entries(
            self,
        ):
            model_class = Work
            for (
                metadata_file_entry
            ) in self.__untransformed_metadata_file_entries_by_model_class.pop(
                model_class, tuple()
            ):
                work_resource = self.__transform_metadata_file_entry_to_resource(
                    metadata_file_entry
                )
                self.__set_resource_institution_uri(work_resource)
                self.__set_resource_label(
                    model_id=metadata_file_entry.model_id,
                    model_class=model_class,
                    resource=work_resource,
                )

                if work_resource.value(CMS.collection) is None:
                    work_resource.add(
                        CMS.collection,
                        self.__get_or_synthesize_default_collection().uri,
                    )

                self.__buffer_transformed_model(
                    model_id=metadata_file_entry.model_id,
                    transformed_model=self.__transform_resource_to_model(
                        model_resource=work_resource,
                        model_class=model_class,
                    ),
                )

        def __transform_work_event_metadata_file_entries(
            self,
        ):
            transformed_works_by_id = self.__transformed_models_by_class.get(Work, {})

            for model_class in (WorkCreation,):
                for (
                    metadata_file_entry
                ) in self.__untransformed_metadata_file_entries_by_model_class.pop(
                    model_class, tuple()
                ):
                    work_event_resource = (
                        self.__transform_metadata_file_entry_to_resource(
                            metadata_file_entry
                        )
                    )

                    if work_event_resource.value(CMS.work) is None:
                        # If the .md does not refer to a work but its model_id corresponds with a model_id of a work,
                        # synthesize the reference
                        work = transformed_works_by_id.get(metadata_file_entry.model_id)
                        if work is None:
                            self.__logger.warning(
                                "work event markdown %s has no work statement and its id does not correspond to a Work",
                                metadata_file_entry.model_id,
                            )
                            continue

                        work_event_resource.add(CMS.work, work.uri)
                        self.__logger.debug(
                            "work event markdown %s has no work statement but corresponds to the model %s, adding work statement",
                            metadata_file_entry.model_id,
                            work.uri,
                        )

                    self.__buffer_transformed_model(
                        model_id=metadata_file_entry.model_id,
                        transformed_model=self.__transform_resource_to_model(
                            model_resource=work_event_resource,
                            model_class=model_class,
                        ),
                    )

    def __call__(self, *, markdown_directory: MarkdownDirectory):  # type: ignore
        yield_known_licenses = True
        yield_known_rights_statements = True

        for model in self.__TransformInvocation(
            default_collection=self.__default_collection,
            default_institution=self.__default_institution,
            logger=self.__logger,
            markdown_directory=markdown_directory,
            pipeline_id=self.__pipeline_id,
        )():
            yield model

            if isinstance(model, License):
                yield_known_licenses = False
            elif isinstance(model, RightsStatement):
                yield_known_rights_statements = False

        if yield_known_licenses:
            # If no licenses came from the Markdown directory, yield known licenses
            yield from CreativeCommonsLicenses.as_tuple()

        if yield_known_rights_statements:
            # If no rights statements came from the Markdown directory, yield known rights statements
            yield from RightsStatementsDotOrgRightsStatements.as_tuple()
