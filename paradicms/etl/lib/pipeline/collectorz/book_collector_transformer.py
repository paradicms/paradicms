from typing import Dict

from rdflib import Graph

from paradicms.etl.lib.pipeline._transformer import _Transformer

ElementTextTree = Dict[str, Dict[str, str]]


class BookCollectorTransformer(_Transformer):
    def transform(self, export_xml_file_path: str):
        graph = Graph()
    #
    #     institution = self._transform_institution_from_arguments(graph=graph, **self.__institution_kwds)
    #
    #     transformed_collections_by_id = {}
    #     for collection in collections:
    #         transformed_collections_by_id[collection["id"]] = self.__transform_collection(graph=graph,
    #                                                                                       omeka_collection=collection)
    #
    #     files_by_item_id = {}
    #     for file_ in files:
    #         files_by_item_id.setdefault(file_["item"]["id"], []).append(file_)
    #
    #     # private = True
    #     for item in items:
    #         if not item["public"]:
    #             continue
    #         transformed_item = self.__transform_item(files_by_item_id=files_by_item_id, graph=graph, item=item)
    #         # if private:
    #         #     transformed_item.owner = URIRef("http://example.com/user")
    #         #     private = False
    #         transformed_collection = transformed_collections_by_id[item["collection"]["id"]]
    #         transformed_collection.add_object(transformed_item)
    #
    #     for transformed_collection in transformed_collections_by_id.values():
    #         institution.add_collection(transformed_collection)
    #
        return graph
    #
    # def __get_element_texts_as_tree(self, omeka_resource) -> ElementTextTree:
    #     result = {}
    #     for element_text in omeka_resource["element_texts"]:
    #         text = element_text["text"].strip()
    #         if not text:
    #             continue
    #         element_set_name = element_text["element_set"]["name"]
    #         element_name = element_text["element"]["name"]
    #         element_set_dict = result.setdefault(element_set_name, {})
    #         element_set_dict.setdefault(element_name, []).append(text)
    #     return result
    #
    # def __log_unknown_element_texts(self, element_text_tree: ElementTextTree) -> None:
    #     for element_set_name in element_text_tree.keys():
    #         if element_text_tree[element_set_name]:
    #             self._logger.warn("unknown %s element names: %s", element_set_name,
    #                               tuple(element_text_tree[element_set_name]))
    #
    # def __transform_collection(self, *, graph: Graph, omeka_collection) -> Collection:
    #     collection = Collection(
    #         graph=graph,
    #         uri=URIRef(omeka_collection["url"])
    #     )
    #     collection.owner = CMS.inherit
    #     element_text_tree = self.__get_element_texts_as_tree(omeka_collection)
    #     self.__transform_dublin_core_elements(element_text_tree=element_text_tree, model=collection)
    #     self.__log_unknown_element_texts(element_text_tree)
    #     return collection
    #
    # def __transform_dublin_core_elements(self, *, element_text_tree: ElementTextTree,
    #                                      model: _Model) -> None:
    #     dc_element_text_tree = element_text_tree.pop("Dublin Core", None)
    #     if not dc_element_text_tree:
    #         return
    #
    #     for creator in dc_element_text_tree.pop("Creator", []):
    #         model.resource.add(DCTERMS.creator, Literal(creator))
    #
    #     for date in dc_element_text_tree.pop("Date", []):
    #         model.resource.add(DCTERMS.date, Literal(date))
    #
    #     for description in dc_element_text_tree.pop("Description", []):
    #         model.resource.add(DCTERMS.description, Literal(description))
    #
    #     for extent in dc_element_text_tree.pop("Extent", []):
    #         model.resource.add(DCTERMS.extent, Literal(extent))
    #
    #     for identifier in dc_element_text_tree.pop("Identifier", []):
    #         model.resource.add(DCTERMS.identifier, Literal(identifier))
    #
    #     for is_referenced_by in dc_element_text_tree.pop("Is Referenced By", []):
    #         model.resource.add(DCTERMS.isReferencedBy, Literal(is_referenced_by))
    #
    #     for language in dc_element_text_tree.pop("Language", []):
    #         model.resource.add(DCTERMS.language, Literal(language))
    #
    #     for medium in dc_element_text_tree.pop("Medium", []):
    #         model.resource.add(DCTERMS.medium, Literal(medium))
    #
    #     for provenance in dc_element_text_tree.pop("Provenance", []):
    #         model.resource.add(DCTERMS.provenance, Literal(provenance))
    #
    #     for publisher in dc_element_text_tree.pop("Publisher", []):
    #         model.resource.add(DCTERMS.publisher, Literal(publisher))
    #
    #     for relation in dc_element_text_tree.pop("Relation", []):
    #         model.resource.add(DCTERMS.relation, Literal(relation))
    #
    #     for rights in dc_element_text_tree.pop("Rights", []):
    #         model.resource.add(DCTERMS.rights, Literal(rights))
    #
    #     for rights_holder in dc_element_text_tree.pop("Rights Holder", []):
    #         model.resource.add(DCTERMS.rightsHolder, Literal(rights_holder))
    #
    #     for source in dc_element_text_tree.pop("Source", []):
    #         model.resource.add(DCTERMS.source, Literal(source))
    #
    #     for spatial in dc_element_text_tree.pop("Spatial Coverage", []):
    #         model.resource.add(DCTERMS.spatial, Literal(spatial))
    #
    #     for subject in dc_element_text_tree.pop("Subject", []):
    #         model.resource.add(DCTERMS.subject, Literal(subject))
    #
    #     for title in dc_element_text_tree.pop("Title", []):
    #         model.resource.add(DCTERMS.title, Literal(title))
    #
    #     for type_ in dc_element_text_tree.pop("Type", []):
    #         model.resource.add(DCTERMS.type, Literal(type_))
    #
    #     if dc_element_text_tree:
    #         self._logger.warn("unknown Dublin Core element names: %s", tuple(dc_element_text_tree.keys()))
    #
    # def __transform_file(self, *, file_, graph: Graph) -> Tuple[Image, ...]:
    #     if not file_["mime_type"].startswith("image/"):
    #         return None, None
    #
    #     original = thumbnail = None
    #     for key, url in file_["file_urls"].items():
    #         if url is None:
    #             continue
    #         if key not in ("original", "square_thumbnail"):
    #             continue
    #         image = Image(graph=graph, uri=URIRef(url))
    #         if key == "original":
    #             image.height = file_["metadata"]["video"]["resolution_y"]
    #             image.width = file_["metadata"]["video"]["resolution_x"]
    #         elif key == "square_thumbnail":
    #             image.height = self.__square_thumbnail_height_px
    #             image.width = self.__square_thumbnail_width_px
    #             original_uri = URIRef(file_["file_urls"]["original"])
    #             image.resource.add(PROV.wasDerivedFrom, original_uri)
    #             graph.add((original_uri, FOAF.thumbnail, image.uri))
    #         else:
    #             raise NotImplementedError
    #         image.created = dateparser.parse(file_["added"], settings={"STRICT_PARSING": True})
    #         image.format = file_["mime_type"]
    #         image.modified = dateparser.parse(file_["modified"], settings={"STRICT_PARSING": True})
    #         if key == "original":
    #             original = image
    #         elif key == "square_thumbnail":
    #             thumbnail = image
    #         else:
    #             raise NotImplementedError
    #
    #     return original, thumbnail
    #
    # def __transform_item(self, *, files_by_item_id, graph: Graph, item) -> Object:
    #     object_ = Object(
    #         graph=graph,
    #         uri=URIRef(item["url"])
    #     )
    #     object_.owner = CMS.inherit
    #     item_element_text_tree = self.__get_element_texts_as_tree(item)
    #     self.__transform_dublin_core_elements(element_text_tree=item_element_text_tree, model=object_)
    #     for file_ in files_by_item_id.get(item["id"], []):
    #         original_image, thumbnail_image = self.__transform_file(file_=file_, graph=graph)
    #         if not original_image:
    #             continue
    #         original_image.resource.add(FOAF.depicts, object_.uri)
    #         object_.resource.add(FOAF.depiction, original_image.uri)
    #     return object_
