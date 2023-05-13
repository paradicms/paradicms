import logging
from typing import Tuple, Set, List, Dict

from rdflib import URIRef, DCTERMS
from rdflib.term import Node, Literal

from paradicms_etl.loaders.nop_loader import nop_loader
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.image import Image
from paradicms_etl.models.property import Property
from paradicms_etl.namespaces import VRA
from paradicms_etl.pipelines.costume_core_ontology_airtable_pipeline import (
    CostumeCoreOntologyAirtablePipeline,
)
from paradicms_etl.transformers.omeka_classic_transformer import OmekaClassicTransformer


class CostumeCoreOmekaClassicTransformer(OmekaClassicTransformer):
    __UNKNOWN_ITM_KEYS: Set[str] = set()

    def __init__(self, **kwds):
        OmekaClassicTransformer.__init__(self, **kwds)
        self.__costume_core_concepts: Dict[
            URIRef, Dict[str, Concept]
        ] = {}  # Type -> label -> Concept
        self.__logger = logging.getLogger(__name__)
        self.__costume_core_properties: List[Property] = []

    def __call__(self, **kwds):
        for ontology_model in CostumeCoreOntologyAirtablePipeline(
            airtable_access_token="neverused", loader=nop_loader
        )(force_extract=False):
            if isinstance(ontology_model, Concept):
                for type_uri in ontology_model.type_uris:
                    self.__costume_core_concepts.setdefault(type_uri, {})[
                        ontology_model.label
                    ] = ontology_model
                yield ontology_model
            elif isinstance(ontology_model, Image):
                yield ontology_model
            elif isinstance(ontology_model, Property):
                self.__costume_core_properties.append(ontology_model)
                yield ontology_model

        yield from OmekaClassicTransformer.__call__(self, **kwds)

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

        for property_ in self.__costume_core_properties:
            values = itm_element_text_tree.pop(property_.label, [])
            if not values:
                continue

            property_range = property_.range
            if property_range is not None:
                concepts_in_property_range = self.__costume_core_concepts.get(
                    property_range, {}
                )
                for value in values:
                    concept = concepts_in_property_range.get(value)
                    if concept is not None:
                        properties.add((property_uri, concept.uri))
            else:
                for value in values:
                    properties.add((property_uri, Literal(value)))

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
