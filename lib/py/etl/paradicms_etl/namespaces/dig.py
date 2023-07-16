from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class DIG(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.ics.forth.gr/isl/CRMdig/")

    # Resources
    D1_Digital_Object: URIRef
