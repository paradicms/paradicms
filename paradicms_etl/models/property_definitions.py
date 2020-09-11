from typing import Tuple

from rdflib.namespace import DCTERMS

from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.namespace import VRA


class PropertyDefinitions:
    # Dublin Core Terms
    ALTERNATIVE_TITLE = PropertyDefinition(
        label="Alternative title", uri=DCTERMS.alternative,
    )
    CONTRIBUTOR = PropertyDefinition(
        faceted=True, label="Contributor", uri=DCTERMS.contributor,
    )
    COVERAGE = PropertyDefinition(faceted=True, label="Coverage", uri=DCTERMS.coverage,)
    CREATOR = PropertyDefinition(faceted=True, label="Creator", uri=DCTERMS.creator,)
    DATE = PropertyDefinition(label="Date", uri=DCTERMS.date)
    DATE_CREATED = PropertyDefinition(label="Date created", uri=DCTERMS.dateCreated,)
    DATE_SUBMITTED = PropertyDefinition(
        label="Date submitted", uri=DCTERMS.dateSubmitted,
    )
    DESCRIPTION = PropertyDefinition(label="Description", uri=DCTERMS.description,)
    EXTENT = PropertyDefinition(faceted=True, label="Extent", uri=DCTERMS.extent,)
    FORMAT = PropertyDefinition(label="Format", uri=DCTERMS["format"],)
    IDENTIFIER = PropertyDefinition(label="Identifier", uri=DCTERMS.identifier,)
    IS_REFERENCED_BY = PropertyDefinition(
        label="Referenced by", uri=DCTERMS.isReferencedBy,
    )
    LANGUAGE = PropertyDefinition(faceted=True, label="Language", uri=DCTERMS.language,)
    LICENSE = PropertyDefinition(label="License", uri=DCTERMS.license,)
    MEDIUM = PropertyDefinition(faceted=True, label="Medium", uri=DCTERMS.medium,)
    PROVENANCE = PropertyDefinition(label="Provenance", uri=DCTERMS.provenance,)
    PUBLISHER = PropertyDefinition(
        faceted=True, label="Publisher", uri=DCTERMS.publisher,
    )
    REFERENCES = PropertyDefinition(label="References", uri=DCTERMS.references,)
    RELATION = PropertyDefinition(label="Relation", uri=DCTERMS.relation,)
    RIGHTS = PropertyDefinition(label="Rights", uri=DCTERMS.rights)
    RIGHTS_HOLDER = PropertyDefinition(label="Rights holder", uri=DCTERMS.rightsHolder,)
    SOURCE = PropertyDefinition(label="Source", uri=DCTERMS.source,)
    SPATIAL = PropertyDefinition(
        faceted=True, label="Spatial coverage", uri=DCTERMS.spatial,
    )
    SUBJECT = PropertyDefinition(faceted=True, label="Subject", uri=DCTERMS.subject,)
    TEMPORAL = PropertyDefinition(
        faceted=True, label="Temporal coverage", uri=DCTERMS.temporal,
    )
    TITLE = PropertyDefinition(label="Title", uri=DCTERMS.title,)
    TYPE = PropertyDefinition(faceted=True, label="Type", uri=DCTERMS.type,)

    # VRA Core
    CULTURAL_CONTEXT = PropertyDefinition(
        label="Cultural context", uri=VRA.culturalContext,
    )
    EARLIEST_DATE = PropertyDefinition(label="Earliest date", uri=VRA.earliestDate,)
    LATEST_DATE = PropertyDefinition(label="Latest date", uri=VRA.latestDate,)
    MATERIAL = PropertyDefinition(faceted=True, label="Material", uri=VRA.material,)
    TECHNIQUE = PropertyDefinition(
        faceted=True, label="Technique", uri=VRA.hasTechnique,
    )

    @classmethod
    def as_tuple(cls) -> Tuple[PropertyDefinition, ...]:
        tuple_ = []
        for __attr in dir(PropertyDefinitions):
            __value = getattr(PropertyDefinitions, __attr)
            if isinstance(__value, PropertyDefinition):
                tuple_.append(__value)
        return tuple(tuple_)
