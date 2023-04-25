import json
import logging
from logging import Logger
from typing import Dict, Optional, Tuple, Type, List, Union
from urllib.parse import quote

import yaml
from rdflib import FOAF, Graph, Literal, URIRef, Namespace
from rdflib.resource import Resource
from stringcase import spinalcase, snakecase
from yaml import FullLoader

from paradicms_etl.model import Model
from paradicms_etl.models.cms.cms_collection import CmsCollection
from paradicms_etl.models.cms.cms_image import CmsImage
from paradicms_etl.models.cms.cms_root_model_classes_by_name import (
    CMS_ROOT_MODEL_CLASSES_BY_NAME,
)
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.markdown_directory import MarkdownDirectory
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.work import Work
from paradicms_etl.models.work_closing import WorkClosing
from paradicms_etl.models.work_creation import WorkCreation
from paradicms_etl.models.work_opening import WorkOpening
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.markdown_to_dict_transformer import (
    MarkdownToDictTransformer,
)
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class MarkdownDirectoryTransformer:
    """
    Transform a directory of Markdown files to a set of models.

    See MarkdownDirectoryExtractor for the expected directory structure.

    See the user documentation for information about the transformation process.
    """

    def __init__(
        self,
        *,
        pipeline_id: str,
        default_collection: Optional[Collection] = None,
        root_model_classes_by_name: Optional[
            Dict[str, Type[ResourceBackedModel]]
        ] = None,
    ):
        self.__default_collection = default_collection
        self.__logger = logging.getLogger(__name__)
        self.__pipeline_id = pipeline_id
        if root_model_classes_by_name is None:
            root_model_classes_by_name = CMS_ROOT_MODEL_CLASSES_BY_NAME
        self.__root_model_classes_by_name = root_model_classes_by_name

    # Rather than managing the state of the transform as variable assignments in a particular order,
    # create a class instance per transform invocation.
    # The state includes things like the default collection, which is synthesized if needed.
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
            logger: Logger,
            markdown_directory: MarkdownDirectory,
            pipeline_id: str,
            root_model_classes_by_name: Dict[str, Type[ResourceBackedModel]],
        ):
            self.__default_collection = default_collection
            self.__logger = logger
            self.__markdown_directory = markdown_directory
            self.__pipeline_id = pipeline_id
            self.__root_model_classes_by_alias = root_model_classes_by_name.copy()

            self.__json_ld_context = {"md": str(self.__pipeline_namespace)}
            for (
                model_class_name,
                model_class,
            ) in root_model_classes_by_name.items():
                self.__json_ld_context["md-" + spinalcase(model_class_name)] = str(
                    self.__model_type_namespace(model_class=model_class)
                )
                for model_class_name_variation in (
                    snakecase(model_class_name),
                    spinalcase(model_class_name),
                ):
                    if (
                        model_class_name_variation
                        not in self.__root_model_classes_by_alias
                    ):
                        self.__root_model_classes_by_alias[
                            model_class_name_variation
                        ] = model_class

            self.__transformed_models: List[Model] = []
            self.__transformed_models_by_class: Dict[
                Type, Dict[str, Model]
            ] = {}  # Then by id
            self.__transformed_models_by_uri: Dict[str, Model] = {}
            self.__untransformed_image_file_entries_by_root_model_class: Dict[
                Type[Model],
                Dict[str, MarkdownDirectory.ImageFileEntry],
            ] = {}
            for image_file_entry in markdown_directory.image_file_entries:
                self.__untransformed_image_file_entries_by_root_model_class.setdefault(
                    self.__root_model_class(image_file_entry.model_type),
                    {},
                )[image_file_entry.model_id] = image_file_entry
            self.__untransformed_metadata_file_entries_by_root_model_class: Dict[
                Type[Model],
                List[MarkdownDirectory.MetadataFileEntry],
            ] = {}
            for metadata_file_entry in markdown_directory.metadata_file_entries:
                self.__untransformed_metadata_file_entries_by_root_model_class.setdefault(
                    self.__root_model_class(metadata_file_entry.model_type),
                    [],
                ).append(
                    metadata_file_entry
                )

        def __buffer_transformed_model(
            self,
            *,
            model_id: str,
            transformed_model: Model,
        ):
            if transformed_model.uri is not None:
                assert (
                    transformed_model.uri not in self.__transformed_models_by_uri
                ), transformed_model.uri
                self.__transformed_models_by_uri[
                    transformed_model.uri
                ] = transformed_model

            transformed_models_by_type = self.__transformed_models_by_class.setdefault(
                self.__root_model_class(transformed_model.__class__), {}
            )
            assert model_id not in transformed_models_by_type
            transformed_models_by_type[model_id] = transformed_model

            self.__transformed_models.append(transformed_model)

        def __call__(self) -> Tuple[Model, ...]:
            # Order is important
            self.__transform_collection_metadata_file_entries()
            self.__transform_work_metadata_file_entries()
            self.__transform_work_event_metadata_file_entries()
            self.__transform_other_metadata_file_entries()
            self.__transform_image_metadata_file_entries()
            self.__transform_image_file_entries()
            return tuple(self.__transformed_models)

        def __default_collection_uri(self, *, markdown_directory_name: str) -> URIRef:
            return self.__model_uri(
                model_class=CmsCollection,
                model_id=markdown_directory_name,
            )

        def __get_or_synthesize_default_collection(self) -> Collection:
            if self.__default_collection is None:
                model_id = self.__markdown_directory.name
                self.__default_collection = CmsCollection.builder(
                    title=self.__markdown_directory.name,
                    uri=self.__default_collection_uri(
                        markdown_directory_name=self.__markdown_directory.name
                    ),
                ).build()
                self.__buffer_transformed_model(
                    model_id=model_id,
                    transformed_model=self.__default_collection,
                )
                self.__logger.info("synthesized default collection %s", model_id)
            return self.__default_collection

        def __model_type_namespace(self, *, model_class: Type[Model]) -> Namespace:
            return Namespace(
                f"{self.__pipeline_namespace}{quote(spinalcase(self.__root_model_class(model_class).__name__))}:"
            )

        def __model_uri(self, *, model_class: Type[Model], model_id: str) -> URIRef:
            return self.__model_type_namespace(model_class=model_class)[quote(model_id)]

        @property
        def __pipeline_namespace(self) -> Namespace:
            return Namespace(f"urn:markdown:{self.__pipeline_id}:")

        def __root_model_class(self, model_class: Union[Type[Model], str]):
            if isinstance(model_class, str):
                return self.__root_model_classes_by_alias[model_class]
            else:
                return self.__root_model_classes_by_alias[model_class.__name__]

        def __set_resource_label(
            self,
            *,
            model_id: str,
            model_class: Type[Model],
            resource: Resource,
        ) -> None:
            label_property_uri = model_class.label_property_uri()
            if label_property_uri is None:
                return
            if resource.value(label_property_uri) is None:
                resource.add(
                    label_property_uri,
                    Literal(model_id),
                )

        def __transform_collection_metadata_file_entries(self) -> None:
            root_model_class = self.__root_model_class(Collection)
            for (
                metadata_file_entry
            ) in self.__untransformed_metadata_file_entries_by_root_model_class.pop(
                root_model_class, tuple()
            ):
                collection_resource = self.__transform_metadata_file_entry_to_resource(
                    metadata_file_entry=metadata_file_entry
                )

                self.__set_resource_label(
                    model_class=root_model_class,
                    model_id=metadata_file_entry.model_id,
                    resource=collection_resource,
                )

                collection: Collection = self.__transform_resource_to_model(
                    model_class=root_model_class,
                    model_resource=collection_resource,
                )  # type: ignore
                if self.__default_collection is None:
                    self.__default_collection = collection
                    self.__logger.debug(
                        "using first collection %s as the default collection",
                        self.__default_collection.uri,
                    )

                self.__buffer_transformed_model(
                    model_id=metadata_file_entry.model_id,
                    transformed_model=collection,
                )

        def __transform_image_metadata_file_entries(self) -> None:
            image_root_model_class = self.__root_model_class(Image)
            for (
                metadata_file_entry
            ) in self.__untransformed_metadata_file_entries_by_root_model_class.pop(
                image_root_model_class, tuple()
            ):
                image_resource = self.__transform_metadata_file_entry_to_resource(
                    metadata_file_entry=metadata_file_entry
                )

                if image_resource.value(FOAF.depicts) is None:
                    # If the .md image metadata has no depicts but its model_id corresponds with a model_id of another type,
                    # synthesize a depicts.
                    added_depicts = False
                    for (
                        model_class,
                        transformed_models_by_id,
                    ) in self.__transformed_models_by_class.items():
                        if model_class == image_root_model_class:
                            continue
                        transformed_model = transformed_models_by_id.get(
                            metadata_file_entry.model_id
                        )

                        if transformed_model is None or transformed_model.uri is None:
                            continue

                        image_resource.add(FOAF.depicts, transformed_model.uri)
                        self.__logger.debug(
                            "image markdown %s has no depicts statement but corresponds to the model %s, adding depicts statement",
                            metadata_file_entry.model_id,
                            transformed_model.uri,
                        )
                        added_depicts = True
                        break

                    if not added_depicts:
                        self.__logger.warning(
                            "image markdown %s has no depicts statement and does not correspond to another model",
                            metadata_file_entry.model_id,
                        )

                image = image_root_model_class.from_rdf(resource=image_resource)

                # If the .md image metadata has no src and there is a sibling image file (i.e., a .jpg) with the same model id (i.e., file stem) as the Markdown file,
                # use that image file as the src.
                if image.src is None:
                    image_file_entry = (
                        self.__untransformed_image_file_entries_by_root_model_class.get(
                            self.__root_model_class(metadata_file_entry.model_type),
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
            # will synthesize an Image that depicts some-collection's URI.
            # This implies that all other models must be transformed first.

            for (
                root_model_class,
                image_file_entries_by_model_id,
            ) in self.__untransformed_image_file_entries_by_root_model_class.items():
                transformed_models_of_class = self.__transformed_models_by_class.get(
                    root_model_class, {}
                )

                for (
                    model_id,
                    image_file_entry,
                ) in image_file_entries_by_model_id.items():
                    transformed_model = transformed_models_of_class.get(model_id)
                    if transformed_model is None or transformed_model.uri is None:
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
                    assert transformed_model.uri
                    self.__buffer_transformed_model(
                        model_id=image_file_entry.model_id,
                        transformed_model=CmsImage.builder(
                            depicts_uri=transformed_model.uri,
                            uri=self.__model_uri(
                                model_class=CmsImage,
                                model_id=image_file_entry.model_id,
                            ),
                        )
                        .set_src(
                            image_file_entry.path.as_uri(),
                        )
                        .build(),
                    )

        def __transform_metadata_file_entry_to_resource(
            self, metadata_file_entry: MarkdownDirectory.MetadataFileEntry
        ) -> Resource:
            root_model_class = self.__root_model_class(metadata_file_entry.model_type)

            graph = Graph()

            model_uri = self.__model_uri(
                model_class=root_model_class,
                model_id=metadata_file_entry.model_id,
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
                        json_ld_object["@id"] = str(model_uri)

                    json_ld_context = safe_dict_update(
                        root_model_class.json_ld_context(), self.__json_ld_context
                    )

                    graph.parse(
                        data=json_ld_object, context=json_ld_context, format="json-ld"
                    )
                else:
                    # Assume it's an RDF serialization
                    graph.parse(
                        data=metadata_file_entry.source,
                        format=metadata_file_entry.format,
                        publicID=model_uri,
                    )
            except Exception as e:
                raise ValueError(f"error deserializing {metadata_file_entry}") from e

            # graph_str = graph.serialize(format="turtle")
            # print(graph_str)

            uri_subjects = {
                subject for subject in graph.subjects() if isinstance(subject, URIRef)
            }
            if len(uri_subjects) == 1:
                resource = graph.resource(uri_subjects.pop())
            else:
                raise ValueError(
                    f"metadata file {metadata_file_entry.model_type}/{metadata_file_entry.model_id}.{metadata_file_entry.format} has {len(uri_subjects)} named subjects"
                )

            # expected_rdf_type = getattr(CMS, model_class.__name__)
            # actual_rdf_type = resource.value(RDF.type)
            # if actual_rdf_type is None:
            #     resource.add(RDF.type, expected_rdf_type)
            # else:
            #     if not isinstance(actual_rdf_type, Resource):
            #         raise ValueError(f"{metadata_file_entry} rdf:type is not a URI")
            #     if actual_rdf_type.identifier != expected_rdf_type:
            #         raise ValueError(
            #             f"{metadata_file_entry} rdf_type is {actual_rdf_type.identifier}, expected {expected_rdf_type}"
            #         )

            return resource

        def __transform_other_metadata_file_entries(self) -> None:
            image_root_model_class = self.__root_model_class(Image)
            for (
                root_model_class,
                metadata_file_entries,
            ) in self.__untransformed_metadata_file_entries_by_root_model_class.items():
                if root_model_class == image_root_model_class:
                    continue
                for metadata_file_entry in metadata_file_entries:
                    model_resource = self.__transform_metadata_file_entry_to_resource(
                        metadata_file_entry
                    )
                    self.__set_resource_label(
                        model_id=metadata_file_entry.model_id,
                        model_class=root_model_class,
                        resource=model_resource,
                    )
                    self.__buffer_transformed_model(
                        model_id=metadata_file_entry.model_id,
                        transformed_model=self.__transform_resource_to_model(
                            model_class=root_model_class,
                            model_resource=model_resource,
                        ),
                    )

        def __transform_resource_to_model(
            self, *, model_class: Type[Model], model_resource: Resource
        ) -> Model:
            return model_class.from_rdf(model_resource)

        def __transform_work_metadata_file_entries(
            self,
        ):
            root_model_class = self.__root_model_class(Work)
            for (
                metadata_file_entry
            ) in self.__untransformed_metadata_file_entries_by_root_model_class.pop(
                root_model_class, tuple()
            ):
                work_resource = self.__transform_metadata_file_entry_to_resource(
                    metadata_file_entry
                )
                self.__set_resource_label(
                    model_class=root_model_class,
                    model_id=metadata_file_entry.model_id,
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
                        model_class=root_model_class,
                        model_resource=work_resource,
                    ),
                )

        def __transform_work_event_metadata_file_entries(
            self,
        ):
            transformed_works_by_id = self.__transformed_models_by_class.get(
                self.__root_model_class(Work), {}
            )

            for model_class in (WorkClosing, WorkCreation, WorkOpening):
                root_model_class = self.__root_model_class(model_class)
                for (
                    metadata_file_entry
                ) in self.__untransformed_metadata_file_entries_by_root_model_class.pop(
                    root_model_class, tuple()
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
                            model_class=root_model_class,
                        ),
                    )

    def __call__(self, *, markdown_directory: MarkdownDirectory):  # type: ignore
        yield from self.__TransformInvocation(
            default_collection=self.__default_collection,
            logger=self.__logger,
            markdown_directory=markdown_directory,
            pipeline_id=self.__pipeline_id,
            root_model_classes_by_name=self.__root_model_classes_by_name,
        )()
