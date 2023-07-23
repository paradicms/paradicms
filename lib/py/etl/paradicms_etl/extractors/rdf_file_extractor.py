import os
from pathlib import Path

from rdflib import ConjunctiveGraph, Graph


class RdfFileExtractor:
    __QUAD_FILE_EXTS = {".nq", ".trig"}

    def __init__(self, *, rdf_file_path: Path):
        self.__rdf_file_path = rdf_file_path

    def __call__(self, **kwds):
        rdf_file_ext = os.path.splitext(str(self.__rdf_file_path).lower())[1]
        if rdf_file_ext in self.__QUAD_FILE_EXTS:
            graph = ConjunctiveGraph()
        else:
            graph = Graph()
        graph.parse(self.__rdf_file_path)
        return {"graph": graph}
