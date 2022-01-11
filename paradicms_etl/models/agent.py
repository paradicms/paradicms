from rdflib import FOAF

from paradicms_etl.models._named_model import _NamedModel


class Agent(_NamedModel):
    def __init__(self, *args, **kwds):
        _NamedModel.__init__(self, *args, **kwds)
        self.name

    @property
    def label(self) -> str:
        return self.name

    @property
    def name(self) -> str:
        return self._required_str_value(FOAF.name)
