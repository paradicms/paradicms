from rdflib import URIRef

from paradicms_etl.models.stub.stub_work import StubWork


def test_init():
    StubWork(URIRef("https://www.wikidata.org/wiki/Q937690"))
