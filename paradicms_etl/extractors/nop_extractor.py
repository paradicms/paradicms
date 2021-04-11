from paradicms_etl._extractor import _Extractor


class NopExtractor(_Extractor):
    """
    Extractor that returns nothing, used as a placeholder in pipelines that generate data (like the TestDataPipeline)
    rather than extracting it from an existing source.
    """

    def extract(self, **kwds):
        return {}
