import json
from typing import Dict
from urllib.request import urlopen

from pathvalidate import sanitize_filename

from paradicms_etl._extractor import _Extractor


class OmekaSExtractor(_Extractor):
    def __init__(self, endpoint_url: str):
        _Extractor.__init__(self)
        self.__endpoint_url = endpoint_url.rstrip("/")

    def __extract_all_pages(self, url: str):
        resources = []
        while True:
            self._logger.info("getting %s", url)
            with urlopen(url) as response:
                page_resources = json.loads(response.read())
                link_header = response.headers.get("Link")
            assert isinstance(page_resources, list)
            self._logger.info(
                "retrieved %d resources from %s", len(page_resources), url
            )
            resources.extend(page_resources)
            next_url = None
            if link_header:
                for link_header in link_header.split(","):
                    link_header_parts = [
                        part.strip() for part in link_header.rsplit(";", 1)
                    ]
                    if len(link_header_parts) != 2:
                        continue
                    link_url, link_rel = link_header_parts
                    if not link_rel.startswith('rel="') or not link_rel.endswith('"'):
                        continue
                    link_rel = link_rel[len('rel="') : -1].lower()
                    if not link_url.startswith("<") or not link_url.endswith(">"):
                        continue
                    link_url = link_url[1:-1]
                    if link_rel != "next":
                        continue
                    next_url = link_url
                    break
            if next_url is None:
                return tuple(resources)
            url = next_url

    def extract(self, *, force: bool):
        api_context = None  # Retrieve lazily
        api_context_url = self.__endpoint_url + "-context"

        resources_names = ("item_sets", "items", "media")

        results = {}
        use_cache = False
        for resources_name_i, resources_name in enumerate(resources_names):
            url = self.__endpoint_url + "/" + resources_name
            file_name = sanitize_filename(url) + ".json"
            file_path = self._extracted_data_dir_path / file_name
            resources = None
            if resources_name_i == 0 and not force and file_path.exists():
                with open(file_path) as file_:
                    resources = json.load(file_)
                use_cache = True
            elif use_cache:
                with open(file_path) as file_:
                    resources = json.load(file_)

            if resources is None:
                resources = self.__extract_all_pages(url=url)
                for resource in resources:
                    # Replace the @context reference with the resolved context
                    assert resource["@context"] == api_context_url
                    if api_context is None:
                        api_context = self.__get_api_context(url=api_context_url)
                    resource["@context"] = api_context
                with open(file_path, "w+") as file_:
                    json.dump(resources, file_)
            results[resources_name] = resources
        return results

    def __get_api_context(self, *, url: str) -> Dict[str, object]:
        with urlopen(url) as response:
            response_json = json.loads(response.read())
        return response_json["@context"]
