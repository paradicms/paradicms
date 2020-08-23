import json

from pastpy.impl.online.online_database_configuration import OnlineDatabaseConfiguration
from pathvalidate import sanitize_filename
from tqdm import tqdm

from paradicms_etl._extractor import _Extractor


class PastPerfectOnlineExtractor(_Extractor):
    def __init__(self, **kwds):
        _Extractor.__init__(self, **kwds)

    def extract(self, *, force: bool):
        from pastpy.database import Database

        database = Database.create(
            configuration=OnlineDatabaseConfiguration(
                collection_name=self._pipeline_id,
                download_dir_path=self._extracted_data_dir_path,
            )
        )

        database.download(tqdm_disable=False)

        return {"database": database}
