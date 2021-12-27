from rdflib import DC, DCTERMS, FOAF, OWL, SKOS
from rdflib.namespace import NamespaceManager


def bind_namespaces(namespace_manager: NamespaceManager) -> NamespaceManager:
    from paradicms_etl.namespaces import CMS, CONTACT, EXIF, PROV, SCHEMA, TIME, VRA

    namespace_manager.bind("paradicms", CMS)
    namespace_manager.bind("contact", CONTACT)
    namespace_manager.bind("creativecommons", "http://creativecommons.org/ns#")
    namespace_manager.bind("dc", DC)
    # namespace_manager.bind("dcmitype", DCMITYPE)
    namespace_manager.bind("dcterms", DCTERMS)
    namespace_manager.bind("exif", EXIF)
    namespace_manager.bind("foaf", FOAF)
    namespace_manager.bind("owl", OWL)
    namespace_manager.bind("prov", PROV)
    namespace_manager.bind("schema", SCHEMA)
    namespace_manager.bind("skos", SKOS)
    namespace_manager.bind("time", TIME)
    namespace_manager.bind("vra", VRA)
    return namespace_manager
