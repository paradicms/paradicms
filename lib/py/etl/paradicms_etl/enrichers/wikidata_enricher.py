import logging
from pathlib import Path
from typing import Iterable, Set, Tuple, List, Dict, Sequence

from rdflib import Graph, URIRef

from paradicms_etl.extractors.wikidata_entity_extractor import WikidataEntityExtractor
from paradicms_etl.model import Model
from paradicms_etl.models.cms.cms_image import CmsImage
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.image import Image
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.wikibase.wikibase_item import WikibaseItem
from paradicms_etl.models.wikibase.wikibase_items import WikibaseItems
from paradicms_etl.namespaces import WDT
from paradicms_etl.utils.canonicalize_wikidata_entity_uri import (
    canonicalize_wikidata_entity_uri,
)


class WikidataEnricher:
    __WIKIDATA_ENTITY_BASE_URI = "http://www.wikidata.org/entity/"

    def __init__(self, *, cache_dir_path: Path):
        self.__cache_dir_path = cache_dir_path
        self.__cached_wikidata_entities_without_related_by_uri: Dict[
            URIRef, WikibaseItem
        ] = {}
        self.__cached_wikidata_entities_with_related_by_uri: Dict[
            URIRef, WikibaseItem
        ] = {}
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        yielded_wikidata_rights_models = False
        yielded_wikidata_entity_uris: Set[URIRef] = set()
        for model in models:
            referenced_wikidata_entity_uris = (
                self.__get_model_wikidata_entity_references(model)
            )
            for wikidata_entity_uri in referenced_wikidata_entity_uris:
                if wikidata_entity_uri in yielded_wikidata_entity_uris:
                    continue
                wikidata_entity = self.__get_wikidata_entity_with_related(
                    wikidata_entity_uri
                )
                yield wikidata_entity
                yielded_wikidata_entity_uris.add(wikidata_entity_uri)
                if not yielded_wikidata_rights_models:
                    yield CreativeCommonsLicenses.BY_SA_3_0
                    yield RightsStatementsDotOrgRightsStatements.InC
                    yielded_wikidata_rights_models = True
                yield from self.__get_wikidata_entity_images(wikidata_entity)

            yield model

    def __get_model_wikidata_entity_references(
        self, model: Model
    ) -> Tuple[URIRef, ...]:
        """
        Get a list of Wikidata entity URIs referenced by the given model.
        """
        wikidata_entity_uris: List[URIRef] = []
        for same_as_uri in model.same_as_uris:
            try:
                wikidata_entity_uris.append(
                    canonicalize_wikidata_entity_uri(same_as_uri)
                )
            except ValueError:
                continue
        return tuple(wikidata_entity_uris)

    @staticmethod
    def __get_wikidata_entity_images(wikidata_entity: WikibaseItem) -> Iterable[Image]:
        yielded_image_uris: Set[URIRef] = set()
        for statement in wikidata_entity.statements_by_property_label.get("image", []):
            assert isinstance(statement.value, URIRef)
            image_uri = statement.value
            if image_uri in yielded_image_uris:
                continue
            yield CmsImage.builder(uri=image_uri).build()
            yielded_image_uris.add(image_uri)

    def __get_wikidata_entity_with_related(
        self, root_wikidata_entity_uri: URIRef
    ) -> WikibaseItem:
        """
        Get a Wikidata entity as well as all of its related entities in a single Graph.

        :param root_wikidata_entity_uri:
        :return: WikibaseItem corresponding to the given entity id, backed by a Graph with all of its related entities
        """

        related_wikidata_entities_by_uri: Dict[URIRef, WikibaseItem] = {}

        def resolve_related_wikidata_entities(
            resolving_wikidata_entity_uris: Set[URIRef], wikidata_entity: WikibaseItem
        ) -> None:
            """
            Recursive function to resolve related (instance of, subclass of, same as) Wikidata entities.
            :param resolving_wikidata_entity_uris: set of Wikidata entity id's already involved in this resolution, to avoid infinite recursion
            :param wikidata_entity: resolve Wikidata entities related to this entity
            :return:
            """

            if wikidata_entity.uri in resolving_wikidata_entity_uris:
                # It's already somewhere in the stack
                return
            resolving_wikidata_entity_uris.add(wikidata_entity.uri)
            self.__logger.debug(
                "resolving Wikidata entities related to %s", wikidata_entity.uri
            )

            for property_label in ("same as", "subclass of", "instance of"):
                related_wikidata_entity_uris: Sequence[URIRef]
                if property_label == "same as":
                    related_wikidata_entity_uris = wikidata_entity.same_as_uris
                else:
                    related_wikidata_entity_uris = []
                    for statement in wikidata_entity.statements_by_property_label.get(
                        property_label, []
                    ):
                        assert isinstance(statement.value, URIRef)
                        related_wikidata_entity_uris.append(statement.value)

                if len(related_wikidata_entity_uris) == 0:
                    continue

                for related_wikidata_entity_uri in related_wikidata_entity_uris:
                    self.__logger.debug(
                        "%s %s %s",
                        wikidata_entity.uri,
                        property_label,
                        related_wikidata_entity_uri,
                    )
                    related_wikidata_entity = related_wikidata_entities_by_uri.get(
                        related_wikidata_entity_uri, None
                    )
                    if related_wikidata_entity is not None:
                        self.__logger.debug("related hit", related_wikidata_entity_uri)
                    else:
                        self.__logger.debug("related miss", related_wikidata_entity_uri)
                        related_wikidata_entities_by_uri[
                            related_wikidata_entity_uri
                        ] = (
                            related_wikidata_entity
                        ) = self.__get_wikidata_entity_without_related(
                            wikidata_entity_uri=related_wikidata_entity_uri
                        )

                    resolve_related_wikidata_entities(
                        resolving_wikidata_entity_uris=resolving_wikidata_entity_uris,
                        wikidata_entity=related_wikidata_entity,
                    )
                # Only consider one type of related entities per resolve
                # same as
                # OR
                # subclass of
                # OR
                # instance of
                # Only one will be relevant. We don't care what a class is an instance of, for example.
                return

        root_wikidata_entity = self.__get_wikidata_entity_without_related(
            root_wikidata_entity_uri
        )
        related_wikidata_entities_by_uri[
            root_wikidata_entity_uri
        ] = root_wikidata_entity
        resolve_related_wikidata_entities(
            resolving_wikidata_entity_uris=set(), wikidata_entity=root_wikidata_entity
        )

        # Combine all the related entities in one graph
        combined_graph = Graph()
        for related_wikidata_entity in related_wikidata_entities_by_uri.values():
            if related_wikidata_entity.uri == root_wikidata_entity.uri:
                related_wikidata_entity.to_concise_rdf(graph=combined_graph)
            else:
                related_wikidata_entity.to_type_rdf(
                    graph=combined_graph,
                    instance_of_property_uri=WDT["P31"],
                    subclass_of_property_uri=WDT["P279"],
                )
        combined_wikidata_items = WikibaseItems.from_rdf(
            graph=combined_graph, uris=tuple(related_wikidata_entities_by_uri.keys())
        )
        # Return the root entity backed by the combined graph
        return next(
            wikidata_item
            for wikidata_item in combined_wikidata_items
            if wikidata_item.uri == root_wikidata_entity.uri
        )

    def __get_wikidata_entity_without_related(
        self, wikidata_entity_uri: URIRef
    ) -> WikibaseItem:
        """
        Get a single Wikidata entity by its id.
        """

        cached_wikidata_entity = (
            self.__cached_wikidata_entities_without_related_by_uri.get(
                wikidata_entity_uri
            )
        )
        if cached_wikidata_entity is not None:
            return cached_wikidata_entity

        graph = WikidataEntityExtractor(
            cache_dir_path=self.__cache_dir_path,
            entity_uris=(wikidata_entity_uri,),
        )(force=False)["graph"]
        extracted_wikidata_items = WikibaseItems.from_rdf(
            graph=graph,
            uris=(wikidata_entity_uri,),
        )
        assert len(extracted_wikidata_items) == 1
        extracted_wikidata_item = extracted_wikidata_items[0]
        self.__cached_wikidata_entities_without_related_by_uri[
            wikidata_entity_uri
        ] = extracted_wikidata_item
        return extracted_wikidata_item
