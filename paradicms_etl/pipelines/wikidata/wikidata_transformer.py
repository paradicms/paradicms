from typing import Generator, Tuple

from rdflib import Graph

from paradicms_etl._model import _Model
from paradicms_etl._transformer import _Transformer
from paradicms_etl.models.wikidata.wikidata_item import WikidataItem


class WikidataTransformer(_Transformer):
    def transform(self, graph: Graph) -> Generator[_Model, None, None]:
        yield from self._transform_items(
            WikidataItem.from_rdf(graph=graph, logger=self._logger)
        )

    def _transform_items(self, items: Tuple[WikidataItem, ...]):
        raise NotImplementedError("TODO: transform to Objects")
