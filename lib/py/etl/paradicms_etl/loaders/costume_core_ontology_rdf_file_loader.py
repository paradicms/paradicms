from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.costume_core.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.models.costume_core.costume_core_predicate import (
    CostumeCorePredicate,
)
from paradicms_etl.models.costume_core.costume_core_term import CostumeCoreTerm

from paradicms_etl.namespaces import COCO


class CostumeCoreOntologyRdfFileLoader(RdfFileLoader):
    def _flush(self, models):
        RdfFileLoader._flush(
            self,
            models=tuple(
                model
                for model in models
                if isinstance(
                    model, (CostumeCoreOntology, CostumeCorePredicate, CostumeCoreTerm)
                )
                and str(model.uri).startswith(str(COCO)[:-1])
            ),
        )
