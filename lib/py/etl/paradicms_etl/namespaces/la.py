from rdflib import Namespace, URIRef
from rdflib.namespace import DefinedNamespace


class LA(DefinedNamespace):
    _fail = True
    _NS = Namespace("https://linked.art/ns/terms/")

    # Properties
    access_point: URIRef
    digitally_carried_by: URIRef
    digitally_shown_by: URIRef
