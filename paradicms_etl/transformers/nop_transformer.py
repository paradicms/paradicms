from paradicms_etl.transformer import Transformer


class NopTransformer(Transformer):
    def transform(self, **kwds):
        return ()
