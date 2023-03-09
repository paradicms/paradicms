from typing import Type, Dict, Tuple

from stringcase import snakecase

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.named_location import NamedLocation
from paradicms_etl.models.named_value import NamedValue
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.root_model import RootModel
from paradicms_etl.models.work import Work
from paradicms_etl.models.work_closing import WorkClosing
from paradicms_etl.models.work_creation import WorkCreation
from paradicms_etl.models.work_opening import WorkOpening

ROOT_MODEL_CLASSES: Tuple[Type[RootModel], ...] = (
    Collection,
    Image,
    License,
    NamedLocation,
    NamedValue,
    Organization,
    Person,
    RightsStatement,
    Work,
    WorkClosing,
    WorkCreation,
    WorkOpening,
)

ROOT_MODEL_CLASSES_BY_NAME: Dict[str, Type[RootModel]] = {
    __class.__name__: __class for __class in ROOT_MODEL_CLASSES
}
# Aliases
ROOT_MODEL_CLASSES_BY_NAME["Location"] = NamedLocation

ROOT_MODEL_CLASSES_BY_SNAKE_CASE_NAME: Dict[str, Type[RootModel]] = {
    snakecase(__model_class_name): __class
    for __model_class_name, __class in ROOT_MODEL_CLASSES_BY_NAME.items()
}
