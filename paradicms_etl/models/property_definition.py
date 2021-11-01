from rdflib import Literal, RDFS, URIRef

from paradicms_etl.models._named_model import _NamedModel


class PropertyDefinition(_NamedModel):
    def __init__(self, *args, **kwds):
        _NamedModel.__init__(self, *args, **kwds)
        self.label

    @classmethod
    def from_fields(cls, *, label: str, uri: URIRef):
        resource = cls._create_resource(identifier=uri)
        resource.add(RDFS.label, Literal(label))
        return cls(resource)

    @property
    def label(self) -> str:
        return self._required_str_value(RDFS.label)
