import logging
from pathlib import Path
from types import ModuleType
from typing import Optional, Tuple, Set

from rdflib import ConjunctiveGraph, Graph
from rdflib.term import Identifier
from rdflib.util import guess_format

from paradicms_etl.loaders.buffering_loader import BufferingLoader
from paradicms_etl.model import Model
from paradicms_etl.namespaces import bind_namespaces


class RdfFileLoader(BufferingLoader):
    def __init__(
        self,
        *,
        rdf_file_path: Path,
        additional_namespace_modules: Tuple[ModuleType, ...] = (),
        format: Optional[str] = None,
    ):
        BufferingLoader.__init__(self)
        self.__additional_namespace_modules = additional_namespace_modules
        self.__logger = logging.getLogger(__name__)
        self.__rdf_file_path = rdf_file_path
        if format is None:
            format = guess_format(str(rdf_file_path))
            if format is None:
                raise ValueError("unable to guess format from file path")
        self.__format = format

    def _flush(self, *, models: Tuple[Model, ...]):
        conjunctive_graph = ConjunctiveGraph()
        bind_namespaces(
            conjunctive_graph.namespace_manager,
            additional_namespace_modules=self.__additional_namespace_modules,
        )
        self.__logger.debug("serializing %d models to a graph", len(models))
        conjunctive_graph_context_identifiers: Set[Identifier] = set()
        for model in models:
            model_graph = Graph()
            model_resource = model.to_rdf(graph=model_graph)
            if model_resource.identifier in conjunctive_graph_context_identifiers:
                self.__logger.warning(
                    "duplicate model identifier %s, not adding to conjunctive graph",
                    model_resource.identifier,
                )
                continue

            # Use the model's BNode or URIRef as the graph identifier, too
            conjunctive_graph_context: Graph = conjunctive_graph.get_context(
                model_resource.identifier
            )
            for triple in model_graph:
                conjunctive_graph_context.add(triple)
            conjunctive_graph_context_identifiers.add(
                conjunctive_graph_context.identifier
            )

        self.__logger.debug(
            "writing %d models to %s", len(models), self.__rdf_file_path
        )
        self.__rdf_file_path.parent.mkdir(parents=True, exist_ok=True)
        with open(self.__rdf_file_path, "w+b") as file_:
            conjunctive_graph.serialize(destination=file_, format=self.__format)
        self.__logger.debug("wrote %d models to %s", len(models), self.__rdf_file_path)
