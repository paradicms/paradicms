from typing import Optional

from rdflib import BNode, Graph, Literal, XSD

from paradicms.etl.lib.model._model import _Model
from paradicms.etl.lib.namespace import TIME


class DateTimeDescription(_Model):
    def __init__(self, graph: Graph):
        _Model.__init__(
            self,
            graph=graph,
            rdf_type=TIME.DateTimeDescription,
            uri=BNode().skolemize()
        )

    @property
    def day(self) -> Optional[int]:
        literal = self._get_single_typed_literal(TIME.day, XSD.gDay)
        return int(literal.value.lstrip("-")) if literal is not None else None

    @day.setter
    def day(self, value: int):
        self.resource.add(TIME.day, Literal("---" + str(value), datatype=XSD.gDay))

    @property
    def hour(self) -> Optional[int]:
        return self._get_single_value(TIME.hour, int)

    @hour.setter
    def hour(self, value: int):
        self._set_single_value(TIME.hour, value)

    @property
    def minute(self) -> Optional[int]:
        return self._get_single_value(TIME.minute, int)

    @minute.setter
    def minute(self, value: int):
        self._set_single_value(TIME.minute, value)

    @property
    def month(self) -> Optional[int]:
        literal = self._get_single_typed_literal(TIME.month, XSD.gMonth)
        return int(literal.value.lstrip("-")) if literal is not None else None

    @month.setter
    def month(self, value: int):
        self.resource.add(TIME.month, Literal("---" + str(value), datatype=XSD.gMonth))

    @property
    def year(self) -> Optional[int]:
        literal = self._get_single_typed_literal(TIME.year, XSD.gYear)
        return int(literal.value) if literal is not None else None

    @year.setter
    def year(self, value: int):
        self.resource.add(TIME.year, Literal(str(value), datatype=XSD.gYear))
