from paradicms_etl.transformers._wikidata_items_transformer import (
    _WikidataItemsTransformer,
)


class WikidataItemsTransformer(_WikidataItemsTransformer):
    """
    Default implementation of the _WikidataItemsTransformer.

    Transforms each item to a paradicms Model, ignoring statements.
    """
