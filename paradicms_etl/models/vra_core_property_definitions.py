from typing import Tuple

from rdflib.namespace import DCTERMS

from paradicms_etl.models._model_singletons import _ModelSingletons
from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.namespace import VRA


class VraCorePropertyDefinitions(_ModelSingletons):
    _MODEL_CLASS = PropertyDefinition

    CULTURAL_CONTEXT = PropertyDefinition(
        full_text_searchable=True,
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
        faceted=True,
        full_text_searchable=True,
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
        faceted=True,
        full_text_searchable=True,
        label="Technique",
        uri=VRA.hasTechnique,
    )
    WORK_TYPE = PropertyDefinition(
        faceted=True,
        full_text_searchable=True,
        label="Work type",
        uri=VRA.worktype,
    )
