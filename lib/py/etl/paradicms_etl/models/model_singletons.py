from typing import TypeVar, Generic, Type, Dict
from urllib.parse import urlparse

from rdflib import URIRef

from paradicms_etl.model import Model

_ModelT = TypeVar("_ModelT", bound=Model)


class ModelSingletons(Generic[_ModelT]):
    """
    Base class for classes that contain model singletons as class constants.
    """

    _MODEL_CLASS: Type[_ModelT]

    @classmethod
    def as_tuple(cls):
        tuple_ = []
        for __attr in dir(cls):
            __value = getattr(cls, __attr)
            if isinstance(__value, cls._MODEL_CLASS):
                tuple_.append(__value)
        return tuple(tuple_)

    @classmethod
    def by_uri(cls) -> Dict[URIRef, _ModelT]:
        result: Dict[URIRef, _ModelT] = {}
        for model in cls.as_tuple():
            if not model.uri:
                continue
            assert model.uri not in result, model.uri
            result[model.uri] = model
            try:
                parsed_model_uri = urlparse(model.uri)
            except ValueError:
                continue
            # If the model URI is http, add the https variant as well
            if parsed_model_uri.scheme == "http":
                other_model_uri = URIRef("https://" + str(model.uri)[len("http://") :])
            elif parsed_model_uri.scheme == "https":
                other_model_uri = URIRef("http://" + str(model.uri)[len("https://") :])
            else:
                continue
            assert other_model_uri not in result, other_model_uri
            result[other_model_uri] = model
        return result
