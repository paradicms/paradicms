from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class SDOHTTP(DefinedNamespace):
    """
    schema.org with http:// instead of rdflib SDO's https://
    """

    _NS = Namespace("http://schema.org/")

    # Properties
    about: URIRef
    description: URIRef
    inLanguage: URIRef
    name: URIRef

    # Resources
    Article: URIRef
    Dataset: URIRef
