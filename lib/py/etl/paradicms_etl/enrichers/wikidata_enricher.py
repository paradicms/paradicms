import logging
from pathlib import Path
from typing import Iterable, Set, Tuple, Dict, Sequence
from urllib.parse import urlparse

from rdflib import Graph, URIRef

from paradicms_etl.extractors.rdf_url_extractor import RdfUrlExtractor
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
from paradicms_etl.models.work import Work
from paradicms_etl.namespaces import WDT
from paradicms_etl.utils.match_url import match_url


class WikidataEnricher:
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
        for model in models:
            referenced_wikidata_uris = self.__get_model_wikidata_entity_references(
                model
            )
            if not referenced_wikidata_uris:
                yield model
                continue

            for referenced_wikidata_entity_uri in referenced_wikidata_uris.values():
                referenced_wikidata_entity = (
                    self.__get_wikidata_entity_with_superclass_tree(
                        referenced_wikidata_entity_uri
                    )
                )
                yield referenced_wikidata_entity

                if not yielded_wikidata_rights_models:
                    yield CreativeCommonsLicenses.BY_SA_3_0
                    yield RightsStatementsDotOrgRightsStatements.InC
                    yielded_wikidata_rights_models = True

                yield from self.__get_wikidata_entity_images(referenced_wikidata_entity)

                if isinstance(model, Work):
                    for connected_models in (
                        self.__get_wikidata_entity_locations(
                            referenced_wikidata_entity
                        ),
                        self.__get_wikidata_entity_creators(referenced_wikidata_entity),
                        self.__get_wikidata_entity_subjects(referenced_wikidata_entity),
                    ):
                        yield from connected_models

            if not isinstance(model, StubModel):
                # A StubModel is "replaced" by the Wikidata entity model
                yield model

    def __get_connected_wikidata_entities(
        self, *, connected_by_property_label: str, wikidata_entity: WikibaseItem
    ) -> Iterable[WikibaseItem]:
        for statement in wikidata_entity.statements_by_property_label.get(
            connected_by_property_label, []
        ):
            assert isinstance(statement.value, URIRef)
            yield self.__get_wikidata_entity_with_superclass_tree(
                root_wikidata_entity_uri=statement.value
            )

    def __get_model_wikidata_entity_references(
        self, model: Model
    ) -> Dict[URIRef, URIRef]:
        """
        Get a list of Wikidata entity URIs referenced by the given model.
        """

        result: Dict[URIRef, URIRef] = {}
        for same_as_uri in (
            (model.uri,) if isinstance(model, StubModel) else model.same_as_uris
        ):
            if match_url(
                same_as_uri,
                match_netloc_suffix="wikidata.org",
                match_path_prefix="/entity/",
            ):
                result[same_as_uri] = same_as_uri
            elif match_url(
                same_as_uri,
                match_netloc_suffix="wikidata.org",
                match_path_prefix="/wiki/",
            ):
                if not isinstance(model, StubModel):
                    self.__logger.debug(
                        "can only reference Wikidata /wiki/ URIs from stub models: %s",
                        same_as_uri,
                    )
                    continue
                result[same_as_uri] = URIRef(
                    f"http://www.wikidata.org/entity/{urlparse(same_as_uri).path[len('/wiki/'):]}"
                )
        return result

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

        graph = RdfUrlExtractor(
            cache_dir_path=self.__cache_dir_path,
            rdf_url=URIRef(str(wikidata_entity_uri) + ".ttl"),
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
        for statement in wikidata_entity.statements_by_property_label.get("image", []):
            assert isinstance(statement.value, URIRef)
            yield SchemaImageObject.builder(uri=statement.value).build()

    def __get_wikidata_entity_creators(
        self, wikidata_entity: WikibaseItem
    ) -> Iterable[Model]:
        for creator_wikidata_entity in self.__get_connected_wikidata_entities(
            connected_by_property_label="creator", wikidata_entity=wikidata_entity
        ):
            yield creator_wikidata_entity
            yield from self.__get_wikidata_entity_images(creator_wikidata_entity)

    def __get_wikidata_entity_locations(
        self,
        wikidata_entity: WikibaseItem,
    ) -> Iterable[WikibaseItem]:
        for location_wikidata_entity in self.__get_connected_wikidata_entities(
            connected_by_property_label="location", wikidata_entity=wikidata_entity
        ):
            yield location_wikidata_entity
            if not location_wikidata_entity.statements_by_property_label.get(
                "coordinate location"
            ):
                # Keep chasing "location" until we get one with coordinates
                yield from self.__get_wikidata_entity_locations(
                    location_wikidata_entity
                )

    def __get_wikidata_entity_subjects(
        self, wikidata_entity: WikibaseItem
    ) -> Iterable[Model]:
        yield from self.__get_connected_wikidata_entities(
            connected_by_property_label="main subject", wikidata_entity=wikidata_entity
        )

    def __get_wikidata_entity_with_superclass_tree(
        self, root_wikidata_entity_uri: URIRef
    ) -> WikibaseItem:
        """
        Get a Wikidata entity as well as all of its superclass tree (in the form of P279 "subclass of" statements) in
        one WikibaseItem Graph.

        :param root_wikidata_entity_uri:
        :return: WikibaseItem corresponding to the given entity id, backed by a Graph with its superclass tree statements
        """

        wikidata_entities_by_uri: Dict[URIRef, WikibaseItem] = {}

        def get_type_wikidata_entities(
            resolving_wikidata_entity_uris: Set[URIRef],
            type_property_labels: Tuple[str, ...],
            wikidata_entity: WikibaseItem,
        ) -> None:
            """
            Recursive function to resolve Wikidata entities in the superclass tree of the given wikidata_entity.

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
                    type_wikidata_entity = wikidata_entities_by_uri.get(
                        type_wikidata_entity_uri, None
                    )
                    if type_wikidata_entity is not None:
                        self.__logger.debug("related hit", type_wikidata_entity_uri)
                    else:
                        self.__logger.debug("related miss", type_wikidata_entity_uri)
                        wikidata_entities_by_uri[
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
        wikidata_entities_by_uri[root_wikidata_entity_uri] = root_wikidata_entity

        get_type_wikidata_entities(
            resolving_wikidata_entity_uris=set(),
            type_property_labels=("same as", "subclass of", "instance of"),
            wikidata_entity=root_wikidata_entity,
        )

        # Combine the root Wikidata entity and all of its superclass tree statements in one Graph
        combined_graph = Graph()
        for wikidata_entity in wikidata_entities_by_uri.values():
            if wikidata_entity.uri == root_wikidata_entity.uri:
                wikidata_entity.to_concise_rdf(graph=combined_graph)
            else:
                wikidata_entity.to_type_rdf(
                    graph=combined_graph,
                    subclass_of_property_uri=WDT["P279"],
                )
        combined_wikidata_items = WikibaseItems.from_rdf(graph=combined_graph)
        assert (
            len(combined_wikidata_items) == 1
        )  # The rdf:type wikibase:Item statements should have been elided from everything but the root Wikidata entity
        assert combined_wikidata_items[0].uri == root_wikidata_entity_uri
        return combined_wikidata_items[0]
