from typing import Tuple

from rdflib import URIRef, OWL

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import CMS


class CmsModel(ResourceBackedModel):
    # @classmethod
    # def json_ld_context(cls):
    #     """
    #     Return a JSON-LD context that can be used to parse/serialize a JSON version of this model.
    #     """
    #
    #     context = {}
    #     for namespace_prefix, namespace in module_namespaces(
    #         rdflib.namespace, paradicms_etl.namespaces
    #     ).items():
    #         if namespace_prefix in EXCLUDE_RDFLIB_NAMESPACE_PREFIXES:
    #             continue
    #         context[namespace_prefix] = str(namespace)
    #     return safe_dict_update(ResourceBackedModel.json_ld_context(), context)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        assert cls.__name__.startswith("Cms")
        return getattr(CMS, cls.__name__[len("Cms") :])

    @property
    def same_as_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(OWL.sameAs, self._map_uri_value))
