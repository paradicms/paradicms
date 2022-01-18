from typing import Optional

from rdflib import BNode, RDF

from paradicms_etl.model import Model
from paradicms_etl.models.rights import Rights
from paradicms_etl.utils.resource_builder import ResourceBuilder


class Text(Model):
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
        Model.__init__(self, *args, **kwds)
        self.value

    @classmethod
    def from_fields(cls, value: str, *, rights: Optional[Rights] = None) -> "Text":
        return cls(
            ResourceBuilder(BNode()).add(RDF.value, value).add_rights(rights).build()
        )

    @property
    def rights(self) -> Optional[Rights]:
        return Rights.from_rdf(resource=self._resource)

    @property
    def value(self) -> str:
        return self._required_str_value(RDF.value)
