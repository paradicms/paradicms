from rdflib import DCTERMS

from paradicms_etl.transformers.past_perfect_transformer import PastPerfectTransformer


class PastPerfectOnlineTransformer(PastPerfectTransformer):
    def _get_database_object_properties(self, database_object):
        properties = list(
            PastPerfectTransformer._get_database_object_properties(
                self, database_object
            )
        )

        impl_attributes = database_object.impl_attributes.copy()
        for (impl_attributes_key, property_uri) in (
            ("Date", None),
            ("Description", None),
            ("Object Name", None),
            ("Other Name", None),
            ("People & Trade Names", DCTERMS.alternative),
            ("Provenance", DCTERMS.provenance),
            ("Subjects", DCTERMS.subject),
            ("Title", None),
        ):
            impl_attribute_values = impl_attributes.pop(impl_attributes_key, None)
            if property_uri is None:
                # Already covered elsewhere
                continue
            properties.extend(
                self._convert_database_object_attribute_values_to_properties(
                    impl_attribute_values, property_uri
                )
            )
        for key, value in impl_attributes.items():
            self._logger.warn("leftover implattribute: %s=%s", key, value)

        return tuple(properties)
