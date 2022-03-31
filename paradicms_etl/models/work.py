from typing import Optional, Tuple, Union

from rdflib import URIRef, RDF
from rdflib.namespace import DCTERMS, FOAF
from rdflib.resource import Resource

from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.property import Property
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder


class Work(NamedModel):
    """
    Model of a work such as a painting or a garment.

    This is the same concept as Work in VRA Core.
    """

    def __init__(self, *args, **kwds):
        NamedModel.__init__(self, *args, **kwds)
        self.collection_uris
        self.institution_uri
        self.title

    @classmethod
    def from_fields(
        cls,
        *,
        # Linking up to the parent (relational style) and grandparent makes it easier to do
        # page generation and search indexing downstream.
        collection_uris: Tuple[URIRef, ...],
        institution_uri: URIRef,
        title: str,
        uri: URIRef,
        abstract: Union[str, Text, None] = None,
        page: Union[
            str, URIRef, None
        ] = None,  # foaf:page, linking to a human-readable page; if not specified, defaults to URI
        properties: Tuple[Property, ...] = (),
        rights: Optional[Rights] = None,
    ) -> "Work":
        return cls(
            ResourceBuilder(uri)
            .add(RDF.type, CMS[cls.__name__])
            .add(DCTERMS.abstract, abstract)
            .add(CMS.collection, collection_uris)
            .add(CMS.institution, institution_uri)
            .add(FOAF.page, page)
            .add_properties(properties)
            .add_rights(rights)
            .add(DCTERMS.title, title)
            .build()
        )

    @property
    def abstract(self) -> Union[str, Text, None]:
        return self._optional_str_or_text_value(DCTERMS.abstract)

    @property
    def collection_uris(self) -> Tuple[URIRef, ...]:
        return tuple(
            resource.identifier
            for resource in self._resource.objects(CMS.collection)
            if isinstance(resource, Resource)
            and isinstance(resource.identifier, URIRef)
        )

    @property
    def institution_uri(self):
        return self._required_uri_value(CMS.institution)

    @property
    def label(self) -> str:
        return self.title

    @property
    def rights(self) -> Optional[Rights]:
        return Rights.from_rdf(resource=self._resource)

    @property
    def title(self) -> str:
        return self._required_str_value(DCTERMS.title)
