import logging
from enum import Enum
from pathlib import Path
from typing import Iterable, Tuple, Set
from urllib.parse import urlparse

from rdflib import URIRef, RDF

from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.iiif.iiif_presentation_api_manifest import (
    IiifPresentationApiManifest,
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
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.stub.stub_model import StubModel
from paradicms_etl.utils.file_cache import FileCache
from paradicms_etl.utils.get_json_ld_resource import get_json_ld_resource


class GettyEnricher:
    class _GettyEntityType(Enum):
        OBJECT = "object"

        def __str__(self):
            return self.value

    def __init__(self, *, cache_dir_path: Path):
        self.__file_cache = FileCache(cache_dir_path=cache_dir_path)
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        referenced_rights_statement_uris: Set[URIRef] = set()
        referenced_license_uris: Set[URIRef] = set()

        def __add_rights_references(rights: RightsMixin):
            for license_uri in rights.licenses:
                if isinstance(license_uri, URIRef):
                    referenced_license_uris.add(license_uri)

            for rights_statement_uri in rights.rights_statements:
                if isinstance(rights_statement_uri, URIRef):
                    referenced_rights_statement_uris.add(rights_statement_uri)

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
                                __add_rights_references(image)

                                referenced_getty_entity_replacer.add_image(
                                    LinkedArtVisualItem.builder()
                                    .set_digitally_shown_by(image.uri)
                                    .build()
                                )
                            yield referenced_getty_entity_replacer.build()
                        else:
                            yield referenced_getty_entity

                        if isinstance(referenced_getty_entity, RightsMixin):
                            __add_rights_references(referenced_getty_entity)

            if not isinstance(model, StubModel):
                # A StubModel is "replaced" by the Wikidata entity model
                yield model

        available_license_uris = CreativeCommonsLicenses.by_uri()
        for license_uri in referenced_license_uris:
            yield available_license_uris[license_uri]

        available_rights_statement_uris = (
            RightsStatementsDotOrgRightsStatements.by_uri()
        )
        for rights_statement_uri in referenced_rights_statement_uris:
            yield available_rights_statement_uris[rights_statement_uri]

    def __get_getty_entity_images(
        self, getty_entity: LinkedArtModel
    ) -> Iterable[Image]:
        for is_subject_of_model in getty_entity.p129i_is_subject_of:
            if not isinstance(is_subject_of_model, LinkedArtInformationObject):
                continue
            if (
                URIRef("https://data.getty.edu/local/thesaurus/iiif-manifest")
                not in is_subject_of_model.p2_has_type
            ):
                continue
            yield from self.__get_iiif_presentation_api_manifest_images(
                is_subject_of_model.uri
            )
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

    def __get_iiif_presentation_api_manifest_images(
        self, iiif_presentation_api_manifest_uri: URIRef
    ) -> Iterable[Image]:
        manifest = IiifPresentationApiManifest.from_rdf(
            get_json_ld_resource(
                file_cache=self.__file_cache,
                json_ld_resource_uri=iiif_presentation_api_manifest_uri,
            )
        )
        attribution_label = manifest.attribution_label

        for sequence in manifest.has_sequences:
            for canvas in sequence.has_canvases:
                for image_annotation in canvas.has_image_annotations:
                    image = image_annotation.has_body
                    assert isinstance(image, Image)

                    # Propagate the rights and attribution label to the image RDF
                    assert not image.rights_holders
                    assert not image.rights_statements
                    image_replacer = image.replacer()
                    image_replacer.add_rights_holder(attribution_label)
                    image_replacer.add_rights_statement(canvas.rights)
                    yield image_replacer.build()

    @staticmethod
    def __get_model_getty_entity_references(
        *, getty_entity_type: _GettyEntityType, model: Model
    ) -> Tuple[URIRef, ...]:
        """
        Get a list of Wikidata entity URIs referenced by the given model.
        """

        def is_getty_entity_uri(uri: URIRef):
            parsed_uri = urlparse(str(uri))
            if parsed_uri.scheme.lower() not in ("http", "https"):
                return False
            if parsed_uri.netloc.lower() != "data.getty.edu":
                return False
            path_prefix = f"/museum/collection/{getty_entity_type}/"
            if not parsed_uri.path.lower().startswith(path_prefix) or len(
                parsed_uri.path
            ) == len(path_prefix):
                return False
            return True

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
