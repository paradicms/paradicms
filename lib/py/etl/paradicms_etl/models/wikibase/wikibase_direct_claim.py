from dataclasses import dataclass
from typing import Union

from rdflib import Graph, URIRef, Literal

from paradicms_etl.models.wikibase.wikibase_property_definition import (
    WikibasePropertyDefinition,
)
from paradicms_etl.models.wikibase.wikibase_statement import WikibaseStatement


@dataclass
class WikibaseDirectClaim(WikibaseStatement):
    @classmethod
    def from_rdf(
        cls,
        *,
        graph: Graph,
        object_: Union[Literal, URIRef],
        property_definition: WikibasePropertyDefinition,
        subject: URIRef
    ) -> "WikibaseDirectClaim":
        normalized_value: Union[Literal, URIRef, None]
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
                assert isinstance(normalized_objects[0], (Literal, URIRef))
                normalized_value = normalized_objects[0]
                print("Value", object_, "normalized value", normalized_value)
            else:
                normalized_value = None
        else:
            normalized_value = None

        return cls(
            property_definition=property_definition,
            normalized_value=normalized_value,
            qualifiers=tuple(),
            value=object_,
        )
