from typing import List

from configargparse import ArgParser
from paradicms_etl._pipeline import _Pipeline

from paradicms_etl.pipelines.wikidata.wikidata_extractor import WikidataExtractor
from paradicms_etl.pipelines.wikidata.wikidata_transformer import WikidataTransformer


class WikidataPipeline(_Pipeline):
    ID_DEFAULT = "wikidata"

    def __init__(
        self, *, dataset_id: str, qids: List[str], pipeline_id: str = ID_DEFAULT, **kwds
    ):
        _Pipeline.__init__(
            self,
            extractor=WikidataExtractor(
                pipeline_id=pipeline_id, qids=tuple(qids), **kwds
            ),
            id=pipeline_id,
            transformer=WikidataTransformer(
                dataset_id=dataset_id, pipeline_id=pipeline_id, **kwds
            ),
            **kwds
        )

    def add_arguments(cls, arg_parser: ArgParser, **kwds) -> None:
        _Pipeline.add_arguments(arg_parser, **kwds)
        arg_parser.add_argument("--dataset-id", required=True)
        arg_parser.add_argument("--qid", action="append", required=True)
        arg_parser.add_argument("--pipeline-id", default=cls.ID_DEFAULT)
