from rdflib import FOAF

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel


class Agent(ResourceBackedNamedModel):
    def __init__(self, *args, **kwds):
        ResourceBackedNamedModel.__init__(self, *args, **kwds)
        self.name

    @property
    def label(self) -> str:
        return self.name

    @property
    def name(self) -> str:
        return self._required_str_value(FOAF.name)
