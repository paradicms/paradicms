from rdflib import RDF, Graph, BNode
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_model import CmsModel
from paradicms_etl.models.cms.cms_rights_mixin import CmsRightsMixin
from paradicms_etl.models.text import Text
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsText(CmsModel, CmsRightsMixin, Text):
    class Builder(CmsModel.Builder, CmsRightsMixin.Builder):
        def build(self) -> "CmsText":
            return CmsText(self._resource)

    def __init__(self, resource: Resource):
        CmsModel.__init__(self, resource)
        self.value

    @classmethod
    def builder(cls, value: str) -> Builder:
        builder = cls.Builder(Graph().resource(BNode()))
        builder.add(RDF.value, value)
        return builder

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsModel.json_ld_context(),
            CmsRightsMixin.json_ld_context(),
            {
                "value": {"@id": str(RDF.value)},
            },
        )

    @property
    def value(self) -> str:
        return self._required_value(RDF.value, self._map_str_value)
