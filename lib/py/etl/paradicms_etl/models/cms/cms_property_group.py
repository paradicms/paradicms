from typing import Union, Text

from rdflib import URIRef, RDFS, Graph, DCTERMS

from paradicms_etl.models.cms.cms_model import CmsModel
from paradicms_etl.models.foaf.foaf_images_mixin import FoafImagesMixin
from paradicms_etl.models.property_group import PropertyGroup
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsPropertyGroup(CmsModel, FoafImagesMixin, PropertyGroup):
    class Builder(CmsModel.Builder, FoafImagesMixin.Builder):
        def add_property(self, property_: URIRef):
            self.add(DCTERMS.hasPart, property_)
            return self

        def build(self) -> "CmsPropertyGroup":
            return CmsPropertyGroup(self._resource)

        def set_comment(self, comment: Union[str, Text]) -> "CmsPropertyGroup.Builder":
            self.set(RDFS.comment, comment)
            return self

        def set_label(self, label: str) -> "CmsPropertyGroup.Builder":
            self.set(RDFS.label, label)
            return self

    def __init__(self, *args, **kwds):
        CmsModel.__init__(self, *args, **kwds)
        self.label

    @classmethod
    def builder(cls, *, label: str, uri: URIRef):
        builder = cls.Builder(Graph().resource(uri))
        builder.set_label(label)
        return builder

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsModel.json_ld_context(),
            FoafImagesMixin.json_ld_context(),
            {
                "comment": {"@id": str(RDFS.comment)},
                "hasPart": {"@id": str(DCTERMS.hasPart)},
                "label": {"@id": str(cls.label_property_uri())},
            },
        )

    @property
    def label(self) -> str:
        return self._required_value(self.label_property_uri(), self._map_str_value)

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label
