from rdflib.resource import Resource

from paradicms_etl.models.agent import Agent
from paradicms_etl.models.schema.schema_model import SchemaModel


class SchemaAgent(SchemaModel, Agent):
    class Builder(SchemaModel.Builder):
        pass

    def __init__(self, resource: Resource):
        SchemaModel.__init__(self, resource)
        self.name

    @property
    def label(self) -> str:
        return self.name

    @property
    def name(self) -> str:
        return self._required_name
