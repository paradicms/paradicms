from typing import Optional

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_ssg.namespaces import CONFIGURATION


class AppConfiguration(ResourceBackedModel):
    @property
    def app(self) -> Optional[str]:
        return self._optional_str_value(CONFIGURATION.app)
