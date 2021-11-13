from rdflib.namespace import DCTERMS

from paradicms_etl.models._model_singletons import _ModelSingletons
from paradicms_etl.models.property_definition import PropertyDefinition


class DublinCorePropertyDefinitions(_ModelSingletons):
    _MODEL_CLASS = PropertyDefinition

    ABSTRACT = PropertyDefinition.from_fields(
        label="Abstract",
        uri=DCTERMS.abstract,
    )
    ALTERNATIVE_TITLE = PropertyDefinition.from_fields(
        label="Alternative title",
        uri=DCTERMS.alternative,
    )
    BIBLIOGRAPHIC_CITATION = PropertyDefinition.from_fields(
        label="Bibliographic citation",
        uri=DCTERMS.bibliographicCitation,
    )
    CONTRIBUTOR = PropertyDefinition.from_fields(
        label="Contributor",
        uri=DCTERMS.contributor,
    )
    COVERAGE = PropertyDefinition.from_fields(
        label="Coverage",
        uri=DCTERMS.coverage,
    )
    CREATED = PropertyDefinition.from_fields(
        label="Date created",
        uri=DCTERMS.created,
    )
    CREATOR = PropertyDefinition.from_fields(
        label="Creator",
        uri=DCTERMS.creator,
    )
    DATE = PropertyDefinition.from_fields(label="Date", uri=DCTERMS.date)
    DATE_SUBMITTED = PropertyDefinition.from_fields(
        label="Date submitted",
        uri=DCTERMS.dateSubmitted,
    )
    DESCRIPTION = PropertyDefinition.from_fields(
        label="Description",
        uri=DCTERMS.description,
    )
    EXTENT = PropertyDefinition.from_fields(
        label="Extent",
        uri=DCTERMS.extent,
    )
    FORMAT = PropertyDefinition.from_fields(
        label="Format",
        uri=DCTERMS["format"],
    )
    IDENTIFIER = PropertyDefinition.from_fields(
        label="Identifier",
        uri=DCTERMS.identifier,
    )
    IS_REFERENCED_BY = PropertyDefinition.from_fields(
        label="Referenced by",
        uri=DCTERMS.isReferencedBy,
    )
    LANGUAGE = PropertyDefinition.from_fields(
        label="Language",
        uri=DCTERMS.language,
    )
    LICENSE = PropertyDefinition.from_fields(
        label="License",
        uri=DCTERMS.license,
    )
    MEDIUM = PropertyDefinition.from_fields(
        label="Medium",
        uri=DCTERMS.medium,
    )
    PROVENANCE = PropertyDefinition.from_fields(
        label="Provenance",
        uri=DCTERMS.provenance,
    )
    PUBLISHER = PropertyDefinition.from_fields(
        label="Publisher",
        uri=DCTERMS.publisher,
    )
    REFERENCES = PropertyDefinition.from_fields(
        label="References",
        uri=DCTERMS.references,
    )
    RELATION = PropertyDefinition.from_fields(
        label="Relation",
        uri=DCTERMS.relation,
    )
    RIGHTS = PropertyDefinition.from_fields(label="Rights", uri=DCTERMS.rights)
    RIGHTS_HOLDER = PropertyDefinition.from_fields(
        label="Rights holder",
        uri=DCTERMS.rightsHolder,
    )
    SOURCE = PropertyDefinition.from_fields(
        label="Source",
        uri=DCTERMS.source,
    )
    SPATIAL = PropertyDefinition.from_fields(
        label="Spatial coverage",
        uri=DCTERMS.spatial,
    )
    SUBJECT = PropertyDefinition.from_fields(
        label="Subject",
        uri=DCTERMS.subject,
    )
    TEMPORAL = PropertyDefinition.from_fields(
        label="Temporal coverage",
        uri=DCTERMS.temporal,
    )
    TITLE = PropertyDefinition.from_fields(
        label="Title",
        uri=DCTERMS.title,
    )
    TYPE = PropertyDefinition.from_fields(
        label="Type",
        uri=DCTERMS.type,
    )
