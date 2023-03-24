from typing import Union

from rdflib import URIRef, RDF, SH
from rdflib.namespace import DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import WORKSHEET


class WorksheetFeature(ResourceBackedNamedModel):
    class Builder(ResourceBackedNamedModel.Builder):
        def __init__(self, *, title: str, uri: URIRef):
            ResourceBackedNamedModel.Builder.__init__(self, uri=uri)
            self.set(DCTERMS.title, title)

        def add_feature_set_uri(self, feature_set_uri: URIRef) -> "Builder":
            self.add(WORKSHEET.featureSet, feature_set_uri)
            return self

        def build(self) -> "WorksheetFeature":
            return WorksheetFeature(self._resource)

        def set_description(self, description: Union[str, Text]) -> "Builder":
            self.set(DCTERMS.description, description)
            return self

        def set_order(self, order: int) -> "Builder":
            self.set(SH.order, order)
            return self

    def __init__(self, resource: Resource):
        resource.add(RDF.type, WORKSHEET.Feature)
        ResourceBackedNamedModel.__init__(self, resource)
        self.title

    @property
    def description(self) -> Union[str, Text, None]:
        return self._optional_str_or_text_value(DCTERMS.description)

    @property
    def label(self) -> str:
        return self.title

    @property
    def title(self) -> str:
        return self._required_str_value(DCTERMS.title)
