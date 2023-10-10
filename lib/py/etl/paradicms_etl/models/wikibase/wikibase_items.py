from __future__ import annotations

from rdflib import RDF, Graph, URIRef

from paradicms_etl.models.wikibase.wikibase_item import WikibaseItem
from paradicms_etl.namespaces import WIKIBASE


class WikibaseItems:
    @classmethod
    def from_rdf(
        cls,
        *,
        graph: Graph,
        uris: tuple[URIRef, ...] | None = None,
        wikibase_item_class: type[WikibaseItem] = WikibaseItem,
    ) -> tuple[WikibaseItem, ...]:
        """
        Read items from the graph and return a tuple of them.

        If the expected URIs (uris) is not specified, reads all wikibase:Item's.
        """

        if uris is None:
            uris = tuple(
                item_uri
                for item_uri in graph.subjects(predicate=RDF.type, object=WIKIBASE.Item)
                if isinstance(item_uri, URIRef)
            )

        return tuple(
            wikibase_item_class.from_rdf(resource=graph.resource(uri)) for uri in uris
        )
