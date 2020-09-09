from typing import Tuple

from rdflib.namespace import DCTERMS

from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.namespace import VRA


class PropertyDefinitions:
    # Dublin Core Terms
    ALTERNATIVE_TITLE = PropertyDefinition(
        label_plural="Alternative titles",
        label_singular="Alternative title",
        uri=DCTERMS.alternative,
    )
    CONTRIBUTOR = PropertyDefinition(
        faceted=True,
        label_plural="Contributors",
        label_singular="Contributor",
        uri=DCTERMS.contributor,
    )
    COVERAGE = PropertyDefinition(
        faceted=True,
        label_plural="Coverages",
        label_singular="Coverage",
        uri=DCTERMS.coverage,
    )
    CREATOR = PropertyDefinition(
        faceted=True,
        label_plural="Creators",
        label_singular="Creator",
        uri=DCTERMS.creator,
    )
    DATE = PropertyDefinition(
        label_plural="Dates", label_singular="Date", uri=DCTERMS.date
    )
    DATE_CREATED = PropertyDefinition(
        label_plural="Dates created",
        label_singular="Date created",
        uri=DCTERMS.dateCreated,
    )
    DATE_SUBMITTED = PropertyDefinition(
        label_plural="Dates submitted",
        label_singular="Date submitted",
        uri=DCTERMS.dateSubmitted,
    )
    DESCRIPTION = PropertyDefinition(
        label_plural="Descriptions",
        label_singular="Description",
        uri=DCTERMS.description,
    )
    EXTENT = PropertyDefinition(
        faceted=True,
        label_plural="Extents",
        label_singular="Extent",
        uri=DCTERMS.extent,
    )
    FORMAT = PropertyDefinition(
        label_plural="Formats", label_singular="Format", uri=DCTERMS["format"],
    )
    IDENTIFIER = PropertyDefinition(
        label_plural="Identifiers", label_singular="Identifier", uri=DCTERMS.identifier,
    )
    IS_REFERENCED_BY = PropertyDefinition(
        label_plural="Referenced by",
        label_singular="Referenced by",
        uri=DCTERMS.isReferencedBy,
    )
    LANGUAGE = PropertyDefinition(
        faceted=True,
        label_plural="Languages",
        label_singular="Language",
        uri=DCTERMS.language,
    )
    LICENSE = PropertyDefinition(
        label_plural="Licenses", label_singular="License", uri=DCTERMS.license,
    )
    MEDIUM = PropertyDefinition(
        faceted=True, label_plural="Media", label_singular="Medium", uri=DCTERMS.medium,
    )
    PROVENANCE = PropertyDefinition(
        label_plural="Provenances", label_singular="Provenance", uri=DCTERMS.provenance,
    )
    PUBLISHER = PropertyDefinition(
        faceted=True,
        label_plural="Publishers",
        label_singular="Publisher",
        uri=DCTERMS.publisher,
    )
    REFERENCES = PropertyDefinition(
        label_plural="References", label_singular="References", uri=DCTERMS.references,
    )
    RELATION = PropertyDefinition(
        label_plural="Relations", label_singular="Relation", uri=DCTERMS.relation,
    )
    RIGHTS = PropertyDefinition(
        label_plural="Rights", label_singular="Rights", uri=DCTERMS.rights
    )
    RIGHTS_HOLDER = PropertyDefinition(
        label_plural="Rights holders",
        label_singular="Rights holder",
        uri=DCTERMS.rightsHolder,
    )
    SOURCE = PropertyDefinition(
        label_plural="Sources", label_singular="Source", uri=DCTERMS.source,
    )
    SPATIAL = PropertyDefinition(
        faceted=True,
        label_plural="Spatial coverages",
        label_singular="Spatial coverage",
        uri=DCTERMS.spatial,
    )
    SUBJECT = PropertyDefinition(
        faceted=True,
        label_plural="Subjects",
        label_singular="Subject",
        uri=DCTERMS.subject,
    )
    TEMPORAL = PropertyDefinition(
        faceted=True,
        label_plural="Temporal coverages",
        label_singular="Temporal coverage",
        uri=DCTERMS.temporal,
    )
    TITLE = PropertyDefinition(
        label_plural="Titles", label_singular="Title", uri=DCTERMS.title,
    )
    TYPE = PropertyDefinition(
        faceted=True, label_plural="Types", label_singular="Type", uri=DCTERMS.type,
    )

    # VRA Core
    CULTURAL_CONTEXT = PropertyDefinition(
        label_plural="Cultural contexts",
        label_singular="Cultural context",
        uri=VRA.culturalContext,
    )
    EARLIEST_DATE = PropertyDefinition(
        label_plural="Earliest dates",
        label_singular="Earliest date",
        uri=VRA.earliestDate,
    )
    LATEST_DATE = PropertyDefinition(
        label_plural="Latest dates", label_singular="Latest date", uri=VRA.latestDate,
    )
    MATERIAL = PropertyDefinition(
        faceted=True,
        label_plural="Materials",
        label_singular="Material",
        uri=VRA.material,
    )
    TECHNIQUE = PropertyDefinition(
        faceted=True,
        label_plural="Techniques",
        label_singular="Technique",
        uri=VRA.hasTechnique,
    )

    @classmethod
    def as_tuple(cls) -> Tuple[PropertyDefinition, ...]:
        tuple_ = []
        for __attr in dir(PropertyDefinitions):
            __value = getattr(PropertyDefinitions, __attr)
            if isinstance(__value, PropertyDefinition):
                tuple_.append(__value)
        return tuple(tuple_)
