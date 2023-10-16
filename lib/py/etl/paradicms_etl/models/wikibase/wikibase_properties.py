from rdflib import RDF, Graph, URIRef

from paradicms_etl.models.wikibase.wikibase_property import WikibaseProperty
from paradicms_etl.namespaces import WIKIBASE


class WikibaseProperties:
    @staticmethod
    def from_rdf(graph: Graph) -> tuple[WikibaseProperty, ...]:
        """
        Return property definitions from the graph and return a tuple of them.
        """

        properties = []
        property_definition_labels = set()
        for property_subject in graph.subjects(
            predicate=RDF.type, object=WIKIBASE.Property
        ):
            assert isinstance(property_subject, URIRef)
            property_ = WikibaseProperty.from_rdf(
                resource=graph.resource(property_subject)
            )
            assert property_.label not in property_definition_labels
            properties.append(property_)
            property_definition_labels.add(property_.label)
        return tuple(properties)
