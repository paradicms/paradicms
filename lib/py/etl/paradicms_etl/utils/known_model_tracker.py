from typing import Generic, TypeVar, Type, Dict, Set, Iterable, Callable

from rdflib import URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.named_model import NamedModel

ModelT = TypeVar("ModelT", bound=NamedModel)


class KnownModelTracker(Generic[ModelT]):
    """
    Track the appearance of known models as well as references to them.
    """

    def __init__(
        self,
        *,
        get_references: Callable[[Model], Iterable[URIRef]],
        model_class: Type[ModelT],
        models_by_uri: Dict[URIRef, ModelT]
    ):
        self.__get_references = get_references
        self.__model_class = model_class
        self.__models_by_uri = models_by_uri
        self.__referenced_model_uris: Set[URIRef] = set()
        self.__seen_model_uris_of_model_class: Set[URIRef] = set()

    def __call__(self, model: ModelT) -> None:
        """
        Track that the model has been seen and track the model's references to other models.
        """

        if isinstance(model, self.__model_class):
            self.__seen_model_uris_of_model_class.add(model.uri)
            return

        for reference_uri in self.__get_references(model):
            if reference_uri in self.__models_by_uri:
                self.__referenced_model_uris.add(reference_uri)

    def missing_models(self) -> Iterable[ModelT]:
        for referenced_model_uri in self.__referenced_model_uris:
            if referenced_model_uri in self.__seen_model_uris_of_model_class:
                continue
            yield self.__models_by_uri[referenced_model_uri]
