from rdflib import Namespace
from rdflib.namespace import DCTERMS, FOAF, NamespaceManager

CMS = Namespace("http://www.paradicms.org/ns#")
CONTACT = Namespace("http://www.w3.org/2000/10/swap/pim/contact#")
DCMITYPE = Namespace("http://purl.org/dc/dcmitype/")
EXIF = Namespace("http://www.w3.org/2003/12/exif/ns#")
PROV = Namespace("http://www.w3.org/ns/prov#")
SCHEMA = Namespace("http://schema.org/")
TIME = Namespace("http://www.w3.org/2006/time#")
VRA = Namespace("http://purl.org/vra/")

def bind_namespaces(namespace_manager: NamespaceManager):
    namespace_manager.bind("paradicms", CMS)
    namespace_manager.bind("contact", CONTACT)
    namespace_manager.bind("dcmitype", DCMITYPE)
    namespace_manager.bind("dcterms", DCTERMS)
    namespace_manager.bind("exif", EXIF)
    namespace_manager.bind("foaf", FOAF)
    namespace_manager.bind("prov", PROV)
    namespace_manager.bind("schema", SCHEMA)
    namespace_manager.bind("time", TIME)
    namespace_manager.bind("vra", VRA)
