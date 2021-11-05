from typing import Optional

from rdflib import BNode, RDF, Literal

from paradicms_etl._model import _Model
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS


class Text(_Model):
    """
    Model of a string with associated metadata, such as rights.

    The model has its own RDF resource, a blank node. It is used in lieu of a string literal
    in situations where:

    <other model URI> dcterms:description "Description with associated metadata" .

    does not capture the metadata. Instead:

    <other model URI> dcterms:description <text bnode> .
    <text bnode> rdf:value "Description with associated metadata" .
    <text bnode> dcterms:license <license URI> .
    """

    def __init__(self, *args, **kwds):
        _Model.__init__(self, *args, **kwds)
        self.value

    @classmethod
    def from_fields(cls, *, value: str, rights: Optional[Rights] = None):
        resource = cls._create_resource(identifier=BNode())
        resource.add(RDF.type, CMS.Text)
        resource.add(RDF.value, Literal(value))
        if rights is not None:
            rights.to_rdf(add_to_resource=resource)
        return cls(resource=resource)

    @property
    def rights(self) -> Optional[Rights]:
        return Rights.from_rdf(resource=self._resource)

    @property
    def value(self) -> str:
        return self._required_str_value(RDF.value)
