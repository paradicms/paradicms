import json

from pathvalidate import sanitize_filename
from tqdm import tqdm

from paradicms_etl._extractor import _Extractor


class OmekaClassicExtractor(_Extractor):
    """
    Extractor for Omeka Classic (https://omeka.org/classic/) API endpoints.
    """

    def __init__(self, api_key: str, endpoint_url: str, **kwds):
        _Extractor.__init__(self, **kwds)
        from yomeka.classic.omeka_classic_rest_api_client import (
            OmekaClassicRestApiClient,
        )

        self.__client = OmekaClassicRestApiClient(
            api_key=api_key, endpoint_url=endpoint_url
        )
        self.__endpoint_url = endpoint_url

    def extract(self, *, force: bool):
        collections_file_path = self._extracted_data_dir_path / (
            sanitize_filename(self.__endpoint_url + " collections") + ".json"
        )
        files_file_path = self._extracted_data_dir_path / (
            sanitize_filename(self.__endpoint_url + " files") + ".json"
        )
        items_file_path = self._extracted_data_dir_path / (
            sanitize_filename(self.__endpoint_url + " items") + ".json"
        )

        if not collections_file_path.exists() or force:
            collections = tuple(
                json.loads(collection.json)
                for collection in tqdm(
                    self.__client.get_all_collections(), desc="Collections"
                )
            )
            with open(collections_file_path, "w+") as collections_file:
                json.dump(collections, collections_file)
        else:
            with open(collections_file_path) as collections_file:
                collections = json.load(collections_file)

        if not files_file_path.exists() or force:
            files = tuple(
                json.loads(file_.json)
                for file_ in tqdm(self.__client.get_all_files(), desc="Files")
            )
            with open(files_file_path, "w+") as files_file:
                json.dump(files, files_file)
        else:
            with open(files_file_path) as files_file:
                files = json.load(files_file)

        if not items_file_path.exists() or force:
            items = tuple(
                json.loads(item.json)
                for item in tqdm(self.__client.get_all_items(), desc="Items")
            )
            with open(items_file_path, "w+") as items_file:
                json.dump(items, items_file)
        else:
            with open(items_file_path) as items_file:
                items = json.load(items_file)

        return {
            "collections": collections,
            "endpoint_url": self.__endpoint_url,
            "files": files,
            "items": items,
        }
