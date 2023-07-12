from pathlib import Path
from typing import Tuple

from paradicms_etl.extractors.rdf_file_extractor import RdfFileExtractor
from paradicms_etl.model import Model
from paradicms_etl.transformers.rdf_conjunctive_graph_transformer import (
    RdfConjunctiveGraphTransformer,
)


def test_transform(
    synthetic_data_models: Tuple[Model, ...], synthetic_data_rdf_file_path: Path
):
    remaining_synthetic_data_models_by_uri = {
        model.uri: model for model in synthetic_data_models
    }
    assert remaining_synthetic_data_models_by_uri

    for transformed_model in RdfConjunctiveGraphTransformer()(
        **RdfFileExtractor(rdf_file_path=synthetic_data_rdf_file_path)()
    ):
        synthetic_data_model = remaining_synthetic_data_models_by_uri.pop(
            transformed_model.uri
        )
        assert synthetic_data_model.label == transformed_model.label
    assert len(remaining_synthetic_data_models_by_uri) == 0, len(
        remaining_synthetic_data_models_by_uri
    )
