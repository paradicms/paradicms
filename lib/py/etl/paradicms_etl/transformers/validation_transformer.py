import logging
from typing import Optional, Set, Iterable

from paradicms_etl.models.named_location import NamedLocation
from rdflib import URIRef
from stringcase import snakecase

from paradicms_etl.model import Model
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.event import Event
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_group import PropertyGroup
from paradicms_etl.models.rights_mixin import Rights
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.work import Work
from paradicms_etl.models.work_closing import WorkClosing
from paradicms_etl.models.work_creation import WorkCreation
from paradicms_etl.models.work_event import WorkEvent


class __Validator:
    def __init__(self):
        self.__collection_uris = set()
        self.__image_depicts_uris = set()
        self.__license_uris = set()
        self.__location_uris = set()
        self.__logger = logging.getLogger(__name__)
        self.__model_uris = set()
        self.__organization_uris = set()
        self.__person_uris = set()
        self.__referenced_agent_uris = set()
        self.__referenced_collection_uris = set()
        self.__referenced_license_uris = set()
        self.__referenced_rights_statement_uris = set()
        self.__referenced_work_uris = set()
        self.__rights_statement_uris = set()
        self.__work_uris = set()

    def validate(self, models: Iterable[Model]) -> Iterable[Model]:
        model_class_names_snake_case = set()
        missing_method_names = set()

        for model in models:
            model_class_name_snake_case = snakecase(model.__class__.__name__)
            model_class_names_snake_case.add(model_class_name_snake_case)

            # self._validate_model(model)

            validate_method_name = "_validate_" + model_class_name_snake_case
            try:
                validate_method = getattr(self, validate_method_name)
            except AttributeError:
                if validate_method_name not in missing_method_names:
                    self.__logger.warning("missing %s method", validate_method_name)
                    missing_method_names.add(validate_method_name)
                validate_method = None

            if validate_method is not None:
                validate_method(model)

            yield model

        for model_class_name_snake_case in model_class_names_snake_case:
            validate_references_method_name = (
                f"_validate_{model_class_name_snake_case}_references"
            )
            try:
                validate_references_method = getattr(
                    self, validate_references_method_name
                )
            except AttributeError:
                if validate_references_method_name not in missing_method_names:
                    self.__logger.warning(
                        "missing %s method", validate_references_method_name
                    )
                    missing_method_names.add(validate_references_method_name)
                validate_references_method = None

            if validate_references_method is not None:
                validate_references_method()

        # Agents subclasses
        self.__validate_uri_references(
            referenced_uris=self.__referenced_agent_uris,
            universe_uris={*self.__organization_uris, *self.__person_uris},
            uri_type="agent",
        )

    def _validate_collection(self, collection: Collection):
        self.__validate_named_model(collection)
        assert collection.uri not in self.__collection_uris
        self.__collection_uris.add(collection.uri)

    def _validate_collection_references(self):
        self.__validate_uri_references(
            referenced_uris=self.__referenced_collection_uris,
            universe_uris=self.__collection_uris,
            uri_type="collection",
        )

    def __validate_event(self, event: Event):
        pass

    def _validate_image(self, image: Image):
        self.__validate_named_model(image)
        self.__image_depicts_uris.add(image.depicts_uri)
        self.__validate_rights(image.rights)

    def _validate_image_references(self):
        pass

    def _validate_license(self, license: License):
        self.__validate_named_model(license)
        assert license.uri not in self.__license_uris
        self.__license_uris.add(license.uri)

    def _validate_license_references(self):
        self.__validate_uri_references(
            referenced_uris=self.__referenced_license_uris,
            universe_uris=self.__license_uris,
            uri_type="license",
            warn=False,
        )

    def _validate_named_location(self, location: NamedLocation):
        self.__validate_named_model(location)
        self.__location_uris.add(location.uri)

    def _validate_named_location_references(self):
        pass

    def __validate_named_model(self, model: NamedModel):
        if model.uri not in self.__model_uris:
            self.__model_uris.add(model.uri)
        else:
            self.__logger.warning(f"duplicate model URI: {model.uri}")

    def _validate_concept(self, concept: Concept):
        self.__validate_named_model(concept)

    def _validate_concept_references(self):
        pass

    def _validate_organization(self, organization: Organization):
        self.__validate_named_model(organization)
        assert organization.uri not in self.__organization_uris
        self.__organization_uris.add(organization.uri)

    def _validate_organization_references(self):
        pass

    def _validate_person(self, person: Person):
        self.__validate_named_model(person)
        assert person.uri not in self.__person_uris
        self.__person_uris.add(person.uri)

    def _validate_person_references(self):
        pass

    def _validate_property(self, property_: Property):
        pass

    def _validate_property_group(self, property_group: PropertyGroup):
        pass

    def _validate_property_references(self):
        pass

    def _validate_property_group_references(self):
        pass

    def __validate_rights(self, rights: Optional[Rights]):
        if rights is None:
            return
        for agents in (rights.contributors, rights.creators, rights.holders):
            for agent in agents:
                if isinstance(agent, URIRef):
                    self.__referenced_agent_uris.add(agent)
        if isinstance(rights.license, URIRef):
            self.__referenced_license_uris.add(rights.license)
        if isinstance(rights.statement, URIRef):
            self.__referenced_rights_statement_uris.add(rights.statement)

    def _validate_rights_statement(self, rights_statement: RightsStatement):
        self.__validate_named_model(rights_statement)
        assert rights_statement.uri not in self.__rights_statement_uris
        self.__rights_statement_uris.add(rights_statement.uri)

    def _validate_rights_statement_references(self):
        self.__validate_uri_references(
            referenced_uris=self.__referenced_rights_statement_uris,
            universe_uris=self.__rights_statement_uris,
            uri_type="rights statement",
            warn=False,
        )

    def __validate_uri_references(
        self,
        *,
        referenced_uris: Set[URIRef],
        universe_uris: Set[URIRef],
        uri_type: str,
        warn: bool = True,
    ):
        if universe_uris.intersection(referenced_uris) != len(universe_uris):
            for referenced_uri in referenced_uris:
                if referenced_uri not in universe_uris:
                    raise ValueError(
                        f"dangling {uri_type} URI reference: {referenced_uri} (universe: {' '.join(sorted(universe_uris))})"
                    )
            for universe_uri in universe_uris:
                if universe_uri not in referenced_uris:
                    (self.__logger.warning if warn else self.__logger.debug)(
                        f"unreferenced {uri_type} URI: %s", universe_uri
                    )

    def _validate_work(self, work: Work):
        self.__validate_named_model(work)
        for collection_uri in work.collection_uris:
            self.__referenced_collection_uris.add(collection_uri)
        assert work.uri not in self.__work_uris
        self.__work_uris.add(work.uri)
        self.__validate_rights(work.rights)

    def _validate_work_closing(self, work_closing: WorkClosing):
        self.__validate_work_event(work_closing)

    def _validate_work_closing_references(self):
        pass

    def _validate_work_creation(self, work_creation: WorkCreation):
        self.__validate_work_event(work_creation)

    def _validate_work_creation_references(self):
        pass

    def __validate_work_event(self, work_event: WorkEvent):
        self.__validate_event(work_event)
        self.__referenced_work_uris.add(work_event.work_uri)

    def _validate_work_opening(self, work_opening: WorkClosing):
        self.__validate_work_event(work_opening)

    def _validate_work_opening_references(self):
        pass

    def _validate_work_references(self):
        self.__validate_uri_references(
            referenced_uris=self.__referenced_work_uris,
            universe_uris=self.__work_uris,
            uri_type="work",
            warn=False,
        )


def validation_transformer(models: Iterable[Model]) -> Iterable[Model]:  # type: ignore
    """
    A transformer that validates models from other transformers.
    """

    yield from __Validator().validate(models)
