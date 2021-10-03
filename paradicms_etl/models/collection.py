from typing import Optional, Tuple

from rdflib import Literal, URIRef
from rdflib.namespace import DCTERMS

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.property import Property
from paradicms_etl.namespace import CMS


class Collection(_NamedModel):
    def __init__(self, *args, **kwds):
        _NamedModel.__init__(self, *args, **kwds)
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
        abstract: Optional[str] = None,
        properties: Tuple[Property, ...] = ()
    ):
        resource = cls._create_resource(identifier=uri)
        if abstract is not None:
            resource.add(DCTERMS.abstract, Literal(abstract))
        resource.add(CMS.institution, institution_uri)
        for property_ in properties:
            resource.add(property_.uri, property_.value)
        resource.add(DCTERMS.title, Literal(title))
        return cls(resource=resource)

    @property
    def label(self) -> str:
        return self.title

    @property
    def institution_uri(self) -> URIRef:
        return self._required_uri_value(CMS.institution)

    @property
    def title(self) -> str:
        return self._required_str_value(DCTERMS.title)
