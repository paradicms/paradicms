from rdflib import URIRef
from rdflib.namespace import DefinedNamespace, Namespace


class CRM(DefinedNamespace):
    # _fail = True
    _NS = Namespace("http://www.cidoc-crm.org/cidoc-crm/")

    # Properties
    P2_has_type: URIRef
    P104_is_subject_to: URIRef
    P67i_is_referred_to_by: URIRef
    P129i_is_subject_of: URIRef
    P138i_has_representation: URIRef
    P190_has_symbolic_content: URIRef

    # Resources
    E30_Right: URIRef
    E33_Linguistic_Object: URIRef
    E36_Visual_Item: URIRef
