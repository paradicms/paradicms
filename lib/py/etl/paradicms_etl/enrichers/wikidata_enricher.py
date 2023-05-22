import logging
from pathlib import Path
from typing import Iterable, Set, Tuple, List
from urllib.parse import urlparse

from rdflib import Graph, URIRef, DCTERMS, OWL
from rdflib.resource import Resource

from paradicms_etl.extractors.wikidata_qid_extractor import WikidataQidExtractor
from paradicms_etl.model import Model
from paradicms_etl.models.wikidata.wikidata_item import WikidataItem


class WikidataEnricher:
    def __init__(self, *, cache_dir_path: Path):
        self.__cache_dir_path = cache_dir_path
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        yielded_wikidata_item_qids: Set[str] = set()
        for model in models:
            model_graph = Graph()
            model_resource = model.to_rdf(model_graph)
            wikidata_item_qids = self.__get_wikidata_item_references(model_resource)
            for wikidata_item_qid in wikidata_item_qids:
                if wikidata_item_qid not in yielded_wikidata_item_qids:
                    yield self.__get_wikidata_item(wikidata_item_qid)
                    yielded_wikidata_item_qids.add(wikidata_item_qid)

            yield model

    def __get_wikidata_item(self, qid: str) -> WikidataItem:
        qid_uri = URIRef(f"http://www.wikidata.org/entity/{qid}")
        graph = WikidataQidExtractor(cache_dir_path=self.__cache_dir_path, qids=(qid,))(
            force=False
        )["graph"]
        wikidata_items = WikidataItem.from_wikidata_rdf(
            graph=graph,
        )
        assert len(wikidata_items)
        for wikidata_item in wikidata_items:
            if wikidata_item.uri == qid_uri:
                return wikidata_item
        raise NotImplementedError

    def __get_wikidata_item_references(
        self, model_resource: Resource
    ) -> Tuple[str, ...]:
        """
        Get a list of Wikidata QIDs referenced by the given model.
        """
        wikidata_qids: List[str] = []
        for predicate in (DCTERMS.relation, OWL.sameAs):
            for object_ in model_resource.objects(predicate):
                if not isinstance(object_, Resource):
                    continue
                elif not isinstance(object_.identifier, URIRef):
                    continue
                try:
                    parsed_uri = urlparse(str(object_.identifier))
                except ValueError:
                    continue
                if parsed_uri.scheme.lower() not in ("http", "https"):
                    continue
                if not parsed_uri.netloc.lower().endswith("wikidata.org"):
                    continue
                if not parsed_uri.path.lower().startswith("/entity/q"):
                    continue
                wikidata_qids.append(parsed_uri.path[len("/entity/") :])
        return tuple(wikidata_qids)
