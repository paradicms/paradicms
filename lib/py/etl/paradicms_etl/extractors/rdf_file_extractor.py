from pathlib import Path

from rdflib import ConjunctiveGraph


class RdfFileExtractor:
    def __init__(self, *, rdf_file_paths: tuple[Path, ...]):
        self.__rdf_file_paths = rdf_file_paths

    def __call__(self, **kwds):
        conjunctive_graph = ConjunctiveGraph()
        for rdf_file_path in self.__rdf_file_paths:
            conjunctive_graph.parse(rdf_file_path)
        return {"conjunctive_graph": conjunctive_graph}
