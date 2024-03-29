from types import ModuleType
from typing import TypeVar, Union, Tuple

import rdflib
from rdflib import Graph
from rdflib.namespace import NamespaceManager

import paradicms_etl
from paradicms_etl.utils.module_namespaces import module_namespaces

_NamespaceManagerT = TypeVar("_NamespaceManagerT", bound=Union[Graph, NamespaceManager])


EXCLUDE_RDFLIB_NAMESPACE_PREFIXES = {
    "brick",
    "csvw",
    "odrl2",
    "prof",
    "qb",
    "sosa",
    "ssn",
    "vann",
    "void",
    "xmlns",
}


def bind_namespaces(
    namespace_manager: _NamespaceManagerT,
    *,
    additional_namespace_modules: Tuple[ModuleType, ...] = ()
) -> _NamespaceManagerT:
    for namespace_prefix, namespace in module_namespaces(
        *tuple([rdflib.namespace, paradicms_etl.namespaces] + list(additional_namespace_modules))  # type: ignore
    ).items():
        if namespace_prefix in EXCLUDE_RDFLIB_NAMESPACE_PREFIXES:
            continue
        namespace_manager.bind(namespace_prefix, namespace)
    return namespace_manager
