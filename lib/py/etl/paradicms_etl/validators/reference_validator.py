import logging
from typing import Set, Iterable, Union

from rdflib import URIRef
from stringcase import snakecase

from paradicms_etl.model import Model
from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.creative_commons.creative_commons_license import (
    CreativeCommonsLicense,
)
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.dc.dc_collection import DcCollection
from paradicms_etl.models.dc.dc_image import DcImage
from paradicms_etl.models.dc.dc_license_document import DcLicenseDocument
from paradicms_etl.models.dc.dc_physical_object import DcPhysicalObject
from paradicms_etl.models.dc.dc_rights_statement import DcRightsStatement
from paradicms_etl.models.foaf.foaf_organization import FoafOrganization
from paradicms_etl.models.foaf.foaf_person import FoafPerson
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.location import Location
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.rdf.rdf_property import RdfProperty
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statement import (
    RightsStatementsDotOrgRightsStatement,
)
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm
from paradicms_etl.models.schema.schema_event import SchemaEvent
from paradicms_etl.models.schema.schema_exhibition_event import SchemaExhibitionEvent
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.schema.schema_place import SchemaPlace
from paradicms_etl.models.schema.schema_property import SchemaProperty
from paradicms_etl.models.skos.skos_concept import SkosConcept
from paradicms_etl.models.wikibase.wikibase_item import WikibaseItem
from paradicms_etl.models.work import Work
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

    def _validate_cms_property_group(
        self, property_group: CmsPropertyGroup
    ) -> Iterable[ValidationResult]:
        return ()

    def _validate_cms_property_group_references(self) -> Iterable[ValidationResult]:
        return ()

    def __validate_collection(
        self, collection: Collection
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_model(collection)
        if collection.uri in self.__collection_uris:
            yield ValidationResult(
                message=f"duplicate Collection {collection.uri}",
                severity=ValidationResult.Severity.WARNING,
            )
        self.__collection_uris.add(collection.uri)
        for image_uri in collection.image_uris:
            self.__referenced_image_uris.add(image_uri)
        for work_uri in collection.work_uris:
            self.__referenced_work_uris.add(work_uri)

    def __validate_concept(self, concept: Concept) -> Iterable[ValidationResult]:
        yield from self.__validate_model(concept)
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

    def _validate_dc_collection(
        self, collection: DcCollection
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_collection(collection)

    def _validate_dc_collection_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_dc_image(self, image: DcImage) -> Iterable[ValidationResult]:
        yield from self.__validate_image(image)

    def _validate_dc_image_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_dc_license_document(
        self, license: DcLicenseDocument
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_license(license)

    def _validate_dc_license_document_references(self) -> Iterable[ValidationResult]:
        yield from self.__validate_license_references()

    def _validate_dc_physical_object(
        self, work: DcPhysicalObject
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_work(work)

    def _validate_dc_physical_object_references(self) -> Iterable[ValidationResult]:
        yield from self.__validate_work_references()

    def _validate_dc_rights_statement(
        self, rights_statement: DcRightsStatement
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_rights_statement(rights_statement)

    def _validate_dc_rights_statement_references(self) -> Iterable[ValidationResult]:
        yield from self.__validate_rights_statement_references()

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
        yield from self.__validate_model(image)
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

    def __validate_license(self, license_: License) -> Iterable[ValidationResult]:
        yield from self.__validate_model(license_)
        if license_.uri in self.__license_uris:
            yield ValidationResult(
                message=f"duplicate License {license_.uri}",
                severity=ValidationResult.Severity.WARNING,
            )
        self.__license_uris.add(license_.uri)

    def __validate_license_references(self) -> Iterable[ValidationResult]:
        yield from self.__validate_uri_references(
            referenced_uris=self.__referenced_license_uris,
            universe_uris=self.__license_uris,
            uri_type="license",
        )

    def __validate_location(self, location: Location) -> Iterable[ValidationResult]:
        yield from self.__validate_model(location)
        self.__location_uris.add(location.uri)

    def __validate_model(self, model: Model) -> Iterable[ValidationResult]:
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
        yield from self.__validate_model(organization)
        if organization.uri in self.__organization_uris:
            yield ValidationResult(
                message=f"duplicate Organization {organization.uri}",
                severity=ValidationResult.Severity.WARNING,
            )
        self.__organization_uris.add(organization.uri)
        for image_uri in organization.image_uris:
            self.__referenced_image_uris.add(image_uri)

    def __validate_person(self, person: Person) -> Iterable[ValidationResult]:
        yield from self.__validate_model(person)
        if person.uri in self.__person_uris:
            yield ValidationResult(
                message=f"duplicate Person {person.uri}",
                severity=ValidationResult.Severity.WARNING,
            )
        self.__person_uris.add(person.uri)
        for image_uri in person.image_uris:
            self.__referenced_image_uris.add(image_uri)

    def _validate_rdf_property(
        self, property_: RdfProperty
    ) -> Iterable[ValidationResult]:
        return ()

    def _validate_rdf_property_references(self) -> Iterable[ValidationResult]:
        return ()

    def __validate_rights(self, rights: RightsMixin) -> Iterable[ValidationResult]:
        for agents in (rights.contributors, rights.creators, rights.rights_holders):
            for agent in agents:
                if isinstance(agent, URIRef):
                    self.__referenced_agent_uris.add(agent)
        for license_ in rights.licenses:
            if isinstance(license_, URIRef):
                self.__referenced_license_uris.add(license_)
        for rights_statement in rights.rights_statements:
            if isinstance(rights_statement, URIRef):
                self.__referenced_rights_statement_uris.add(rights_statement)
        return ()

    def __validate_rights_statement(
        self, rights_statement: RightsStatement
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_model(rights_statement)
        if rights_statement.uri in self.__rights_statement_uris:
            yield ValidationResult(
                message=f"duplicate RightsStatement {rights_statement.uri}",
                severity=ValidationResult.Severity.WARNING,
            )
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

    def _validate_schema_collection(
        self, collection: SchemaCollection
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_collection(collection)

    def _validate_schema_collection_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_schema_creative_work(
        self, work: SchemaCreativeWork
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_work(work)

    def _validate_schema_creative_work_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_schema_defined_term(
        self, concept: SchemaDefinedTerm
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_concept(concept)

    def _validate_schema_defined_term_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_schema_event(
        self, schema_event: SchemaEvent
    ) -> Iterable[ValidationResult]:
        return ()

    def _validate_schema_event_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_schema_exhibition_event(
        self, schema_exhibition_event: SchemaExhibitionEvent
    ) -> Iterable[ValidationResult]:
        return ()

    def _validate_schema_exhibition_event_references(
        self,
    ) -> Iterable[ValidationResult]:
        return ()

    def _validate_schema_image_object(
        self, image_object: SchemaImageObject
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_image(image_object)

    def _validate_schema_image_object_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_schema_organization(
        self, organization: SchemaOrganization
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_organization(organization)

    def _validate_schema_organization_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_schema_person(
        self, person: SchemaPerson
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_person(person)

    def _validate_schema_person_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_schema_place(
        self, schema_place: SchemaPlace
    ) -> Iterable[ValidationResult]:
        yield from self.__validate_location(schema_place)

    def _validate_schema_place_references(self) -> Iterable[ValidationResult]:
        return ()

    def _validate_schema_property(
        self, property_: SchemaProperty
    ) -> Iterable[ValidationResult]:
        return ()

    def _validate_schema_property_references(self) -> Iterable[ValidationResult]:
        return ()

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
        self.__referenced_license_uris.add(CreativeCommonsLicenses.BY_SA_3_0.uri)
        self.__referenced_rights_statement_uris.add(
            RightsStatementsDotOrgRightsStatements.InC.uri
        )
        return ()

    def _validate_wikibase_item_references(self) -> Iterable[ValidationResult]:
        return ()

    def __validate_work(self, work: Work) -> Iterable[ValidationResult]:
        yield from self.__validate_model(work)
        yield from self.__validate_rights(work)
        if work.uri in self.__work_uris:
            yield ValidationResult(
                message=f"duplicate Work {work.uri}",
                severity=ValidationResult.Severity.WARNING,
            )
            self.__work_uris.add(work.uri)
        self.__image_uris.add(work.image_uris)

    def __validate_work_references(self) -> Iterable[ValidationResult]:
        yield from self.__validate_uri_references(
            referenced_uris=self.__referenced_work_uris,
            universe_uris=self.__work_uris,
            uri_type="work",
        )
