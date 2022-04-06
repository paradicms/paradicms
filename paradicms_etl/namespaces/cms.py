from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class CMS(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.paradicms.org/ns/cms#")

    # Properties
    collection: URIRef
    institution: URIRef
    imageCopyable: URIRef
    imageMaxHeight: URIRef
    imageMaxWidth: URIRef
    imageSrc: URIRef
    work: URIRef
    worksheetFeatureSet: URIRef

    # Resources
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
    WorkCreation: URIRef
    WorkEvent: URIRef
    WorksheetFeature: URIRef
    WorksheetFeatureSet: URIRef
