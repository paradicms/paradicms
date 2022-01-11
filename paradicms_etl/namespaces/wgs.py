from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class WGS(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.w3.org/2003/01/geo/wgs84_pos#")

    lat: URIRef
    long: URIRef
