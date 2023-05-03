from more_itertools import consume

from paradicms_etl.loaders.nop_loader import nop_loader
from paradicms_etl.pipelines.synthetic_data_pipeline import SyntheticDataPipeline


def test_extract_transform():
    consume(SyntheticDataPipeline(loader=nop_loader)(force_extract=False))
