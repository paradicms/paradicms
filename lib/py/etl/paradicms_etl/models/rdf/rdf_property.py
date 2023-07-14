from typing import Union, Text, Optional

from rdflib import URIRef, RDFS, XSD, Graph, RDF

from paradicms_etl.models.foaf.foaf_images_mixin import FoafImagesMixin
from paradicms_etl.models.property import Property
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class RdfProperty(ResourceBackedModel, FoafImagesMixin, Property):
    class Builder(ResourceBackedModel.Builder, FoafImagesMixin.Builder):
        def build(self) -> "RdfProperty":
            return RdfProperty(self._resource)

        def set_comment(self, comment: Union[str, Text]) -> "RdfProperty.Builder":
            self.set(RDFS.comment, comment)
            return self

        def set_filterable(self, filterable: bool) -> "RdfProperty.Builder":
            self.set(CMS.propertyFilterable, filterable)
            return self

        def set_order(self, order: int) -> "RdfProperty.Builder":
            self.set(CMS.propertyOrder, order)
            return self

        def set_range(self, range_: URIRef) -> "RdfProperty.Builder":
            self.set(RDFS.range, range_)
            return self

        def set_searchable(self, searchable: bool) -> "RdfProperty.Builder":
            self.set(CMS.propertySearchable, searchable)
            return self

    def __init__(self, *args, **kwds):
        ResourceBackedModel.__init__(self, *args, **kwds)
        self.label

    @classmethod
    def builder(cls, *, label: str, uri: URIRef):
        builder = cls.Builder(Graph().resource(uri))
        builder.add(RDFS.label, label)
        return builder

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedModel.json_ld_context(),
            FoafImagesMixin.json_ld_context(),
            {
                "@vocab": str(RDFS),
                # "comment": {"@id": str(RDFS.comment)},
                "filterable": {
                    "@id": str(CMS.propertyFilterable),
                    "@type": str(XSD.boolean),
                },
                # "label": {"@id": str(RDFS.label)},
                "order": {"@id": str(CMS.propertyOrder)},
                "range": {"@id": str(RDFS.range), "@type": "@id"},
                "searchable": {
                    "@id": str(CMS.propertySearchable),
                    "@type": str(XSD.boolean),
                },
            },
        )

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label

    @property
    def range(self) -> Optional[URIRef]:
        return self._optional_value(RDFS.range, self._map_term_to_uri)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return RDF.Property
