from dataclasses import dataclass

from paradicms_etl.pipelines.wikidata.wikidata_statement import WikidataStatement


@dataclass
class WikidataDirectClaim(WikidataStatement):
    pass
