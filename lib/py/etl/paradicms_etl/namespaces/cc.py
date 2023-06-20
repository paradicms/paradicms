from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class CC(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://creativecommons.org/ns#")

    # Resources
    License: URIRef
