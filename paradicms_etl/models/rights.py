from dataclasses import dataclass
from typing import Optional, Tuple, Union

from rdflib import URIRef
from rdflib.resource import Resource

from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definitions import PropertyDefinitions
from paradicms_etl.models.rights_value import RightsValue


@dataclass(init=False)
class Rights:
    creator: Optional[RightsValue] = None
    holder: Optional[RightsValue] = None
    license: Optional[RightsValue] = None
    statement: Optional[RightsValue] = None

    def __init__(
        self,
        *,
        creator: Union[None, RightsValue, str, URIRef] = None,
        holder: Union[None, RightsValue, str, URIRef] = None,
        license: Union[None, RightsValue, str, URIRef] = None,
        statement: Union[None, RightsValue, str, URIRef] = None
    ):
        self.creator = RightsValue.from_value(creator)
        self.holder = RightsValue.from_value(holder)
        self.license = RightsValue.from_value(license)
        self.statement = RightsValue.from_value(statement)

    @classmethod
    def from_properties(cls, properties: Tuple[Property, ...]):
        creator = RightsValue.from_properties(
            properties=tuple(
                property_
                for property_ in properties
                if property_.uri == PropertyDefinitions.CREATOR.uri
            )
        )
        holder = RightsValue.from_properties(
            properties=tuple(
                property_
                for property_ in properties
                if property_.uri == PropertyDefinitions.RIGHTS_HOLDER.uri
            )
        )
        license = RightsValue.from_properties(
            properties=tuple(
                property_
                for property_ in properties
                if property_.uri == PropertyDefinitions.LICENSE.uri
            )
        )
        statement = RightsValue.from_properties(
            properties=tuple(
                property_
                for property_ in properties
                if property_.uri == PropertyDefinitions.RIGHTS.uri
            )
        )

        if not creator and not holder and not license and not statement:
            return None

        return Rights(
            creator=creator, holder=holder, license=license, statement=statement
        )

    def to_rdf(self, *, add_to_resource: Resource) -> None:
        if self.creator is not None:
            self.creator.to_rdf(
                add_to_resource=add_to_resource,
                property_uri=PropertyDefinitions.CREATOR.uri,
            )
        if self.holder is not None:
            self.holder.to_rdf(
                add_to_resource=add_to_resource,
                property_uri=PropertyDefinitions.RIGHTS_HOLDER.uri,
            )
        if self.license is not None:
            self.license.to_rdf(
                add_to_resource=add_to_resource,
                property_uri=PropertyDefinitions.LICENSE.uri,
            )
        if self.statement is not None:
            self.statement.to_rdf(
                add_to_resource=add_to_resource,
                property_uri=PropertyDefinitions.RIGHTS.uri,
            )
