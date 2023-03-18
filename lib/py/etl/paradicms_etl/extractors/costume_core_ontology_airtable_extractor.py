from paradicms_etl.extractors.airtable_extractor import AirtableExtractor


class CostumeCoreOntologyAirtableExtractor(AirtableExtractor):
    def __init__(self, *, access_token: str, **kwds):
        AirtableExtractor.__init__(
            self,
            access_token=access_token,
            base_id="appS5bN4hk1aWEzE0",
            tables=(
                "AAT_variant_terms",
                "feature_values",
                "features",
                "feature_sets",
                "images",
                "rights_licenses",
            ),
            **kwds,
        )
