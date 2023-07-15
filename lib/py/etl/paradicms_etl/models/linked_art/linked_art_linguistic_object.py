from typing import Tuple, Union, Iterable, List

from more_itertools import flatten
from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.models.linked_art.linked_art_right import LinkedArtRight
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CRM


class LinkedArtLinguisticObject(LinkedArtModel, Text):
    class Builder(LinkedArtModel.Builder):
        pass

    @property
    def contributors(self) -> Tuple[Union[str, URIRef], ...]:
        return ()

    @property
    def creators(self) -> Tuple[Union[str, URIRef], ...]:
        return ()

    @property
    def licenses(self) -> Tuple[Union[str, URIRef], ...]:
        return tuple(flatten(right.p2_has_type for right in self.__p104_is_subject_to))

    @property
    def rights_holders(self) -> Tuple[Union[str, URIRef], ...]:
        rights_holders: List[str] = []
        for right in self.__p104_is_subject_to:
            for acknowledgment in right.p129i_is_subject_of:
                if isinstance(acknowledgment, LinkedArtLinguisticObject):
                    rights_holders.append(acknowledgment.value)
        return tuple(rights_holders)

    @property
    def rights_statements(self) -> Tuple[Union[str, URIRef], ...]:
        return ()

    @property
    def __p104_is_subject_to(self) -> Iterable[LinkedArtRight]:
        yield from (
            model
            for model in self._values(
                CRM.P104_is_subject_to, self._map_term_to_linked_art_model
            )
            if isinstance(model, LinkedArtRight)
        )

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E33_Linguistic_Object

    @property
    def value(self) -> str:
        return self._required_value(
            CRM.P190_has_symbolic_content, self._map_term_to_str
        )
