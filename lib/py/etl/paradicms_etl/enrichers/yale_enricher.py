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
from paradicms_etl.models.linked_art.linked_art_linguistic_object import (
    LinkedArtLinguisticObject,
)
from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.models.linked_art.linked_art_visual_item import LinkedArtVisualItem
from paradicms_etl.models.stub.stub_model import StubModel
from paradicms_etl.utils.file_cache import FileCache
from paradicms_etl.utils.get_json_ld_resource import get_json_ld_resource
from paradicms_etl.utils.match_url import match_url
from paradicms_etl.utils.skolemize import skolemize


class YaleEnricher:
    class _YaleEntityType(Enum):
        OBJECT = "object"

        def __str__(self):
            return self.value

    def __init__(self, *, cache_dir_path: Path):
        self.__file_cache = FileCache(cache_dir_path=cache_dir_path)
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        for model in models:
            for yale_entity_type in self._YaleEntityType:
                referenced_yale_entity_uris = self.__get_model_yale_entity_references(
                    yale_entity_type=yale_entity_type, model=model
                )
                if not referenced_yale_entity_uris:
                    yield model
                    continue

                referenced_yale_entity: LinkedArtModel
                for referenced_yale_entity_uri in referenced_yale_entity_uris:
                    for referenced_yale_entity in getattr(
                        self, f"_get_yale_{yale_entity_type}_entity"
                    )(referenced_yale_entity_uri):
                        assert isinstance(referenced_yale_entity, LinkedArtModel)

                        if isinstance(referenced_yale_entity, LinkedArtImagesMixin):
                            # Don't use the has_representation images that came with the entity's RDF, use the ones from the IIIF presentation API manifest
                            referenced_yale_entity_replacer = (
                                referenced_yale_entity.replacer()
                            )

                            for image in self.__get_yale_entity_images(
                                referenced_yale_entity
                            ):
                                yield image

                                referenced_yale_entity_replacer.add_image(
                                    LinkedArtVisualItem.builder()
                                    .set_digitally_shown_by(image.uri)
                                    .build()
                                )
                            yield referenced_yale_entity_replacer.build()
                        else:
                            yield referenced_yale_entity

            if not isinstance(model, StubModel):
                # A StubModel is "replaced"
                yield model

    def __get_yale_entity_images(self, yale_entity: LinkedArtModel) -> Iterable[Image]:
        for is_subject_of_model in yale_entity.is_subject_of:
            if not isinstance(is_subject_of_model, LinkedArtLinguisticObject):
                continue
            digitally_carried_by_model = is_subject_of_model.digitally_carried_by
            if digitally_carried_by_model is None:
                continue
            if (
                URIRef("http://iiif.io/api/presentation/2/context.json")
                not in digitally_carried_by_model.conforms_to
            ):
                continue
            if digitally_carried_by_model.access_point is None:
                self.__logger.warning(
                    "IIIF presentation API v2 manifest DigitalObject has no access_point"
                )
                continue
            yield from IiifPresentationApiV2Manifest.from_rdf(
                get_json_ld_resource(
                    file_cache=self.__file_cache,
                    json_ld_resource_uri=digitally_carried_by_model.access_point,
                )
            ).images
            return
        self.__logger.warning(
            "entity %s is not associated with an IIIF manifest", yale_entity.uri
        )
        return ()

    def _get_yale_object_entity(self, yale_entity_uri: URIRef) -> Iterable[Model]:
        resource = get_json_ld_resource(
            file_cache=self.__file_cache, json_ld_resource_uri=yale_entity_uri
        )
        skolemized_resource = skolemize(resource.graph).resource(resource.identifier)
        rdf_type = skolemized_resource.value(RDF.type)
        if rdf_type.identifier == LinkedArtHumanMadeObject.rdf_type_uri():
            yield LinkedArtHumanMadeObject.from_rdf(skolemized_resource)
        else:
            raise NotImplementedError(rdf_type)

    @staticmethod
    def __get_model_yale_entity_references(
        *, yale_entity_type: _YaleEntityType, model: Model
    ) -> Tuple[URIRef, ...]:
        """
        Get a list of Wikidata entity URIs referenced by the given model.
        """

        def is_yale_entity_uri(uri: URIRef):
            return match_url(
                uri,
                match_netloc="lux.collections.yale.edu",
                match_path_prefix=f"/data/{yale_entity_type}/",
            )

        if isinstance(model, StubModel):
            if is_yale_entity_uri(model.uri):
                return (model.uri,)
            else:
                return ()
        else:
            return tuple(
                same_as_uri
                for same_as_uri in model.same_as_uris
                if is_yale_entity_uri(same_as_uri)
            )
