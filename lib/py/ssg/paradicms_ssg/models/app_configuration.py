from pathlib import Path
from typing import Optional

from rdflib import Graph, RDF, URIRef

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update
from paradicms_ssg.namespaces import CONFIGURATION


class AppConfiguration(ResourceBackedModel):
    @property
    def app(self) -> Optional[str]:
        return self._optional_value(CONFIGURATION.app, self._map_term_to_str)

    @classmethod
    def from_rdf_file(cls, rdf_file_path: Path):
        graph = Graph()
        graph.parse(source=rdf_file_path)
        subjects = tuple(graph.subjects(RDF.type, CONFIGURATION.AppConfiguration))
        if len(subjects) == 0:
            raise ValueError(f"no AppConfiguration resource in {rdf_file_path}")
        elif len(subjects) > 1:
            raise ValueError(f"multiple AppConfiguration resources in {rdf_file_path}")
        return cls.from_rdf(graph.resource(subjects[0]))

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedModel.json_ld_context(), {"@vocab": str(CONFIGURATION)}
        )

    @classmethod
    def label_property_uri(cls) -> Optional[URIRef]:
        return None

    @classmethod
    def rdf_type_uri(cls):
        return CONFIGURATION[cls.__name__]
