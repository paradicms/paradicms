from rdflib import SDO
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

    @classmethod
    def label_property_uri(cls):
        return SDO.name

    @property
    def name(self) -> str:
        return self._required_value(SDO.name, self._map_str_value)
