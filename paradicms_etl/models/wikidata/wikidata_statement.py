from dataclasses import dataclass
from typing import Union

from rdflib import Literal, URIRef

from paradicms_etl.models.wikidata.wikidata_property_definition import (
    WikidataPropertyDefinition,
)


@dataclass
class WikidataStatement:
    property_definition: WikidataPropertyDefinition
    normalized_value: Union[Literal, None, URIRef, object]
    value: Union[Literal, URIRef, object]  # Can be replaced by WikidataItem
