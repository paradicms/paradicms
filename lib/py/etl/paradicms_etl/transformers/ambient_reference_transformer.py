from typing import Iterable, Set, Dict, TypeVar, Generic, Type

from rdflib import URIRef, Graph, DCTERMS

from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.license import License
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)

_AmbientModelT = TypeVar("_AmbientModelT", bound=NamedModel)


class _AmbientModelReferenceTracker(Generic[_AmbientModelT]):
    def __init__(
        self,
        *,
        ambient_model_class: Type[_AmbientModelT],
        ambient_models_by_uri: Dict[URIRef, _AmbientModelT],
        referring_predicate: URIRef
    ):
        self.__ambient_model_class = ambient_model_class
        self.__ambient_models_by_uri = ambient_models_by_uri
        self.__referring_predicate = referring_predicate
        self.__referenced_ambient_model_uris: Set[URIRef] = set()
        self.__seen_model_uris_of_ambient_model_class: Set[URIRef] = set()

    def missing_ambient_models(self) -> Iterable[_AmbientModelT]:
        for referenced_ambient_model_uri in self.__referenced_ambient_model_uris:
            if (
                referenced_ambient_model_uri
                in self.__seen_model_uris_of_ambient_model_class
            ):
                continue
            yield self.__ambient_models_by_uri[referenced_ambient_model_uri]

    def track_ambient_model_references(
        self, *, model: Model, model_graph: Graph
    ) -> None:
        if isinstance(model, self.__ambient_model_class):
            self.__seen_model_uris_of_ambient_model_class.add(model.uri)
            return

        for _, o in model_graph.subject_objects(self.__referring_predicate):
            if not isinstance(o, URIRef):
                continue
            if o in self.__ambient_models_by_uri:
                self.__referenced_ambient_model_uris.add(o)


def ambient_reference_transformer(models: Iterable[Model]) -> Iterable[Model]:
    trackers = (
        _AmbientModelReferenceTracker(
            ambient_model_class=License,
            ambient_models_by_uri={
                license.uri: license for license in CreativeCommonsLicenses.as_tuple()
            },
            referring_predicate=DCTERMS.license,
        ),
        _AmbientModelReferenceTracker(
            ambient_model_class=RightsStatement,
            ambient_models_by_uri={
                rights_statement.uri: rights_statement
                for rights_statement in RightsStatementsDotOrgRightsStatements.as_tuple()
            },
            referring_predicate=DCTERMS.rights,
        ),
    )

    for model in models:
        model_graph = Graph()
        model.to_rdf(graph=model_graph)
        for tracker in trackers:
            tracker.track_ambient_model_references(model=model, model_graph=model_graph)
        yield model

    for tracker in trackers:
        yield from tracker.missing_ambient_models()
