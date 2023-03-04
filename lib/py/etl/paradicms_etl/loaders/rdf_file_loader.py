import hashlib
import logging
from pathlib import Path
from typing import Optional, Tuple

from rdflib import ConjunctiveGraph, URIRef

from paradicms_etl.loaders.buffering_loader import BufferingLoader
from paradicms_etl.model import Model
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.namespaces import bind_namespaces


class RdfFileLoader(BufferingLoader):
    FORMAT_DEFAULT = "trig"

    def __init__(
        self,
        *,
        pipeline_id: str,
        rdf_file_path: Path,
        format: Optional[str] = FORMAT_DEFAULT,
    ):
        BufferingLoader.__init__(self)
        self.__logger = logging.getLogger(__name__)
        self.__rdf_file_path = rdf_file_path
        if format is None:
            format = self.FORMAT_DEFAULT
        self.__format = format
        self.__pipeline_id = pipeline_id

    def _flush(self, *, models: Tuple[Model, ...]):
        conjunctive_graph = self._new_conjunctive_graph()
        self.__logger.debug("serializing %d models to a graph", len(models))
        for model in models:
            assert isinstance(model, NamedModel), type(model)
            model_graph_uri = URIRef(
                f"urn:paradicms_etl:pipeline:{self.__pipeline_id}:model:{hashlib.sha256(str(model.uri).encode('utf-8')).hexdigest()}"
            )
            model_graph = conjunctive_graph.get_context(model_graph_uri)
            model.to_rdf(graph=model_graph)
        self.__logger.debug(
            "writing %d models to %s", len(models), self.__rdf_file_path
        )
        self.__rdf_file_path.parent.mkdir(parents=True, exist_ok=True)
        with open(self.__rdf_file_path, "w+b") as file_:
            conjunctive_graph.serialize(destination=file_, format=self.__format)
        self.__logger.info("wrote %d models to %s", len(models), self.__rdf_file_path)

    def _new_conjunctive_graph(self) -> ConjunctiveGraph:
        conjunctive_graph = ConjunctiveGraph()
        bind_namespaces(conjunctive_graph.namespace_manager)
        return conjunctive_graph