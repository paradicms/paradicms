from typing import Tuple

from rdflib.namespace import DCTERMS

from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.namespace import VRA


class PropertyDefinitions:
    ALTERNATIVE_TITLE = PropertyDefinition(key="alternative_title", label_plural="Alternative titles", label_singular="Alternative title", uri=DCTERMS.alternative)
    CREATOR = PropertyDefinition(faceted=True, key="creator", label_plural="Creators", label_singular="Creator", uri=DCTERMS.creator)
    CULTURAL_CONTEXT = PropertyDefinition(key="cultural_context", label_plural="Cultural contexts", label_singular="Cultural context", uri=VRA.culturalContext)
    DATE = PropertyDefinition(key="date", label_plural="Dates", label_singular="Date", uri=DCTERMS.date)
    DESCRIPTION = PropertyDefinition(key="description", label_plural="Descriptions", label_singular="Description", uri=DCTERMS.description)
    EXTENT = PropertyDefinition(faceted=True, key="extent", label_plural="Extents", label_singular="Extent", uri=DCTERMS.extent)
    IDENTIFIER = PropertyDefinition(key="identifier", label_plural="Identifiers", label_singular="Identifier", uri=DCTERMS.identifier)
    LANGUAGE = PropertyDefinition(faceted=True, key="language", label_plural="Languages", label_singular="Language", uri=DCTERMS.language)
    MATERIAL = PropertyDefinition(faceted=True, key="material", label_plural="Materials", label_singular="Material", uri=VRA.material)
    MEDIUM = PropertyDefinition(faceted=True, key="medium", label_plural="Media", label_singular="Medium", uri=DCTERMS.medium)
    PROVENANCE = PropertyDefinition(key="provenance", label_plural="Provenances", label_singular="Provenance", uri=DCTERMS.provenance)
    PUBLISHER = PropertyDefinition(faceted=True, key="publisher", label_plural="Publishers", label_singular="Publisher", uri=DCTERMS.publisher)
    SOURCE = PropertyDefinition(key="source", label_plural="Sources", label_singular="Source", uri=DCTERMS.source)
    SPATIAL = PropertyDefinition(key="spatial", label_plural="Spatial coverages", label_singular="Spatial coverage", uri=DCTERMS.spatial)
    SUBJECT = PropertyDefinition(key="subject", label_plural="Subjects", label_singular="Subject", uri=DCTERMS.subject)
    TECHNIQUE = PropertyDefinition(key="technique", label_plural="Techniques", label_singular="Technique", uri=VRA.hasTechnique)
    TEMPORAL = PropertyDefinition(key="temporal", label_plural="Temporal coverages", label_singular="Temporal coverage", uri=DCTERMS.temporal)
    TYPE = PropertyDefinition(key="type", label_plural="Types", label_singular="Type", uri=DCTERMS.type)

    @classmethod
    def as_tuple(cls) -> Tuple[PropertyDefinition, ...]:
        tuple_ = []
        for __attr in dir(PropertyDefinitions):
            __value = getattr(PropertyDefinitions, __attr)
            if isinstance(__value, PropertyDefinition):
                tuple_.append(__value)
        return tuple(tuple_)

for __definition in PropertyDefinitions.as_tuple():
    assert getattr(PropertyDefinitions, __definition.key.upper()) == __definition
