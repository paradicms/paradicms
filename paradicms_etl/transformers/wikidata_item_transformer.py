from abc import abstractmethod
from typing import Dict, Generator, Tuple

from paradicms_etl.model import Model
from paradicms_etl.models.wikidata.wikidata_item import WikidataItem
from paradicms_etl.models.wikidata.wikidata_statement import WikidataStatement
from paradicms_etl.transformer import Transformer
from paradicms_etl.utils.sanitize_method_name import sanitize_method_name


class WikidataItemTransformer(Transformer):
    """
    Abstract base class for transformers that accept a single WikidataItem and transform it into zero or more paradicms Models.

    The base class works by passing the WikidataItem down to _transform_item, which produces a single paradicms Model.

    The base class then invokes _transform_statements with the WikidataItem and the transformed paradicms Model. This method
    generates zero or more paradicms Models. The latter are typically connected models as well as CIDOC-CRM type events. For example,
    if the WikidataItem is a Person, transforming an "employed by" statement about the item could generate an Organization
    (the organization the Person was employed by) and an EmployedBy event connected the Person and the Organization.

    _transform_statements in turn delegates each statement to _transform_statement, which delegates to concrete methods of the form
    _transform_{statement type}_statement if such a method exists.

    There is a similar process for _transform_statement_qualifiers.
    """

    def transform(self, item: WikidataItem) -> Generator[Model, None, None]:
        item_model = self._transform_item(item=item)

        for model in self._transform_statements(
            item=item, item_model=item_model, statements=item.statements
        ):
            if model.uri == item_model.uri:
                # Statement transformers can incrementally update the item model.
                # Replace the item model on every update.
                # Assumes this is an update (using e.g., dataclasses.replace(item_model, **kwds)) and not a new model.
                assert isinstance(model, item_model.__class__)
                item_model = model
            else:
                yield model

        # Since statements can incrementally update the item model, wait until
        # all statements have been transformed to yield it.
        yield item_model

    @abstractmethod
    def _transform_item(self, item: WikidataItem) -> Model:
        """
        Transform the item to a Model.
        """

    def _transform_statement(
        self,
        *,
        item: WikidataItem,
        item_model: Model,
        statement: WikidataStatement,
    ) -> Generator[Model, None, None]:
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

        # for statement_qualifier_kwd in statement_qualifier_kwds.keys():
        #     self._logger.debug(
        #         "statement qualifier: %s on %s",
        #         statement_qualifier_kwd,
        #         statement.property_definition.label,
        #     )

        models = transform_method(
            item=item,
            item_model=item_model,
            statement=statement,
            **statement_qualifier_kwds,
        )
        if models is None:
            return None
        yield from models

    def _transform_statement_qualifiers(
        self, *, item: WikidataItem, item_model: Model, statement: WikidataStatement
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

    def _transform_statements(
        self,
        *,
        item: WikidataItem,
        item_model: Model,
        statements: Tuple[WikidataStatement, ...],
    ) -> Generator[Model, None, None]:
        reassigned_item_model = False

        for statement in sorted(
            statements, key=lambda statement: statement.property_definition.label
        ):
            models = self._transform_statement(
                item=item, item_model=item_model, statement=statement
            )
            if models is None:
                continue

            for model in models:
                if model.uri == item_model.uri:
                    item_model = model
                    reassigned_item_model = True
                else:
                    yield model

        # See notes in transform, above
        if reassigned_item_model:
            yield item_model
