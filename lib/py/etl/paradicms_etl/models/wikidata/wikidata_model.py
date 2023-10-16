from rdflib import RDFS, URIRef

from paradicms_etl.models.text import Text
from paradicms_etl.models.wikibase.wikibase_item import WikibaseItem
from paradicms_etl.namespaces.wdt import WDT


class WikidataModel(WikibaseItem):
    __DESCRIPTION_URI = URIRef("http://schema.org/description")

    @property
    def description(self) -> str | Text | None:
        return self._optional_value(  # type: ignore
            self.__DESCRIPTION_URI, self._map_term_to_str_or_text
        )

    @property
    def image_uris(self) -> tuple[URIRef, ...]:
        return tuple(self._values(WDT["P18"], self._map_term_to_uri))

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label
