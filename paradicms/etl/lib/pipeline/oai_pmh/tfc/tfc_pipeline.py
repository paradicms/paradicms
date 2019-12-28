from dressdiscover.cms.etl.lib.pipeline._pipeline import _Pipeline
from dressdiscover.cms.etl.lib.pipeline.oai_pmh.oai_pmh_extractor import OaiPmhExtractor
from dressdiscover.cms.etl.lib.pipeline.oai_pmh.tfc.tfc_transformer import TfcTransformer


class TfcPipeline(_Pipeline):
    """
    Pipeline for the Texas Fashion Collection (TFC)
    """

    def __init__(self, **kwds):
        _Pipeline.__init__(
            self,
            extractor=OaiPmhExtractor(
                endpoint_url="http://digital.library.unt.edu/explore/collections/TXFC/oai/",
                metadata_prefix="untl"
            ),
            id="tfc",
            transformer=TfcTransformer()
        )
