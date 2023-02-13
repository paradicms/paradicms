from pathlib import Path
from typing import List, Optional

from configargparse import ArgParser
from rdflib import URIRef

from paradicms_etl.extractors.wikidata_qid_extractor import WikidataQidExtractor
from paradicms_etl.loaders.markdown_directory_loader import MarkdownDirectoryLoader
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.markdown_directory_transformer import (
    MarkdownDirectoryTransformer,
)
from paradicms_etl.transformers.wikidata_items_transformer import (
    WikidataItemsTransformer,
)


class WikidataQidToMarkdownDirectoryPipeline(Pipeline):
    def __init__(
        self,
        *,
        data_dir_path: str,
        markdown_directory_path: str,
        pipeline_id: str,
        qid: List[str],
        institution_uri: Optional[str] = None,
        collection_uri: Optional[str] = None,
        **kwds
    ):
        if collection_uri is None:
            collection_uri = str(
                MarkdownDirectoryTransformer.default_collection_uri(
                    markdown_directory_name=str(
                        Path(markdown_directory_path).absolute().name
                    ),
                    pipeline_id=pipeline_id,
                )
            )

        if institution_uri is None:
            institution_uri = str(
                MarkdownDirectoryTransformer.default_institution_uri(
                    pipeline_id=pipeline_id
                )
            )

        Pipeline.__init__(
            self,
            extractor=WikidataQidExtractor(
                extracted_data_dir_path=Path(data_dir_path) / pipeline_id / "extracted",
                qids=tuple(qid),
            ),
            id=pipeline_id,
            loader=MarkdownDirectoryLoader(
                loaded_data_dir_path=Path(markdown_directory_path)
            ),
            transformer=WikidataItemsTransformer(
                collection_uri=URIRef(collection_uri),
                institution_uri=URIRef(institution_uri),
            ),
            **kwds
        )

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser) -> None:
        Pipeline.add_arguments(arg_parser)
        arg_parser.add_argument("--data-dir-path", required=True)
        arg_parser.add_argument("--collection-uri")
        arg_parser.add_argument("--institution-uri")
        arg_parser.add_argument("--markdown-directory-path", required=True)
        arg_parser.add_argument("--pipeline-id", required=True)
        arg_parser.add_argument("qid", nargs="+")


if __name__ == "__main__":
    WikidataQidToMarkdownDirectoryPipeline.main()
