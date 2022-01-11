from rdflib import FOAF

from paradicms_etl.models.named_model import NamedModel


class Agent(NamedModel):
    def __init__(self, *args, **kwds):
        NamedModel.__init__(self, *args, **kwds)
        self.name

    @property
    def label(self) -> str:
        return self.name

    @property
    def name(self) -> str:
        return self._required_str_value(FOAF.name)
