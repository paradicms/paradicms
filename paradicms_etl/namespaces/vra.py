from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class VRA(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://purl.org/vra/")

    culturalContext: URIRef
    earliestDate: URIRef
    inscription: URIRef
    latestDate: URIRef
    material: URIRef
    stylePeriod: URIRef
    technique: URIRef
