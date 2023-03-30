from pathlib import Path
from typing import Optional

from paradicms_etl.extractors.airtable_extractor import AirtableExtractor
from paradicms_etl.extractors.costume_core_ontology_airtable_extractor import (
    CostumeCoreOntologyAirtableExtractor,
)


class CostumeCoreDataAirtableExtractor:
    def __init__(
        self, *, access_token: str, base_id: str, extracted_data_dir_path: Path
    ):
        self.__data_airtable_extractor = AirtableExtractor(
            access_token=access_token,
            base_id=base_id,
            extracted_data_dir_path=extracted_data_dir_path,
            tables=(
                "Images",
                "Names",
                "Objects",
                "Terms",
            ),
        )
        ontology_extracted_data_dir_path: Optional[Path]
        for data_dir_path in (
            Path(__file__).parent.parent.parent.parent.parent.parent / "data",
            Path("/paradicms/data"),
        ):
            ontology_extracted_data_dir_path = (
                data_dir_path / "costume_core_ontology" / "extracted"
            )
            if ontology_extracted_data_dir_path.is_dir():
                break
            ontology_extracted_data_dir_path = None
        if ontology_extracted_data_dir_path is None:
            raise NotImplementedError("unable to find extracted Costume Core ontology")
        self.__ontology_airtable_extractor = CostumeCoreOntologyAirtableExtractor(
            access_token="neverused",
            extracted_data_dir_path=ontology_extracted_data_dir_path,
        )

    def __call__(self, *, force: bool):
        return {
            "data": self.__data_airtable_extractor(force=force),
            "ontology": self.__ontology_airtable_extractor(force=False),
        }
