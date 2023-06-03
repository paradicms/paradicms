import logging
from pathlib import Path
from typing import Iterable, Set, Tuple, List, Dict, Sequence
from urllib.parse import urlparse

from rdflib import Graph, URIRef, DCTERMS, OWL
from rdflib.resource import Resource

from paradicms_etl.extractors.wikidata_entity_extractor import WikidataEntityExtractor
from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.wikibase.wikibase_item import WikibaseItem
from paradicms_etl.namespaces import WDT


class WikidataEnricher:
    __WIKIDATA_ENTITY_BASE_URI = "http://www.wikidata.org/entity/"

    def __init__(self, *, cache_dir_path: Path):
        self.__cache_dir_path = cache_dir_path
        self.__cached_wikidata_entities_without_related_by_id: Dict[
            str, WikibaseItem
        ] = {}
        self.__cached_wikidata_entities_with_related_by_id: Dict[str, WikibaseItem] = {}
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        yielded_wikidata_license = False
        yielded_wikidata_entity_ids: Set[str] = set()
        for model in models:
            model_graph = Graph()
            model_resource = model.to_rdf(model_graph)
            referenced_wikidata_entity_ids = (
                self.__get_model_wikidata_entity_references(model_resource)
            )
            for wikidata_entity_id in referenced_wikidata_entity_ids:
                if wikidata_entity_id in yielded_wikidata_entity_ids:
                    continue
                yield self.__get_wikidata_entity_with_related(wikidata_entity_id)
                yielded_wikidata_entity_ids.add(wikidata_entity_id)
                if not yielded_wikidata_license:
                    yield CreativeCommonsLicenses.BY_SA_3_0
                    yielded_wikidata_license = True

            yield model

    def __get_model_wikidata_entity_references(
        self, model_resource: Resource
    ) -> Tuple[str, ...]:
        """
        Get a list of Wikidata entity IDs  referenced by the given model.
        """
        wikidata_entity_ids: List[str] = []
        for predicate in (DCTERMS.relation, OWL.sameAs):
            for object_ in model_resource.objects(predicate):
                if not isinstance(object_, Resource):
                    continue
                elif not isinstance(object_.identifier, URIRef):
                    continue
                try:
                    parsed_uri = urlparse(str(object_.identifier))
                except ValueError:
                    continue
                if parsed_uri.scheme.lower() not in ("http", "https"):
                    continue
                if not parsed_uri.netloc.lower().endswith("wikidata.org"):
                    continue
                if not parsed_uri.path.lower().startswith("/entity/"):
                    continue
                wikidata_entity_ids.append(parsed_uri.path[len("/entity/") :])
        return tuple(wikidata_entity_ids)

    def __get_wikidata_entity_with_related(
        self, root_wikidata_entity_id: str
    ) -> WikibaseItem:
        """
        Get a Wikidata entity as well as all of its related entities in a single Graph.

        :param root_wikidata_entity_id:
        :return: WikibaseItem corresponding to the given entity id, backed by a Graph with all of its related entities
        """

        related_wikidata_entities_by_id: Dict[str, WikibaseItem] = {}

        def resolve_related_wikidata_entities(
            resolving_wikidata_entity_ids: Set[str], wikidata_entity: WikibaseItem
        ) -> None:
            """
            Recursive function to resolve related (instance of, subclass of, same as) Wikidata entities.
            :param resolving_wikidata_entity_ids: set of Wikidata entity id's already involved in this resolution, to avoid infinite recursion
            :param wikidata_entity: resolve Wikidata entities related to this entity
            :return:
            """

            wikidata_entity_id = self.__wikidata_entity_id_from_uri(wikidata_entity.uri)
            if wikidata_entity_id in resolving_wikidata_entity_ids:
                # It's already somewhere in the stack
                return
            resolving_wikidata_entity_ids.add(wikidata_entity_id)
            self.__logger.debug(
                "resolving Wikidata entities related to %s", wikidata_entity_id
            )

            for property_label in ("same as", "subclass of", "instance of"):
                related_wikidata_entity_uris: Sequence[URIRef]
                if property_label == "same as":
                    related_wikidata_entity_uris = wikidata_entity.same_as
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
                    related_wikidata_entity_id = self.__wikidata_entity_id_from_uri(
                        related_wikidata_entity_uri
                    )
                    self.__logger.debug(
                        "%s %s %s",
                        wikidata_entity_id,
                        property_label,
                        related_wikidata_entity_id,
                    )
                    related_wikidata_entity = related_wikidata_entities_by_id.get(
                        related_wikidata_entity_id, None
                    )
                    if related_wikidata_entity is not None:
                        self.__logger.debug("related hit", related_wikidata_entity_id)
                    else:
                        self.__logger.debug("related miss", related_wikidata_entity_id)
                        related_wikidata_entities_by_id[
                            related_wikidata_entity_id
                        ] = (
                            related_wikidata_entity
                        ) = self.__get_wikidata_entity_without_related(
                            wikidata_entity_id=related_wikidata_entity_id
                        )

                    resolve_related_wikidata_entities(
                        resolving_wikidata_entity_ids=resolving_wikidata_entity_ids,
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
            root_wikidata_entity_id
        )
        related_wikidata_entities_by_id[root_wikidata_entity_id] = root_wikidata_entity
        resolve_related_wikidata_entities(
            resolving_wikidata_entity_ids=set(), wikidata_entity=root_wikidata_entity
        )

        # Combine all the related entities in one graph
        combined_graph = Graph()
        for related_wikidata_entity in related_wikidata_entities_by_id.values():
            if related_wikidata_entity.uri == root_wikidata_entity.uri:
                related_wikidata_entity.to_concise_rdf(graph=combined_graph)
            else:
                related_wikidata_entity.to_type_rdf(
                    graph=combined_graph,
                    instance_of_property_uri=WDT["P31"],
                    subclass_of_property_uri=WDT["P279"],
                )
        combined_wikidata_items = WikibaseItem.from_wikidata_rdf(
            graph=combined_graph,
            uris=tuple(
                self.__wikidata_entity_uri_from_id(wikidata_entity_id)
                for wikidata_entity_id in related_wikidata_entities_by_id.keys()
            ),
        )
        # Return the root entity backed by the combined graph
        root_wikidata_entity_id_uri = self.__wikidata_entity_uri_from_id(
            root_wikidata_entity_id
        )
        return next(
            wikidata_item
            for wikidata_item in combined_wikidata_items
            if wikidata_item.uri == root_wikidata_entity_id_uri
        )

    def __get_wikidata_entity_without_related(self, wikidata_entity_id) -> WikibaseItem:
        """
        Get a single Wikidata entity by its id.
        """

        cached_wikidata_entity = (
            self.__cached_wikidata_entities_without_related_by_id.get(
                wikidata_entity_id
            )
        )
        if cached_wikidata_entity is not None:
            return cached_wikidata_entity

        graph = WikidataEntityExtractor(
            cache_dir_path=self.__cache_dir_path,
            entity_ids=(wikidata_entity_id,),
        )(force=False)["graph"]
        extracted_wikidata_items = WikibaseItem.from_wikidata_rdf(
            graph=graph,
            uris=(self.__wikidata_entity_uri_from_id(wikidata_entity_id),),
        )
        assert len(extracted_wikidata_items) == 1
        extracted_wikidata_item = extracted_wikidata_items[0]
        assert wikidata_entity_id == self.__wikidata_entity_id_from_uri(
            extracted_wikidata_item.uri
        )
        self.__cached_wikidata_entities_without_related_by_id[
            wikidata_entity_id
        ] = extracted_wikidata_item
        return extracted_wikidata_item

    def __wikidata_entity_id_from_uri(self, uri: URIRef):
        assert str(uri).startswith(self.__WIKIDATA_ENTITY_BASE_URI)
        return str(uri)[len(self.__WIKIDATA_ENTITY_BASE_URI) :]

    def __wikidata_entity_uri_from_id(self, wikidata_entity_id: str) -> URIRef:
        return URIRef(f"{self.__WIKIDATA_ENTITY_BASE_URI}{wikidata_entity_id}")
