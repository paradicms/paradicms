from typing import Tuple

from rdflib import Graph, RDF, URIRef

from paradicms_etl.models.wikibase.wikibase_property_definition import (
    WikibasePropertyDefinition,
)
from paradicms_etl.namespaces import WIKIBASE


class WikibasePropertyDefinitions:
    @staticmethod
    def from_rdf(*, graph: Graph) -> Tuple[WikibasePropertyDefinition, ...]:
        """
        Return property definitions from the graph and return a tuple of them.
        """

        property_definitions = []
        property_definition_labels = set()
        for property_subject in graph.subjects(
            predicate=RDF.type, object=WIKIBASE.Property
        ):
            assert isinstance(property_subject, URIRef)
            property_definition = WikibasePropertyDefinition.from_rdf(
                graph=graph, entity_uri=property_subject
            )
            assert property_definition.label not in property_definition_labels
            property_definitions.append(property_definition)
            property_definition_labels.add(property_definition.label)
        return tuple(property_definitions)
