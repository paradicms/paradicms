from rdflib import URIRef

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS


class CmsNamedModel(ResourceBackedNamedModel):
    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        assert cls.__name__.startswith("Cms")
        return getattr(CMS, cls.__name__[len("Cms") :])
