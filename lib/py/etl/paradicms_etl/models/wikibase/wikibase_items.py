from typing import Tuple, Optional

from rdflib import Graph, URIRef, RDF

from paradicms_etl.models.wikibase.wikibase_item import WikibaseItem
from paradicms_etl.models.wikibase.wikibase_property import WikibaseProperty
from paradicms_etl.namespaces import WIKIBASE


class WikibaseItems:
    @classmethod
    def from_wikibase_entity_rdf(
        cls,
        *,
        graph: Graph,
        properties: Tuple[WikibaseProperty, ...],
        uris: Optional[Tuple[URIRef, ...]] = None,
    ) -> Tuple["WikibaseItem", ...]:
        """
        Read items from the graph and return a tuple of them.

        If the expected URIs (uris) is not specified, reads all wikibase:Item's.
        """

        items = []
        if uris is None:
            uris = tuple(
                item_uri
                for item_uri in graph.subjects(predicate=RDF.type, object=WIKIBASE.Item)
                if isinstance(item_uri, URIRef)
            )
        for uri in uris:
            items.append(
                WikibaseItem.from_wikibase_entity_rdf(
                    properties=properties,
                    resource=graph.resource(uri),
                )
            )

        return tuple(items)
