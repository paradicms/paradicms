from paradicms.etl.lib.pipeline._extractor import _Extractor


class TestDataExtractor(_Extractor):
    def extract(self, **kwds):
        return {}
