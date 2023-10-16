from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class CMS(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.paradicms.org/ns/cms#")

    # Properties
    imageCopyable: URIRef
    imageMaxHeight: URIRef
    imageMaxWidth: URIRef
    imageSrc: URIRef
    propertyFilterable: URIRef
    propertyHidden: URIRef
    propertyOrder: URIRef
    propertySearchable: URIRef

    # Resources
    ImageData: URIRef
    PropertyGroup: URIRef
    WikidataConcept: URIRef
    WikidataLocation: URIRef
    WikidataPerson: URIRef
    WikidataWork: URIRef
