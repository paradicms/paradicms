from pathlib import Path

from paradicms_etl.extractors.costume_core_ontology_airtable_extractor import (
    CostumeCoreOntologyAirtableExtractor,
)
from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.models.creative_commons.creative_commons_license import (
    CreativeCommonsLicense,
)
from paradicms_etl.models.dc.dc_license_document import DcLicenseDocument
from paradicms_etl.models.image import Image
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statement import (
    RightsStatementsDotOrgRightsStatement,
)
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_property import SchemaProperty
from paradicms_etl.transformers.costume_core_ontology_airtable_transformer import (
    CostumeCoreOntologyAirtableTransformer,
)


def test_transform(data_dir_path: Path):
    extractor = CostumeCoreOntologyAirtableExtractor(
        access_token="willneverbeused",
        cache_dir_path=data_dir_path / "costume_core_ontology" / "cache" / "airtable",
    )
    extract_result = extractor(force=False)

    transformer = CostumeCoreOntologyAirtableTransformer()

    models = tuple(transformer(**extract_result))
    assert models

    model_types = set(model.__class__ for model in models)
    assert len(model_types) == 12, model_types
    assert SchemaImageObject in model_types
    assert SchemaCollection in model_types
    assert SchemaDefinedTerm in model_types
    assert DcLicenseDocument in model_types
    assert SchemaProperty in model_types
    assert CmsPropertyGroup in model_types
    assert SchemaCreativeWork in model_types
    assert CostumeCoreOntology in model_types
    assert CostumeCoreOntology.Predicate in model_types
    assert CostumeCoreOntology.Term in model_types
    assert CreativeCommonsLicense in model_types
    assert RightsStatementsDotOrgRightsStatement in model_types

    for model in models:
        if isinstance(model, Image):
            assert model.licenses or model.rights_statements
