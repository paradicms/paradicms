from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class CMS(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.paradicms.org/ns/cms#")

    # Properties
    event: URIRef
    imageCopyable: URIRef
    imageMaxHeight: URIRef
    imageMaxWidth: URIRef
    imageSrc: URIRef
    propertyFilterable: URIRef
    propertyHidden: URIRef
    propertyOrder: URIRef
    propertySearchable: URIRef

    # Resources
    Collection: URIRef
    Configuration: URIRef
    Event: URIRef
    Image: URIRef
    ImageData: URIRef
    Location: URIRef
    Property: URIRef
    PropertyGroup: URIRef
    Text: URIRef
    Work: URIRef
    WorkClosing: URIRef
    WorkCreation: URIRef
    WorkEvent: URIRef
    WorkOpening: URIRef
