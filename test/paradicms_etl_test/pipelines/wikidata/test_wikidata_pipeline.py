from pathlib import Path

from paradicms_etl.loaders.collecting_loader import CollectingLoader
from paradicms_etl.pipelines.wikidata.wikidata_pipeline import WikidataPipeline


def test_extract_transform_load(tmpdir):
    data_dir_path = Path(tmpdir) / "data"
    pipeline = WikidataPipeline(
        data_dir_path=data_dir_path,
        dataset_id="test",
        loader=CollectingLoader(
            data_dir_path=data_dir_path, pipeline_id=WikidataPipeline.ID_DEFAULT
        ),
        qids=["Q62861"],
    )
    models = pipeline.extract_transform_load()
    assert isinstance(models, tuple)
