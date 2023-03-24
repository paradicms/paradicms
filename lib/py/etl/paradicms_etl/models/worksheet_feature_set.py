from typing import Union

from rdflib import URIRef, RDF
from rdflib.namespace import DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import WORKSHEET


class WorksheetFeatureSet(ResourceBackedNamedModel):
    class Builder(ResourceBackedNamedModel.Builder):
        def __init__(self, *, title: str, uri: URIRef):
            ResourceBackedNamedModel.Builder.__init__(self, uri=uri)
            self.add(DCTERMS.title, title)

        def add_description(
            self, description: Union[str, Text]
        ) -> "WorksheetFeatureSet.Builder":
            self.add(DCTERMS.description, description)
            return self

        def build(self):
            return WorksheetFeatureSet(self._resource)

    def __init__(self, resource: Resource):
        resource.add(RDF.type, WORKSHEET.FeatureSet)
        ResourceBackedNamedModel.__init__(self, resource)
        self.title

    @classmethod
    def builder(cls, *, title: str, uri: URIRef) -> Builder:
        return cls.Builder(title=title, uri=uri)

    @property
    def label(self) -> str:
        return self.title

    @property
    def title(self) -> str:
        return self._required_str_value(DCTERMS.title)
