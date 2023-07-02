from rdflib import URIRef

from paradicms_etl.models.dc.dc_model import DcModel
from paradicms_etl.models.dc.dcterms_properties_mixin import DctermsPropertiesMixin
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel


class DcNamedModel(ResourceBackedNamedModel, DctermsPropertiesMixin):
    class Builder(ResourceBackedNamedModel.Builder, DctermsPropertiesMixin.Builder):
        pass

    @classmethod
    def json_ld_context(cls):
        return DcModel.json_ld_context()

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return DcModel.label_property_uri()

    @property
    def uri(self) -> URIRef:
        return super().uri
