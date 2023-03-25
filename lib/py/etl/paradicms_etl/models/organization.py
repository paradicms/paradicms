from paradicms_etl.models.agent import Agent
from rdflib import URIRef


class Organization(Agent):
    class Builder(Agent.Builder):
        def build(self):
            return Organization(self._resource)

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        return cls.Builder(name=name, uri=uri)
