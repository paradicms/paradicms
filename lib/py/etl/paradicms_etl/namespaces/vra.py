from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class VRA(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://purl.org/vra/")

    culturalContext: URIRef
    endDate: URIRef
    inscription: URIRef
    material: URIRef
    startDate: URIRef
    stylePeriod: URIRef
    technique: URIRef
