from typing import Optional, Tuple

from rdflib import URIRef, RDF
from rdflib.namespace import DCTERMS, FOAF
from rdflib.resource import Resource

from paradicms_etl.models.property import Property
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Institution(ResourceBackedNamedModel):
    LABEL_PROPERTY = FOAF.name

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS[self.__class__.__name__])
        ResourceBackedNamedModel.__init__(self, resource)
        self.name

    @classmethod
    def from_fields(
        cls,
        *,
        # See note in Collection re: why there are no links to collections here.
        name: str,
        uri: URIRef,
        abstract: Optional[str] = None,
        properties: Tuple[Property, ...] = (),
    ) -> "Institution":
        return cls(
            ResourceBuilder(uri)
            .add(DCTERMS.abstract, abstract)
            .add(FOAF.name, name)
            .add_properties(properties)
            .build()
        )

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            {
                "abstract": {"@id": str(DCTERMS.abstract)},
                "name": {"@id": str(FOAF.name)},
                "page": {"@id": str(FOAF.page), "@type": "@id"},
            },
        )

    @property
    def label(self) -> str:
        return self.name

    @property
    def name(self) -> str:
        return self._required_str_value(FOAF.name)
