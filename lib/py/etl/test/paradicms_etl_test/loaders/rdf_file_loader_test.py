from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader


def test_load(test_data_models, tmp_path):
    RdfFileLoader(file_path=tmp_path / "test.trig")(flush=True, models=test_data_models)
    assert (tmp_path / "test.trig").exists()
