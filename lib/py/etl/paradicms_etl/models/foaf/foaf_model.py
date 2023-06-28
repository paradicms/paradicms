from rdflib import URIRef, FOAF, OWL

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class FoafModel(ResourceBackedModel):
    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedModel.json_ld_context(),
            {
                "@vocab": str(FOAF),
                "sameAs": {"@id": str(OWL.sameAs), "@type": "@id"},
            },
        )

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        assert cls.__name__.startswith("Foaf")
        return getattr(FOAF, cls.__name__[len("Foaf") :])
