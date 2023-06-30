from typing import Type, Dict, Tuple

from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.creative_commons.creative_commons_license import (
    CreativeCommonsLicense,
)
from paradicms_etl.models.dc.dc_collection import DcCollection
from paradicms_etl.models.dc.dc_image import DcImage
from paradicms_etl.models.dc.dc_license_document import DcLicenseDocument
from paradicms_etl.models.dc.dc_physical_object import DcPhysicalObject
from paradicms_etl.models.dc.dc_rights_statement import DcRightsStatement
from paradicms_etl.models.foaf.foaf_organization import FoafOrganization
from paradicms_etl.models.foaf.foaf_person import FoafPerson
from paradicms_etl.models.rdf.rdf_property import RdfProperty
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.schema.schema_place import SchemaPlace
from paradicms_etl.models.schema.schema_property import SchemaProperty
from paradicms_etl.models.schema.schema_text_object import SchemaTextObject
from paradicms_etl.models.skos.skos_concept import SkosConcept
from paradicms_etl.models.wikibase.wikibase_item import WikibaseItem

__ROOT_MODEL_CLASSES: Tuple[Type[ResourceBackedModel], ...] = (
    CmsPropertyGroup,
    DcCollection,
    DcImage,
    DcLicenseDocument,
    DcPhysicalObject,
    DcRightsStatement,
    CreativeCommonsLicense,
    FoafOrganization,
    FoafPerson,
    RdfProperty,
    SchemaCollection,
    SchemaCreativeWork,
    SchemaDefinedTerm,
    SchemaImageObject,
    SchemaOrganization,
    SchemaPerson,
    SchemaPlace,
    SchemaProperty,
    SchemaTextObject,
    SkosConcept,
    WikibaseItem,
)

ROOT_MODEL_CLASSES_BY_NAME: Dict[str, Type[ResourceBackedModel]] = {}
for __class in __ROOT_MODEL_CLASSES:
    ROOT_MODEL_CLASSES_BY_NAME[__class.__name__] = __class
