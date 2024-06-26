from __future__ import annotations

import logging
from functools import cache
from hashlib import sha256
from typing import TYPE_CHECKING

from rdflib import Graph, URIRef

if TYPE_CHECKING:
    from collections.abc import Iterable

    from paradicms_etl.model import Model


class Deduplicator:
    """
    Deduplicates an iterable of models based on URI and then contents.
    """

    class _ModelWrapper:
        def __init__(self, model: Model):
            self.__model = model

        def diff(self, other: Deduplicator._ModelWrapper) -> tuple[str, ...]:  # type: ignore
            return tuple(sorted(set(self.str_lines).difference(other.str_lines)))

        @property  # type: ignore
        @cache  # noqa: B019
        def graph(self) -> Graph:
            return self.__model.to_rdf(Graph()).graph

        @property  # type: ignore
        @cache  # noqa: B019
        def hash(self) -> str:  # noqa: A003
            return sha256(str(self).encode("utf-8")).hexdigest()

        def isomorphic(self, other: Deduplicator._ModelWrapper) -> bool:
            return self.graph.isomorphic(other.graph)  # type: ignore

        @property
        def model(self) -> Model:
            return self.__model

        @cache  # noqa: B019
        def __str__(self):
            return "\n".join(self.str_lines)

        @property  # type: ignore
        @cache  # noqa: B019
        def str_lines(self) -> tuple[str, ...]:
            return tuple(sorted(self.graph.serialize(format="nt").split("\n")))  # type: ignore

    def __init__(self) -> None:
        self._logger = logging.getLogger(__name__)
        self.__seen_models: dict[
            type[Model], dict[URIRef, list[Deduplicator._ModelWrapper]]
        ] = {}

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        for model in models:
            model_wrapper = self._ModelWrapper(model)

            seen_models_by_uri = self.__seen_models.setdefault(model.__class__, {})
            seen_model_wrappers = seen_models_by_uri.get(model.uri, [])
            if not seen_model_wrappers:
                # Common case
                seen_models_by_uri[model.uri] = [model_wrapper]
                yield model
                continue

            yield_model = True
            for seen_model_wrapper in seen_model_wrappers:
                if seen_model_wrapper.hash == model_wrapper.hash:
                    assert seen_model_wrapper.isomorphic(model_wrapper)
                    self._on_deep_duplicate_model(seen_model_wrapper, model_wrapper)
                    yield_model = False
                    break
                else:
                    # assert not seen_model_wrapper.isomorphic(model_wrapper)
                    self._on_shallow_duplicate_model(seen_model_wrapper, model_wrapper)
            if yield_model:
                yield model

    def _on_deep_duplicate_model(
        self, left: _ModelWrapper, right: _ModelWrapper  # noqa: ARG002
    ) -> None:
        self._logger.debug("deep duplicate model: %s", left.model.uri)

    def _on_shallow_duplicate_model(
        self, left: _ModelWrapper, right: _ModelWrapper
    ) -> None:
        self._logger.debug(
            "shallow duplicate models with same type (%s) and URI (%s):\nLeft: %s\nRight: %s\nDiff: %s",
            left.model.__class__.__name__,
            left.model.uri,
            left,
            right,
            "\n".join(left.diff(right)),
        )
