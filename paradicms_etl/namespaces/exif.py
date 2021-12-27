from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class EXIF(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.w3.org/2003/12/exif/ns#")

    height: URIRef
    width: URIRef
