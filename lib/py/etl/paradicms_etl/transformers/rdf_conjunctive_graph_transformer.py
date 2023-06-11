import logging
from typing import Optional, Dict, Type, Iterable

from rdflib import ConjunctiveGraph, RDF, URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.root_model_classes_by_name import (
    ROOT_MODEL_CLASSES_BY_NAME,
)


class RdfConjunctiveGraphTransformer:
    """
    Transformer that recreates models that were loaded with the RdfFileLoader.
    """

    def __init__(
        self,
        *,
        root_model_classes_by_name: Optional[
            Dict[str, Type[ResourceBackedModel]]
        ] = None,
    ):
        self.__logger = logging.getLogger(__name__)
        if root_model_classes_by_name is None:
            root_model_classes_by_name = ROOT_MODEL_CLASSES_BY_NAME
        self.__root_model_classes_by_rdf_type_uri = {
            root_model_class.rdf_type_uri(): root_model_class
            for root_model_class in root_model_classes_by_name.values()
        }

    def __call__(self, *, conjunctive_graph: ConjunctiveGraph) -> Iterable[Model]:
        for graph in conjunctive_graph.contexts():
            root_model_rdf_types = tuple(graph.objects(graph.identifier, RDF.type))

            if len(root_model_rdf_types) == 0:
                self.__logger.warning(
                    "graph %s does not contain a root model?", graph.identifier
                )
                continue

            root_model_class: Optional[Type[ResourceBackedModel]] = None
            for root_model_rdf_type in root_model_rdf_types:
                if not isinstance(root_model_rdf_type, URIRef):
                    continue
                root_model_class = self.__root_model_classes_by_rdf_type_uri.get(
                    root_model_rdf_type
                )
                if root_model_class is not None:
                    break

            if root_model_class is None:
                self.__logger.warning(
                    "graph %s contains a root model with unknown rdf:types %s",
                    graph.identifier,
                    root_model_rdf_types,
                )
                continue

            root_model = root_model_class(graph.resource(graph.identifier))
            yield root_model
