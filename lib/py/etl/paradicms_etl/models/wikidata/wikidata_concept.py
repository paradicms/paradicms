from rdflib.term import Node, URIRef

from paradicms_etl.models.concept import Concept
from paradicms_etl.models.wikidata.wikidata_model import WikidataModel


class WikidataConcept(WikidataModel, Concept):
    class Builder(WikidataModel.Builder, Concept.Builder):
        pass

    @property
    def type_uris(self) -> tuple[URIRef, ...]:
        return (self.rdf_type_uri(),)

    @property
    def label(self) -> str:
        return self._required_label

    @property
    def value(self) -> Node:
        return self.uri
