from typing import Tuple

from rdflib.namespace import DCTERMS

from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.namespace import VRA


class PropertyDefinitions:
    # Dublin Core Terms
    ALTERNATIVE_TITLE = PropertyDefinition(
        key="alternative_title",
        label_plural="Alternative titles",
        label_singular="Alternative title",
        uri=DCTERMS.alternative,
    )
    CONTRIBUTOR = PropertyDefinition(
        faceted=True,
        key="contributor",
        label_plural="Contributors",
        label_singular="Contributor",
        uri=DCTERMS.contributor,
    )
    COVERAGE = PropertyDefinition(
        faceted=True,
        key="coverage",
        label_plural="Coverages",
        label_singular="Coverage",
        uri=DCTERMS.coverage,
    )
    CREATOR = PropertyDefinition(
        faceted=True,
        key="creator",
        label_plural="Creators",
        label_singular="Creator",
        uri=DCTERMS.creator,
    )
    DATE = PropertyDefinition(
        key="date", label_plural="Dates", label_singular="Date", uri=DCTERMS.date
    )
    DATE_CREATED = PropertyDefinition(
        key="date_created",
        label_plural="Dates created",
        label_singular="Date created",
        uri=DCTERMS.dateCreated,
    )
    DATE_SUBMITTED = PropertyDefinition(
        key="date_submitted",
        label_plural="Dates submitted",
        label_singular="Date submitted",
        uri=DCTERMS.dateSubmitted,
    )
    DESCRIPTION = PropertyDefinition(
        key="description",
        label_plural="Descriptions",
        label_singular="Description",
        uri=DCTERMS.description,
    )
    EXTENT = PropertyDefinition(
        faceted=True,
        key="extent",
        label_plural="Extents",
        label_singular="Extent",
        uri=DCTERMS.extent,
    )
    FORMAT = PropertyDefinition(
        key="format",
        label_plural="Formats",
        label_singular="Format",
        uri=DCTERMS["format"],
    )
    IDENTIFIER = PropertyDefinition(
        key="identifier",
        label_plural="Identifiers",
        label_singular="Identifier",
        uri=DCTERMS.identifier,
    )
    IS_REFERENCED_BY = PropertyDefinition(
        key="is_referenced_by",
        label_plural="Referenced by",
        label_singular="Referenced by",
        uri=DCTERMS.isReferencedBy,
    )
    LANGUAGE = PropertyDefinition(
        faceted=True,
        key="language",
        label_plural="Languages",
        label_singular="Language",
        uri=DCTERMS.language,
    )
    LICENSE = PropertyDefinition(
        key="license",
        label_plural="Licenses",
        label_singular="License",
        uri=DCTERMS.license,
    )
    MEDIUM = PropertyDefinition(
        faceted=True,
        key="medium",
        label_plural="Media",
        label_singular="Medium",
        uri=DCTERMS.medium,
    )
    PROVENANCE = PropertyDefinition(
        key="provenance",
        label_plural="Provenances",
        label_singular="Provenance",
        uri=DCTERMS.provenance,
    )
    PUBLISHER = PropertyDefinition(
        faceted=True,
        key="publisher",
        label_plural="Publishers",
        label_singular="Publisher",
        uri=DCTERMS.publisher,
    )
    REFERENCES = PropertyDefinition(
        key="references",
        label_plural="References",
        label_singular="References",
        uri=DCTERMS.references,
    )
    RELATION = PropertyDefinition(
        key="relation",
        label_plural="Relations",
        label_singular="Relation",
        uri=DCTERMS.relation,
    )
    RIGHTS = PropertyDefinition(
        key="rights", label_plural="Rights", label_singular="Rights", uri=DCTERMS.rights
    )
    RIGHTS_HOLDER = PropertyDefinition(
        key="rights_holder",
        label_plural="Rights holders",
        label_singular="Rights holder",
        uri=DCTERMS.rightsHolder,
    )
    SOURCE = PropertyDefinition(
        key="source",
        label_plural="Sources",
        label_singular="Source",
        uri=DCTERMS.source,
    )
    SPATIAL = PropertyDefinition(
        faceted=True,
        key="spatial",
        label_plural="Spatial coverages",
        label_singular="Spatial coverage",
        uri=DCTERMS.spatial,
    )
    SUBJECT = PropertyDefinition(
        faceted=True,
        key="subject",
        label_plural="Subjects",
        label_singular="Subject",
        uri=DCTERMS.subject,
    )
    TEMPORAL = PropertyDefinition(
        faceted=True,
        key="temporal",
        label_plural="Temporal coverages",
        label_singular="Temporal coverage",
        uri=DCTERMS.temporal,
    )
    TITLE = PropertyDefinition(
        key="title", label_plural="Titles", label_singular="Title", uri=DCTERMS.title,
    )
    TYPE = PropertyDefinition(
        faceted=True,
        key="type",
        label_plural="Types",
        label_singular="Type",
        uri=DCTERMS.type,
    )

    # VRA Core
    CULTURAL_CONTEXT = PropertyDefinition(
        key="cultural_context",
        label_plural="Cultural contexts",
        label_singular="Cultural context",
        uri=VRA.culturalContext,
    )
    EARLIEST_DATE = PropertyDefinition(
        key="earliest_date",
        label_plural="Earliest dates",
        label_singular="Earliest date",
        uri=VRA.earliestDate,
    )
    LATEST_DATE = PropertyDefinition(
        key="latest_date",
        label_plural="Latest dates",
        label_singular="Latest date",
        uri=VRA.latestDate,
    )
    MATERIAL = PropertyDefinition(
        faceted=True,
        key="material",
        label_plural="Materials",
        label_singular="Material",
        uri=VRA.material,
    )
    TECHNIQUE = PropertyDefinition(
        faceted=True,
        key="technique",
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


for __definition in PropertyDefinitions.as_tuple():
    assert getattr(PropertyDefinitions, __definition.key.upper()) == __definition
