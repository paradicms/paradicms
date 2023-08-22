from configargparse import ArgParser

from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.model import Model
from paradicms_etl.models.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.namespaces import COCO
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.pipelines.costume_core_ontology_airtable_pipeline import (
    CostumeCoreOntologyAirtablePipeline,
)


def is_costume_core_ontology_model(model: Model) -> bool:
    return isinstance(
        model,
        CostumeCoreOntology | CostumeCoreOntology.Predicate | CostumeCoreOntology.Term,
    ) and str(model.uri).startswith(str(COCO)[:-1])


class CostumeCoreOntologyAirtableToOntologyRdfPipeline(
    CostumeCoreOntologyAirtablePipeline
):
    def __init__(
        self,
        *,
        airtable_access_token: str,
        ontology_version: str,
    ):
        data_dir_path = self._find_data_dir_path()
        CostumeCoreOntologyAirtablePipeline.__init__(
            self,
            airtable_access_token=airtable_access_token,
            loader=CompositeLoader(
                loaders=(
                    lambda *, models, **kwds: RdfFileLoader(
                        format="ttl",
                        rdf_file_path=data_dir_path
                        / self.ID
                        / "loaded"
                        / "costume_core_ontology.ttl",
                    )(
                        models=(
                            model
                            for model in models
                            if is_costume_core_ontology_model(model)
                        ),
                        **kwds,
                    ),
                    lambda *, models, **kwds: RdfFileLoader(
                        format="xml",
                        rdf_file_path=data_dir_path
                        / self.ID
                        / "loaded"
                        / "costume_core_ontology.xml",
                    )(
                        models=(
                            model
                            for model in models
                            if is_costume_core_ontology_model(model)
                        ),
                        **kwds,
                    ),
                ),
            ),
            ontology_version=ontology_version,
        )

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser) -> None:
        Pipeline.add_arguments(arg_parser)
        arg_parser.add_argument("--airtable-access-token", required=True)
        arg_parser.add_argument("--ontology-version", required=True)


if __name__ == "__main__":
    CostumeCoreOntologyAirtableToOntologyRdfPipeline.main()
