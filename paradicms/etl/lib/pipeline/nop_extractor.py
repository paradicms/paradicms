from paradicms.etl.lib.pipeline._extractor import _Extractor


class NopExtractor(_Extractor):
    def extract(self, **kwds):
        return {}
