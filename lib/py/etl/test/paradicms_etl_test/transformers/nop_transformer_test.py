from paradicms_etl.transformers.nop_transformer import NopTransformer


def test_transform():
    assert NopTransformer(pipeline_id="test").transform() == ()
