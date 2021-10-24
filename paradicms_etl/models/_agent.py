from rdflib import FOAF

from paradicms_etl.models._named_model import _NamedModel


class _Agent(_NamedModel):
    @property
    def label(self) -> str:
        return self.name

    @property
    def name(self) -> str:
        return self._required_str_value(FOAF.name)
