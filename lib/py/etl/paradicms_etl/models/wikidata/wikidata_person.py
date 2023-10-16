from rdflib import URIRef

from paradicms_etl.models.person import Person
from paradicms_etl.models.wikidata.wikidata_model import WikidataModel
from paradicms_etl.namespaces.cms import CMS
from paradicms_etl.namespaces.wdt import WDT


class WikidataPerson(WikidataModel, Person):
    class Builder(WikidataModel.Builder, Person.Builder):
        pass

    @property
    def family_name(self) -> str | None:
        return self._optional_value(WDT.P734, self._map_term_to_str)

    @property
    def given_name(self) -> str | None:
        return self._optional_value(WDT.P735, self._map_term_to_str)

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CMS.WikidataPerson
