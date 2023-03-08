from typing import Union

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.named_location import NamedLocation
from paradicms_etl.models.named_value import NamedValue
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.work import Work
from paradicms_etl.models.work_closing import WorkClosing
from paradicms_etl.models.work_creation import WorkCreation
from paradicms_etl.models.work_opening import WorkOpening

"""
Typedef for root model classes such as Institution, Person, and Work.
"""
RootModel = Union[
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
]
