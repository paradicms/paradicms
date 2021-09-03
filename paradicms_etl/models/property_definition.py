from rdflib import Literal, RDFS, URIRef

from paradicms_etl.models._named_model import _NamedModel


class PropertyDefinition(_NamedModel):
    def __init__(self, *, label: str, uri: URIRef):
        _NamedModel.__init__(self, uri=uri)
        self.resource.add(RDFS.label, Literal(label))
