from typing import Type, Dict

import paradicms_etl.models.root_model_classes_by_name
from paradicms_etl.model import Model
from paradicms_ssg.models.app_configuration import AppConfiguration
from paradicms_ssg.models.cms.cms_app_configuration import CmsAppConfiguration

ROOT_MODEL_CLASSES_BY_NAME: Dict[
    str, Type[Model]
] = paradicms_etl.models.root_model_classes_by_name.ROOT_MODEL_CLASSES_BY_NAME.copy()
ROOT_MODEL_CLASSES_BY_NAME.update(
    {
        AppConfiguration.__name__: CmsAppConfiguration,
        CmsAppConfiguration.__name__: CmsAppConfiguration,
    }
)
