import logging
from pathlib import Path
from typing import Iterable, Set, Tuple, List, Dict, Sequence

from rdflib import Graph, URIRef

from paradicms_etl.extractors.wikidata_entity_extractor import WikidataEntityExtractor
from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.image import Image
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.stub.stub_model import StubModel
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
                wikidata_entity = self.__get_wikidata_entity_with_superclass_tree(
                    wikidata_entity_uri
                )
                yield wikidata_entity
                yielded_wikidata_entity_uris.add(wikidata_entity_uri)
                if not yielded_wikidata_rights_models:
                    yield CreativeCommonsLicenses.BY_SA_3_0
                    yield RightsStatementsDotOrgRightsStatements.InC
                    yielded_wikidata_rights_models = True
                yield from self.__get_wikidata_entity_images(wikidata_entity)

            if isinstance(model, StubModel) and yielded_wikidata_entity_uris:
                # A StubModel is "replaced" by the Wikidata entity model
                continue
            else:
                yield model

    def __get_model_wikidata_entity_references(
        self, model: Model
    ) -> Tuple[URIRef, ...]:
        """
        Get a list of Wikidata entity URIs referenced by the given model.
        """
        if isinstance(model, StubModel):
            try:
                return (canonicalize_wikidata_entity_uri(model.uri),)
            except ValueError:
                return ()

        wikidata_entity_uris: List[URIRef] = []
        for same_as_uri in model.same_as_uris:
            try:
                wikidata_entity_uris.append(
                    canonicalize_wikidata_entity_uri(same_as_uri)
                )
            except ValueError:
                continue
        return tuple(wikidata_entity_uris)

    def __get_wikidata_entity(self, wikidata_entity_uri: URIRef) -> WikibaseItem:
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

    @staticmethod
    def __get_wikidata_entity_images(wikidata_entity: WikibaseItem) -> Iterable[Image]:
        yielded_image_uris: Set[URIRef] = set()
        for statement in wikidata_entity.statements_by_property_label.get("image", []):
            assert isinstance(statement.value, URIRef)
            image_uri = statement.value
            if image_uri in yielded_image_uris:
                continue
            yield SchemaImageObject.builder(uri=image_uri).build()
            yielded_image_uris.add(image_uri)

    def __get_wikidata_entity_with_superclass_tree(
        self, root_wikidata_entity_uri: URIRef
    ) -> WikibaseItem:
        """
        Get a Wikidata entity as well as all of its related entities in a single Graph.

        :param root_wikidata_entity_uri:
        :return: WikibaseItem corresponding to the given entity id, backed by a Graph with all of its related entities
        """

        type_wikidata_entities_by_uri: Dict[URIRef, WikibaseItem] = {}

        def get_type_wikidata_entities(
            resolving_wikidata_entity_uris: Set[URIRef],
            type_property_labels: Tuple[str, ...],
            wikidata_entity: WikibaseItem,
        ) -> None:
            """
            Recursive function to resolve Wikidata entities in the superclass tree of the root Wikidata entity
            :param resolving_wikidata_entity_uris: set of Wikidata entity id's already involved in this resolution, to avoid infinite recursion
            :param type_property_labels: property labels such as "subclass of" to consider part of the superclass tree
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

            for type_property_label in type_property_labels:
                type_wikidata_entity_uris: Sequence[URIRef]
                if type_property_label == "same as":
                    type_wikidata_entity_uris = wikidata_entity.same_as_uris
                else:
                    type_wikidata_entity_uris = []
                    for statement in wikidata_entity.statements_by_property_label.get(
                        type_property_label, []
                    ):
                        assert isinstance(statement.value, URIRef)
                        type_wikidata_entity_uris.append(statement.value)

                if len(type_wikidata_entity_uris) == 0:
                    continue

                for type_wikidata_entity_uri in type_wikidata_entity_uris:
                    self.__logger.debug(
                        "%s %s %s",
                        wikidata_entity.uri,
                        type_property_label,
                        type_wikidata_entity_uri,
                    )
                    type_wikidata_entity = type_wikidata_entities_by_uri.get(
                        type_wikidata_entity_uri, None
                    )
                    if type_wikidata_entity is not None:
                        self.__logger.debug("related hit", type_wikidata_entity_uri)
                    else:
                        self.__logger.debug("related miss", type_wikidata_entity_uri)
                        type_wikidata_entities_by_uri[
                            type_wikidata_entity_uri
                        ] = type_wikidata_entity = self.__get_wikidata_entity(
                            wikidata_entity_uri=type_wikidata_entity_uri
                        )

                    get_type_wikidata_entities(
                        type_property_labels=("same as", "subclass of"),
                        resolving_wikidata_entity_uris=resolving_wikidata_entity_uris,
                        wikidata_entity=type_wikidata_entity,
                    )
                # Only consider one type of related entities per resolve
                # same as
                # OR
                # subclass of
                # OR
                # instance of
                # Only one will be relevant. We don't care what a class is an instance of, for example.
                return

        root_wikidata_entity = self.__get_wikidata_entity(root_wikidata_entity_uri)
        type_wikidata_entities_by_uri[root_wikidata_entity_uri] = root_wikidata_entity

        get_type_wikidata_entities(
            resolving_wikidata_entity_uris=set(),
            type_property_labels=("same as", "subclass of", "instance of"),
            wikidata_entity=root_wikidata_entity,
        )

        # Combine the root Wikidata entity and all of its superclass tree statements in one Graph
        combined_graph = Graph()
        for related_wikidata_entity in type_wikidata_entities_by_uri.values():
            if related_wikidata_entity.uri == root_wikidata_entity.uri:
                related_wikidata_entity.to_concise_rdf(graph=combined_graph)
            else:
                related_wikidata_entity.to_type_rdf(
                    graph=combined_graph,
                    subclass_of_property_uri=WDT["P279"],
                )
        combined_wikidata_items = WikibaseItems.from_rdf(graph=combined_graph)
        assert (
            len(combined_wikidata_items) == 1
        )  # The rdf:type wikibase:Item statements should have been elided from everything but the root Wikidata entity
        assert combined_wikidata_items[0].uri == root_wikidata_entity_uri
        return combined_wikidata_items[0]
