from pathlib import Path

from paradicms_etl.loaders.collecting_loader import CollectingLoader


def test_load(test_data_models, tmpdir):
    loader = CollectingLoader(data_dir_path=Path(tmpdir), pipeline_id="test")
    loader.load(models=test_data_models)
    actual = loader.flush()
    assert tuple(sorted(model.uri for model in actual)) == tuple(
        sorted(model.uri for model in test_data_models)
    )
