from dataclasses import dataclass
from typing import Dict, Tuple, Union

from rdflib import Literal, URIRef

from paradicms_etl.models.wikibase.wikibase_property_definition import (
    WikibasePropertyDefinition,
)


@dataclass
class WikibaseStatement:
    @dataclass
    class Qualifier:
        property_definition: WikibasePropertyDefinition
        normalized_value: Union[Literal, URIRef, "WikibaseItem"]  # type: ignore # noqa
        value: Union[Literal, URIRef, "WikibaseItem"]  # type: ignore # noqa

    property_definition: WikibasePropertyDefinition
    normalized_value: Union[Literal, None, URIRef, "WikibaseItem"]  # type: ignore # noqa
    qualifiers: Tuple[
        Qualifier, ...
    ]  # Only full statements have qualifiers, but having this on all statements simplifies other code
    value: Union[Literal, URIRef, "WikibaseItem"]  # type: ignore # noqa

    def qualifiers_by_property_label(self) -> Dict[str, Qualifier]:
        result = {}
        for qualifier in self.qualifiers:
            assert qualifier.property_definition.label not in result
            result[qualifier.property_definition.label] = qualifier
        return result
