from typing import Optional, Tuple, Union

from rdflib import Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.property import Property
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS


class Work(_NamedModel):
    def __init__(self, *args, **kwds):
        _NamedModel.__init__(self, *args, **kwds)
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
        abstract: Optional[str] = None,
        page: Union[
            str, URIRef, None
        ] = None,  # foaf:page, linking to a human-readable page; if not specified, defaults to URI
        properties: Tuple[Property, ...] = (),
        rights: Optional[Rights] = None,
    ):
        resource = cls._create_resource(identifier=uri)
        if abstract is not None:
            resource.add(DCTERMS.abstract, Literal(abstract))
        for collection_uri in collection_uris:
            resource.add(CMS.collection, collection_uri)
        resource.add(CMS.institution, institution_uri)
        if page is not None:
            if isinstance(page, URIRef):
                resource.add(FOAF.page, page)
            else:
                resource.add(FOAF.page, Literal(str(page)))
        for property_ in properties:
            resource.add(property_.uri, property_.value)
        if rights is not None:
            rights.to_rdf(add_to_resource=resource)
        resource.add(DCTERMS.title, Literal(title))
        return cls(resource)

    @property
    def collection_uris(self) -> Tuple[URIRef, ...]:
        return tuple(
            resource.identifier
            for resource in self._resource.objects(CMS.collection)
            if isinstance(resource, Resource)
            and isinstance(resource.identifier, URIRef)
        )

    @property
    def creator(self) -> Union[str, URIRef, None]:
        str_value = self._optional_str_value(DCTERMS.creator)
        if str_value is not None:
            return str_value
        return self._optional_uri_value(DCTERMS.creator)

    @property
    def institution_uri(self):
        return self._required_uri_value(CMS.institution)

    @property
    def rights(self) -> Optional[Rights]:
        return Rights.from_rdf(resource=self._resource)

    @property
    def title(self) -> str:
        return self._required_str_value(DCTERMS.title)
