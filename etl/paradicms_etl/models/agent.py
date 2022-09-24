from rdflib import FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS


class Agent(ResourceBackedNamedModel):
    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.Agent)
        ResourceBackedNamedModel.__init__(self, resource)
        self.name

    @property
    def label(self) -> str:
        return self.name

    @property
    def name(self) -> str:
        return self._required_str_value(FOAF.name)
