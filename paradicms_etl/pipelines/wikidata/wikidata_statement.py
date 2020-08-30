from dataclasses import dataclass
from typing import Union

from rdflib import Literal, URIRef

from paradicms_etl.pipelines.wikidata.wikidata_property_definition import (
    WikidataPropertyDefinition,
)


@dataclass
class WikidataStatement:
    property_definition: WikidataPropertyDefinition
    value: Union[Literal, URIRef, object]  # Can be replaced by WikidataItem
