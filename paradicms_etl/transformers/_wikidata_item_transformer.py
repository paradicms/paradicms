from abc import ABC, abstractmethod
from typing import Dict, Generator, List, Optional, Tuple

from rdflib import Literal

from paradicms_etl._model import _Model
from paradicms_etl._transformer import _Transformer
from paradicms_etl.models.wikidata.wikidata_item import WikidataItem
from paradicms_etl.models.wikidata.wikidata_statement import WikidataStatement
from paradicms_etl.sanitize_method_name import sanitize_method_name


class _WikidataItemTransformer(_Transformer):
    def __init__(self, *, item: WikidataItem, **kwds):
        _Transformer.__init__(self, **kwds)
        self.__item = item

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

    @property
    def _item(self):
        return self.__item

    def transform(self):
        item_model = self._transform_item()
        yield item_model

        for statement in self._item.statements:
            yield from self._transform_statement(
                item_model=item_model,
                statement=statement,
                **self._transform_statement_qualifiers(statement=statement),
            )

    @abstractmethod
    def _transform_item(self) -> _Model:
        """
        Transform the item to a _Model.
        """

    def _transform_statement(
        self, *, item_model: _Model, statement: WikidataStatement
    ) -> Generator[_Model, None, None]:
        """
        Transform an item statement into zero or more _Models.
        :param kwds:
        """

        transform_method_name = f"_transform_{sanitize_method_name(statement.property_definition.label)}_statement"
        try:
            transform_method = getattr(self, transform_method_name)
        except AttributeError:
            self._logger.warning(
                "unable to find method %s to transform %s statement on item %s",
                transform_method_name,
                statement.property_definition.label,
                self._item.uri,
            )
            return

        yield from transform_method(item_model=item_model, statement=statement)

    def _transform_statement_qualifiers(
        self, *, item_model: _Model, statement: WikidataStatement
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
                    "unable to find method %s to transform %s statement qualifier on %s statement on item %s",
                    transform_method_name,
                    qualifier.property_definition.label,
                    statement.property_definition.label,
                    self._item.uri,
                )
                continue
            qualifier_value = transform_method(
                item_model=item_model,
                statement=statement,
                statement_qualifier=qualifier,
            )
            if qualifier_value is not None:
                kwds[qualifier_label_identifier] = qualifier_value
        return kwds
