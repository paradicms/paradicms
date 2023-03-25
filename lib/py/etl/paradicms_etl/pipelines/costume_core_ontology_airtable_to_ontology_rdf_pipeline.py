import dataclasses
from pathlib import Path

from configargparse import ArgParser

from paradicms_etl.extractors.costume_core_ontology_airtable_extractor import (
    CostumeCoreOntologyAirtableExtractor,
)
from paradicms_etl.loaders.buffering_loader import BufferingLoader
from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.model import Model
from paradicms_etl.models.costume_core.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.models.costume_core.costume_core_predicate import (
    CostumeCorePredicate,
)
from paradicms_etl.models.costume_core.costume_core_term import CostumeCoreTerm
from paradicms_etl.namespaces import COCO
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformers.costume_core_ontology_airtable_transformer import (
    CostumeCoreOntologyAirtableTransformer,
)


def is_costume_core_ontology_model(model: Model):
    return isinstance(
        model, (CostumeCoreOntology, CostumeCorePredicate, CostumeCoreTerm)
    ) and str(model.uri).startswith(str(COCO)[:-1])


class CostumeCoreOntologyAirtableToOntologyRdfPipeline(Pipeline):
    ID = "costume_core_ontology"

    class __CostumeCoreOntologyPyLoader(BufferingLoader):
        def _flush(self, models):
            models_dir_path = Path(__file__).parent.parent / "models" / "costume_core"
            assert models_dir_path.is_dir(), models_dir_path

            with open(
                models_dir_path / "costume_core_predicates.py", "w+", encoding="ascii"
            ) as predicates_py_file:
                print(
                    "from .costume_core_predicate import CostumeCorePredicate",
                    file=predicates_py_file,
                )
                print("import rdflib.term", file=predicates_py_file)
                print(file=predicates_py_file)
                predicates = tuple(
                    sorted(
                        filter(
                            lambda model: isinstance(model, CostumeCorePredicate),
                            models,
                        ),
                        key=lambda predicate: predicate.id,
                    )
                )
                for predicate in predicates:
                    print(
                        f"{predicate.id} = {dataclasses.replace(predicate, terms=None)}",
                        file=predicates_py_file,
                    )
                print(
                    f"COSTUME_CORE_PREDICATES = ({', '.join(predicate.id for predicate in predicates)})",
                    file=predicates_py_file,
                )

            with open(
                models_dir_path / "costume_core_terms.py",
                "w+",
                encoding="utf-8",
                newline="\n",
            ) as terms_py_file:
                print("# -*- coding: utf-8 -*-", file=terms_py_file)
                print(file=terms_py_file)
                print(
                    "from .costume_core_description import CostumeCoreDescription",
                    file=terms_py_file,
                )
                print(
                    "from .costume_core_rights import CostumeCoreRights",
                    file=terms_py_file,
                )
                print(
                    "from .costume_core_term import CostumeCoreTerm", file=terms_py_file
                )
                print("import rdflib.term", file=terms_py_file)
                print(file=terms_py_file)
                terms = tuple(
                    sorted(
                        filter(
                            lambda model: isinstance(model, CostumeCoreTerm), models
                        ),
                        key=lambda term: term.id,
                    )
                )
                for term in terms:
                    print(f"{term.id} = {term}", file=terms_py_file)
                print(
                    f"COSTUME_CORE_TERMS = ({', '.join(term.id for term in terms)})",
                    file=terms_py_file,
                )

    def __init__(
        self,
        *,
        airtable_access_token: str,
        ontology_version: str,
    ):
        data_dir_path = (
            Path(__file__).parent.parent.parent.parent.parent.parent / "data"
        )
        assert data_dir_path.is_dir()
        Pipeline.__init__(
            self,
            extractor=CostumeCoreOntologyAirtableExtractor(
                access_token=airtable_access_token,
                extracted_data_dir_path=self._extracted_data_dir_path(
                    data_dir_path=data_dir_path, pipeline_id=self.ID
                ),
            ),
            id=self.ID,
            loader=CompositeLoader(
                loaders=(
                    self.__CostumeCoreOntologyPyLoader(),
                    lambda *, models, **kwds: RdfFileLoader(
                        format="ttl",
                        pipeline_id=self.ID,
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
                        pipeline_id=self.ID,
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
            transformer=CostumeCoreOntologyAirtableTransformer(
                ontology_version=ontology_version
            ),
        )

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser):
        Pipeline.add_arguments(arg_parser)
        arg_parser.add_argument("--airtable-access-token", required=True)
        arg_parser.add_argument("--ontology-version", required=True)


if __name__ == "__main__":
    CostumeCoreOntologyAirtableToOntologyRdfPipeline.main()
