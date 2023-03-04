from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader


def test_load(synthetic_data_models, tmp_path):
    RdfFileLoader(rdf_file_path=tmp_path / "test.trig", pipeline_id="test")(
        flush=True, models=synthetic_data_models
    )
    assert (tmp_path / "test.trig").exists()