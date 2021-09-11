from typing import Optional, Tuple

from rdflib.namespace import RDF, RDFS
from rdflib.term import Literal, Node, URIRef

from paradicms_etl.models._named_model import _NamedModel


class PropertyValueDefinition(_NamedModel):
    @classmethod
    def from_fields(
        cls,
        *,
        property_uris: Tuple[URIRef, ...],  # Child -> parent references
        uri: URIRef,
        value: Node,  # A property value
        label: Optional[str] = None,
    ):
        resource = cls._create_resource(identifier=uri)
        if label is not None:
            resource.add(RDFS.label, Literal(label))
        if not property_uris:
            raise ValueError("must specify at least one property URI")
        for property_uri in property_uris:
            # Not kosher use of rdf:predicate, but I couldn't find a better fit
            resource.add(RDF.predicate, property_uri)
        resource.add(RDF.value, value)
        return cls(resource)
