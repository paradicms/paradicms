from dataclasses import dataclass
from typing import Union

from rdflib import Literal, URIRef
from rdflib.resource import Resource
from rdflib.term import Node

from paradicms_etl.models.dublin_core_property_definitions import (
    DublinCorePropertyDefinitions,
)


@dataclass
class Rights:
    creator: Union[None, str, URIRef] = None
    holder: Union[None, str, URIRef] = None
    license: Union[None, str, URIRef] = None
    statement: Union[None, str, URIRef] = None

    __PROPERTY_URIS = {
        "creator": DublinCorePropertyDefinitions.CREATOR.uri,
        "holder": DublinCorePropertyDefinitions.RIGHTS_HOLDER.uri,
        "license": DublinCorePropertyDefinitions.LICENSE.uri,
        "statement": DublinCorePropertyDefinitions.RIGHTS.uri,
    }

    def to_rdf(self, *, add_to_resource: Resource) -> None:
        for property_name, property_uri in self.__PROPERTY_URIS.items():
            property_value = getattr(self, property_name)
            if property_value is None:
                continue
            if isinstance(property_value, Node):
                add_to_resource.add(property_uri, property_value)
            elif isinstance(property_value, str):
                add_to_resource.add(property_uri, Literal(property_value))
            else:
                raise TypeError(type(property_value))
