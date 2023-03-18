from dataclasses import dataclass

from paradicms_etl.models.costume_core.costume_core_rights import CostumeCoreRights


@dataclass(frozen=True)
class CostumeCoreDescription:
    rights: CostumeCoreRights
    text_en: str
