from rdflib import URIRef, RDFS

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Property(ResourceBackedNamedModel):
    class Builder(ResourceBackedNamedModel.Builder):
        def build(self) -> "Property":
            return Property(self._resource)

        def set_range(self, *, range: URIRef) -> "ResourceBackedNamedModel.Builder":
            self.set(RDFS.range, range)
            return self

    @classmethod
    def builder(cls, *, uri: URIRef):
        return cls.Builder(uri=uri)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            {"range": {"@id": str(RDFS.range), "@type": "@id"}},
        )
