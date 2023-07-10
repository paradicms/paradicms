import logging
from pathlib import Path
from types import ModuleType
from typing import Optional, Tuple, Set, Iterable

from rdflib import ConjunctiveGraph, Graph
from rdflib.term import Identifier
from rdflib.util import guess_format

from paradicms_etl.model import Model
from paradicms_etl.namespaces import bind_namespaces


class RdfFileLoader:
    def __init__(
        self,
        *,
        rdf_file_path: Path,
        additional_namespace_modules: Tuple[ModuleType, ...] = (),
        format: Optional[str] = None,
    ):
        self.__conjunctive_graph = ConjunctiveGraph()
        bind_namespaces(
            self.__conjunctive_graph.namespace_manager,
            additional_namespace_modules=additional_namespace_modules,
        )
        self.__conjunctive_graph_context_identifiers: Set[Identifier] = set()
        self.__logger = logging.getLogger(__name__)
        self.__rdf_file_path = rdf_file_path
        if format is None:
            format = guess_format(str(rdf_file_path))
            if format is None:
                raise ValueError("unable to guess format from file path")
        self.__format = format

    def __call__(self, *, flush: bool, models: Iterable[Model]) -> Iterable[Model]:
        for model in models:
            model_graph = Graph()
            model_resource = model.to_rdf(graph=model_graph)
            if (
                model_resource.identifier
                in self.__conjunctive_graph_context_identifiers
            ):
                existing_model_graph = self.__conjunctive_graph.get_context(
                    model_resource.identifier
                )
                if existing_model_graph.isomorphic(model_graph):
                    self.__logger.debug(
                        "model graphs with same identifier (%s) that are isomorphic",
                        model_resource.identifier,
                    )
                else:
                    self.__logger.warning(
                        "model graphs with same identifier (%s) that are not isomorphic:\nexisting graph:\n%s\nnew graph:\n%s",
                        model_resource.identifier,
                        existing_model_graph.serialize(),
                        model_graph.serialize(),
                    )

            # Use the model's BNode or URIRef as the graph identifier, too
            conjunctive_graph_context: Graph = self.__conjunctive_graph.get_context(
                model_resource.identifier
            )
            for triple in model_graph:
                conjunctive_graph_context.add(triple)
            self.__conjunctive_graph_context_identifiers.add(
                conjunctive_graph_context.identifier
            )

            yield model

        if flush:
            self.__rdf_file_path.parent.mkdir(parents=True, exist_ok=True)
            with open(self.__rdf_file_path, "w+b") as file_:
                self.__conjunctive_graph.serialize(
                    destination=file_, format=self.__format
                )
