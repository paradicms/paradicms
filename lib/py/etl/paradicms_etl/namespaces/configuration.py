from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class CONFIGURATION(DefinedNamespace):
    _fail = True
    _NS = Namespace("http://www.paradicms.org/ns/configuration#")

    # Properties
    app: URIRef

    # Resources
    AppConfiguration: URIRef
