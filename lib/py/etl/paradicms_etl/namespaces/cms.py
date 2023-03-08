from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class CMS(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.paradicms.org/ns/cms#")

    # Properties
    collection: URIRef
    imageCopyable: URIRef
    imageMaxHeight: URIRef
    imageMaxWidth: URIRef
    imageSrc: URIRef
    thumbnailOf: URIRef
    work: URIRef

    # Resources
    Agent: URIRef
    Collection: URIRef
    Configuration: URIRef
    DateTimeDescription: URIRef
    Event: URIRef
    Image: URIRef
    Institution: URIRef
    License: URIRef
    Location: URIRef
    NamedValue: URIRef
    Organization: URIRef
    Person: URIRef
    RightsStatement: URIRef
    Text: URIRef
    WikidataItem: URIRef
    Work: URIRef
    WorkClosing: URIRef
    WorkCreation: URIRef
    WorkEvent: URIRef
    WorkOpening: URIRef
