from paradicms_etl.extractor import Extractor


class NopExtractor(Extractor):
    """
    Extractor that returns nothing, used as a placeholder in pipelines that generate data (like the TestDataPipeline)
    rather than extracting it from an existing source.
    """

    def extract(self, **kwds):
        return {}
