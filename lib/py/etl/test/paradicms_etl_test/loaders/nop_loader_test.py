from paradicms_etl.loaders.nop_loader import nop_loader


def test_load(synthetic_data_models):
    nop_loader(models=synthetic_data_models)
