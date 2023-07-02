from rdflib import DCTERMS, URIRef

from paradicms_etl.models.dc.dcterms_properties_mixin import DctermsPropertiesMixin
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class DcModel(ResourceBackedModel, DctermsPropertiesMixin):
    class Builder(ResourceBackedModel.Builder, DctermsPropertiesMixin.Builder):
        pass

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedModel.json_ld_context(),
            DctermsPropertiesMixin.json_ld_context(),
        )

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return DCTERMS.title
