from paradicms_etl.loaders.collecting_loader import CollectingLoader


def test_load(synthetic_data_models, tmp_path):
    actual = CollectingLoader()(flush=True, models=synthetic_data_models)
    assert tuple(sorted(model.uri for model in actual)) == tuple(
        sorted(model.uri for model in synthetic_data_models)
    )
