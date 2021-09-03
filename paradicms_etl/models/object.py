from typing import Optional, Tuple, Union

from rdflib import Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.property import Property
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS


class Object(_NamedModel):
    def __init__(
        self,
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
        _NamedModel.__init__(self, uri=uri)
        if abstract is not None:
            self.resource.add(DCTERMS.abstract, Literal(abstract))
        for collection_uri in collection_uris:
            self.resource.add(CMS.collection, collection_uri)
        self.resource.add(CMS.institution, institution_uri)
        if page is not None:
            if isinstance(page, URIRef):
                self.resource.add(FOAF.page, page)
            else:
                self.resource.add(FOAF.page, Literal(str(page)))
        for property_ in properties:
            self.resource.add(property_.uri, property_.value)
        if rights is not None:
            rights.to_rdf(add_to_resource=self.resource)
        self.resource.add(DCTERMS.title, Literal(title))
