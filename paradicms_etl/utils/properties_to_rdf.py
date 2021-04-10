from typing import Tuple

from rdflib import Literal, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definition import PropertyDefinition


def properties_to_rdf(
    properties: Tuple[Property, ...],
    property_definitions: Tuple[PropertyDefinition, ...],
    resource: Resource,
):
    # PropertyDefinition is a _Model, have to elide the type here to avoid a circular import.
    property_definitions_by_uri = {
        property_definition.uri: property_definition
        for property_definition in property_definitions
    }
    for property_ in properties:
        property_definition = property_definitions_by_uri[property_.uri]
        if isinstance(property_.value, URIRef):
            resource.add(property_definition.uri, property_.value)
        else:
            resource.add(property_definition.uri, Literal(property_.value))
