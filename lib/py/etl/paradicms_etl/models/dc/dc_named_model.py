from rdflib import URIRef

from paradicms_etl.models.dc.dcterms_properties_mixin import DctermsPropertiesMixin
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class DcNamedModel(ResourceBackedNamedModel, DctermsPropertiesMixin):
    class Builder(ResourceBackedNamedModel.Builder, DctermsPropertiesMixin.Builder):
        pass

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            DctermsPropertiesMixin.json_ld_context(),
        )

    @property
    def uri(self) -> URIRef:
        return super().uri
