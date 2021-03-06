from typing import Union

from rdflib import URIRef, RDF
from rdflib.namespace import DCTERMS

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import WORKSHEET
from paradicms_etl.utils.resource_builder import ResourceBuilder


class WorksheetFeatureSet(ResourceBackedNamedModel):
    def __init__(self, *args, **kwds):
        ResourceBackedNamedModel.__init__(self, *args, **kwds)
        self.title

    @classmethod
    def from_fields(
        cls, *, title: str, uri: URIRef, abstract: Union[str, Text, None] = None
    ) -> "WorksheetFeatureSet":
        return cls(
            ResourceBuilder(uri)
            .add(RDF.type, WORKSHEET.FeatureSet)
            .add(DCTERMS.abstract, abstract)
            .add(DCTERMS.title, title)
            .build()
        )

    @property
    def label(self) -> str:
        return self.title

    @property
    def title(self) -> str:
        return self._required_str_value(DCTERMS.title)
