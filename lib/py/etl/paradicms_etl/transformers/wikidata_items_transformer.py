from typing import Optional, Tuple

from rdflib import URIRef, DCTERMS
from rdflib.term import Node

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.person import Person
from paradicms_etl.models.rights_mixin import Rights
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

    _RIGHTS = (
        Rights.builder()
        .add_license(license=CreativeCommonsLicenses.BY_SA_3_0.uri)
        .add_statement(
            statement=RightsStatementsDotOrgRightsStatements.InC.uri,
        )
        .build()
    )

    class __WikidataItemTransformer(WikidataItemTransformer):
        def _get_properties(
            self, item: WikidataItem
        ) -> Tuple[Tuple[URIRef, Node], ...]:
            properties = []
            properties.append((DCTERMS.relation, item.uri))
            for article in item.articles:
                if str(article.uri).startswith("https://en.wikipedia.org/wiki/"):
                    properties.append((DCTERMS.relation, article.uri))
            return tuple(properties)

        def _transform_image_statement(
            self,
            *,
            item: WikidataItem,
            item_model: NamedModel,
            statement: WikidataStatement,
        ):
            assert isinstance(statement.value, URIRef)
            image_builder = Image.builder(
                depicts_uri=item_model.uri, uri=statement.value
            )
            if item_model.label is not None:
                image_builder.set_title(item_model.label)
            return (image_builder.build(),)

    class __PersonWikidataItemTransformer(__WikidataItemTransformer):
        def _transform_item(self, item: WikidataItem) -> NamedModel:
            person_builder = Person.builder(
                name=item.label,
                uri=item.uri,
            )
            for p, o in self._get_properties(item):
                person_builder.add(p, o)
            return person_builder.build()

    class __WorkWikidataItemTransformer(__WikidataItemTransformer):
        def __init__(self, *, collection_uri: URIRef, **kwds):
            super().__init__(**kwds)
            self.__collection_uri = collection_uri

        def _transform_item(self, item: WikidataItem):
            work_builder = (
                Work.builder(
                    title=item.label,
                    uri=item.uri,
                )
                .add_collection_uri(self.__collection_uri)
                .add_rights(WikidataItemsTransformer._RIGHTS)
            )
            for p, o in self._get_properties(item):
                work_builder.add(p, o)
            return work_builder.build()

    def __init__(
        self,
        *,
        collection_uri: Optional[URIRef] = None,
    ):
        _WikidataItemsTransformer.__init__(self)
        self.__collection_uri = collection_uri

    def _log_missing_transform_method(
        self, *, item: WikidataItem, transform_method_name: str
    ):
        raise NotImplementedError(
            f"unable to find method {transform_method_name} to transform item {item.uri}",
        )

    def __call__(self, **kwds):
        yield CreativeCommonsLicenses.BY_SA_3_0
        yield RightsStatementsDotOrgRightsStatements.InC

        yield from _WikidataItemsTransformer.__call__(self, **kwds)

    def _transform_human_item(self, item: WikidataItem):
        yield from self.__PersonWikidataItemTransformer()(item=item)

    def _transform_painting_item(self, item: WikidataItem):
        yield from self.__transform_work_item(item=item)

    def __transform_work_item(self, item: WikidataItem):
        if self.__collection_uri is None:
            collection = Collection.builder(
                title="Wikidata",
                uri=URIRef("https://www.wikidata.org/entity/"),
            ).build()
            yield collection
            self.__collection_uri = collection.uri

        yield from self.__WorkWikidataItemTransformer(
            collection_uri=self.__collection_uri,
        )(item=item)
