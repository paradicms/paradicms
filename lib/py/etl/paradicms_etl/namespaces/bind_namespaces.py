from typing import TypeVar, Union

from rdflib import DC, DCTERMS, FOAF, OWL, SKOS, Graph, SDO
from rdflib.namespace import NamespaceManager

_NamespaceManagerT = TypeVar("_NamespaceManagerT", bound=Union[Graph, NamespaceManager])


def bind_namespaces(namespace_manager: _NamespaceManagerT) -> _NamespaceManagerT:
    from paradicms_etl.namespaces import (
        CMS,
        CONTACT,
        EXIF,
        PROV,
        TIME,
        VRA,
        WGS,
        WORKSHEET,
    )

    namespace_manager.bind("cms", CMS)
    namespace_manager.bind("contact", CONTACT)
    namespace_manager.bind("creativecommons", "http://creativecommons.org/ns#")
    namespace_manager.bind("dc", DC)
    # namespace_manager.bind("dcmitype", DCMITYPE)
    namespace_manager.bind("dcterms", DCTERMS)
    namespace_manager.bind("exif", EXIF)
    namespace_manager.bind("foaf", FOAF)
    namespace_manager.bind("owl", OWL)
    namespace_manager.bind("prov", PROV)
    namespace_manager.bind("sdo", SDO)
    namespace_manager.bind("skos", SKOS)
    namespace_manager.bind("time", TIME)
    namespace_manager.bind("vra", VRA)
    namespace_manager.bind("wgs", WGS)
    namespace_manager.bind("worksheet", WORKSHEET)
    return namespace_manager
