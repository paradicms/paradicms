import hashlib
import logging
from pathlib import Path
from typing import Optional, Tuple

from pathvalidate import sanitize_filename
from rdflib import ConjunctiveGraph, URIRef

from paradicms_etl.loaders.buffering_loader import BufferingLoader
from paradicms_etl.model import Model
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.namespaces import bind_namespaces

logger = logging.getLogger(__name__)


class RdfFileLoader(BufferingLoader):
    FORMAT_DEFAULT = "trig"

    def __init__(
        self,
        *,
        file_name: Optional[str] = None,
        file_stem: Optional[str] = None,
        file_path: Optional[Path] = None,
        format: Optional[str] = FORMAT_DEFAULT,
        **kwds,
    ):
        BufferingLoader.__init__(self, **kwds)
        if (file_name or file_stem or file_path) and not (
            bool(file_name) ^ bool(file_stem) ^ bool(file_path)
        ):
            raise ValueError("may only specify one of file name, stem, or path")
        self.__file_name = file_name
        self.__file_path = file_path
        self.__file_stem = file_stem
        if format is None:
            format = self.FORMAT_DEFAULT
        self.__format = format

    def _flush(self, *, models: Tuple[Model, ...], pipeline_id: str):
        if self.__file_name is not None:
            file_path = self._loaded_data_dir_path / self.__file_name
        elif self.__file_path is not None:
            file_path = self.__file_path
        elif self.__file_stem is not None:
            file_path = self._loaded_data_dir_path / (
                self.__file_stem + "." + self.__format
            )
        else:
            file_path = self._loaded_data_dir_path / (
                sanitize_filename(pipeline_id) + "." + self.__format
            )

        conjunctive_graph = self._new_conjunctive_graph()
        logger.debug("serializing %d models to a graph", len(models))
        for model in models:
            assert isinstance(model, NamedModel), type(model)
            model_graph_uri = URIRef(
                f"{self._pipeline_uri}:model:{hashlib.sha256(str(model.uri).encode('utf-8')).hexdigest()}"
            )
            model_graph = conjunctive_graph.get_context(model_graph_uri)
            model.to_rdf(graph=model_graph)
        logger.debug("writing %d models to %s", len(models), file_path)
        with open(file_path, "w+b") as file_:
            conjunctive_graph.serialize(destination=file_, format=self.__format)
        logger.info("wrote %d models to %s", len(models), file_path)

    def _new_conjunctive_graph(self) -> ConjunctiveGraph:
        conjunctive_graph = ConjunctiveGraph()
        bind_namespaces(conjunctive_graph.namespace_manager)
        return conjunctive_graph
