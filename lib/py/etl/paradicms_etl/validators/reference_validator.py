import logging
from typing import Set, Iterable, Union

from rdflib import URIRef
from stringcase import snakecase

from paradicms_etl.model import Model
from paradicms_etl.models.cms.cms_collection import CmsCollection
from paradicms_etl.models.cms.cms_image import CmsImage
from paradicms_etl.models.cms.cms_license import CmsLicense
from paradicms_etl.models.cms.cms_location import CmsLocation
from paradicms_etl.models.cms.cms_rights_statement import CmsRightsStatement
from paradicms_etl.models.cms.cms_work import CmsWork
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.creative_commons.creative_commons_license import (
    CreativeCommonsLicense,
)
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.event import Event
from paradicms_etl.models.foaf.foaf_organization import FoafOrganization
from paradicms_etl.models.foaf.foaf_person import FoafPerson
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.location import Location
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_group import PropertyGroup
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statement import (
    RightsStatementsDotOrgRightsStatement,
)
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.skos.skos_concept import SkosConcept
from paradicms_etl.models.wikibase.wikibase_item import WikibaseItem
from paradicms_etl.models.work import Work
from paradicms_etl.models.work_closing import WorkClosing
from paradicms_etl.models.work_creation import WorkCreation
from paradicms_etl.models.work_event import WorkEvent
from paradicms_etl.validation_result import ValidationResult


