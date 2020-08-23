from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definitions import PropertyDefinitions
from paradicms_etl.pipelines.past_perfect._past_perfect_transformer import (
    _PastPerfectTransformer,
)


class PastPerfectOnlineTransformer(_PastPerfectTransformer):
    def _get_database_object_properties(self, database_object):
        properties = list(
            _PastPerfectTransformer._get_database_object_properties(
                self, database_object
            )
        )

        impl_attributes = database_object.impl_attributes.copy()
        for (impl_attributes_key, property_definition) in (
            ("Date", None),
            ("Description", None),
            ("Object Name", None),
            ("Other Name", None),
            ("People & Trade Names", PropertyDefinitions.ALTERNATIVE_TITLE),
            ("Provenance", PropertyDefinitions.PROVENANCE),
            ("Subjects", PropertyDefinitions.SUBJECT),
            ("Title", None),
        ):
            impl_attribute_values = impl_attributes.pop(impl_attributes_key, None)
            if property_definition is None:
                # Already covered elsewhere
                continue
            properties.extend(
                self._convert_database_object_attribute_values_to_properties(
                    impl_attribute_values, property_definition
                )
            )
        for key, value in impl_attributes.items():
            self._logger.warn("leftover implattribute: %s=%s", key, value)

        return tuple(properties)
