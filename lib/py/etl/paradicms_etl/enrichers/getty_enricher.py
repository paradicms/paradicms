import json
import logging
from enum import Enum
from pathlib import Path
from typing import Iterable, Set, Tuple
from urllib.parse import urlparse

from rdflib import URIRef, Graph

from paradicms_etl.model import Model
from paradicms_etl.models.stub.stub_model import StubModel
from paradicms_etl.utils.file_cache import FileCache
from paradicms_etl.utils.resolve_json_ld_contexts import resolve_json_ld_contexts


class GettyEnricher:
    class _GettyEntityType(Enum):
        OBJECT = "object"

        def __str__(self):
            return self.value

    def __init__(self, *, cache_dir_path: Path):
        self.__file_cache = FileCache(cache_dir_path=cache_dir_path)
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        yielded_getty_entity_uris: Set[URIRef] = set()
        for model in models:
            for getty_entity_type in self._GettyEntityType:
                referenced_getty_entity_uris = self.__get_model_getty_entity_references(
                    getty_entity_type=getty_entity_type, model=model
                )
                if not referenced_getty_entity_uris:
                    yield model
                    continue

                for referenced_getty_entity_uri in referenced_getty_entity_uris:
                    if referenced_getty_entity_uri in yielded_getty_entity_uris:
                        continue

                    for getty_entity in getattr(
                        self, f"_get_getty_{getty_entity_type}_entity"
                    )(referenced_getty_entity_uri):
                        if getty_entity.uri in yielded_getty_entity_uris:
                            continue
                        yield getty_entity
                        yielded_getty_entity_uris.add(getty_entity)

            if not isinstance(model, StubModel):
                # A StubModel is "replaced" by the Wikidata entity model
                yield model

    def __get_getty_entity_graph(self, getty_entity_uri: URIRef) -> Graph:
        with open(
            self.__file_cache.get_file(getty_entity_uri, file_extension=".jsonld")
        ) as json_ld_file:
            json_ld = json.load(json_ld_file)
            assert json_ld["id"] == str(getty_entity_uri)
            graph = Graph()
            graph.parse(
                data=resolve_json_ld_contexts(
                    file_cache=self.__file_cache, json_ld=json_ld
                ),
                format="json-ld",
            )
            return graph

    def _get_getty_object_entity(self, getty_entity_uri: URIRef) -> Model:
        graph = self.__get_getty_entity_graph(getty_entity_uri)
        raise NotImplementedError

    @staticmethod
    def __get_model_getty_entity_references(
        *, getty_entity_type: str, model: Model
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
            return tuple(
                same_as_uri
                for same_as_uri in model.same_as_uris
                if is_getty_entity_uri(same_as_uri)
            )

    # def __get_getty_entity(self, getty_entity_uri: URIRef) -> WikibaseItem:
    #     """
    #     Get a single Wikidata entity by its id.
    #     """
    #
    #     cached_getty_entity = self.__cached_getty_entities_without_related_by_uri.get(
    #         getty_entity_uri
    #     )
    #     if cached_getty_entity is not None:
    #         return cached_getty_entity
    #
    #     graph = WikidataEntityExtractor(
    #         cache_dir_path=self.__cache_dir_path,
    #         entity_uris=(getty_entity_uri,),
    #     )(force=False)["graph"]
    #     extracted_getty_items = WikibaseItems.from_rdf(
    #         graph=graph,
    #         uris=(getty_entity_uri,),
    #     )
    #     assert len(extracted_getty_items) == 1
    #     extracted_getty_item = extracted_getty_items[0]
    #     self.__cached_getty_entities_without_related_by_uri[
    #         getty_entity_uri
    #     ] = extracted_getty_item
    #     return extracted_getty_item
    #
    # @staticmethod
    # def __get_getty_entity_images(getty_entity: WikibaseItem) -> Iterable[Image]:
    #     yielded_image_uris: Set[URIRef] = set()
    #     for statement in getty_entity.statements_by_property_label.get("image", []):
    #         assert isinstance(statement.value, URIRef)
    #         image_uri = statement.value
    #         if image_uri in yielded_image_uris:
    #             continue
    #         yield SchemaImageObject.builder(uri=image_uri).build()
    #         yielded_image_uris.add(image_uri)
    #
    # def __get_getty_entity_creators(
    #     self, getty_entity: WikibaseItem
    # ) -> Iterable[Model]:
    #     for creator_getty_entity in self.__get_connected_getty_entities(
    #         connected_by_property_label="creator", getty_entity=getty_entity
    #     ):
    #         yield creator_getty_entity
    #         yield from self.__get_getty_entity_images(creator_getty_entity)
    #
    # def __get_getty_entity_locations(
    #     self,
    #     getty_entity: WikibaseItem,
    # ) -> Iterable[WikibaseItem]:
    #     for location_getty_entity in self.__get_connected_getty_entities(
    #         connected_by_property_label="location", getty_entity=getty_entity
    #     ):
    #         yield location_getty_entity
    #         if not location_getty_entity.statements_by_property_label.get(
    #             "coordinate location"
    #         ):
    #             # Keep chasing "location" until we get one with coordinates
    #             yield from self.__get_getty_entity_locations(location_getty_entity)
    #
    # def __get_getty_entity_subjects(
    #     self, getty_entity: WikibaseItem
    # ) -> Iterable[Model]:
    #     yield from self.__get_connected_getty_entities(
    #         connected_by_property_label="main subject", getty_entity=getty_entity
    #     )
    #
    # def __get_getty_entity_with_superclass_tree(
    #     self, root_getty_entity_uri: URIRef
    # ) -> WikibaseItem:
    #     """
    #     Get a Wikidata entity as well as all of its superclass tree (in the form of P279 "subclass of" statements) in
    #     one WikibaseItem Graph.
    #
    #     :param root_getty_entity_uri:
    #     :return: WikibaseItem corresponding to the given entity id, backed by a Graph with its superclass tree statements
    #     """
    #
    #     getty_entities_by_uri: Dict[URIRef, WikibaseItem] = {}
    #
    #     def get_type_getty_entities(
    #         resolving_getty_entity_uris: Set[URIRef],
    #         type_property_labels: Tuple[str, ...],
    #         getty_entity: WikibaseItem,
    #     ) -> None:
    #         """
    #         Recursive function to resolve Wikidata entities in the superclass tree of the given getty_entity.
    #
    #         :param resolving_getty_entity_uris: set of Wikidata entity id's already involved in this resolution, to avoid infinite recursion
    #         :param type_property_labels: property labels such as "subclass of" to consider part of the superclass tree
    #         :param getty_entity: resolve Wikidata entities related to this entity
    #         :return:
    #         """
    #
    #         if getty_entity.uri in resolving_getty_entity_uris:
    #             # It's already somewhere in the stack
    #             return
    #         resolving_getty_entity_uris.add(getty_entity.uri)
    #         self.__logger.debug(
    #             "resolving Wikidata entities related to %s", getty_entity.uri
    #         )
    #
    #         for type_property_label in type_property_labels:
    #             type_getty_entity_uris: Sequence[URIRef]
    #             if type_property_label == "same as":
    #                 type_getty_entity_uris = getty_entity.same_as_uris
    #             else:
    #                 type_getty_entity_uris = []
    #                 for statement in getty_entity.statements_by_property_label.get(
    #                     type_property_label, []
    #                 ):
    #                     assert isinstance(statement.value, URIRef)
    #                     type_getty_entity_uris.append(statement.value)
    #
    #             if len(type_getty_entity_uris) == 0:
    #                 continue
    #
    #             for type_getty_entity_uri in type_getty_entity_uris:
    #                 self.__logger.debug(
    #                     "%s %s %s",
    #                     getty_entity.uri,
    #                     type_property_label,
    #                     type_getty_entity_uri,
    #                 )
    #                 type_getty_entity = getty_entities_by_uri.get(
    #                     type_getty_entity_uri, None
    #                 )
    #                 if type_getty_entity is not None:
    #                     self.__logger.debug("related hit", type_getty_entity_uri)
    #                 else:
    #                     self.__logger.debug("related miss", type_getty_entity_uri)
    #                     getty_entities_by_uri[
    #                         type_getty_entity_uri
    #                     ] = type_getty_entity = self.__get_getty_entity(
    #                         getty_entity_uri=type_getty_entity_uri
    #                     )
    #
    #                 get_type_getty_entities(
    #                     type_property_labels=("same as", "subclass of"),
    #                     resolving_getty_entity_uris=resolving_getty_entity_uris,
    #                     getty_entity=type_getty_entity,
    #                 )
    #             # Only consider one type of related entities per resolve
    #             # same as
    #             # OR
    #             # subclass of
    #             # OR
    #             # instance of
    #             # Only one will be relevant. We don't care what a class is an instance of, for example.
    #             return
    #
    #     root_getty_entity = self.__get_getty_entity(root_getty_entity_uri)
    #     getty_entities_by_uri[root_getty_entity_uri] = root_getty_entity
    #
    #     get_type_getty_entities(
    #         resolving_getty_entity_uris=set(),
    #         type_property_labels=("same as", "subclass of", "instance of"),
    #         getty_entity=root_getty_entity,
    #     )
    #
    #     # Combine the root Wikidata entity and all of its superclass tree statements in one Graph
    #     combined_graph = Graph()
    #     for getty_entity in getty_entities_by_uri.values():
    #         if getty_entity.uri == root_getty_entity.uri:
    #             getty_entity.to_concise_rdf(graph=combined_graph)
    #         else:
    #             getty_entity.to_type_rdf(
    #                 graph=combined_graph,
    #                 subclass_of_property_uri=WDT["P279"],
    #             )
    #     combined_getty_items = WikibaseItems.from_rdf(graph=combined_graph)
    #     assert (
    #         len(combined_getty_items) == 1
    #     )  # The rdf:type wikibase:Item statements should have been elided from everything but the root Wikidata entity
    #     assert combined_getty_items[0].uri == root_getty_entity_uri
    #     return combined_getty_items[0]
