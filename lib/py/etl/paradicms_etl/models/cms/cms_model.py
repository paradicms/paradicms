import rdflib
from rdflib import URIRef

import paradicms_etl
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.namespaces.bind_namespaces import EXCLUDE_RDFLIB_NAMESPACE_PREFIXES
from paradicms_etl.utils.module_namespaces import module_namespaces
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsModel(ResourceBackedModel):
    @classmethod
    def json_ld_context(cls):
        """
        Return a JSON-LD context that can be used to parse/serialize a JSON version of this model.
        """

        context = {}
        for namespace_prefix, namespace in module_namespaces(
            rdflib.namespace, paradicms_etl.namespaces
        ).items():
            if namespace_prefix in EXCLUDE_RDFLIB_NAMESPACE_PREFIXES:
                continue
            context[namespace_prefix] = str(namespace)
        return safe_dict_update(ResourceBackedModel.json_ld_context(), context)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        assert cls.__name__.startswith("Cms")
        return getattr(CMS, cls.__name__[len("Cms") :])
