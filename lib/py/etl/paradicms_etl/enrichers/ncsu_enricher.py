import json
import logging
from pathlib import Path
from typing import Iterable, Tuple, Optional

from bs4 import BeautifulSoup
from rdflib import URIRef, Graph, RDF, SDO

from paradicms_etl.model import Model
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.stub.stub_model import StubModel
from paradicms_etl.models.stub.stub_work import StubWork
from paradicms_etl.models.work import Work
from paradicms_etl.utils.file_cache import FileCache
from paradicms_etl.utils.normalize_sdo_graph import normalize_sdo_graph
from paradicms_etl.utils.resolve_json_ld_contexts import resolve_json_ld_contexts


class NcsuEnricher:
    """
    Enricher that adds schema.org models from the North Carolina State University Libraries.
    """

    __NCSU_CATALOG_ITEM_URI_PREFIX = "https://d.lib.ncsu.edu/collections/catalog/"

    def __init__(self, *, cache_dir_path: Path):
        self.__file_cache = FileCache(cache_dir_path=cache_dir_path)
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        for model in models:
            enriched_model = False
            for item_uri in self.__get_ncsu_catalog_item_references(model):
                item_model = self.__get_ncsu_catalog_item(item_uri)
                if item_model is not None:
                    yield item_model
                    enriched_model = True

            if not enriched_model or not isinstance(model, StubModel):
                # A StubModel is "replaced"
                yield model

    def __get_ncsu_catalog_item(self, item_uri: URIRef) -> Optional[Model]:
        with open(self.__file_cache.get_file(file_url=item_uri)) as item_file:
            item_html = item_file.read()
        item_soup = BeautifulSoup(item_html, "html.parser")
        for json_ld_script_element in item_soup.find_all(
            "script", {"type": "application/ld+json"}
        ):
            json_ld = resolve_json_ld_contexts(
                file_cache=self.__file_cache,
                json_ld=json.loads(json_ld_script_element.text),
            )
            graph = Graph()
            graph.parse(data=json_ld, format="json-ld")  # type: ignore
            normalized_graph = normalize_sdo_graph(graph)
            for rdf_type_uri in normalized_graph.objects(item_uri, RDF.type):
                if not isinstance(rdf_type_uri, URIRef):
                    continue
                if rdf_type_uri == SDO.CreativeWork:
                    return SchemaCreativeWork(normalized_graph.resource(item_uri))
                else:
                    self.__logger.warning("unknown rdf:type: %s", rdf_type_uri)
        return None

    def __get_ncsu_catalog_item_references(self, model: Model) -> Tuple[URIRef, ...]:
        if isinstance(model, StubWork):
            if str(model.uri).startswith(self.__NCSU_CATALOG_ITEM_URI_PREFIX):
                return (model.uri,)
            else:
                return ()
        elif isinstance(model, Work):
            return tuple(
                same_as_uri
                for same_as_uri in model.same_as_uris
                if str(same_as_uri).startswith(self.__NCSU_CATALOG_ITEM_URI_PREFIX)
            )
        else:
            return ()
