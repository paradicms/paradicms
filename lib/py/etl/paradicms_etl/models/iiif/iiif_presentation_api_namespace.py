from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class IiifPresentationApiNamespace(DefinedNamespace):
    fail = True
    _NS = Namespace("http://iiif.io/api/presentation/2#")

    # Properties
    attributionLabel: URIRef
    hasCanvases: URIRef
    hasSequences: URIRef
    hasStartCanvas: URIRef

    # Resources
    Canvas: URIRef
    Manifest: URIRef
    Sequence: URIRef
