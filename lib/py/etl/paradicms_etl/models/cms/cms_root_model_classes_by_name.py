from typing import Type, Dict, Tuple

from paradicms_etl.models.named_location import NamedLocation
from paradicms_etl.models.root_model import RootModel

__ROOT_MODEL_CLASSES: Tuple[Type[RootModel], ...] = (
    CmsCollection,
    CmsConcept,
    CmsImage,
    CmsLicense,
    CmsNamedLocation,
    CmsOrganization,
    CmsPerson,
    CmsRightsStatement,
    CmsWork,
    CmsWorkClosing,
    CmsWorkCreation,
    CmsWorkOpening,
)

ROOT_MODEL_CLASSES_BY_NAME: Dict[str, Type[RootModel]] = {
    __class.__name__: __class for __class in __ROOT_MODEL_CLASSES
}
# Aliases
ROOT_MODEL_CLASSES_BY_NAME["Location"] = NamedLocation
