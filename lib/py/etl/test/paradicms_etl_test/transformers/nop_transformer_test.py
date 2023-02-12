from paradicms_etl.transformers.nop_transformer import nop_transformer


def test_transform():
    assert nop_transformer() == ()
