import logging
from typing import Tuple, Set, Dict

from rdflib import URIRef, DCTERMS
from rdflib.term import Node, Literal

# from paradicms_etl.models.costume_core import costume_core_predicates
# from paradicms_etl.models.costume_core.costume_core import CostumeCore
from paradicms_etl.namespaces import VRA
from paradicms_etl.transformers.omeka_classic_transformer import OmekaClassicTransformer


class CostumeCoreOmekaClassicTransformer(OmekaClassicTransformer):
    __UNKNOWN_CC_TERMS: Dict[str, Set[str]] = {}
    __UNKNOWN_ITM_KEYS: Set[str] = set()

    def __init__(self, **kwds):
        OmekaClassicTransformer.__init__(self, **kwds)
        # self.__costume_core = CostumeCore()
        self.__logger = logging.getLogger(__name__)

    def __call__(self, **kwds):
        # yield from self.__costume_core.images
        # yield from self.__costume_core.concepts
        yield from OmekaClassicTransformer.__call__(self, **kwds)
        for (
            costume_core_predicate_id,
            costume_core_terms,
        ) in self.__UNKNOWN_CC_TERMS.items():
            self.__logger.warn(
                "unknown Costume Core terms for predicate %s: %s",
                costume_core_predicate_id,
                costume_core_terms,
            )
        for key in self.__UNKNOWN_ITM_KEYS:
            self.__logger.warn("unknown Item Type Metadata element name: %s", key)

    def _transform_item_type_metadata(
        self, element_text_tree
    ) -> Tuple[Tuple[URIRef, Node], ...]:
        # "Item Type Metadata" is a catch-all element set for all user-defined elements.
        itm_element_text_tree = element_text_tree.pop("Item Type Metadata", None)
        if not itm_element_text_tree:
            return ()

        properties: Set[Tuple[URIRef, Node]] = set()

        for key, property_uri in (
            ("Category", DCTERMS.subject),
            ("Culture", VRA.culturalContext),
            ("Date Earliest", VRA.startDate),
            ("Date Latest", VRA.endDate),
            ("Description Main", DCTERMS.description),
            ("Source Identifier", DCTERMS.identifier),
            ("Technique", VRA.technique),
        ):
            for value in itm_element_text_tree.pop(key, []):
                properties.add((property_uri, Literal(value)))

        # for key, predicate in (
        #     ("Classification", costume_core_predicates.classification),
        #     ("Closure Placement", costume_core_predicates.closurePlacement),
        #     ("Closure Type", costume_core_predicates.closure),
        #     ("Collar", costume_core_predicates.collar),
        #     ("Color Main", costume_core_predicates.colorMain),
        #     ("Color Secondary", costume_core_predicates.colorSecondary),
        #     ("Condition Term", costume_core_predicates.condition),
        #     ("Costume Component", costume_core_predicates.costumeComponents),
        #     ("Function", costume_core_predicates.function),
        #     ("Gender", costume_core_predicates.gender),
        #     ("Pattern", costume_core_predicates.pattern),
        #     ("Sleeve Length", costume_core_predicates.sleeveLength),
        #     ("Socio-Economic Class", costume_core_predicates.socioEconomicClass),
        #     ("Structure Neckline", costume_core_predicates.neckline),
        #     # ("Structure Silhouette", costume_core_predicates.silhouette),
        #     ("Structure Skirt", costume_core_predicates.skirtType),
        #     ("Structure Sleeves", costume_core_predicates.sleeveType),
        #     ("Structure Pants", costume_core_predicates.pantsType),
        #     ("Structure Waist", costume_core_predicates.waistline),
        #     ("Work Type", costume_core_predicates.workType),
        # ):
        #     terms = self.__costume_core.terms_by_predicate_id.get(predicate.id, [])
        #     # if not terms:
        #     #     self.__logger.warning("no terms for Costume Core predicate %s", predicate.id)
        #     for value in itm_element_text_tree.pop(key, []):
        #         term = next(
        #             (term for term in terms if term.display_name_en == value), None
        #         )
        #         if term is not None:
        #             pass
        #             # model.resource.add(URIRef(predicate.uri), URIRef(term.uri))
        #         elif terms:
        #             unknown_predicate_terms = self.__UNKNOWN_CC_TERMS.setdefault(
        #                 predicate.id, set()
        #             )
        #             if value not in unknown_predicate_terms:
        #                 # print(predicate.id + ',' + value)
        #                 unknown_predicate_terms.add(value)
        #         properties.add((URIRef(predicate.uri), Literal(value)))

        for key in (
            "CSV File",
            "Compression",
            "Mannequin",
            "ObjectVR Link",
            "Private Information",
            "Storage Layer",
            "Storage Location",
            "Treatment",
            "URL",
            "View Type",
        ):
            itm_element_text_tree.pop(key, None)  # Ignore

        if itm_element_text_tree:
            for key, value in itm_element_text_tree.items():
                if len(key) == 1:
                    # Ignore "A", "B", ...
                    continue
                if key in self.__UNKNOWN_ITM_KEYS:
                    continue
                # print(key, '=', value)
                # self.__logger.warning("unknown Item Type Metadata key %s = %s", key, value)
                self.__UNKNOWN_ITM_KEYS.add(key)

        return tuple(properties)
