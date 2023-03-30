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
    propertyFilterable: URIRef
    propertyGroup: URIRef
    propertySearchable: URIRef
    thumbnailOf: URIRef
    work: URIRef

    # Resources
    Agent: URIRef
    Collection: URIRef
    Configuration: URIRef
    Concept: URIRef
    DateTimeDescription: URIRef
    Event: URIRef
    Image: URIRef
    License: URIRef
    Location: URIRef
    Organization: URIRef
    Person: URIRef
    Property: URIRef
    PropertyGroup: URIRef
    RightsStatement: URIRef
    Text: URIRef
    WikidataItem: URIRef
    Work: URIRef
    WorkClosing: URIRef
    WorkCreation: URIRef
    WorkEvent: URIRef
    WorkOpening: URIRef
