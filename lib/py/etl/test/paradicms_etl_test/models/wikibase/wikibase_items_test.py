from dataclasses import dataclass
from pathlib import Path

import pytest
from rdflib import Graph, URIRef

from paradicms_etl.models.wikibase.wikibase_items import WikibaseItems
from paradicms_etl.namespaces import WD


@dataclass(frozen=True)
class TestWikidataItemFile:
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
            items_count=122,
            qid=7251,
        ),
        TestWikidataItemFile(
            items_count=81,
            qid=92614,
        ),
        TestWikidataItemFile(
            items_count=1,
            limit_uris=True,
            qid=15401930,
        ),
    ],
)
def test_from_rdf(data_dir_path: Path, test_wikidata_item_file: TestWikidataItemFile):
    items = WikibaseItems.from_rdf(
        graph=test_wikidata_item_file.graph(data_dir_path=data_dir_path),
        uris=(test_wikidata_item_file.uri,)
        if test_wikidata_item_file.limit_uris
        else None,
    )
    assert len(items) == test_wikidata_item_file.items_count
    file_item = next(item for item in items if item.uri == test_wikidata_item_file.uri)
    assert file_item
