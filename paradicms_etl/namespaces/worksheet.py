from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class WORKSHEET(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.paradicms.org/ns/worksheet#")

    # Properties
    featureSet: URIRef

    # Resources
    Feature: URIRef
    FeatureSet: URIRef
