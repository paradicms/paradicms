from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class TIME(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.w3.org/2006/time#")

    # Properties
    day: URIRef
    hour: URIRef
    minute: URIRef
    month: URIRef
    year: URIRef

    # Resources
    DateTimeDescription: URIRef
