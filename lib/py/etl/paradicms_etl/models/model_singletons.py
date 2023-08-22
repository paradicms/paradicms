from typing import Generic, TypeVar
from urllib.parse import urlparse

from rdflib import Graph, URIRef

from paradicms_etl.model import Model

_ModelT = TypeVar("_ModelT", bound=Model)


class ModelSingletons(Generic[_ModelT]):
    """
    Base class for classes that contain model singletons as class constants.
    """

    _MODEL_CLASS: type[_ModelT]

    @classmethod
    def as_tuple(cls) -> tuple[_ModelT, ...]:
        tuple_ = []
        for __attr in dir(cls):
            __value = getattr(cls, __attr)
            if isinstance(__value, cls._MODEL_CLASS):
                tuple_.append(__value)
        return tuple(tuple_)

    @classmethod
    def by_uri(  # noqa: C901
        cls, *, include_variant_uris: bool = True
    ) -> dict[URIRef, _ModelT]:
        by_original_uri: dict[URIRef, _ModelT] = {}
        for model in cls.as_tuple():
            if not model.uri:
                continue
            assert model.uri not in by_original_uri
            by_original_uri[model.uri] = model
        if not include_variant_uris:
            return by_original_uri

        by_uri = by_original_uri.copy()
        for model in cls.as_tuple():
            if not model.uri:
                continue
            try:
                parsed_model_uri = urlparse(model.uri)
            except ValueError:
                continue
            # If the model URI is http, add the https variant as well
            if parsed_model_uri.scheme == "http":
                variant_model_uri = URIRef(
                    "https://" + str(model.uri)[len("http://") :]
                )
            elif parsed_model_uri.scheme == "https":
                variant_model_uri = URIRef(
                    "http://" + str(model.uri)[len("https://") :]
                )
            else:
                continue
            if variant_model_uri in by_uri:
                continue

            model_resource = model.to_rdf(graph=Graph())
            model_graph = model_resource.graph
            model_graph_subjects = tuple(model_graph.subjects(unique=True))
            assert len(model_graph_subjects) == 1, "can only rewrite one subject"
            assert model_graph_subjects[0] == model.uri
            variant_model_graph = Graph()
            for s, p, o in model_graph:
                variant_model_graph.add((variant_model_uri, p, o))
            variant_model = cls._MODEL_CLASS.from_rdf(
                variant_model_graph.resource(variant_model_uri)
            )
            by_uri[variant_model_uri] = variant_model  # type: ignore

        return by_uri
