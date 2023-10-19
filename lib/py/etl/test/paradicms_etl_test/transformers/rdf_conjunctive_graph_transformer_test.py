from pathlib import Path

from paradicms_etl.extractors.rdf_file_extractor import RdfFileExtractor
from paradicms_etl.model import Model
from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.root_model_classes_by_name import ROOT_MODEL_CLASSES_BY_NAME
from paradicms_etl.transformers.rdf_conjunctive_graph_transformer import (
    RdfConjunctiveGraphTransformer,
)


def test_transform(
    synthetic_data_models: tuple[Model, ...], synthetic_data_rdf_file_path: Path
):
    remaining_synthetic_data_models_by_uri = {
        model.uri: model for model in synthetic_data_models
    }
    assert remaining_synthetic_data_models_by_uri

    root_model_classes_by_name = ROOT_MODEL_CLASSES_BY_NAME.copy()
    # Add an alias to simulate AppConfiguration/CmsAppConfiguration
    root_model_classes_by_name["PropertyGroup"] = CmsPropertyGroup
    for transformed_model in RdfConjunctiveGraphTransformer(
        root_model_classes_by_name=root_model_classes_by_name
    )(
        **RdfFileExtractor(rdf_file_paths=(synthetic_data_rdf_file_path,))()  # type: ignore
    ):
        synthetic_data_model = remaining_synthetic_data_models_by_uri.pop(
            transformed_model.uri
        )
        assert (
            synthetic_data_model.label == transformed_model.label
        ), transformed_model.uri
    assert len(remaining_synthetic_data_models_by_uri) == 0, len(
        remaining_synthetic_data_models_by_uri
    )
