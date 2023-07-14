import json
import logging
from enum import Enum
from pathlib import Path
from typing import Iterable, Tuple
from urllib.parse import urlparse

from rdflib import URIRef, Graph, RDF
from rdflib.resource import Resource

from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.linked_art.linked_art_human_made_object import (
    LinkedArtHumanMadeObject,
)
from paradicms_etl.models.linked_art.linked_art_images_mixin import LinkedArtImagesMixin
from paradicms_etl.models.linked_art.linked_art_rights_mixin import LinkedArtRightsMixin
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.stub.stub_model import StubModel
from paradicms_etl.utils.file_cache import FileCache
from paradicms_etl.utils.resolve_json_ld_contexts import resolve_json_ld_contexts


class GettyEnricher:
    class _GettyEntityType(Enum):
        OBJECT = "object"

        def __str__(self):
            return self.value

    def __init__(self, *, cache_dir_path: Path):
        self.__available_licenses_by_uri = CreativeCommonsLicenses.by_uri()
        self.__available_rights_statements_by_uri = (
            RightsStatementsDotOrgRightsStatements.by_uri()
        )
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

                for referenced_getty_entity_uri in referenced_getty_entity_uris:
                    for referenced_getty_entity in getattr(
                        self, f"_get_getty_{getty_entity_type}_entity"
                    )(referenced_getty_entity_uri):
                        yield referenced_getty_entity
                        if isinstance(referenced_getty_entity, LinkedArtImagesMixin):
                            yield from referenced_getty_entity.representations
                        if isinstance(referenced_getty_entity, LinkedArtRightsMixin):
                            for license_uri in referenced_getty_entity.licenses:
                                yield self.__available_licenses_by_uri[license_uri]
                            for (
                                rights_statement_uri
                            ) in referenced_getty_entity.rights_statements:
                                yield self.__available_rights_statements_by_uri[
                                    rights_statement_uri
                                ]

            if not isinstance(model, StubModel):
                # A StubModel is "replaced" by the Wikidata entity model
                yield model

    def __get_getty_entity_resource(self, getty_entity_uri: URIRef) -> Resource:
        with open(
            self.__file_cache.get_file(getty_entity_uri, file_extension=".jsonld")
        ) as json_ld_file:
            json_ld = json.load(json_ld_file)
            assert json_ld["id"] == str(getty_entity_uri)
            resolved_json_ld = resolve_json_ld_contexts(
                file_cache=self.__file_cache, json_ld=json_ld
            )
            graph = Graph()
            graph.parse(
                data=resolved_json_ld,  # type: ignore
                format="json-ld",
            )
            return graph.resource(getty_entity_uri)

    def _get_getty_object_entity(self, getty_entity_uri: URIRef) -> Iterable[Model]:
        resource = self.__get_getty_entity_resource(getty_entity_uri)
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
