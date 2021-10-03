from paradicms_etl.models.person import Person
from paradicms_etl.models.wikidata.wikidata_item import WikidataItem
from paradicms_etl.transformers._wikidata_items_transformer import (
    _WikidataItemsTransformer,
)


class WikidataItemsTransformer(_WikidataItemsTransformer):
    """
    Default implementation of the _WikidataItemsTransformer.

    Transforms each item to a paradicms Model, ignoring statements.
    """

    def _transform_human_item(self, item: WikidataItem):
        yield Person.from_fields(name=item.label, uri=item.uri)
