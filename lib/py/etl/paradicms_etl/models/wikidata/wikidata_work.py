from datetime import date, datetime

from rdflib import RDF, Literal, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.wikibase.wikibase_time_value import WikibaseTimeValue
from paradicms_etl.models.wikidata.wikidata_model import WikidataModel
from paradicms_etl.models.work import Work
from paradicms_etl.namespaces.cms import CMS
from paradicms_etl.namespaces.wdt import WDT


class WikidataWork(WikidataModel, Work):
    class Builder(WikidataModel.Builder, Work.Builder):
        pass

    @property
    def contributors(self) -> tuple[str | URIRef, ...]:
        return ()

    @property
    def creators(self) -> tuple[URIRef, ...]:
        return tuple(self._values(WDT.P170, self._map_term_to_uri))

    @property
    def created(self) -> DateTimeUnion | None:
        # P571 inception
        value = self._optional_value(WDT.P571)
        if value is None:
            return None
        if isinstance(value, Literal):
            value_py = value.toPython()
            if isinstance(value_py, date | datetime | str):
                return value_py
            return None
        if isinstance(value, Resource):
            for rdf_type in value.graph.objects(
                subject=value.identifier, predicate=RDF.type
            ):
                if rdf_type == WikibaseTimeValue.rdf_type_uri():
                    return WikibaseTimeValue.from_rdf(value)  # type: ignore
        return None

    @property
    def label(self) -> str:
        return self._required_label

    @property
    def modified(self) -> DateTimeUnion | None:
        return None

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CMS.WikidataWork

    def replacer(self) -> Builder:
        raise NotImplementedError

    @property
    def spatial(self) -> URIRef | None:
        # P276 location
        return self._optional_value(WDT.P276, self._map_term_to_uri)

    @property
    def subjects(self) -> tuple[URIRef, ...]:
        return tuple(self._values(WDT.P921, self._map_term_to_uri))
