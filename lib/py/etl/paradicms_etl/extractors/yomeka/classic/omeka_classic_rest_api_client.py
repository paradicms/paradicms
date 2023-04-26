import json
import logging
from typing import Optional, Tuple
from urllib.error import HTTPError
from urllib.request import urlopen

from .no_such_omeka_classic_collection_exception import (
    NoSuchOmekaClassicCollectionException,
)
from .no_such_omeka_classic_item_exception import NoSuchOmekaClassicItemException
from .omeka_classic_collection import OmekaClassicCollection
from .omeka_classic_file import OmekaClassicFile
from .omeka_classic_item import OmekaClassicItem
from .omeka_classic_json_parser import OmekaClassicJsonParser


class OmekaClassicRestApiClient:
    def __init__(self, api_key, endpoint_url):
        self.__api_key = api_key
        if not endpoint_url.endswith("/"):
            endpoint_url = endpoint_url + "/"
        self.__endpoint_url = endpoint_url
        self.__parser = OmekaClassicJsonParser()
        self.__logger = logging.getLogger(self.__class__.__name__)

    def get_all_collections(self, **kwds):
        return self.__get_all_pages(self.get_collections, **kwds)

    def get_all_files(self, **kwds):
        return self.__get_all_pages(self.get_files, **kwds)

    def get_all_items(self, **kwds):
        return self.__get_all_pages(self.get_items, **kwds)

    def __get_all_pages(self, get_method, **kwds):
        page = 1
        per_page = 50
        while True:
            objects = get_method(page=page, per_page=per_page, **kwds)
            yield from objects
            if len(objects) < per_page:
                return
            page = page + 1

    def get_collection(self, id: int) -> OmekaClassicCollection:  # @ReservedAssignment
        url = self.__endpoint_url + "api/collections/%d?key=" % id + self.__api_key
        try:
            collection_dict = json.loads(self.__get_url(url))
        except HTTPError as e:
            if e.code == 404:
                raise NoSuchOmekaClassicCollectionException
            else:
                raise
        if collection_dict.get("message") == "Invalid record. Record not found.":
            raise NoSuchOmekaClassicCollectionException
        return self.__parser.parse_collection_dict(collection_dict)

    def get_collections(
        self, *, page: Optional[int] = None, per_page: Optional[int] = None, **kwds
    ) -> Tuple[OmekaClassicCollection, ...]:
        url = self.__endpoint_url + "api/collections?key=" + self.__api_key
        if page is not None:
            kwds["page"] = page
        if per_page is not None:
            kwds["per_page"] = per_page
        for key, value in kwds.items():
            if value is None:
                continue
            url = url + "&%(key)s=%(value)s" % locals()
        return self.__parser.parse_collection_dicts(json.loads(self.__get_url(url)))

    def get_files(
        self,
        *,
        item: Optional[int] = None,
        page: Optional[int] = None,
        per_page: Optional[int] = None,
        **kwds
    ) -> Tuple[OmekaClassicFile, ...]:
        url = self.__endpoint_url + "api/files?key=" + self.__api_key
        if item is not None:
            kwds["item"] = item
        if page is not None:
            kwds["page"] = page
        if per_page is not None:
            kwds["per_page"] = per_page
        for key, value in kwds.items():
            if value is None:
                continue
            url = url + "&%(key)s=%(value)s" % locals()
        return self.__parser.parse_file_dicts(json.loads(self.__get_url(url)))

    def get_item(self, id: int) -> OmekaClassicItem:  # @ReservedAssignment
        url = self.__endpoint_url + "api/items/%d?key=" % id + self.__api_key
        try:
            item_dict = json.loads(self.__get_url(url))
        except HTTPError as e:
            if e.code == 404:
                raise NoSuchOmekaClassicItemException
            else:
                raise
        if item_dict.get("message") == "Invalid record. Record not found.":
            raise NoSuchOmekaClassicItemException
        return self.__parser.parse_item_dict(item_dict)

    def get_items(
        self,
        collection: Optional[int] = None,
        page: Optional[int] = None,
        per_page: Optional[int] = None,
        **kwds
    ) -> Tuple[OmekaClassicItem, ...]:
        url = self.__endpoint_url + "api/items?key=" + self.__api_key
        if collection is not None:
            kwds["collection"] = collection
        if page is not None:
            kwds["page"] = page
        if per_page is not None:
            kwds["per_page"] = per_page
        for key, value in kwds.items():
            if value is None:
                continue
            url = url + "&%(key)s=%(value)s" % locals()
        return self.__parser.parse_item_dicts(json.loads(self.__get_url(url)))

    def __get_url(self, url) -> str:
        self.__logger.debug("getting URL %s", url)
        with urlopen(url) as open_url:
            return open_url.read()
