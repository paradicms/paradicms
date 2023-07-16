from rdflib import Namespace, URIRef
from rdflib.namespace import DefinedNamespace


class OaNamespace(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.w3.org/ns/oa#")

    # Properties
    hasBody: URIRef

    # Resources
    Annotation: URIRef
