from rdflib import URIRef

from paradicms_etl.models.stub.stub_person import StubPerson


def test_init():
    StubPerson(URIRef("http://www.wikidata.org/entity/Q7251"))
