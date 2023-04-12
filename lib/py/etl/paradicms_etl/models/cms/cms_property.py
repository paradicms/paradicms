from typing import Union, Text, Optional

from rdflib import URIRef, RDFS, SH, XSD

from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.models.property import Property
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsProperty(CmsNamedModel, Property):
    class Builder(CmsNamedModel.Builder):
        def __init__(self, *, label: str, uri: URIRef):
            CmsNamedModel.Builder.__init__(self, uri=uri)
            self.add(RDFS.label, label)

        def add_group_uri(self, group_uri: URIRef) -> "CmsProperty.Builder":
            self.add(CMS.propertyGroup, group_uri)
            return self

        def build(self) -> "CmsProperty":
            return CmsProperty(self._resource)

        def set_comment(self, comment: Union[str, Text]) -> "CmsProperty.Builder":
            self.set(RDFS.comment, comment)
            return self

        def set_filterable(self, filterable: bool) -> "CmsProperty.Builder":
            self.set(CMS.propertyFilterable, filterable)
            return self

        def set_order(self, order: int) -> "CmsProperty.Builder":
            self.set(SH.order, order)
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
        return cls.Builder(label=label, uri=uri)

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
                "group": {"@id": str(CMS.propertyGroup), "@type": "@id"},
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
        return self._required_str_value(RDFS.label)

    @property
    def range(self) -> Optional[URIRef]:
        return self._optional_uri_value(RDFS.range)
