import json
import logging
from logging import Logger
from typing import Dict, Iterable, List, Optional, Set, Tuple, Type

import yaml
from rdflib import URIRef
from yaml import FullLoader

from paradicms_etl.extractors.directory_extractor import DirectoryExtractor
from paradicms_etl.model import Model
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.root_model_classes_by_name import (
    ROOT_MODEL_CLASSES_BY_NAME,
)
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.work import Work
from paradicms_etl.utils.json_object_to_model_transformer import (
    JsonObjectToModelTransformer,
)
from paradicms_etl.utils.markdown_to_dict_transformer import (
    MarkdownToDictTransformer,
)
from paradicms_etl.utils.root_model_classes_by_alias import root_model_classes_by_alias


class DirectoryTransformer:
    """
    Transform a directory of files to a set of models.

    See DirectoryExtractor for the expected directory structure.

    See the user documentation for information about the transformation process.
    """

    def __init__(
        self,
        *,
        pipeline_id: str,
        root_model_classes_by_name: Optional[Dict[str, Type[Model]]] = None,
    ):
        self.__logger = logging.getLogger(__name__)
        self.__pipeline_id = pipeline_id
        if root_model_classes_by_name is None:
            root_model_classes_by_name = ROOT_MODEL_CLASSES_BY_NAME
        self.__root_model_classes_by_name = root_model_classes_by_name

    # Rather than managing the state of the transform as variable assignments in a particular order,
    # create a class instance per transform invocation.
    # The state includes things like the default collection, which is synthesized if needed.
    class __TransformInvocation:
        __METADATA_FILE_TO_JSON_OBJECT_TRANSFORMERS = {
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
            directory_name: str,
            image_file_entries: Tuple[DirectoryExtractor.ImageFileEntry, ...],
            metadata_file_entries: Tuple[DirectoryExtractor.MetadataFileEntry, ...],
            logger: Logger,
            pipeline_id: str,
            root_model_classes_by_name: Dict[str, Type[Model]],
        ):
            self.__directory_name = directory_name
            self.__image_file_entries = image_file_entries
            self.__json_object_to_model_transformer = JsonObjectToModelTransformer(
                pipeline_id=pipeline_id,
                root_model_classes_by_name=root_model_classes_by_name,
            )
            self.__logger = logger
            self.__root_model_classes_by_alias = root_model_classes_by_alias(
                root_model_classes_by_name
            )

            self.__referenced_image_uris: Set[URIRef] = set()
            self.__transformed_models_by_class: Dict[Type, Dict[str, Model]] = (
                {}
            )  # Then by id
            self.__transformed_model_uris: Set[URIRef] = set()
            self.__untransformed_metadata_file_entries_by_root_model_class: Dict[
                Type[Model],
                List[DirectoryExtractor.MetadataFileEntry],
            ] = {}
            for metadata_file_entry in metadata_file_entries:
                try:
                    root_model_class = self.__root_model_class_by_alias(
                        metadata_file_entry.model_type
                    )
                except KeyError:
                    self.__logger.warning(
                        "unknown model type %s for model file %s",
                        metadata_file_entry.model_type,
                        metadata_file_entry.path,
                    )
                    continue
                self.__untransformed_metadata_file_entries_by_root_model_class.setdefault(
                    root_model_class,
                    [],
                ).append(
                    metadata_file_entry
                )

        def __add_implicit_images(self) -> None:
            """
            For Image's that are not explicitly referenced, add implicit references from Collection, Work, and other
            image-taking instances that have the same model id.
            """

            transformed_images_by_id = {}
            for image_root_model_class in self.__root_model_classes_by_interface_type(
                Image
            ):
                transformed_images_by_id.update(
                    self.__transformed_models_by_class.get(image_root_model_class, {})
                )
            if not transformed_images_by_id:
                return

            for (
                transformed_model_class,
                transformed_models_by_id,
            ) in self.__transformed_models_by_class.items():
                if issubclass(transformed_model_class, Image):
                    continue
                for transformed_model_id in tuple(transformed_models_by_id.keys()):
                    transformed_model = transformed_models_by_id[transformed_model_id]
                    if not isinstance(transformed_model, ImagesMixin):
                        continue
                    image_uris = transformed_model.image_uris
                    if image_uris:
                        continue
                    transformed_image = transformed_images_by_id.get(
                        transformed_model_id
                    )
                    if transformed_image is None:
                        continue
                    if transformed_image.uri in self.__referenced_image_uris:
                        continue
                    transformed_models_by_id[transformed_model_id] = (
                        transformed_model.replacer()  # type: ignore
                        .add_image(transformed_image.uri)
                        .build()
                    )
                    self.__referenced_image_uris.add(transformed_image.uri)

        def __buffer_transformed_model(
            self,
            *,
            model_id: str,
            transformed_model: Model,
        ):
            assert (
                transformed_model.uri not in self.__transformed_model_uris
            ), transformed_model.uri
            self.__transformed_model_uris.add(transformed_model.uri)

            transformed_models_by_type = self.__transformed_models_by_class.setdefault(
                self.__root_model_class_by_type(transformed_model.__class__), {}
            )
            assert model_id not in transformed_models_by_type
            transformed_models_by_type[model_id] = transformed_model

        def __call__(self) -> Iterable[Model]:
            # Order is important
            self.__transform_image_metadata_file_entries()
            self.__transform_work_metadata_file_entries()
            self.__transform_collection_metadata_file_entries()
            self.__transform_other_metadata_file_entries()
            self.__add_implicit_images()
            for transformed_models_by_id in self.__transformed_models_by_class.values():
                yield from transformed_models_by_id.values()

        def __root_model_class_by_alias(self, model_class: str) -> type[Model]:
            return self.__root_model_classes_by_alias[model_class]

        def __root_model_class_by_type(self, model_class: Type[Model]) -> type[Model]:
            return self.__root_model_classes_by_alias[model_class.__name__]

        def __root_model_classes_by_interface_type(
            self, model_interface
        ) -> tuple[type[Model], ...]:
            root_model_classes: Set[Type[Model]] = set()
            for root_model_class in self.__root_model_classes_by_alias.values():
                if issubclass(root_model_class, model_interface):
                    root_model_classes.add(root_model_class)
            return tuple(root_model_classes)

        def __transform_collection_metadata_file_entries(self) -> None:
            transformed_collections_by_id: dict[str, Collection] = {}
            for (
                collection_root_model_class
            ) in self.__root_model_classes_by_interface_type(Collection):
                for (
                    metadata_file_entry
                ) in self.__untransformed_metadata_file_entries_by_root_model_class.pop(
                    collection_root_model_class, tuple()
                ):
                    try:
                        collection: Collection = self.__transform_metadata_file_entry_to_model(  # type: ignore
                            metadata_file_entry=metadata_file_entry
                        )  # type: ignore
                    except ValueError as e:
                        self.__logger.warning(
                            "exception transforming %s: %s", metadata_file_entry, str(e)
                        )
                        continue

                    transformed_collections_by_id[metadata_file_entry.model_id] = (
                        collection
                    )

            transformed_works_by_id: Dict[str, Work] = {}
            for work_root_model_class in self.__root_model_classes_by_interface_type(
                Work
            ):
                transformed_works_by_id.update(
                    self.__transformed_models_by_class.get(
                        work_root_model_class, {}  # type: ignore
                    )
                )  # type: ignore
            if not transformed_works_by_id:
                return

            if not transformed_collections_by_id:
                # No collections transformed
                # Synthesize a default collection and put all the works in it
                default_collection_model_id = self.__directory_name
                transformed_collections_by_id[default_collection_model_id] = (
                    SchemaCollection.builder(
                        name=self.__directory_name,
                        uri=self.__json_object_to_model_transformer.model_uri(
                            model_class=SchemaCollection,
                            model_id=default_collection_model_id,
                        ),
                    ).build()
                )
                self.__logger.info(
                    "synthesized default collection %s", default_collection_model_id
                )

            if len(transformed_collections_by_id) == 1:
                transformed_collection_model_id, transformed_collection = tuple(
                    transformed_collections_by_id.items()
                )[0]
                if not transformed_collection.work_uris:
                    # Put all the works in the single collection
                    transformed_collection_replacer = transformed_collection.replacer()
                    for work in transformed_works_by_id.values():
                        transformed_collection_replacer.add_work(work.uri)
                    transformed_collections_by_id[transformed_collection_model_id] = (
                        transformed_collection_replacer.build()
                    )

            for (
                transformed_collection_model_id,
                transformed_collection,
            ) in transformed_collections_by_id.items():
                self.__buffer_transformed_model(
                    model_id=transformed_collection_model_id,
                    transformed_model=transformed_collection,
                )

        def __transform_image_metadata_file_entries(self) -> None:
            for image_root_model_class in self.__root_model_classes_by_interface_type(
                Image
            ):
                for (
                    metadata_file_entry
                ) in self.__untransformed_metadata_file_entries_by_root_model_class.pop(
                    image_root_model_class, tuple()
                ):
                    try:
                        image: Image = self.__transform_metadata_file_entry_to_model(
                            metadata_file_entry=metadata_file_entry
                        )  # type: ignore
                    except ValueError as e:
                        self.__logger.warning(
                            "exception transforming %s: %s", metadata_file_entry, str(e)
                        )
                        continue

                    # If the image metadata has no src and there is a sibling image file (i.e., a .jpg) with the same model id (i.e., file stem) as the metadata file,
                    # use that image file as the src.
                    if image.src is None:
                        for image_file_entry in self.__image_file_entries:
                            if (
                                image_file_entry.model_type
                                == metadata_file_entry.model_type
                                and image_file_entry.model_id
                                == metadata_file_entry.model_id
                            ):
                                image = (
                                    image.replacer()
                                    .set_src(image_file_entry.path.as_uri())
                                    .build()
                                )
                                break

                    self.__buffer_transformed_model(
                        model_id=metadata_file_entry.model_id,
                        transformed_model=image,
                    )

        def __transform_metadata_file_entry_to_model(
            self, metadata_file_entry: DirectoryExtractor.MetadataFileEntry
        ) -> Model:
            if len(metadata_file_entry.source) == 0:
                raise ValueError(
                    f"empty metadata file: {metadata_file_entry.path}",
                    metadata_file_entry.path,
                )
            elif (
                metadata_file_entry.format
                not in self.__METADATA_FILE_TO_JSON_OBJECT_TRANSFORMERS
            ):
                raise ValueError(
                    f"unknown metadata file format ({metadata_file_entry.format}): {metadata_file_entry.path}"
                )

            try:
                json_object = self.__METADATA_FILE_TO_JSON_OBJECT_TRANSFORMERS[
                    metadata_file_entry.format
                ](metadata_file_entry)
            except Exception as e:
                raise ValueError(f"error deserializing {metadata_file_entry}") from e

            try:
                model = self.__json_object_to_model_transformer(
                    json_object=json_object,
                    model_class=self.__root_model_class_by_alias(
                        metadata_file_entry.model_type
                    ),
                    model_id=metadata_file_entry.model_id,
                )
            except ValueError as e:
                raise ValueError(f"error deserializing {metadata_file_entry}") from e

            if isinstance(model, Image):
                for image_uri in model.thumbnail_uris:
                    self.__referenced_image_uris.add(image_uri)
            elif isinstance(model, ImagesMixin):
                for image_uri in model.image_uris:
                    self.__referenced_image_uris.add(image_uri)

            return model

        def __transform_other_metadata_file_entries(self) -> None:
            image_root_model_classes = self.__root_model_classes_by_interface_type(
                Image
            )
            for (
                root_model_class,
                metadata_file_entries,
            ) in self.__untransformed_metadata_file_entries_by_root_model_class.items():
                if root_model_class in image_root_model_classes:
                    continue
                for metadata_file_entry in metadata_file_entries:
                    try:
                        self.__buffer_transformed_model(
                            model_id=metadata_file_entry.model_id,
                            transformed_model=self.__transform_metadata_file_entry_to_model(
                                metadata_file_entry
                            ),
                        )
                    except ValueError as e:
                        self.__logger.warning(
                            "exception transforming %s: %s", metadata_file_entry, str(e)
                        )
                        continue

        def __transform_work_metadata_file_entries(
            self,
        ) -> None:
            for work_root_model_class in self.__root_model_classes_by_interface_type(
                Work
            ):
                for (
                    metadata_file_entry
                ) in self.__untransformed_metadata_file_entries_by_root_model_class.pop(
                    work_root_model_class, tuple()
                ):
                    try:
                        work: Work = self.__transform_metadata_file_entry_to_model(  # type: ignore
                            metadata_file_entry
                        )
                    except ValueError as e:
                        self.__logger.warning(
                            "exception transforming %s: %s", metadata_file_entry, str(e)
                        )
                        continue

                    self.__buffer_transformed_model(
                        model_id=metadata_file_entry.model_id,
                        transformed_model=work,
                    )

    def __call__(
        self,
        *,
        directory_name: str,
        image_file_entries: Tuple[DirectoryExtractor.ImageFileEntry, ...],
        metadata_file_entries: Tuple[DirectoryExtractor.MetadataFileEntry, ...],
    ):
        yield from self.__TransformInvocation(
            directory_name=directory_name,
            image_file_entries=image_file_entries,
            metadata_file_entries=metadata_file_entries,
            logger=self.__logger,
            pipeline_id=self.__pipeline_id,
            root_model_classes_by_name=self.__root_model_classes_by_name,
        )()
