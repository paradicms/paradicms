from more_itertools import consume

from paradicms_etl.loaders.nop_loader import nop_loader


def test_load(synthetic_data_models):
    consume(nop_loader(models=synthetic_data_models))
