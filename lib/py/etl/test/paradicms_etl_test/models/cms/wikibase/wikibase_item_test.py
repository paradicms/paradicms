from dataclasses import dataclass
from pathlib import Path

import pytest
from rdflib import Graph, URIRef

from paradicms_etl.models.wikibase.wikibase_direct_claim import WikibaseDirectClaim
from paradicms_etl.models.wikibase.wikibase_full_statement import WikibaseFullStatement
from paradicms_etl.models.wikibase.wikibase_item import WikibaseItem
from paradicms_etl.namespaces import WD


@dataclass(frozen=True)
class TestWikidataItemFile:
    articles_count: int
    direct_claims_count: int
    full_statements_count: int
    items_count: int
    qid: int
    limit_uris: bool = False

    def graph(self, data_dir_path: Path) -> Graph:
        graph = Graph()
        graph.parse(source=str(self.path(data_dir_path)))
        return graph

    def path(self, data_dir_path: Path) -> Path:
        return data_dir_path / "test" / "wikidata" / f"Q{self.qid}.ttl"

    @property
    def uri(self) -> URIRef:
        return WD[f"Q{self.qid}"]


@pytest.mark.parametrize(
    "test_wikidata_item_file",
    [
        TestWikidataItemFile(
            articles_count=173,
            direct_claims_count=77,
            full_statements_count=223,
            items_count=122,
            qid=7251,
        ),
        TestWikidataItemFile(
            articles_count=71,
            direct_claims_count=62,
            full_statements_count=105,
            items_count=81,
            qid=92614,
        ),
        TestWikidataItemFile(
            articles_count=0,
            direct_claims_count=0,
            full_statements_count=0,
            items_count=1,
            limit_uris=True,
            qid=15401930,
        ),
    ],
)
def test_from_wikidata_rdf(
    data_dir_path: Path, test_wikidata_item_file: TestWikidataItemFile
):
    items = WikibaseItem.from_wikidata_rdf(
        exclude_redundant_statements=False,
        graph=test_wikidata_item_file.graph(data_dir_path=data_dir_path),
        uris=(test_wikidata_item_file.uri,)
        if test_wikidata_item_file.limit_uris
        else None,
    )
    assert len(items) == test_wikidata_item_file.items_count
    file_item = next(item for item in items if item.uri == test_wikidata_item_file.uri)
    assert file_item
    assert len(file_item.articles) == test_wikidata_item_file.articles_count
    assert (
        len(
            tuple(
                statement
                for statement in file_item.statements
                if isinstance(statement, WikibaseDirectClaim)
            )
        )
        == test_wikidata_item_file.direct_claims_count
    )
    assert (
        len(
            tuple(
                statement
                for statement in file_item.statements
                if isinstance(statement, WikibaseFullStatement)
            )
        )
        == test_wikidata_item_file.full_statements_count
    )
