from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class CONTACT(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.w3.org/2000/10/swap/pim/contact#")

    sortName: URIRef
