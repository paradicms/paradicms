from typing import Union, Tuple, Optional

from rdflib import URIRef, RDF, SH
from rdflib.namespace import DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import WORKSHEET
from paradicms_etl.utils.resource_builder import ResourceBuilder


class WorksheetFeature(ResourceBackedNamedModel):
    def __init__(self, resource: Resource):
        resource.add(RDF.type, WORKSHEET.Feature)
        ResourceBackedNamedModel.__init__(self, resource)
        self.title

    @classmethod
    def from_fields(
        cls,
        *,
        feature_set_uris: Tuple[URIRef, ...],
        title: str,
        uri: URIRef,
        description: Union[str, Text, None] = None,
        order: Optional[int] = None
    ) -> "WorksheetFeature":
        return cls(
            ResourceBuilder(uri)
            .add(DCTERMS.description, description)
            .add(DCTERMS.title, title)
            .add(WORKSHEET.featureSet, feature_set_uris)
            .add(SH.order, order)
            .build()
        )

    @property
    def description(self) -> Union[str, Text, None]:
        return self._optional_str_or_text_value(DCTERMS.description)

    @property
    def label(self) -> str:
        return self.title

    @property
    def title(self) -> str:
        return self._required_str_value(DCTERMS.title)
