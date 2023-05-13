from pathlib import Path
from typing import Optional

from configargparse import ArgParser

from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.pipelines.costume_core_ontology_airtable_pipeline import (
    CostumeCoreOntologyAirtablePipeline,
)


class CostumeCoreOntologyAirtableToParadicmsRdfPipeline(
    CostumeCoreOntologyAirtablePipeline
):
    def __init__(
        self,
        *,
        airtable_access_token: str,
        cache_dir_path: Optional[Path] = None,
        paradicms_rdf_file_path: Optional[Path] = None,
    ):
        if paradicms_rdf_file_path is None:
            paradicms_rdf_file_path = (
                self._find_data_dir_path()
                / self.ID
                / "loaded"
                / "costume_core_ontology_paradicms.trig"
            )

        CostumeCoreOntologyAirtablePipeline.__init__(
            self,
            airtable_access_token=airtable_access_token,
            cache_dir_path=cache_dir_path,
            loader=lambda *, models, **kwds: RdfFileLoader(
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
            ),
        )

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser):
        Pipeline.add_arguments(arg_parser)
        arg_parser.add_argument("--airtable-access-token", required=True)
        arg_parser.add_argument("--cache-dir-path", type=Path)
        arg_parser.add_argument("--paradicms-rdf-file-path", type=Path)


if __name__ == "__main__":
    CostumeCoreOntologyAirtableToParadicmsRdfPipeline.main()
