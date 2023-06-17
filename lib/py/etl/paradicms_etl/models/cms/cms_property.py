from typing import Union, Text, Optional

from rdflib import URIRef, RDFS, SH, XSD, Graph

from paradicms_etl.models.cms.cms_images_mixin import CmsImagesMixin
from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.models.property import Property
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsProperty(CmsNamedModel, CmsImagesMixin, Property):
    class Builder(CmsNamedModel.Builder, CmsImagesMixin.Builder):
        def build(self) -> "CmsProperty":
            return CmsProperty(self._resource)

        def set_comment(self, comment: Union[str, Text]) -> "CmsProperty.Builder":
            self.set(RDFS.comment, comment)
            return self

        def set_filterable(self, filterable: bool) -> "CmsProperty.Builder":
            self.set(CMS.propertyFilterable, filterable)
            return self

        def set_order(self, order: int) -> "CmsProperty.Builder":
            self.set(CMS.propertyOrder, order)
            return self

        def set_range(self, range_: URIRef) -> "CmsProperty.Builder":
            self.set(RDFS.range, range_)
            return self

        def set_searchable(self, searchable: bool) -> "CmsProperty.Builder":
            self.set(CMS.propertySearchable, searchable)
            return self

    def __init__(self, *args, **kwds):
        CmsNamedModel.__init__(self, *args, **kwds)
        self.label

    @classmethod
    def builder(cls, *, label: str, uri: URIRef):
        builder = cls.Builder(Graph().resource(uri))
        builder.add(RDFS.label, label)
        return builder

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsNamedModel.json_ld_context(),
            {
                "comment": {"@id": str(RDFS.comment)},
                "filterable": {
                    "@id": str(CMS.propertyFilterable),
                    "@type": str(XSD.boolean),
                },
                "label": {"@id": str(RDFS.label)},
                "order": {"@id": str(SH.order)},
                "range": {"@id": str(RDFS.range), "@type": "@id"},
                "searchable": {
                    "@id": str(CMS.propertySearchable),
                    "@type": str(XSD.boolean),
                },
            },
        )

    @property
    def label(self) -> str:
        return self._required_value(RDFS.label, self._map_str_value)

    @property
    def range(self) -> Optional[URIRef]:
        return self._optional_value(RDFS.range, self._map_uri_value)

    @property
    def uri(self) -> URIRef:
        return super().uri
