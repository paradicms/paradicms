from typing import Dict, Optional, Tuple, List

from paradicms_etl.models.named_value import NamedValue
from rdflib import Literal, URIRef

from paradicms_etl.models.costume_core.costume_core_predicate import (
    CostumeCorePredicate,
)
from paradicms_etl.models.costume_core.costume_core_predicates import (
    COSTUME_CORE_PREDICATES,
)
from paradicms_etl.models.costume_core.costume_core_term import CostumeCoreTerm
from paradicms_etl.models.costume_core.costume_core_terms import COSTUME_CORE_TERMS
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions


class CostumeCore:
    def __init__(
        self,
        *,
        predicates: Optional[Tuple[CostumeCorePredicate, ...]] = None,
        terms: Optional[Tuple[CostumeCoreTerm, ...]] = None
    ):
        if predicates is None:
            predicates = COSTUME_CORE_PREDICATES
        self.__predicates = predicates

        self.__predicates_by_id = {predicate.id: predicate for predicate in predicates}

        self.__predicates_by_label = {
            predicate.label: predicate for predicate in predicates
        }

        if terms is None:
            terms = COSTUME_CORE_TERMS
        self.__terms = terms

        self.__terms_by_id = {term.id: term for term in terms}

        terms_by_predicate_id: Dict[str, List[CostumeCoreTerm]] = {}
        for costume_core_term in COSTUME_CORE_TERMS:
            if costume_core_term.features:
                for feature in costume_core_term.features:
                    terms_by_predicate_id.setdefault(feature, []).append(
                        costume_core_term
                    )
        self.__terms_by_predicate_id = {
            predicate_id: tuple(terms)
            for predicate_id, terms in terms_by_predicate_id.items()
        }

        images = []
        named_values = []
        for term in self.__terms:
            if not term.features:
                continue
            named_value = NamedValue.from_fields(
                property_uris=tuple(
                    URIRef(self.__predicates_by_id[predicate_id].uri)
                    for predicate_id in term.features
                ),
                uri=URIRef(term.uri),
                value=Literal(term.display_name_en),
            )
            named_values.append(named_value)

            full_size_image_url = term.full_size_image_url
            if full_size_image_url is None:
                continue
            full_size_image = Image.from_fields(
                depicts_uri=named_value.uri,
                uri=URIRef(full_size_image_url),
            )
            images.append(full_size_image)

            thumbnail_url = term.thumbnail_url
            if thumbnail_url is None:
                continue
            images.append(
                Image.from_fields(
                    depicts_uri=named_value.uri,
                    exact_dimensions=ImageDimensions(height=200, width=200),
                    original_image_uri=full_size_image.uri,
                    uri=URIRef(thumbnail_url),
                )
            )

        self.__images = tuple(images)
        self.__named_values = tuple(named_values)

    @property
    def images(self) -> Tuple[Image, ...]:
        return self.__images

    @property
    def named_values(self) -> Tuple[NamedValue, ...]:
        return self.__named_values

    @property
    def predicates(self) -> Tuple[CostumeCorePredicate, ...]:
        return self.__predicates

    @property
    def predicates_by_id(self) -> Dict[str, CostumeCorePredicate]:
        return self.__predicates_by_id

    @property
    def predicates_by_label(self) -> Dict[str, CostumeCorePredicate]:
        return self.__predicates_by_label

    @property
    def terms(self) -> Tuple[CostumeCoreTerm, ...]:
        return self.__terms

    @property
    def terms_by_id(self) -> Dict[str, CostumeCoreTerm]:
        return self.__terms_by_id

    @property
    def terms_by_predicate_id(self) -> Dict[str, Tuple[CostumeCoreTerm, ...]]:
        return self.__terms_by_predicate_id
