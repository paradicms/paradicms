from paradicms_etl.models._model_singletons import _ModelSingletons
from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.namespace import VRA


class VraCorePropertyDefinitions(_ModelSingletons):
    _MODEL_CLASS = PropertyDefinition

    CULTURAL_CONTEXT = PropertyDefinition.from_fields(
        label="Cultural context",
        uri=VRA.culturalContext,
    )
    EARLIEST_DATE = PropertyDefinition.from_fields(
        label="Earliest date",
        uri=VRA.earliestDate,
    )
    INSCRIPTION = PropertyDefinition.from_fields(
        label="Inscription",
        uri=VRA.inscription,
    )
    LATEST_DATE = PropertyDefinition.from_fields(
        label="Latest date",
        uri=VRA.latestDate,
    )
    MATERIAL = PropertyDefinition.from_fields(
        label="Material",
        uri=VRA.material,
    )
    MEASUREMENTS = PropertyDefinition.from_fields(
        label="Measurements",
        uri=VRA.measurements,
    )
    STYLE_PERIOD = PropertyDefinition.from_fields(
        label="Style Period",
        uri=VRA.stylePeriod,
    )
    TECHNIQUE = PropertyDefinition.from_fields(
        label="Technique",
        uri=VRA.hasTechnique,
    )
    WORK_TYPE = PropertyDefinition.from_fields(
        label="Work type",
        uri=VRA.worktype,
    )
