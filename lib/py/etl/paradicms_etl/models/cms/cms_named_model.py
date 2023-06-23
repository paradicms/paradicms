from typing import Tuple

from rdflib import URIRef, OWL

from paradicms_etl.models.cms.cms_model import CmsModel
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS


class CmsNamedModel(ResourceBackedNamedModel):
    @classmethod
    def json_ld_context(cls):
        return CmsModel.json_ld_context()

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        assert cls.__name__.startswith("Cms")
        return getattr(CMS, cls.__name__[len("Cms") :])

    @property
    def same_as_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(OWL.sameAs, self._map_uri_value))
