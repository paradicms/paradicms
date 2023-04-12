from rdflib import BNode, RDF
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_model import CmsModel
from paradicms_etl.models.cms.cms_rights_mixin import CmsRightsMixin
from paradicms_etl.models.text import Text
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsText(CmsModel, CmsRightsMixin, Text):
    class Builder(CmsModel.Builder, CmsRightsMixin.Builder):
        def __init__(self, *, value: str):
            CmsModel.Builder.__init__(self, BNode())
            self.add(RDF.value, value)

        def build(self) -> "CmsText":
            return CmsText(self._resource)

    def __init__(self, resource: Resource):
        CmsModel.__init__(self, resource)
        self.value

    @classmethod
    def builder(cls, value: str) -> Builder:
        return cls.Builder(value=value)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            safe_dict_update(
                CmsModel.json_ld_context(),
                {
                    "value": {"@id": str(RDF.value)},
                },
            ),
            CmsRightsMixin.json_ld_context(),
        )

    @property
    def value(self) -> str:
        return self._required_str_value(RDF.value)
