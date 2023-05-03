from pathlib import Path
from typing import Optional

from configargparse import ArgParser

from paradicms_etl.extractors.costume_core_ontology_airtable_extractor import (
    CostumeCoreOntologyAirtableExtractor,
)
from paradicms_etl.loader import Loader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.costume_core_ontology_airtable_transformer import (
    CostumeCoreOntologyAirtableTransformer,
)


class CostumeCoreOntologyAirtableToParadicmsRdfPipeline(Pipeline):
    ID = "costume_core_ontology"

    def __init__(
        self,
        *,
        airtable_access_token: str,
        cache_dir_path: Optional[Path] = None,
        loader: Optional[Loader] = None,
        paradicms_rdf_file_path: Optional[Path] = None,
    ):
        if cache_dir_path is None:
            data_dir_path = self.__find_data_dir_path()
            if cache_dir_path is None:
                cache_dir_path = self._cache_dir_path(
                    data_dir_path=data_dir_path, pipeline_id=self.ID
                )

        if loader is None:
            if paradicms_rdf_file_path is None:
                paradicms_rdf_file_path = (
                    data_dir_path
                    / self.ID
                    / "loaded"
                    / "costume_core_ontology_paradicms.trig"
                )
            loader = lambda *, models, **kwds: RdfFileLoader(
                rdf_file_path=paradicms_rdf_file_path
            )(
                models=(
                    model
                    for model in models
                    if not isinstance(
                        model,
                        (
                            CostumeCoreOntology,
                            CostumeCoreOntology.Predicate,
                            CostumeCoreOntology.Term,
                        ),
                    )
                ),
                **kwds,
            )

        Pipeline.__init__(
            self,
            extractor=CostumeCoreOntologyAirtableExtractor(
                access_token=airtable_access_token,
                cache_dir_path=cache_dir_path / "airtable",
            ),
            id=self.ID,
            loader=loader,
            transformer=CostumeCoreOntologyAirtableTransformer(),
        )

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser):
        Pipeline.add_arguments(arg_parser)
        arg_parser.add_argument("--airtable-access-token", required=True)
        arg_parser.add_argument("--cache-dir-path", type=Path)
        arg_parser.add_argument("--paradicms-rdf-file-path", type=Path)

    @staticmethod
    def __find_data_dir_path() -> Path:
        for data_dir_path in (
            Path("/paradicms/data"),
            Path(__file__).parent.parent.parent.parent.parent.parent / "data",
        ):
            if data_dir_path.is_dir():
                return data_dir_path
        raise NotImplementedError("unable to find data dir path")


if __name__ == "__main__":
    CostumeCoreOntologyAirtableToParadicmsRdfPipeline.main()
