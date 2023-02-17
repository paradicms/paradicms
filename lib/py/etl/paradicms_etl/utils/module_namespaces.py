from inspect import isclass
from types import ModuleType
from typing import Dict, Tuple, Union, Type

from rdflib.namespace import DefinedNamespace, Namespace, ClosedNamespace


def module_namespaces(
    *namespace_modules: Tuple[ModuleType, ...]
) -> Dict[str, Union[Type[DefinedNamespace], Namespace]]:
    namespaces_by_prefix = {}
    for namespace_module in namespace_modules:
        for attr in dir(namespace_module):
            if attr.upper() != attr:
                continue
            value = getattr(namespace_module, attr)
            if (
                isinstance(value, Namespace)
                or isinstance(value, ClosedNamespace)
                or (isclass(value) and issubclass(value, DefinedNamespace))
            ):
                namespaces_by_prefix[attr.lower()] = value
    return namespaces_by_prefix
