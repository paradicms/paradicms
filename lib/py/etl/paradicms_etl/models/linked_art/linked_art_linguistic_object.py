from typing import Tuple, Union, Iterable, List

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
        return tuple(right.p2_has_type for right in self.__p104_is_subject_to)

    @property
    def rights_holders(self) -> Tuple[Union[str, URIRef], ...]:
        rights_holders: List[str] = []
        for right in self.__p104_is_subject_to:
            for acknowledgment in right.p129i_is_subject_of:
                rights_holders.append(acknowledgment.value)
        return tuple(rights_holders)

    @property
    def rights_statements(self) -> Tuple[Union[str, URIRef], ...]:
        return ()

    @property
    def __p104_is_subject_to(self) -> Iterable[LinkedArtRight]:
        return self._values(CRM["P104_is_subject_to"], self._map_linked_art_right_value)

    @property
    def p2_has_type(self) -> Tuple[URIRef, ...]:
        """
        P2_has_type returns e.g., http://vocab.getty.edu/aat/300080091 for an "Object Description".
        """

        return tuple(self._values(CRM["P2_has_type"], self._map_uri_value))

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM["E33_Linguistic_Object"]

    def value(self) -> str:
        return self._required_value(
            CRM["P190_has_symbolic_content"], self._map_str_value
        )
