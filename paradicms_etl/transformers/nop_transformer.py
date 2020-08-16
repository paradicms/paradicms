from paradicms_etl._transformer import _Transformer


class NopTransformer(_Transformer):
    def transform(self, **kwds):
        return ()
