from typing import Tuple, Iterable, Dict

from rdflib import Graph, URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.wikidata.wikidata_item import WikidataItem
from paradicms_etl.transformer import Transformer
from paradicms_etl.utils.sanitize_method_name import sanitize_method_name


class _WikidataItemsTransformer(Transformer):
    """
    Abstract base class for transformers that accept an rdflib Graph containing Wikidata items and generate zero or more
    paradicms Models.

    The base class works by:
    1) identifying zero or more Wikidata items in the rdflib Graph
    2) ascertaining the type of each item via its "instance of" statement
    3) passing the item down to a concrete _transform_{item type}_item method if it exists, which is expected to
    4) generate zero or more paradicms Models

    For example, a "human" item would induce a call to _transform_human_item(item: WikidataItem), which would
    be expected to generate zero or more paradicms Models. Typically this method would delegate to an instance
    of _WikidataItemTransformer.
    """

    def _log_missing_transform_method(
        self, *, item: WikidataItem, transform_method_name: str
    ):
        self._logger.warning(
            "unable to find method %s to transform item %s",
            transform_method_name,
            item.uri,
        )

    def transform(self, *, graph: Graph) -> Iterable[Model]:  # type: ignore
        yield from self._transform_items(
            WikidataItem.from_wikidata_rdf(graph=graph, logger=self._logger)
        )

    def _transform_item(self, item: WikidataItem) -> Iterable[NamedModel]:
        instance_of_statements = item.statements_by_property_label().get(
            "instance of", None
        )
        if not instance_of_statements:
            self._logger.debug("item %s has no instance of statements", item.uri)
            return

        assert isinstance(instance_of_statements[0].value, WikidataItem)
        instance_of_value = instance_of_statements[0].value.labels.pref_label

        transform_method_name = (
            f"_transform_{sanitize_method_name(instance_of_value)}_item"
        )
        try:
            transform_method = getattr(self, transform_method_name)
        except AttributeError:
            self._log_missing_transform_method(
                item=item, transform_method_name=transform_method_name
            )
            return

        yield from transform_method(item=item)

    def _transform_items(self, items: Tuple[WikidataItem, ...]):
        authoritative_models_by_uri = {}
        non_authoritative_models_by_uri: Dict[URIRef, NamedModel] = {}

        for item in items:
            for model in self._transform_item(item):
                if model.uri == item.uri:
                    assert model.uri not in authoritative_models_by_uri, model.uri
                    authoritative_models_by_uri[model.uri] = model
                    self._logger.debug("authoritative model %s", model.uri)
                else:
                    self._logger.debug("non-authoritative model %s", model.uri)
                    existing_non_authoritative_model = (
                        non_authoritative_models_by_uri.get(model.uri)
                    )
                    if existing_non_authoritative_model is None:
                        non_authoritative_models_by_uri[model.uri] = model
                    elif existing_non_authoritative_model != model:
                        self._logger.info(
                            "conflicting non-authoritative model %s: %s vs %s",
                            model.uri,
                            existing_non_authoritative_model,
                            model,
                        )
                    else:
                        self._logger.debug(
                            "duplicate non-authoritative model %s", model.uri
                        )

        yield from authoritative_models_by_uri.values()
        for model in non_authoritative_models_by_uri.values():
            if model.uri in authoritative_models_by_uri:
                self._logger.info(
                    "ignoring non-authoritative model %s in favor of authoritative version",
                    model.uri,
                )
                continue
            yield model
