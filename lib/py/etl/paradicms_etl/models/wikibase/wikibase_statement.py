from dataclasses import dataclass
from typing import Dict, Tuple, Union

from rdflib import Literal, URIRef

from paradicms_etl.models.wikibase.wikibase_property import (
    WikibaseProperty,
)


@dataclass
class WikibaseStatement:
    @dataclass
    class Qualifier:
        property_: WikibaseProperty
        normalized_values: Tuple[Union[Literal, URIRef], ...]
        values: Tuple[Union[Literal, URIRef], ...]

    property_: WikibaseProperty
    normalized_values: Tuple[Union[Literal, URIRef], ...]  # type: ignore # noqa
    qualifiers: Tuple[
        Qualifier, ...
    ]  # Only full statements have qualifiers, but having this on all statements simplifies other code
    values: Tuple[Union[Literal, URIRef], ...]  # type: ignore # noqa

    def qualifiers_by_property_label(self) -> Dict[str, Qualifier]:
        result = {}
        for qualifier in self.qualifiers:
            assert qualifier.property_.label not in result
            result[qualifier.property_.label] = qualifier
        return result
