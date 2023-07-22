from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class IiifPresentationApiV2Namespace(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://iiif.io/api/presentation/2#")

    # Properties
    attributionLabel: URIRef
    hasCanvases: URIRef
    hasImageAnnotations: URIRef
    hasSequences: URIRef
    hasStartCanvas: URIRef

    # Resources
    Canvas: URIRef
    Manifest: URIRef
    Sequence: URIRef
