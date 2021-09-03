from typing import Optional, Tuple

from rdflib import Literal, URIRef
from rdflib.namespace import DCTERMS

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.property import Property
from paradicms_etl.namespace import CMS


class Collection(_NamedModel):
    def __init__(
        self,
        *,
        # Linking up to the parent (relational style )instead of down to child objects
        # makes it easier to do page generation and search indexing downstream.
        institution_uri: URIRef,
        title: str,
        uri: URIRef,
        abstract: Optional[str] = None,
        properties: Tuple[Property, ...] = ()
    ):
        _NamedModel.__init__(self, uri=uri)
        if abstract is not None:
            self.resource.add(DCTERMS.abstract, Literal(abstract))
        self.resource.add(CMS.institution, institution_uri)
        for property_ in properties:
            self.resource.add(property_.uri, property_.value)
        self.resource.add(DCTERMS.title, Literal(title))

    @property
    def institution_uri(self):
        return self._required_uri_value(CMS.institution)

    @property
    def title(self):
        return self._required_str_value(DCTERMS.title)
