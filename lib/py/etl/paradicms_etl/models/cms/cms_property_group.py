from typing import Union, Text

from rdflib import URIRef, RDFS, Graph, DCTERMS

from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.models.foaf.foaf_images_mixin import FoafImagesMixin
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_group import PropertyGroup
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsPropertyGroup(CmsNamedModel, FoafImagesMixin, PropertyGroup):
    class Builder(CmsNamedModel.Builder, FoafImagesMixin.Builder):
        def add_property(self, property_: Union[Property, URIRef]):
            self.add(DCTERMS.hasPart, property_)
            return self

        def build(self) -> "CmsPropertyGroup":
            return CmsPropertyGroup(self._resource)

        def set_comment(self, comment: Union[str, Text]) -> "CmsPropertyGroup.Builder":
            self.set(RDFS.comment, comment)
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
            FoafImagesMixin.json_ld_context(),
            {
                "comment": {"@id": str(RDFS.comment)},
                "hasPart": {"@id": str(DCTERMS.hasPart)},
                "label": {"@id": str(RDFS.label)},
            },
        )

    @property
    def label(self) -> str:
        return self._required_value(RDFS.label, self._map_str_value)

    @property
    def uri(self) -> URIRef:
        return super().uri
