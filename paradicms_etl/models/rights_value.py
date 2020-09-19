from dataclasses import dataclass
from typing import Optional, Tuple, Union

from rdflib import Literal, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.property import Property
from paradicms_etl.utils import is_uri


@dataclass(init=False)
class RightsValue:
    """
    The rights properties such as dcterms:rights and dcterms:rightsHolder can have matching URI and text values (objects).
    For display purposes it's useful to keep the matching values in the same place.
    """

    text: Optional[str] = None
    uri: Optional[str] = None

    def __init__(
        self, text: Union[None, str] = None, uri: Union[None, str, URIRef] = None
    ):
        assert text or uri

        if text is not None:
            assert isinstance(text, str)
        self.text = text

        if uri is not None:
            if isinstance(uri, URIRef):
                uri = str(uri)
            assert isinstance(uri, str)
        self.uri = uri

    @classmethod
    def from_properties(cls, properties: Tuple[Property, ...]):
        if not properties:
            return None

        property_uri = None
        text_property_values = []
        uri_property_values = []
        for property in properties:
            if property_uri is None:
                property_uri = property.uri
            elif property.uri != property_uri:
                raise ValueError(
                    f"rights properties with different URIs: {property.uri} vs. {property_uri}"
                )

            assert isinstance(property.value, str)

            if is_uri(property.value):
                uri_property_values.append(property.value)
            else:
                text_property_values.append(property.value)

        if len(text_property_values) > 1:
            raise ValueError(f"{property_uri}: more than one text property, ambiguous")

        if len(uri_property_values) > 1:
            raise ValueError(f"{property_uri}: more than one URI property, ambiguous")

        return cls(
            text=text_property_values[0] if text_property_values else None,
            uri=uri_property_values[0] if uri_property_values else None,
        )

    @classmethod
    def from_value(cls, value):
        if value is None:
            return None
        elif isinstance(value, cls):
            return value
        elif isinstance(value, str):
            if is_uri(value):
                return cls(uri=value)
            else:
                return cls(text=value)
        elif isinstance(value, URIRef):
            return cls(uri=str(value))
        else:
            raise TypeError(type(value))

    def to_rdf(self, *, add_to_resource: Resource, property_uri: URIRef):
        if self.text is not None:
            add_to_resource.add(property_uri, Literal(self.text))
        if self.uri is not None:
            add_to_resource.add(property_uri, URIRef(self.uri))
