from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import DCTERMS, OWL, XSD, URIRef

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update

if TYPE_CHECKING:
    from paradicms_etl.models.date_time_union import DateTimeUnion
    from paradicms_etl.models.text import Text


class DcModel(ResourceBackedModel):
    class Builder(ResourceBackedModel.Builder):
        def add_same_as(self, same_as: URIRef) -> DcModel.Builder:
            self.add(OWL.sameAs, same_as)
            return self

        def set_created(self, created: DateTimeUnion) -> DcModel.Builder:
            self.set(DCTERMS.created, created)
            return self

        def set_description(self, description: str | Text) -> DcModel.Builder:
            self.set(DCTERMS.description, description)
            return self

        def set_modified(self, modified: DateTimeUnion) -> DcModel.Builder:
            self.set(DCTERMS.modified, modified)
            return self

        def set_title(self, title: str) -> DcModel.Builder:
            self.set(DCTERMS.title, title)
            return self

    @classmethod
    def json_ld_context(cls):
        json_ld_context = {
            "@vocab": str(DCTERMS),
            "created": {
                "@id": str(DCTERMS.created),
                "@type": str(XSD.dateTime),
            },
            "hasPart": {"@id": str(DCTERMS.hasPart), "@type": "@id"},
            "modified": {
                "@id": str(DCTERMS.modified),
                "@type": str(XSD.dateTime),
            },
            "relation": {"@id": str(DCTERMS.relation), "@type": "@id"},
            "sameAs": {"@id": OWL.sameAs, "@type": "@id"},
            "source": {"@id": str(DCTERMS.source), "@type": "@id"},
            "type": {"@id": str(DCTERMS.type), "@type": "@id"},
        }
        for property_ in (
            "contributor",
            "creator",
            "license",
            "rights",
            "rightsHolder",
        ):
            json_ld_context[property_] = {
                "@id": str(getattr(DCTERMS, property_)),
                "@type": "@id",
            }
            json_ld_context[property_ + "Literal"] = {
                "@id": str(getattr(DCTERMS, property_))
            }

        return safe_dict_update(ResourceBackedModel.json_ld_context(), json_ld_context)

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return DCTERMS.title
