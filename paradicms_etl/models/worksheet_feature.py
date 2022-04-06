from typing import Union, Tuple

from rdflib import URIRef, RDF
from rdflib.namespace import DCTERMS

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder


class WorksheetFeature(ResourceBackedNamedModel):
    def __init__(self, *args, **kwds):
        ResourceBackedNamedModel.__init__(self, *args, **kwds)
        self.title

    @classmethod
    def from_fields(
        cls,
        *,
        feature_set_uris: Tuple[URIRef, ...],
        title: str,
        uri: URIRef,
        abstract: Union[str, Text, None] = None
    ) -> "WorksheetFeature":
        return cls(
            ResourceBuilder(uri)
            .add(RDF.type, CMS[cls.__name__])
            .add(DCTERMS.abstract, abstract)
            .add(DCTERMS.title, title)
            .add(CMS.worksheetFeatureSet, feature_set_uris)
            .build()
        )

    @property
    def abstract(self) -> Union[str, Text, None]:
        return self._optional_str_or_text_value(DCTERMS.abstract)

    @property
    def label(self) -> str:
        return self.title

    @property
    def title(self) -> str:
        return self._required_str_value(DCTERMS.title)
