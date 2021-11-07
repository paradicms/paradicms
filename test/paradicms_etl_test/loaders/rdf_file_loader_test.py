from pathlib import Path

from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader


def test_load(test_data_models, tmpdir):
    tmpdir_path = Path(tmpdir)
    loader = RdfFileLoader(data_dir_path=tmpdir_path, pipeline_id="test")
    loader.load(models=test_data_models)
    loader.flush()
    assert (tmpdir_path / "test" / "loaded" / "test.trig").exists()
