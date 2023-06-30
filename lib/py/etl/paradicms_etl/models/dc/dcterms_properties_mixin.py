from datetime import datetime
from typing import Optional, Union, Any, Tuple

from rdflib import DCTERMS, DCMITYPE, URIRef, XSD, OWL

from paradicms_etl.models.image import Image
from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.location import Location
from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.text import Text


class DctermsPropertiesMixin(ResourceBackedModelMixin, RightsMixin):
    class Builder(
        ResourceBackedModelMixin.Builder, ImagesMixin.Builder, RightsMixin.Builder
    ):
        def add_alternative(self, alternative: str) -> "DctermsPropertiesMixin.Builder":
            self.add(DCTERMS.alternative, alternative)
            return self

        def add_contributor(self, contributor: Any) -> "DctermsPropertiesMixin.Builder":
            self.add(DCTERMS.contributor, contributor)
            return self

        def add_creator(self, creator: Any) -> "DctermsPropertiesMixin.Builder":
            self.add(DCTERMS.creator, creator)
            return self

        def add_image(
            self, image: Union[Image, URIRef]
        ) -> "DctermsPropertiesMixin.Builder":
            # (image, dcterms:source, this) in this graph.
            # Dublin Core doesn't have an inverse of dcterms:source.
            if isinstance(image, Image):
                image_uri = image.uri
            else:
                image_uri = image
            self._resource.graph.add(
                (image_uri, DCTERMS.source, self._resource.identifier)
            )
            return self

        def add_identifier(self, identifier: str) -> "DctermsPropertiesMixin.Builder":
            self.add(DCTERMS.identifier, identifier)
            return self

        def add_license(self, license: Any) -> "DctermsPropertiesMixin.Builder":
            self.add(DCTERMS.license, license)
            return self

        def add_provenance(self, provenance: str) -> "DctermsPropertiesMixin.Builder":
            self.add(DCTERMS.provenance, provenance)
            return self

        def add_relation(self, relation: URIRef) -> "DctermsPropertiesMixin.Builder":
            self.add(DCTERMS.relation, relation)
            return self

        def add_rights_holder(self, holder: Any) -> "DctermsPropertiesMixin.Builder":
            self.add(DCTERMS.rightsHolder, holder)
            return self

        def add_rights_statement(
            self, rights_statement: Any
        ) -> "DctermsPropertiesMixin.Builder":
            self.add(DCTERMS.rights, rights_statement)
            return self

        def add_same_as(self, same_as: URIRef) -> "DctermsPropertiesMixin.Builder":
            self.add(OWL.sameAs, same_as)
            return self

        def set_created(self, created: datetime) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS.created, created)
            return self

        def set_description(
            self, description: Union[str, Text]
        ) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS.description, description)
            return self

        def set_format(self, format_: str) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS["format"], format_)
            return self

        def set_identifier(self, identifier: str) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS.identifier, identifier)
            return self

        def set_modified(self, modified: datetime) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS.modified, modified)
            return self

        def set_source(self, source: URIRef) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS.source, source)
            return self

        def set_spatial(
            self, spatial: Union[str, Location]
        ) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS.spatial, spatial)
            return self

        def set_title(self, title: str) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS.title, title)
            return self

        def set_version(self, version: str) -> "DctermsPropertiesMixin.Builder":
            self.set(DCTERMS.hasVersion, version)
            return self

    @property
    def contributors(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(DCTERMS.contributor, self._map_str_or_uri_value))

    @property
    def creators(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(DCTERMS.creator, self._map_str_or_uri_value))

    @classmethod
    def json_ld_context(cls):
        json_ld_context = {
            "@vocab": str(DCTERMS),
            "dcmitype": str(DCMITYPE),
            "dcterms": str(DCTERMS),
            "created": {
                "@id": str(DCTERMS.created),
                "@type": str(XSD.dateTime),
            },
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
        return json_ld_context

    @property
    def image_uris(self) -> Tuple[URIRef, ...]:
        return tuple(
            subject
            for subject in self._resource.graph.subjects(
                object=DCTERMS.source, predicate=self._resource.identifier
            )
            if isinstance(subject, URIRef)
        )

    @property
    def licenses(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(DCTERMS.license, self._map_uri_value))

    @property
    def rights_holders(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(DCTERMS.rightsHolder, self._map_str_or_uri_value))

    @property
    def rights_statements(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(self._values(DCTERMS.rights, self._map_str_or_uri_value))

    # @property
    # def source(self) -> Optional[URIRef]:
    #     return self._optional_value(DCTERMS.source, self._map_uri_value)

    @property
    def title(self) -> Optional[str]:
        return self._optional_value(DCTERMS.title, self._map_str_value)
