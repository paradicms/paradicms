from pathlib import Path

from rdflib import ConjunctiveGraph


class RdfFileExtractor:
    def __init__(self, *, rdf_file_path: Path):
        self.__rdf_file_path = rdf_file_path

    def __call__(self, **kwds):
        conjunctive_graph = ConjunctiveGraph()
        conjunctive_graph.parse(self.__rdf_file_path)
        return {"conjunctive_graph": conjunctive_graph}
