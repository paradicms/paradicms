from paradicms_etl.pipelines.synthetic_data_pipeline import SyntheticDataPipeline


def test_extract_transform():
    SyntheticDataPipeline().extract_transform(force_extract=False)
