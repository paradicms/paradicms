from typing import Optional

from rdflib import Literal, URIRef
from rdflib.namespace import FOAF

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.namespace import CONTACT


class Person(_NamedModel):
    def ___init__(
        self,
        *,
        name: str,
        uri: URIRef,
        family_name: Optional[str] = None,
        given_name: Optional[str] = None,
        sort_name: Optional[str] = None,
    ):
        _NamedModel.__init__(self, uri=uri)
        if family_name is not None:
            self.resource.add(FOAF.familyName, Literal(family_name))
        if given_name is not None:
            self.resource.add(FOAF.givenName, Literal(given_name))
        self.resource.add(FOAF.name, Literal(name))
        if sort_name is not None:
            self.resource.add(CONTACT.sortName, Literal(sort_name))
