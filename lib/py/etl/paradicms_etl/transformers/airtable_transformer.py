from paradicms_etl.extractors.airtable_extractor import AirtableExtractor


class AirtableTransformer:
    def __init__(self, base_id: str):
        self.__base_id = base_id

    def _record_url(self, *, record_id: str, table: str):
        return (
            AirtableExtractor.table_url(base_id=self.__base_id, table=table)
            + f"/{record_id}"
        )
