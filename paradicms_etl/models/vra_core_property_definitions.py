from paradicms_etl.models._model_singletons import _ModelSingletons
from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.namespace import VRA


class VraCorePropertyDefinitions(_ModelSingletons):
    _MODEL_CLASS = PropertyDefinition

    CULTURAL_CONTEXT = PropertyDefinition(
        label="Cultural context",
        uri=VRA.culturalContext,
    )
    EARLIEST_DATE = PropertyDefinition(
        label="Earliest date",
        uri=VRA.earliestDate,
    )
    INSCRIPTION = PropertyDefinition(
        label="Inscription",
        uri=VRA.inscription,
    )
    LATEST_DATE = PropertyDefinition(
        label="Latest date",
        uri=VRA.latestDate,
    )
    MATERIAL = PropertyDefinition(
        label="Material",
        uri=VRA.material,
    )
    MEASUREMENTS = PropertyDefinition(
        label="Measurements",
        uri=VRA.measurements,
    )
    STYLE_PERIOD = PropertyDefinition(
        label="Style Period",
        uri=VRA.stylePeriod,
    )
    TECHNIQUE = PropertyDefinition(
        label="Technique",
        uri=VRA.hasTechnique,
    )
    WORK_TYPE = PropertyDefinition(
        label="Work type",
        uri=VRA.worktype,
    )
