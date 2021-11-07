import hashlib
from pathlib import Path
from typing import Optional

from pathvalidate import sanitize_filename
from rdflib import ConjunctiveGraph, URIRef

from paradicms_etl.loaders._buffering_loader import _BufferingLoader
from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.namespace import bind_namespaces


class RdfFileLoader(_BufferingLoader):
    FORMAT_DEFAULT = "trig"

    def __init__(
        self,
        *,
        file_path: Optional[Path] = None,
        format: Optional[str] = FORMAT_DEFAULT,
        **kwds,
    ):
        _BufferingLoader.__init__(self, **kwds)
        self.__file_path = file_path
        if format is None:
            format = self.FORMAT_DEFAULT
        self.__format = format

    def _flush(self, models):
        file_path = self.__file_path
        if file_path is None:
            file_path = self._loaded_data_dir_path / (
                sanitize_filename(self._pipeline_id) + "." + self.__format
            )
        self._logger.debug("serializing %d models to a graph", len(models))
        conjunctive_graph = ConjunctiveGraph()
        bind_namespaces(conjunctive_graph.namespace_manager)
        for model in models:
            assert isinstance(model, _NamedModel)
            model_graph_uri = URIRef(
                f"{self._pipeline_uri}:model:{hashlib.sha256(str(model.uri).encode('utf-8')).hexdigest()}"
            )
            model_graph = conjunctive_graph.get_context(model_graph_uri)
            model.to_rdf(graph=model_graph)
        self._logger.debug("writing %d models to %s", len(models), file_path)
        with open(file_path, "w+b") as file_:
            conjunctive_graph.serialize(destination=file_, format=self.__format)
        self._logger.info("wrote %d models to %s", len(models), file_path)
