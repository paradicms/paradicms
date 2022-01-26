from typing import Optional, Tuple

from rdflib import URIRef, DCTERMS

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.person import Person
from paradicms_etl.models.property import Property
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.wikidata.wikidata_item import WikidataItem
from paradicms_etl.models.wikidata.wikidata_statement import WikidataStatement
from paradicms_etl.models.work import Work
from paradicms_etl.transformers._wikidata_items_transformer import (
    _WikidataItemsTransformer,
)
from paradicms_etl.transformers.wikidata_item_transformer import (
    WikidataItemTransformer,
)


class WikidataItemsTransformer(_WikidataItemsTransformer):
    """
    Default implementation of the _WikidataItemsTransformer.

    Transforms each item to a paradicms Model, ignoring statements.
    """

    _RIGHTS = Rights(
        license=CreativeCommonsLicenses.BY_SA_3_0.uri,
        statement=RightsStatementsDotOrgRightsStatements.InC.uri,
    )

    class __WikidataItemTransformer(WikidataItemTransformer):
        def _get_properties(self, item: WikidataItem) -> Tuple[Property, ...]:
            properties = []
            properties.append(Property(DCTERMS.relation, item.uri))
            for article in item.articles:
                if str(article.uri).startswith("https://en.wikipedia.org/wiki/"):
                    properties.append(Property(DCTERMS.relation, article.uri))
            return tuple(properties)

        def _transform_image_statement(
            self,
            *,
            item: WikidataItem,
            item_model: NamedModel,
            statement: WikidataStatement,
        ):
            yield Image.from_fields(
                depicts_uri=item_model.uri, title=item_model.label, uri=statement.value
            )

    class __PersonWikidataItemTransformer(__WikidataItemTransformer):
        def _transform_item(self, *, item: WikidataItem):
            return Person.from_fields(
                name=item.label,
                properties=tuple(self._get_properties(item)),
                uri=item.uri,
            )

    class __WorkWikidataItemTransformer(__WikidataItemTransformer):
        def __init__(self, *, collection_uri: URIRef, institution_uri: URIRef, **kwds):
            super().__init__(**kwds)
            self.__collection_uri = collection_uri
            self.__institution_uri = institution_uri

        def _transform_item(self, item: WikidataItem):
            return Work.from_fields(
                collection_uris=(self.__collection_uri,),
                institution_uri=self.__institution_uri,
                properties=tuple(self._get_properties(item)),
                rights=WikidataItemsTransformer._RIGHTS,
                title=item.label,
                uri=item.uri,
            )

    def __init__(
        self,
        *,
        collection_uri: Optional[URIRef] = None,
        institution_uri: Optional[URIRef] = None,
        **kwds,
    ):
        _WikidataItemsTransformer.__init__(self, **kwds)
        self.__collection_uri = collection_uri
        self.__institution_uri = institution_uri

    def _log_missing_transform_method(
        self, *, item: WikidataItem, transform_method_name: str
    ):
        raise NotImplementedError(
            f"unable to find method {transform_method_name} to transform item {item.uri}",
        )

    def transform(self, **kwds):
        yield CreativeCommonsLicenses.BY_SA_3_0
        yield RightsStatementsDotOrgRightsStatements.InC

        yield from _WikidataItemsTransformer.transform(self, **kwds)

    def _transform_human_item(self, item: WikidataItem):
        yield from self.__PersonWikidataItemTransformer(
            collection_uri=self.__collection_uri,
            institution_uri=self.__institution_uri,
            pipeline_id=self._pipeline_id,
        ).transform(item)

    def _transform_painting_item(self, item: WikidataItem):
        yield from self.__transform_work_item(item=item)

    def __transform_work_item(self, item: WikidataItem):
        if self.__institution_uri is None:
            institution = Institution.from_fields(
                name="Wikidata",
                rights=self._RIGHTS,
                uri=URIRef("https://www.wikidata.org/"),
            )
            yield institution
            self.__institution_uri = institution.uri

        if self.__collection_uri is None:
            collection = Collection.from_fields(
                institution_uri=self.__institution_uri,
                title="Wikidata",
                uri=URIRef("https://www.wikidata.org/entity/"),
            )
            yield collection
            self.__collection_uri = collection.uri

        yield from self.__WorkWikidataItemTransformer(
            collection_uri=self.__collection_uri,
            institution_uri=self.__institution_uri,
            pipeline_id=self._pipeline_id,
        ).transform(item)
