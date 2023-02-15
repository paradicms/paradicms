from paradicms_etl.loaders.nop_loader import nop_loader


def test_load(test_data_models):
    nop_loader(models=test_data_models)
