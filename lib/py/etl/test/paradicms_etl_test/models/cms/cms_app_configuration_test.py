from pathlib import Path

import pytest
from paradicms_etl.models.cms.cms_app_configuration import CmsAppConfiguration
from paradicms_etl.namespaces import CONFIGURATION
from rdflib import RDF, Graph
from rdflib.resource import Resource


@pytest.fixture
def test_app_configuration_resource(data_dir_path: Path) -> Resource:
    graph = Graph()
    graph.parse(
        source=data_dir_path / "test" / "configuration" / "test_app_configuration.ttl"
    )
    subjects = tuple(graph.subjects(RDF.type, CONFIGURATION.AppConfiguration))
    assert len(subjects) == 1
    return graph.resource(subjects[0])


def test_from_rdf(test_app_configuration_resource: Resource):
    app_configuration = CmsAppConfiguration.from_rdf(test_app_configuration_resource)
    assert app_configuration.app == "single-page-exhibition"
