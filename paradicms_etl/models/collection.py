from typing import Tuple, Union

from rdflib import URIRef, RDF
from rdflib.namespace import DCTERMS

from paradicms_etl.models.property import Property
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder


class Collection(ResourceBackedNamedModel):
    def __init__(self, *args, **kwds):
        ResourceBackedNamedModel.__init__(self, *args, **kwds)
        self.institution_uri
        self.title

    @classmethod
    def from_fields(
        cls,
        *,
        # Linking up to the parent (relational style) instead of down to child works
        # makes it easier to do page generation and search indexing downstream.
        institution_uri: URIRef,
        title: str,
        uri: URIRef,
        abstract: Union[str, Text, None] = None,
        properties: Tuple[Property, ...] = ()
    ) -> "Collection":
        return cls(
            ResourceBuilder(uri)
            .add(RDF.type, CMS[cls.__name__])
            .add(DCTERMS.abstract, abstract)
            .add(CMS.institution, institution_uri)
            .add(DCTERMS.title, title)
            .add_properties(properties)
            .build()
        )

    @property
    def label(self) -> str:
        return self.title

    @property
    def institution_uri(self) -> URIRef:
        return self._required_uri_value(CMS.institution)

    @property
    def title(self) -> str:
        return self._required_str_value(DCTERMS.title)
