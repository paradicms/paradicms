import hashlib
import logging
from pathlib import Path
from types import ModuleType
from typing import Optional, Tuple

from rdflib import ConjunctiveGraph, URIRef, BNode
from rdflib.util import guess_format

from paradicms_etl.loaders.buffering_loader import BufferingLoader
from paradicms_etl.model import Model
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.namespaces import bind_namespaces


class RdfFileLoader(BufferingLoader):
    def __init__(
        self,
        *,
        pipeline_id: str,
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
        self.__pipeline_id = pipeline_id

    def _flush(self, *, models: Tuple[Model, ...]):
        conjunctive_graph = ConjunctiveGraph()
        bind_namespaces(
            conjunctive_graph.namespace_manager,
            additional_namespace_modules=self.__additional_namespace_modules,
        )
        self.__logger.debug("serializing %d models to a graph", len(models))
        for model in models:
            if isinstance(model, NamedModel):
                model_graph_uri = URIRef(
                    f"urn:paradicms_etl:pipeline:{self.__pipeline_id}:model:{hashlib.sha256(str(model.uri).encode('utf-8')).hexdigest()}"
                )
                model_graph = conjunctive_graph.get_context(model_graph_uri)
            else:
                model_graph = conjunctive_graph.get_context(BNode())

            model.to_rdf(graph=model_graph)

        self.__logger.debug(
            "writing %d models to %s", len(models), self.__rdf_file_path
        )
        self.__rdf_file_path.parent.mkdir(parents=True, exist_ok=True)
        with open(self.__rdf_file_path, "w+b") as file_:
            conjunctive_graph.serialize(destination=file_, format=self.__format)
        self.__logger.info("wrote %d models to %s", len(models), self.__rdf_file_path)
