import json

from dressdiscover.cms.etl.lib.pipeline._extractor import _Extractor
from dressdiscover.cms.etl.lib.pipeline._pipeline_storage import _PipelineStorage
from yomeka.client.omeka_rest_api_client import OmekaRestApiClient


class OmekaClassicExtractor(_Extractor):
    def __init__(self, api_key: str, endpoint_url: str):
        _Extractor.__init__(self)
        self.__client = OmekaRestApiClient(api_key=api_key, endpoint_url=endpoint_url)
        self.__endpoint_url = endpoint_url

    def extract(self, *, force: bool, storage: _PipelineStorage):
        collections_key = self.__endpoint_url + " collections.json"
        files_key = self.__endpoint_url + " files.json"
        items_key = self.__endpoint_url + " items.json"

        if not storage.head(collections_key) or force:
            storage.put(collections_key, json.dumps(
                [json.loads(collection.json) for collection in self.__client.get_all_collections()]))
            storage.put(files_key,
                        json.dumps([json.loads(file_.json) for file_ in self.__client.get_all_files()]))
            storage.put(items_key, json.dumps([json.loads(item.json) for item in self.__client.get_all_items()]))

        return {
            "collections": json.load(storage.get(collections_key)),
            "files": json.load(storage.get(files_key)),
            "items": json.load(storage.get(items_key))
        }
