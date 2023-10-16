import logging
from collections.abc import Iterable

from rdflib import RDF, ConjunctiveGraph, URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.root_model_classes_by_name import ROOT_MODEL_CLASSES_BY_NAME


class RdfConjunctiveGraphTransformer:
    """
    Transformer that recreates models that were loaded with the RdfFileLoader.
    """

    def __init__(
        self,
        *,
        root_model_classes_by_name: dict[str, type[Model]] | None = None,
    ):
        self.__logger = logging.getLogger(__name__)
        if root_model_classes_by_name is None:
            root_model_classes_by_name = ROOT_MODEL_CLASSES_BY_NAME
        self.__root_model_classes_by_rdf_type_uri: dict[URIRef, type[Model]] = {}
        for (
            root_model_class_name,
            root_model_class,
        ) in root_model_classes_by_name.items():
            if root_model_class_name != root_model_class.__name__:
                continue  # An alias
            elif not issubclass(root_model_class, ResourceBackedModel):
                continue
            if (
                root_model_class.rdf_type_uri()
                in self.__root_model_classes_by_rdf_type_uri
            ):
                raise ValueError(
                    f"root model class {root_model_class.__name__} has duplicate rdf:type {root_model_class.rdf_type_uri()}"
                )
            self.__root_model_classes_by_rdf_type_uri[
                root_model_class.rdf_type_uri()
            ] = root_model_class

    def __call__(self, *, graph: ConjunctiveGraph) -> Iterable[Model]:
        for graph_context in graph.contexts():
            root_model_rdf_types = tuple(
                graph_context.objects(graph_context.identifier, RDF.type)
            )

            if len(root_model_rdf_types) == 0:
                self.__logger.warning(
                    "graph %s does not contain a root model?", graph_context.identifier
                )
                continue

            root_model_class: type[Model] | None = None
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
                    graph_context.identifier,
                    root_model_rdf_types,
                )
                continue

            root_model = root_model_class.from_rdf(
                graph_context.resource(graph_context.identifier)
            )
            yield root_model
