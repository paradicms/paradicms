from typing import Optional

from rdflib import BNode, RDF
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Text(ResourceBackedModel):
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

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS[self.__class__.__name__])
        ResourceBackedModel.__init__(self, resource)
        self.value

    @classmethod
    def from_fields(cls, value: str, *, rights: Optional[Rights] = None) -> "Text":
        return cls(
            ResourceBuilder(BNode()).add(RDF.value, value).add_rights(rights).build()
        )

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            safe_dict_update(
                ResourceBackedModel.json_ld_context(),
                {
                    "value": {"@id": str(RDF.value)},
                },
            ),
            Rights.json_ld_context(),
        )

    @property
    def rights(self) -> Optional[Rights]:
        return Rights.from_rdf(resource=self._resource)

    @property
    def value(self) -> str:
        return self._required_str_value(RDF.value)
