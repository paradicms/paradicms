from rdflib import Literal, RDFS, URIRef

from paradicms_etl.models._named_model import _NamedModel


class PropertyDefinition(_NamedModel):
    @classmethod
    def from_fields(cls, *, label: str, uri: URIRef):
        resource = cls._create_resource(identifier=uri)
        resource.add(RDFS.label, Literal(label))
        return cls(resource)
