from pathlib import Path

from paradicms_etl.extractors.costume_core_ontology_airtable_extractor import (
    CostumeCoreOntologyAirtableExtractor,
)
from paradicms_etl.models.cms.cms_collection import CmsCollection
from paradicms_etl.models.cms.cms_image import CmsImage
from paradicms_etl.models.cms.cms_license import CmsLicense
from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.cms.cms_work import CmsWork
from paradicms_etl.models.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.models.creative_commons.creative_commons_license import (
    CreativeCommonsLicense,
)
from paradicms_etl.models.rdf.rdf_property import RdfProperty
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statement import (
    RightsStatementsDotOrgRightsStatement,
)
from paradicms_etl.models.skos.skos_concept import SkosConcept
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
    assert CmsImage in model_types
    assert CmsCollection in model_types
    assert SkosConcept in model_types
    assert CmsLicense in model_types
    assert RdfProperty in model_types
    assert CmsPropertyGroup in model_types
    assert CmsWork in model_types
    assert CostumeCoreOntology in model_types
    assert CostumeCoreOntology.Predicate in model_types
    assert CostumeCoreOntology.Term in model_types
    assert CreativeCommonsLicense in model_types
    assert RightsStatementsDotOrgRightsStatement in model_types