class ReferenceValidator:
    def __init__(self):
        self.__collection_uris = set()
        self.__image_uris = set()
        self.__license_uris = set()
        self.__location_uris = set()
        self.__logger = logging.getLogger(__name__)
        self.__model_uris = set()
        self.__organization_uris = set()
        self.__person_uris = set()
        self.__referenced_agent_uris = set()
        self.__referenced_license_uris = set()
        self.__referenced_image_uris = set()
        self.__referenced_rights_statement_uris = set()
        self.__referenced_work_uris = set()
        self.__rights_statement_uris = set()
        self.__work_uris = set()

    def __call__(
        self, models: Iterable[Model]
    ) -> Iterable[Union[Model, ValidationResult]]:
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
                yield from validate_method(model)

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
                yield from validate_references_method()

        # Agents subclasses
        yield from self.__validate_uri_references(
            referenced_uris=self.__referenced_agent_uris,
            universe_uris={*self.__organization_uris, *self.__person_uris},
            uri_type="agent",
        )

    def _validate_cms_collection(
        self, collection: CmsCollection
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_collection(collection)

    def _validate_cms_collection_references(self) -> Iterable[ValidationResult]:
        return ()

    def __validate_cms_event(self, event: Event) -> Iterable[ValidationResult]:
        return ()

    def _validate_cms_image(self, image: CmsImage) -> Iterable[ValidationResult]:
        yield from self.__validate_image(image)

    def _validate_cms_image_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_cms_license(self, license: CmsLicense) -> Iterable[ValidationResult]:
        yield from self.__validate_license(license)

    def _validate_cms_license_references(self) -> Iterable[ValidationResult]:
        yield from self.__validate_license_references()

    def _validate_cms_location(
        self, location: CmsLocation
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_location(location)

    def _validate_cms_location_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_cms_property(self, property_: Property) -> Iterable[ValidationResult]:
        return ()

    def _validate_cms_property_group(
        self, property_group: PropertyGroup
    ) -> Iterable[ValidationResult]:
        return ()

    def _validate_cms_property_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_cms_property_group_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_cms_rights_statement(
        self, rights_statement: CmsRightsStatement
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_rights_statement(rights_statement)

    def _validate_cms_rights_statement_references(self) -> Iterable[ValidationResult]:
        yield from self.__validate_rights_statement_references()

    def _validate_cms_work(self, work: CmsWork) -> Iterable[ValidationResult]:
        yield from self.__validate_work(work)

    def _validate_cms_work_closing(
        self, work_closing: WorkClosing
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_cms_work_event(work_closing)

    def _validate_cms_work_closing_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_cms_work_creation(
        self, work_creation: WorkCreation
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_cms_work_event(work_creation)

    def _validate_cms_work_creation_references(self) -> Iterable[ValidationResult]:
        return ()

    def __validate_cms_work_event(
        self, work_event: WorkEvent
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_cms_event(work_event)

    def _validate_cms_work_opening(
        self, work_opening: WorkClosing
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_cms_work_event(work_opening)

    def _validate_cms_work_opening_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_cms_work_references(self) -> Iterable[ValidationResult]:
        yield from self.__validate_work_references()

    def __validate_collection(self, collection: Collection):
        yield from self.__validate_named_model(collection)
        assert collection.uri not in self.__collection_uris
        self.__collection_uris.add(collection.uri)
        for image_uri in collection.image_uris:
            self.__referenced_image_uris.add(image_uri)
        for work_uri in collection.work_uris:
            self.__referenced_work_uris.add(work_uri)

    def __validate_concept(self, concept: Concept) -> Iterable[ValidationResult]:
        yield from self.__validate_named_model(concept)
        for image_uri in concept.image_uris:
            self.__referenced_image_uris.add(image_uri)

    def _validate_creative_commons_license(
        self, license: CreativeCommonsLicense
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_license(license)

    def _validate_creative_commons_license_references(
        self,
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_license_references()

    def _validate_foaf_organization(
        self, organization: FoafOrganization
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_organization(organization)

    def _validate_foaf_organization_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_foaf_person(self, person: FoafPerson) -> Iterable[ValidationResult]:
        yield from self.__validate_person(person)

    def _validate_foaf_person_references(self) -> Iterable[ValidationResult]:
        return ()

    def __validate_image(self, image: Image) -> Iterable[ValidationResult]:
        yield from self.__validate_named_model(image)
        yield from self.__validate_rights(image)
        self.__image_uris.add(image.uri)
        for thumbnail_uri in image.thumbnail_uris:
            self.__referenced_image_uris.add(thumbnail_uri)

    def __validate_image_references(self) -> Iterable[ValidationResult]:
        yield from self.__validate_uri_references(
            referenced_uris=self.__referenced_image_uris,
            universe_uris=self.__image_uris,
            uri_type="image",
        )

    def __validate_license(self, license: License) -> Iterable[ValidationResult]:
        yield from self.__validate_named_model(license)
        if license.uri is not None:
            assert license.uri not in self.__license_uris
            self.__license_uris.add(license.uri)

    def __validate_license_references(self) -> Iterable[ValidationResult]:
        yield from self.__validate_uri_references(
            referenced_uris=self.__referenced_license_uris,
            universe_uris=self.__license_uris,
            uri_type="license",
        )

    def __validate_location(self, location: Location) -> Iterable[ValidationResult]:
        yield from self.__validate_named_model(location)
        if location.uri is not None:
            self.__location_uris.add(location.uri)

    def __validate_named_model(self, model: Model) -> Iterable[ValidationResult]:
        if model.uri is None:
            return
        if model.uri not in self.__model_uris:
            self.__model_uris.add(model.uri)
        else:
            yield ValidationResult(
                message=f"duplicate model URI: {model.uri}",
                severity=ValidationResult.Severity.INFO,
            )

    def __validate_organization(
        self, organization: Organization
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_named_model(organization)
        if organization.uri is not None:
            assert organization.uri not in self.__organization_uris, organization.uri
            self.__organization_uris.add(organization.uri)
        for image_uri in organization.image_uris:
            self.__referenced_image_uris.add(image_uri)

    def __validate_person(self, person: Person) -> Iterable[ValidationResult]:
        yield from self.__validate_named_model(person)
        if person.uri is not None:
            assert person.uri not in self.__person_uris
            self.__person_uris.add(person.uri)
        for image_uri in person.image_uris:
            self.__referenced_image_uris.add(image_uri)

    def __validate_rights(self, rights: RightsMixin) -> Iterable[ValidationResult]:
        for agents in (rights.contributors, rights.creators, rights.rights_holders):
            for agent in agents:
                if isinstance(agent, URIRef):
                    self.__referenced_agent_uris.add(agent)
        if isinstance(rights.license, URIRef):
            self.__referenced_license_uris.add(rights.license)
        if isinstance(rights.rights_statement, URIRef):
            self.__referenced_rights_statement_uris.add(rights.rights_statement)
        return ()

    def __validate_rights_statement(
        self, rights_statement: RightsStatement
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_named_model(rights_statement)
        if rights_statement.uri is not None:
            assert rights_statement.uri not in self.__rights_statement_uris
            self.__rights_statement_uris.add(rights_statement.uri)

    def _validate_rights_statements_dot_org_rights_statement(
        self, rights_statement: RightsStatementsDotOrgRightsStatement
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_rights_statement(rights_statement)

    def _validate_rights_statements_dot_org_rights_statement_references(
        self,
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_rights_statement_references()

    def __validate_rights_statement_references(self) -> Iterable[ValidationResult]:
        yield from self.__validate_uri_references(
            referenced_uris=self.__referenced_rights_statement_uris,
            universe_uris=self.__rights_statement_uris,
            uri_type="rights statement",
        )

    def _validate_skos_concept(
        self, concept: SkosConcept
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_concept(concept)

    def _validate_skos_concept_references(self) -> Iterable[ValidationResult]:
        return ()

    def __validate_uri_references(
        self, *, referenced_uris: Set[URIRef], universe_uris: Set[URIRef], uri_type: str
    ) -> Iterable[ValidationResult]:
        if universe_uris.intersection(referenced_uris) != len(universe_uris):
            for referenced_uri in referenced_uris:
                if referenced_uri not in universe_uris:
                    yield ValidationResult(
                        message=f"dangling {uri_type} URI reference: {referenced_uri} (universe: {' '.join(sorted(universe_uris))})",
                        severity=ValidationResult.Severity.WARNING,
                    )
            for universe_uri in universe_uris:
                if universe_uri not in referenced_uris:
                    yield ValidationResult(
                        message=f"unreferenced {uri_type} URI: {universe_uri}",
                        severity=ValidationResult.Severity.INFO,
                    )

    def _validate_wikibase_item(
        self, wikibase_item: WikibaseItem
    ) -> Iterable[ValidationResult]:
        self.__referenced_license_uris.add(CreativeCommonsLicenses.BY_SA_3_0)
        self.__referenced_rights_statement_uris.add(
            RightsStatementsDotOrgRightsStatements.InC
        )
        return ()

    def _validate_wikibase_item_references(self) -> Iterable[ValidationResult]:
        return ()

    def __validate_work(self, work: Work) -> Iterable[ValidationResult]:
        yield from self.__validate_named_model(work)
        yield from self.__validate_rights(work)
        assert work.uri not in self.__work_uris
        self.__work_uris.add(work.uri)
        self.__image_uris.add(work.image_uris)

    def __validate_work_references(self) -> Iterable[ValidationResult]:
        yield from self.__validate_uri_references(
            referenced_uris=self.__referenced_work_uris,
            universe_uris=self.__work_uris,
            uri_type="work",
        )
