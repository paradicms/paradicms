from stringcase import snakecase

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.license import License
from paradicms_etl.models.named_value import NamedValue
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.work import Work
from paradicms_etl.models.work_creation import WorkCreation

ROOT_MODEL_CLASSES = (
    Collection,
    Institution,
    License,
    Image,
    NamedValue,
    Organization,
    Person,
    RightsStatement,
    Work,
    WorkCreation,
)

ROOT_MODEL_CLASSES_BY_NAME = {
    __class.__name__: __class for __class in ROOT_MODEL_CLASSES
}

ROOT_MODEL_CLASSES_BY_SNAKE_CASE_NAME = {
    snakecase(__class.__name__): __class for __class in ROOT_MODEL_CLASSES
}
