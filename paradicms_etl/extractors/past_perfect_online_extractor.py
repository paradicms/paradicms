from paradicms_etl._extractor import _Extractor
import os


class PastPerfectOnlineExtractor(_Extractor):
    """
    Extractor that scrapes PastPerfect Online (http://www.pastperfect-online.com/)
    """

    def __init__(self, **kwds):
        _Extractor.__init__(self, **kwds)

    def extract(self, *, force: bool):
        from pastpy.database import Database
        from pastpy.impl.online.online_database_configuration import (
            OnlineDatabaseConfiguration,
        )

        database = Database.create(
            configuration=OnlineDatabaseConfiguration(
                collection_name=self._pipeline_id,
                download_dir_path=self._extracted_data_dir_path,
            )
        )

        objects_detail_dir_path = self._extracted_data_dir_path / "objects" / "detail"
        if force:
            self._logger.info("forcing download")
            download = True
        elif not objects_detail_dir_path.is_dir() or not any(
            os.listdir(objects_detail_dir_path)
        ):
            self._logger.info(
                "no object detail .html files found in %s, downloading",
                objects_detail_dir_path,
            )
            download = True
        else:
            self._logger.info(
                "object detail .html files already downloaded to %s, skipping download",
                objects_detail_dir_path,
            )
            download = False

        if download:
            database.download(tqdm_disable=False)

        return {"database": database}
