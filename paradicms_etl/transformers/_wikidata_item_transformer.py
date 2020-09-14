from abc import abstractmethod
from typing import Dict, Generator, List, Optional

from rdflib import Literal

from paradicms_etl._model import _Model
from paradicms_etl._transformer import _Transformer
from paradicms_etl.models.wikidata.wikidata_item import WikidataItem
from paradicms_etl.models.wikidata.wikidata_statement import WikidataStatement
from paradicms_etl.sanitize_method_name import sanitize_method_name


class _WikidataItemTransformer(_Transformer):
    def _get_literal_statement_value(
        self, statements: Optional[List[WikidataStatement]],
    ) -> Optional[str]:
        if statements is None:
            return None
        for statement in statements:
            if isinstance(statement.value, Literal):
                if statement.value.language == "en":
                    return statement.value.value
            elif isinstance(statement.value, WikidataItem):
                return statement.value.labels.pref_label

        return None

    def transform(self, item: WikidataItem):
        item_model = self._transform_item(item=item)
        yield item_model

        for statement in item.statements:
            yield from self._transform_statement(
                item=item, item_model=item_model, statement=statement
            )

    @abstractmethod
    def _transform_item(self, item: WikidataItem) -> _Model:
        """
        Transform the item to a _Model.
        """

    def _transform_statement(
        self, *, item: WikidataItem, item_model: _Model, statement: WikidataStatement,
    ) -> Generator[_Model, None, None]:
        """
        Transform an item statement into zero or more _Models.
        """

        transform_method_name = f"_transform_{sanitize_method_name(statement.property_definition.label)}_statement"
        try:
            transform_method = getattr(self, transform_method_name)
        except AttributeError:
            self._logger.warning(
                "unable to find method %s to transform %s statement on item %s: %s",
                transform_method_name,
                statement.property_definition.label,
                item.uri,
                statement,
            )
            return

        statement_qualifier_kwds = self._transform_statement_qualifiers(
            item=item, item_model=item_model, statement=statement
        )

        yield from transform_method(
            item=item,
            item_model=item_model,
            statement=statement,
            **statement_qualifier_kwds,
        )

    def _transform_statement_qualifiers(
        self, *, item: WikidataItem, item_model: _Model, statement: WikidataStatement
    ) -> Dict[str, object]:
        """
        Transform a statement's qualifiers into a **kwds dictionary, which will be passed to _transform_statement.
        """

        kwds = {}
        for qualifier in statement.qualifiers:
            qualifier_label_identifier = sanitize_method_name(
                qualifier.property_definition.label
            )
            transform_method_name = (
                f"_transform_{qualifier_label_identifier}_statement_qualifier"
            )
            try:
                transform_method = getattr(self, transform_method_name)
            except AttributeError:
                self._logger.warning(
                    "unable to find method %s to transform %s statement qualifier on %s statement on item %s: %s",
                    transform_method_name,
                    qualifier.property_definition.label,
                    statement.property_definition.label,
                    item.uri,
                    qualifier,
                )
                continue
            qualifier_value = transform_method(
                item=item,
                item_model=item_model,
                statement=statement,
                statement_qualifier=qualifier,
            )
            if qualifier_value is not None:
                kwds[qualifier_label_identifier] = qualifier_value
        return kwds
