from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class SCHEMA(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://schema.org/")

    # Properties
    about: URIRef
    description: URIRef
    inLanguage: URIRef
    isbn: URIRef
    name: URIRef
    numberOfPages: URIRef

    # Resources
    Article: URIRef
    Book: URIRef
