from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class PROV(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.w3.org/ns/prov#")

    wasDerivedFrom: URIRef
