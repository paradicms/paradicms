from pathlib import Path
from typing import Optional

from pathvalidate import sanitize_filename
from rdflib import Graph

from paradicms_etl.loaders._buffering_loader import _BufferingLoader
from paradicms_etl.namespace import bind_namespaces


class RdfFileLoader(_BufferingLoader):
    FORMAT_DEFAULT = "ttl"

    def __init__(
        self,
        *,
        file_path: Optional[Path] = None,
        format: Optional[str] = FORMAT_DEFAULT,
        **kwds
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
        graph = self._new_graph()
        for model in models:
            model.to_rdf(graph=graph)
        self._logger.debug("serialized %d models to a graph", len(models))
        self._logger.debug("writing %d models to %s", len(models), file_path)
        with open(file_path, "w+b") as file_:
            graph.serialize(destination=file_, format=self.__format)
        self._logger.info("wrote %d models to %s", len(models), file_path)

    def _new_graph(self) -> Graph:
        graph = Graph()
        bind_namespaces(graph.namespace_manager)
        return graph
