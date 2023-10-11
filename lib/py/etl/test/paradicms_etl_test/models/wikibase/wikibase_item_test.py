from dataclasses import dataclass
from pathlib import Path

import pytest
from paradicms_etl.models.wikibase.wikibase_item import WikibaseItem
from paradicms_etl.namespaces import WD
from paradicms_etl.namespaces.wikibase import WIKIBASE
from rdflib import RDF, Graph, URIRef


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
    graph = test_wikidata_item_file.graph(data_dir_path=data_dir_path)
    if test_wikidata_item_file.limit_uris:
        items = (WikibaseItem.from_rdf(graph.resource(test_wikidata_item_file.uri)),)
    else:
        items = tuple(
            WikibaseItem.from_rdf(graph.resource(item_uri))
            for item_uri in graph.subjects(predicate=RDF.type, object=WIKIBASE.Item)
            if isinstance(item_uri, URIRef)
        )
    assert len(items) == test_wikidata_item_file.items_count
    file_item = next(item for item in items if item.uri == test_wikidata_item_file.uri)
    assert file_item
