from dataclasses import dataclass

from rdflib import Graph, URIRef

from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.models.wikidata.wikidata_statement import WikidataStatement


@dataclass
class WikidataDirectClaim(WikidataStatement):
    @classmethod
    def from_rdf(
        cls,
        *,
        graph: Graph,
        object_: URIRef,
        predicate: URIRef,
        property_definition: PropertyDefinition,
        subject: URIRef
    ):
        if property_definition.direct_claim_normalized_uri is not None:
            normalized_objects = tuple(
                graph.objects(
                    subject=subject,
                    predicate=property_definition.direct_claim_normalized_uri,
                )
            )
            if normalized_objects:
                assert (
                    len(normalized_objects) == 1
                ), property_definition.direct_claim_normalized_uri
                normalized_value = normalized_objects[0]
                print("Value", object_, "normalized value", normalized_value)
            else:
                normalized_value = None
        else:
            normalized_value = None

        return cls(
            property_definition=property_definition,
            normalized_value=normalized_value,
            value=object_,
        )
