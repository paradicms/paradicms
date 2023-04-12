from typing import Type, Dict

import paradicms_etl
from paradicms_etl.model import Model
from paradicms_ssg.models.app_configuration import AppConfiguration

ROOT_MODEL_CLASSES_BY_NAME: Dict[
    str, Type[Model]
] = (
    paradicms_etl.models.cms.cms_root_model_classes_by_name.CMS_ROOT_MODEL_CLASSES_BY_NAME.copy()
)
ROOT_MODEL_CLASSES_BY_NAME["AppConfiguration"] = AppConfiguration
