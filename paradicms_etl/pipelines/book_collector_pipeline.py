from typing import Optional

from rdflib import URIRef

from paradicms_etl.pipeline import Pipeline
from paradicms_etl.extractors.book_collector_extractor import BookCollectorExtractor
from paradicms_etl.transformers.book_collector_transformer import (
    BookCollectorTransformer,
)


class BookCollectorPipeline(Pipeline):
    def __init__(
        self,
        *,
        export_xml_file_path: str,
        owner: Optional[str],
        pipeline_id: str,
        **kwds
    ):
        Pipeline.__init__(
            self,
            extractor=BookCollectorExtractor(export_xml_file_path=export_xml_file_path),
            id=pipeline_id,
            transformer=BookCollectorTransformer(
                owner=URIRef(owner) if owner is not None else None,
                pipeline_uri=Pipeline.id_to_uri(pipeline_id),
            ),
            **kwds
        )

    @classmethod
    def add_arguments(cls, arg_parser):
        Pipeline.add_arguments(cls, arg_parser)
        arg_parser.add_argument(
            "--export-xml-file-path", help="path to book-export.xml", required=True
        )
        arg_parser.add_argument("--owner", help="URI of the owner, or public if absent")
        arg_parser.add_argument(
            "--pipeline-id",
            help="unique identifier for this pipeline, used to isolate its cache",
            required=True,
        )


if __name__ == "__main__":
    BookCollectorPipeline.main()
