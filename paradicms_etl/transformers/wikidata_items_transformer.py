from rdflib import URIRef

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.person import Person
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.wikidata.wikidata_item import WikidataItem
from paradicms_etl.models.wikidata.wikidata_statement import WikidataStatement
from paradicms_etl.models.work import Work
from paradicms_etl.transformers._wikidata_item_transformer import (
    _WikidataItemTransformer,
)
from paradicms_etl.transformers._wikidata_items_transformer import (
    _WikidataItemsTransformer,
)


class WikidataItemsTransformer(_WikidataItemsTransformer):
    """
    Default implementation of the _WikidataItemsTransformer.

    Transforms each item to a paradicms Model, ignoring statements.
    """

    _INSTITUTION = Institution.from_fields(
        name="Wikidata",
        rights=Rights(
            license=CreativeCommonsLicenses.BY_SA_3_0.uri,
            statement=RightsStatementsDotOrgRightsStatements.InC.uri,
        ),
        uri=URIRef("https://www.wikidata.org/"),
    )

    _COLLECTION = Collection.from_fields(
        institution_uri=_INSTITUTION.uri,
        title="Wikidata",
        uri=URIRef("https://www.wikidata.org/entity/"),
    )

    class __WikidataItemTransformer(_WikidataItemTransformer):
        def _transform_image_statement(
            self,
            *,
            item: WikidataItem,
            item_model: _NamedModel,
            statement: WikidataStatement
        ):
            yield Image.from_fields(depicts_uri=item_model.uri, uri=statement.value)

    class __PersonWikidataItemTransformer(__WikidataItemTransformer):
        def _transform_item(self, *, item: WikidataItem):
            return Person.from_fields(name=item.label, uri=item.uri)

    class __WorkWikidataItemTransformer(__WikidataItemTransformer):
        def _transform_item(self, item: WikidataItem):
            return Work.from_fields(
                collection_uris=(WikidataItemsTransformer._COLLECTION.uri,),
                institution_uri=WikidataItemsTransformer._INSTITUTION.uri,
                title=item.label,
                uri=item.uri,
            )

    def transform(self, **kwds):
        yield CreativeCommonsLicenses.BY_SA_3_0
        yield RightsStatementsDotOrgRightsStatements.InC

        yield self._COLLECTION
        yield self._INSTITUTION

        yield from _WikidataItemsTransformer.transform(self, **kwds)

    def _transform_human_item(self, item: WikidataItem):
        yield from self.__PersonWikidataItemTransformer(
            pipeline_id=self._pipeline_id
        ).transform(item)

    def _transform_painting_item(self, item: WikidataItem):
        yield from self.__WorkWikidataItemTransformer(
            pipeline_id=self._pipeline_id
        ).transform(item)
