from abc import abstractmethod
from pathlib import Path
from typing import Dict

from rdflib import Graph

from paradicms.etl.lib.pipeline._transformer import _Transformer


class _CsvFileTransformer(_Transformer):
    def transform(self, *, csv_file_path: Path, **kwds) -> Graph:
        graph = Graph()
        self._transform_csv_file(csv_file_path=csv_file_path, graph=graph)
        return graph

    def _strip_csv_row(self, csv_row: Dict[str, str]):
        row_copy = {}
        for key, value in csv_row.items():
            key = key.strip()
            if not key:
                continue
            value = value.strip()
            if not value:
                continue
            row_copy[key] = value
        return row_copy

    @abstractmethod
    def _transform_csv_file(self, *, csv_file_path: Path, graph: Graph) -> None:
        pass
