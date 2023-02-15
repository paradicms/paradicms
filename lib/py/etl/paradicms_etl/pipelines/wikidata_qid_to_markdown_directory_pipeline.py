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
from paradicms_etl.utils.existing_directory_argument_type import (
    existing_directory_argument_type,
)
from paradicms_etl.utils.uri_argument_type import uri_argument_type


class WikidataQidToMarkdownDirectoryPipeline(Pipeline):
    def __init__(
        self,
        *,
        data_dir_path: Path,
        markdown_directory_path: Path,
        pipeline_id: str,
        qid: List[str],
        institution_uri: Optional[URIRef] = None,
        collection_uri: Optional[URIRef] = None,
        **kwds
    ):
        if collection_uri is None:
            collection_uri = MarkdownDirectoryTransformer.default_collection_uri(
                markdown_directory_name=str(
                    Path(markdown_directory_path).absolute().name
                ),
                pipeline_id=pipeline_id,
            )

        if institution_uri is None:
            institution_uri = MarkdownDirectoryTransformer.default_institution_uri(
                pipeline_id=pipeline_id
            )

        Pipeline.__init__(
            self,
            extractor=WikidataQidExtractor(
                extracted_data_dir_path=Pipeline._extracted_data_dir_path(
                    data_dir_path=data_dir_path, pipeline_id=pipeline_id
                ),
                qids=tuple(qid),
            ),
            id=pipeline_id,
            loader=MarkdownDirectoryLoader(
                loaded_data_dir_path=Path(markdown_directory_path)
            ),
            transformer=WikidataItemsTransformer(
                collection_uri=collection_uri,
                institution_uri=institution_uri,
            ),
            **kwds
        )

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser) -> None:
        Pipeline.add_arguments(arg_parser)
        cls._add_data_dir_path_argument(arg_parser)
        arg_parser.add_argument("--collection-uri", type=uri_argument_type)
        arg_parser.add_argument("--institution-uri", type=uri_argument_type)
        arg_parser.add_argument(
            "--markdown-directory-path",
            required=True,
            type=existing_directory_argument_type,
        )
        arg_parser.add_argument("--pipeline-id", required=True)
        arg_parser.add_argument("qid", nargs="+")


if __name__ == "__main__":
    WikidataQidToMarkdownDirectoryPipeline.main()
