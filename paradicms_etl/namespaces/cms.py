from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class CMS(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.paradicms.org/ns#")

    # Properties
    collection: URIRef
    institution: URIRef
    imageMaxHeight: URIRef
    imageMaxWidth: URIRef
    imageSrc: URIRef

    # Resources
    Collection: URIRef
    Configuration: URIRef
    Image: URIRef
    Institution: URIRef
    License: URIRef
    NamedValue: URIRef
    Organization: URIRef
    Person: URIRef
    RightsStatement: URIRef
    Text: URIRef
    Work: URIRef
