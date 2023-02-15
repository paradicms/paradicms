from paradicms_etl.loaders.collecting_loader import CollectingLoader


def test_load(test_data_models, tmp_path):
    actual = CollectingLoader()(
        flush=True,
        loaded_data_dir_path=tmp_path,
        models=test_data_models,
        pipeline_id="test",
    )
    assert tuple(sorted(model.uri for model in actual)) == tuple(
        sorted(model.uri for model in test_data_models)
    )
