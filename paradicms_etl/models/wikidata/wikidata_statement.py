from dataclasses import dataclass
from typing import Dict, Tuple, Union

from rdflib import Literal, URIRef

from paradicms_etl.models.wikidata.wikidata_property_definition import (
    WikidataPropertyDefinition,
)


@dataclass
class WikidataStatement:
    @dataclass
    class Qualifier:
        property_definition: WikidataPropertyDefinition
        normalized_value: Union[Literal, URIRef, object]
        value: Union[Literal, URIRef, object]  # Can be replaced by WikidataItem

    property_definition: WikidataPropertyDefinition
    normalized_value: Union[Literal, None, URIRef, object]
    qualifiers: Tuple[
        Qualifier, ...
    ]  # Only full statements have qualifiers, but having this on all statements simplifies other code
    value: Union[Literal, URIRef, object]  # Can be replaced by WikidataItem

    def qualifiers_by_property_label(self) -> Dict[str, Qualifier]:
        result = {}
        for qualifier in self.qualifiers:
            assert qualifier.property_definition.label not in result
            result[qualifier.property_definition.label] = qualifier
        return result
