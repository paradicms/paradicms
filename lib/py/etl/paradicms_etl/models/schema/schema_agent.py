from rdflib.resource import Resource

from paradicms_etl.models.agent import Agent
from paradicms_etl.models.schema.schema_model import SchemaModel


class SchemaAgent(SchemaModel, Agent):
    """
    Abstract base class for properties shared between schema:Organization and schema:Person.

    There is no concept of an "agent" in schema.org; both schema:Organization and schema:Person inherit schema:Thing
    directly.
    """

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
