from typing import Dict, Tuple

import dateparser
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF

from paradicms.etl.lib.model._model import _Model
from paradicms.etl.lib.model.collection import Collection
from paradicms.etl.lib.model.image import Image
from paradicms.etl.lib.model.object import Object
from paradicms.etl.lib.namespace import CMS, PROV
from paradicms.etl.lib.pipeline._transformer import _Transformer

ElementTextTree = Dict[str, Dict[str, str]]


class OmekaClassicTransformer(_Transformer):
    def __init__(self, *, institution_kwds: Dict[str, str], square_thumbnail_height_px: int,
                 square_thumbnail_width_px: int):
        _Transformer.__init__(self)
        self.__institution_kwds = institution_kwds
        self.__square_thumbnail_height_px = square_thumbnail_height_px
        self.__square_thumbnail_width_px = square_thumbnail_width_px

    def transform(self, collections, files, items):
        graph = self._new_graph

        institution = self._transform_institution_from_arguments(graph=graph, **self.__institution_kwds)

        transformed_collections_by_id = {}
        for collection in collections:
            transformed_collections_by_id[collection["id"]] = self.__transform_collection(graph=graph,
                                                                                          omeka_collection=collection)

        files_by_item_id = {}
        for file_ in files:
            files_by_item_id.setdefault(file_["item"]["id"], []).append(file_)

        # private = True
        for item in items:
            if not item["public"]:
                continue
            transformed_item = self.__transform_item(files_by_item_id=files_by_item_id, graph=graph, item=item)
            # if private:
            #     transformed_item.owner = URIRef("http://example.com/user")
            #     private = False
            transformed_collection = transformed_collections_by_id[item["collection"]["id"]]
            try:
                transformed_collection.add_object(transformed_item)
            except ValueError as e:
                self._logger.warning("invalid object from item %d: %s", item["id"], str(e))

        for transformed_collection in transformed_collections_by_id.values():
            institution.add_collection(transformed_collection)

        return graph

    def __get_element_texts_as_tree(self, omeka_resource) -> ElementTextTree:
        result = {}
        for element_text in omeka_resource["element_texts"]:
            text = element_text["text"].strip()
            if not text:
                continue
            element_set_name = element_text["element_set"]["name"]
            element_name = element_text["element"]["name"]
            element_set_dict = result.setdefault(element_set_name, {})
            element_set_dict.setdefault(element_name, []).append(text)
        return result

    def __log_unknown_element_texts(self, element_text_tree: ElementTextTree) -> None:
        for element_set_name in element_text_tree.keys():
            if element_text_tree[element_set_name]:
                self._logger.warn("unknown %s element names: %s", element_set_name,
                                  tuple(element_text_tree[element_set_name]))

    def __transform_collection(self, *, graph: Graph, omeka_collection) -> Collection:
        collection = Collection(
            graph=graph,
            uri=URIRef(omeka_collection["url"])
        )
        collection.owner = CMS.inherit
        element_text_tree = self.__get_element_texts_as_tree(omeka_collection)
        self.__transform_dublin_core_elements(element_text_tree=element_text_tree, model=collection)
        self.__log_unknown_element_texts(element_text_tree)
        return collection

    def __transform_dublin_core_elements(self, *, element_text_tree: ElementTextTree,
                                         model: _Model) -> None:
        dc_element_text_tree = element_text_tree.pop("Dublin Core", None)
        if not dc_element_text_tree:
            return

        def is_uri(value: str):
            return value.startswith("http://") or value.startswith("https://")

        # The items JSON from the API has display name element identifiers instead of the Dublin Core URIs,
        # so we have to map back here.
        for key, property in (
            ("Alternative Title", DCTERMS.alternative),
            ("Contributor", DCTERMS.contributor),
            ("Coverage", DCTERMS.coverage),
            ("Creator", DCTERMS.creator),
            ("Date", DCTERMS.date),
            ("Date Created", DCTERMS.created),
            ("Date Submitted", DCTERMS.dateSubmitted),
            ("Description", DCTERMS.description),
            ("Extent", DCTERMS.extent),
            ("Format", DCTERMS["format"]),
            ("Identifier", DCTERMS.identifier),
            ("Is Referenced By", DCTERMS.isReferencedBy),
            ("Language", DCTERMS.language),
            ("Medium", DCTERMS.medium),
            ("Provenance", DCTERMS.provenance),
            ("Publisher", DCTERMS.publisher),
            ("References", DCTERMS.references),
            ("Relation", DCTERMS.relation),
            ("Rights Holder", DCTERMS.rightsHolder),
            ("Source", DCTERMS.source),
            ("Spatial Coverage", DCTERMS.spatial),
            ("Subject", DCTERMS.subject),
            ("Temporal Coverage", DCTERMS.temporal),
            ("Title", DCTERMS.title),
            ("Type", DCTERMS.type),
        ):
            for value in dc_element_text_tree.pop(key, []):
                # assert not value.startswith("http://") and not value.startswith("https://"), value
                model.resource.add(property, Literal(value))

        for key, property in (
            ("License", DCTERMS.license),
            ("Rights", DCTERMS.rights),
        ):
            for value in dc_element_text_tree.pop(key, []):
                if is_uri(value):
                    model.resource.add(property, URIRef(value))
                else:
                    model.resource.add(property, Literal(value))

        if dc_element_text_tree:
            self._logger.warn("unknown Dublin Core element names: %s", tuple(dc_element_text_tree.keys()))

    def __transform_file(self, *, file_, graph: Graph) -> Tuple[Image, ...]:
        if not file_["mime_type"].startswith("image/"):
            return None, None

        original = thumbnail = None
        for key, url in file_["file_urls"].items():
            if url is None:
                continue
            if key not in ("original", "square_thumbnail"):
                continue
            image = Image(graph=graph, uri=URIRef(url))
            if key == "original":
                file_metadata = file_["metadata"]
                if not isinstance(file_metadata, dict):
                    self._logger.debug("file %s has no metadata", file_["id"])
                    continue
                file_metadata_video = file_metadata["video"]
                if not isinstance(file_metadata_video, dict):
                    self._logger.debug("file %s has no resolution in its metadata", file_["id"])
                    continue
                image.height = file_metadata_video["resolution_y"]
                assert isinstance(image.height, int)
                image.width = file_metadata_video["resolution_x"]
                assert isinstance(image.width, int)
            elif key == "square_thumbnail":
                image.height = self.__square_thumbnail_height_px
                image.width = self.__square_thumbnail_width_px
                original_uri = URIRef(file_["file_urls"]["original"])
                image.resource.add(PROV.wasDerivedFrom, original_uri)
                graph.add((original_uri, FOAF.thumbnail, image.uri))
            else:
                raise NotImplementedError
            image.created = dateparser.parse(file_["added"], settings={"STRICT_PARSING": True})
            image.format = file_["mime_type"]
            image.modified = dateparser.parse(file_["modified"], settings={"STRICT_PARSING": True})
            if key == "original":
                original = image
            elif key == "square_thumbnail":
                thumbnail = image
            else:
                raise NotImplementedError

        return original, thumbnail

    def __transform_item(self, *, files_by_item_id, graph: Graph, item) -> Object:
        object_ = Object(
            graph=graph,
            uri=URIRef(item["url"])
        )
        object_.owner = CMS.inherit
        item_element_text_tree = self.__get_element_texts_as_tree(item)
        self.__transform_dublin_core_elements(element_text_tree=item_element_text_tree, model=object_)
        self._transform_item_type_metadata(element_text_tree=item_element_text_tree, model=object_)
        self.__log_unknown_element_texts(item_element_text_tree)
        for file_ in files_by_item_id.get(item["id"], []):
            original_image, thumbnail_image = self.__transform_file(file_=file_, graph=graph)
            if not original_image:
                continue
            original_image.resource.add(FOAF.depicts, object_.uri)
            object_.resource.add(FOAF.depiction, original_image.uri)
        return object_

    def _transform_item_type_metadata(self, element_text_tree, model):
        # "Item Type Metadata" is a catch-all element set for all user-defined elements.
        itm_element_text_tree = element_text_tree.pop("Item Type Metadata", None)
        if not itm_element_text_tree:
            return
