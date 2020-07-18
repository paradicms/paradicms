from typing import Optional

from rdflib import URIRef

from paradicms_etl.pipelines._pipeline import _Pipeline
from paradicms_etl.pipelines.collectorz.book_collector_extractor import BookCollectorExtractor
from paradicms_etl.pipelines.collectorz.book_collector_transformer import BookCollectorTransformer


class BookCollectorPipeline(_Pipeline):
    def __init__(self, *,
                 export_xml_file_path: str,
                 owner: Optional[str],
                 pipeline_id: str,
                 **kwds):
        _Pipeline.__init__(
            self,
            extractor=BookCollectorExtractor(export_xml_file_path=export_xml_file_path),
            id=pipeline_id,
            transformer=BookCollectorTransformer(
                owner=URIRef(owner) if owner is not None else None,
                pipeline_uri=_Pipeline.id_to_uri(pipeline_id)),
            **kwds
        )

    @classmethod
    def add_arguments(cls, arg_parser):
        _Pipeline.add_arguments(cls, arg_parser)
        arg_parser.add_argument('--export-xml-file-path', help="path to book-export.xml", required=True)
        arg_parser.add_argument("--owner", help="URI of the owner, or public if absent")
        arg_parser.add_argument(
            '--pipeline-id',
            help='unique identifier for this pipeline, used to isolate its cache',
            required=True
        )


if __name__ == "__main__":
    BookCollectorPipeline.main()
