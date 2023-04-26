from typing import Type, Dict, Tuple

from paradicms_etl.models.cms.cms_collection import CmsCollection
from paradicms_etl.models.cms.cms_concept import CmsConcept
from paradicms_etl.models.cms.cms_image import CmsImage
from paradicms_etl.models.cms.cms_license import CmsLicense
from paradicms_etl.models.cms.cms_location import CmsLocation
from paradicms_etl.models.cms.cms_organization import CmsOrganization
from paradicms_etl.models.cms.cms_person import CmsPerson
from paradicms_etl.models.cms.cms_property import CmsProperty
from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.cms.cms_rights_statement import CmsRightsStatement
from paradicms_etl.models.cms.cms_work import CmsWork
from paradicms_etl.models.cms.cms_work_closing import CmsWorkClosing
from paradicms_etl.models.cms.cms_work_creation import CmsWorkCreation
from paradicms_etl.models.cms.cms_work_opening import CmsWorkOpening
from paradicms_etl.models.resource_backed_model import ResourceBackedModel

__CMS_ROOT_MODEL_CLASSES: Tuple[Type[ResourceBackedModel], ...] = (
    CmsCollection,
    CmsConcept,
    CmsImage,
    CmsLicense,
    CmsLocation,
    CmsOrganization,
    CmsPerson,
    CmsProperty,
    CmsPropertyGroup,
    CmsRightsStatement,
    CmsWork,
    CmsWorkClosing,
    CmsWorkCreation,
    CmsWorkOpening,
)

CMS_ROOT_MODEL_CLASSES_BY_NAME: Dict[str, Type[ResourceBackedModel]] = {}
for __class in __CMS_ROOT_MODEL_CLASSES:
    CMS_ROOT_MODEL_CLASSES_BY_NAME[__class.__name__] = __class
    assert __class.__name__.startswith("Cms")
    CMS_ROOT_MODEL_CLASSES_BY_NAME[__class.__name__[len("Cms") :]] = __class