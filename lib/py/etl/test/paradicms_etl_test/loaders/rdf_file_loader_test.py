from pathlib import Path

from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader


def test_load(test_data_models, tmpdir):
    tmpdir_path = Path(tmpdir)
    RdfFileLoader()(
        flush=True,
        loaded_data_dir_path=tmpdir_path,
        models=test_data_models,
        pipeline_id="test",
    )
    assert (tmpdir_path / "test" / "loaded" / "test.trig").exists()
