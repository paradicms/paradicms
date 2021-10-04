from pathlib import Path
from typing import List, Optional

from configargparse import ArgParser
from rdflib import URIRef

from paradicms_etl._pipeline import _Pipeline
from paradicms_etl.extractors.wikidata_qid_extractor import WikidataQidExtractor
from paradicms_etl.loaders.markdown_directory_loader import MarkdownDirectoryLoader
from paradicms_etl.transformers.markdown_directory_transformer import (
    MarkdownDirectoryTransformer,
)
from paradicms_etl.transformers.wikidata_items_transformer import (
    WikidataItemsTransformer,
)


class WikidataQidToMarkdownDirectoryPipeline(_Pipeline):
    ID = "wikidata_qid_to_markdown_directory"

    def __init__(
        self,
        *,
        qid: List[str],
        collection_uri: Optional[str] = None,
        institution_uri: Optional[str] = None,
        markdown_directory_path: Optional[str] = None,
        **kwds
    ):
        if collection_uri is None and markdown_directory_path is not None:
            collection_uri = str(
                MarkdownDirectoryTransformer.default_collection_uri(
                    markdown_directory_name=str(
                        Path(markdown_directory_path).absolute().name
                    ),
                    pipeline_id=self.ID,
                )
            )

        _Pipeline.__init__(
            extractor=WikidataQidExtractor(
                qids=tuple(qid), pipeline_id=self.ID, **kwds
            ),
            id=self.ID,
            loader=MarkdownDirectoryLoader(
                loaded_data_dir_path=Path(markdown_directory_path)
                if markdown_directory_path is not None
                else None,
                **kwds
            ),
            transformer=WikidataItemsTransformer(
                collection_uri=URIRef(collection_uri) if collection_uri else None,
                institution_uri=URIRef(institution_uri) if institution_uri else None,
                pipeline_id=self.ID,
                **kwds
            ),
            **kwds
        )

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser) -> None:
        _Pipeline.add_arguments(arg_parser)
        arg_parser.add_argument("--collection-uri")
        arg_parser.add_argument(
            "--institution-uri",
            default=str(
                MarkdownDirectoryTransformer.default_institution_uri(pipeline_id=cls.ID)
            ),
        )
        arg_parser.add_argument("--markdown-directory-path")
        arg_parser.add_argument("qid", nargs="+")


if __name__ == "__main__":
    WikidataQidToMarkdownDirectoryPipeline.main()
