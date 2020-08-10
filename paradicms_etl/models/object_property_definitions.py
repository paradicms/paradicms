from dataclasses import dataclass, field
from typing import List, Optional, Tuple, Union

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from paradicms_etl.models.object_property_definition import ObjectPropertyDefinition
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS, VRA


class ObjectPropertyDefinitions:
    ALTERNATIVE_TITLE = ObjectPropertyDefinition(key="alternative_title", label_plural="Alternative titles", label_singular="Alternative title", uri=DCTERMS.alternative)
    CREATOR = ObjectPropertyDefinition(faceted=True, key="creator", label_plural="Creators", label_singular="Creator", uri=DCTERMS.creator)
    CULTURAL_CONTEXT = ObjectPropertyDefinition(key="cultural_context", label_plural="Cultural contexts", label_singular="Cultural context", uri=VRA.culturalContext)
    DATE = ObjectPropertyDefinition(key="date", label_plural="Dates", label_singular="Date", uri=DCTERMS.date)
    DESCRIPTION = ObjectPropertyDefinition(key="description", label_plural="Descriptions", label_singular="Description", uri=DCTERMS.description)
    EXTENT = ObjectPropertyDefinition(faceted=True, key="extent", label_plural="Extents", label_singular="Extent", uri=DCTERMS.extent)
    IDENTIFIER = ObjectPropertyDefinition(key="identifier", label_plural="Identifiers", label_singular="Identifier", uri=DCTERMS.identifier)
    LANGUAGE = ObjectPropertyDefinition(faceted=True, key="language", label_plural="Languages", label_singular="Language", uri=DCTERMS.language)
    MATERIAL = ObjectPropertyDefinition(faceted=True, key="material", label_plural="Materials", label_singular="Material", uri=VRA.material)
    MEDIUM = ObjectPropertyDefinition(faceted=True, key="medium", label_plural="Media", label_singular="Medium", uri=DCTERMS.medium)
    PROVENANCE = ObjectPropertyDefinition(key="provenance", label_plural="Provenances", label_singular="Provenance", uri=DCTERMS.provenance)
    PUBLISHER = ObjectPropertyDefinition(faceted=True, key="publisher", label_plural="Publishers", label_singular="Publisher", uri=DCTERMS.publisher)
    SOURCE = ObjectPropertyDefinition(key="source", label_plural="Sources", label_singular="Source", uri=DCTERMS.source)
    SPATIAL = ObjectPropertyDefinition(key="spatial", label_plural="Spatial coverages", label_singular="Spatial coverage", uri=DCTERMS.spatial)
    SUBJECT = ObjectPropertyDefinition(key="subject", label_plural="Subjects", label_singular="Subject", uri=DCTERMS.subject)
    TECHNIQUE = ObjectPropertyDefinition(key="technique", label_plural="Techniques", label_singular="Technique", uri=VRA.hasTechnique)
    TEMPORAL = ObjectPropertyDefinition(key="temporal", label_plural="Temporal coverages", label_singular="Temporal coverage", uri=DCTERMS.temporal)
    TYPE = ObjectPropertyDefinition(key="type", label_plural="Types", label_singular="Type", uri=DCTERMS.type)

for __attr in dir(ObjectPropertyDefinitions):
    __value = getattr(ObjectPropertyDefinitions)
    if isinstance(__value, ObjectPropertyDefinition):
        assert __attr == __value.key.upper()
