import logging
from enum import Enum
from pathlib import Path
from typing import Iterable, Tuple

from rdflib import URIRef, RDF

from paradicms_etl.model import Model
from paradicms_etl.models.iiif.iiif_presentation_api_v2_manifest import (
    IiifPresentationApiV2Manifest,
)
from paradicms_etl.models.image import Image
from paradicms_etl.models.linked_art.linked_art_human_made_object import (
    LinkedArtHumanMadeObject,
)
from paradicms_etl.models.linked_art.linked_art_images_mixin import LinkedArtImagesMixin
from paradicms_etl.models.linked_art.linked_art_information_object import (
    LinkedArtInformationObject,
)
from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.models.linked_art.linked_art_visual_item import LinkedArtVisualItem
from paradicms_etl.models.stub.stub_model import StubModel
from paradicms_etl.utils.file_cache import FileCache
from paradicms_etl.utils.get_json_ld_resource import get_json_ld_resource
from paradicms_etl.utils.match_url import match_url


class GettyEnricher:
    class _GettyEntityType(Enum):
        OBJECT = "object"

        def __str__(self):
            return self.value

    def __init__(self, *, cache_dir_path: Path):
        self.__file_cache = FileCache(cache_dir_path=cache_dir_path)
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        for model in models:
            for getty_entity_type in self._GettyEntityType:
                referenced_getty_entity_uris = self.__get_model_getty_entity_references(
                    getty_entity_type=getty_entity_type, model=model
                )
                if not referenced_getty_entity_uris:
                    yield model
                    continue

                referenced_getty_entity: LinkedArtModel
                for referenced_getty_entity_uri in referenced_getty_entity_uris:
                    for referenced_getty_entity in getattr(
                        self, f"_get_getty_{getty_entity_type}_entity"
                    )(referenced_getty_entity_uri):
                        assert isinstance(referenced_getty_entity, LinkedArtModel)

                        if isinstance(referenced_getty_entity, LinkedArtImagesMixin):
                            # Don't use the has_representation images that came with the entity's RDF, use the ones from the IIIF presentation API manifest
                            referenced_getty_entity_replacer = (
                                referenced_getty_entity.replacer()
                            )

                            for image in self.__get_getty_entity_images(
                                referenced_getty_entity
                            ):
                                yield image

                                referenced_getty_entity_replacer.add_image(
                                    LinkedArtVisualItem.builder()
                                    .set_digitally_shown_by(image.uri)
                                    .build()
                                )
                            yield referenced_getty_entity_replacer.build()
                        else:
                            yield referenced_getty_entity

            if not isinstance(model, StubModel):
                # A StubModel is "replaced" by the Wikidata entity model
                yield model

    def __get_getty_entity_images(
        self, getty_entity: LinkedArtModel
    ) -> Iterable[Image]:
        for is_subject_of_model in getty_entity.is_subject_of:
            if not isinstance(is_subject_of_model, LinkedArtInformationObject):
                continue
            if (
                URIRef("https://data.getty.edu/local/thesaurus/iiif-manifest")
                not in is_subject_of_model.has_type
            ):
                continue
            yield from IiifPresentationApiV2Manifest.from_rdf(
                get_json_ld_resource(
                    file_cache=self.__file_cache,
                    json_ld_resource_uri=is_subject_of_model.uri,
                )
            ).images
            return
        self.__logger.warning(
            "entity %s is not associated with an IIIF manifest", getty_entity.uri
        )
        return ()

    def _get_getty_object_entity(self, getty_entity_uri: URIRef) -> Iterable[Model]:
        resource = get_json_ld_resource(
            file_cache=self.__file_cache, json_ld_resource_uri=getty_entity_uri
        )
        rdf_type = resource.value(RDF.type)
        if rdf_type.identifier == LinkedArtHumanMadeObject.rdf_type_uri():
            yield LinkedArtHumanMadeObject.from_rdf(resource)
        else:
            raise NotImplementedError(rdf_type)

    @staticmethod
    def __get_model_getty_entity_references(
        *, getty_entity_type: _GettyEntityType, model: Model
    ) -> Tuple[URIRef, ...]:
        """
        Get a list of Wikidata entity URIs referenced by the given model.
        """

        def is_getty_entity_uri(uri: URIRef):
            return match_url(
                uri,
                match_netloc="data.getty.edu",
                match_path_prefix=f"/museum/collection/{getty_entity_type}/",
            )

        if isinstance(model, StubModel):
            if is_getty_entity_uri(model.uri):
                return (model.uri,)
            else:
                return ()
        else:
            return tuple(
                same_as_uri
                for same_as_uri in model.same_as_uris
                if is_getty_entity_uri(same_as_uri)
            )
