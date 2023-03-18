from paradicms_etl.loaders.dressdiscover_rdf_file_loader import (
    DressdiscoverRdfFileLoader,
)
from paradicms_etl.models.costume_core.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.models.costume_core.costume_core_predicate import (
    CostumeCorePredicate,
)
from paradicms_etl.models.costume_core.costume_core_term import CostumeCoreTerm

from paradicms_etl.namespaces import COCO


class CostumeCoreOntologyRdfFileLoader(DressdiscoverRdfFileLoader):
    def _flush(self, models):
        DressdiscoverRdfFileLoader._flush(
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
