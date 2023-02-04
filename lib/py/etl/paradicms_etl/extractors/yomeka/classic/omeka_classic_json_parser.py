import json
from datetime import datetime

from .omeka_classic_collection import OmekaClassicCollection
from .omeka_classic_element import OmekaClassicElement
from .omeka_classic_element_set import OmekaClassicElementSet
from .omeka_classic_element_text import OmekaClassicElementText
from .omeka_classic_file import OmekaClassicFile
from .omeka_classic_file_urls import OmekaClassicFileUrls
from .omeka_classic_item import OmekaClassicItem
from .omeka_classic_item_type import OmekaClassicItemType
from .omeka_classic_tag import OmekaClassicTag


class OmekaClassicJsonParser(object):
    def parse_collection_dict(self, collection_dict):
        return OmekaClassicCollection(
            element_texts=self.__parse_element_texts(
                collection_dict.get("element_texts", [])
            ),
            added=(self.__parse_date_time(collection_dict["added"])),
            featured=bool(collection_dict["featured"]),
            id=(collection_dict["id"]),
            items_count=(collection_dict["items"]["count"]),
            json=(json.dumps(collection_dict)),
            modified=(self.__parse_date_time(collection_dict["modified"])),
            public=(collection_dict["public"]),
            url=(collection_dict["url"]),
        )

    def parse_collection_dicts(self, collection_dicts):
        collections = []
        for collection_dict in collection_dicts:
            collections.append(self.parse_collection_dict(collection_dict))
        return tuple(collections)

    def __parse_date_time(self, date_time_str):
        # 2011-01-30T21:15:46+00:00
        assert date_time_str.endswith("+00:00")
        return datetime.strptime(date_time_str[:-6], "%Y-%m-%dT%H:%M:%S")

    def __parse_element_texts(self, element_text_dicts):
        element_texts = []
        for element_text_dict in element_text_dicts:
            element_dict = element_text_dict["element"]
            element = OmekaClassicElement(
                id=(element_dict["id"]),
                name=(element_dict["name"]),
                url=(element_dict["url"]),
            )

            element_set_dict = element_text_dict["element_set"]
            element_set = OmekaClassicElementSet(
                id=(element_set_dict["id"]),
                name=(element_set_dict["name"]),
                url=(element_set_dict["url"]),
            )

            element_text = OmekaClassicElementText(
                element=(element),
                element_set=(element_set),
                html=(element_text_dict["html"]),
                text=(element_text_dict["text"]),
            )
            element_texts.append(element_text)
        return tuple(element_texts)

    def parse_file_dict(self, file_dict):
        file_urls = OmekaClassicFileUrls(**file_dict["file_urls"])

        return OmekaClassicFile(
            authentication=(file_dict["authentication"]),
            element_texts=(
                self.__parse_element_texts(file_dict.get("element_texts", []))
            ),
            added=(self.__parse_date_time(file_dict["added"])),
            file_urls=(file_urls),
            has_derivative_image=(file_dict["has_derivative_image"]),
            id=(file_dict["id"]),
            item_id=(file_dict["item"]["id"]),
            json=(json.dumps(file_dict)),
            mime_type=(file_dict["mime_type"]),
            modified=(self.__parse_date_time(file_dict["modified"])),
            original_filename=(file_dict["original_filename"]),
            size=(file_dict["size"]),
            stored=(file_dict["stored"]),
            type_os=(file_dict["type_os"]),
            url=(file_dict["url"]),
        )

    def parse_file_dicts(self, file_dicts):
        files = []
        for file_dict in file_dicts:
            files.append(self.parse_file_dict(file_dict))
        return tuple(files)

    def parse_item_dict(self, item_dict):
        element_texts = self.__parse_element_texts(item_dict.get("element_texts", []))

        item_type_dict = item_dict.get("item_type")
        if item_type_dict is not None:
            item_type = OmekaClassicItemType(
                id=(item_type_dict["id"]),
                name=(item_type_dict["name"]),
                url=(item_type_dict["url"]),
            )
        else:
            item_type = None

        tags = []
        for tag_dict in item_dict.get("tags", []):
            tag = OmekaClassicTag(
                id=(tag_dict["id"]),
                name=(tag_dict["name"]),
                url=(tag_dict["url"]),
            )
            tags.append(tag)
        tags = tuple(tags)

        return OmekaClassicItem(
            added=(self.__parse_date_time(item_dict["added"])),
            element_texts=(element_texts),
            featured=(item_dict["featured"]),
            files_count=(item_dict["files"]["count"]),
            id=(item_dict["id"]),
            item_type=(item_type),
            json=(json.dumps(item_dict)),
            modified=(self.__parse_date_time(item_dict["modified"])),
            public=(item_dict["public"]),
            tags=(tags),
            url=(item_dict["url"]),
        )

    def parse_item_dicts(self, item_dicts):
        items = []
        for item_dict in item_dicts:
            items.append(self.parse_item_dict(item_dict))
        return tuple(items)
