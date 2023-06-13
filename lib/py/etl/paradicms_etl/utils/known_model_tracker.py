from typing import Generic, TypeVar, Type, Dict, Set, Iterable

from rdflib import URIRef, Graph

from paradicms_etl.models.named_model import NamedModel

ModelT = TypeVar("ModelT", bound=NamedModel)


class KnownModelTracker(Generic[ModelT]):
    """
    Track the appearance of known models as well as references to them.
    """

    def __init__(
        self,
        *,
        model_class: Type[ModelT],
        models_by_uri: Dict[URIRef, ModelT],
        referring_predicate: URIRef
    ):
        self.__model_class = model_class
        self.__models_by_uri = models_by_uri
        self.__referring_predicate = referring_predicate
        self.__referenced_model_uris: Set[URIRef] = set()
        self.__seen_model_uris_of_model_class: Set[URIRef] = set()

    def __call__(self, model: ModelT) -> None:
        """
        Track that the model has been seen and track the model's references to other models.
        """

        if isinstance(model, self.__model_class):
            self.__seen_model_uris_of_model_class.add(model.uri)
            return

        for _, o in model.to_rdf(graph=Graph()).graph.subject_objects(
            self.__referring_predicate
        ):
            if not isinstance(o, URIRef):
                continue
            if o in self.__models_by_uri:
                self.__referenced_model_uris.add(o)

    def missing_models(self) -> Iterable[ModelT]:
        for referenced_model_uri in self.__referenced_model_uris:
            if referenced_model_uri in self.__seen_model_uris_of_model_class:
                continue
            yield self.__models_by_uri[referenced_model_uri]
