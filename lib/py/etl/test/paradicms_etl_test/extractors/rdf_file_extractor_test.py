from pathlib import Path

from paradicms_etl.extractors.rdf_file_extractor import RdfFileExtractor


def test_extract(synthetic_data_rdf_file_path: Path):
    extract_result = RdfFileExtractor(rdf_file_path=synthetic_data_rdf_file_path)()
    assert len(extract_result) == 1
    conjunctive_graph = extract_result["conjunctive_graph"]
    assert len(conjunctive_graph)