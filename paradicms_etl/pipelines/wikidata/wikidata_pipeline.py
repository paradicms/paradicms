from typing import List

from configargparse import ArgParser
from paradicms_etl._pipeline import _Pipeline

from paradicms_etl.extractors.wikidata_qid_extractor import WikidataQidExtractor
from paradicms_etl.pipelines.wikidata.wikidata_transformer import WikidataTransformer


class WikidataPipeline(_Pipeline):
    ID_DEFAULT = "wikidata"

    def __init__(self, *, qids: List[str], pipeline_id: str, **kwds):
        _Pipeline.__init__(
            self,
            extractor=WikidataQidExtractor(
                pipeline_id=pipeline_id, qids=tuple(qids), **kwds
            ),
            id=pipeline_id,
            transformer=WikidataTransformer(pipeline_id=pipeline_id, **kwds),
            **kwds
        )

    def add_arguments(cls, arg_parser: ArgParser, **kwds) -> None:
        _Pipeline.add_arguments(arg_parser, **kwds)
        arg_parser.add_argument("--qid", action="append", required=True)
        arg_parser.add_argument("--pipeline-id", default=cls.ID_DEFAULT)
