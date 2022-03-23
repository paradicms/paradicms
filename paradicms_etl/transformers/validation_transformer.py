from typing import Optional, Set, Iterable

from rdflib import URIRef
from stringcase import snakecase

from paradicms_etl.model import Model
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.license import License
from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.named_value import NamedValue
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.work import Work
from paradicms_etl.transformer import Transformer


class ValidationTransformer(Transformer):
    """
    A transformer that validates models from other transformers.
    """

    class __Validator:
        def __init__(self, logger):
            self.__collection_uris = set()
            self.__image_depicts_uris = set()
            self.__institution_uris = set()
            self.__license_uris = set()
            self.__logger = logger
            self.__model_uris = set()
            self.__organization_uris = set()
            self.__person_uris = set()
            self.__referenced_agent_uris = set()
            self.__referenced_collection_uris = set()
            self.__referenced_institution_uris = set()
            self.__referenced_license_uris = set()
            self.__referenced_rights_statement_uris = set()
            self.__rights_statement_uris = set()
            self.__work_uris = set()

        def validate(self, models: Iterable[Model]) -> Iterable[Model]:
            model_class_names_snake_case = set()
            missing_method_names = set()

            for model in models:
                model_class_name_snake_case = snakecase(model.__class__.__name__)
                model_class_names_snake_case.add(model_class_name_snake_case)

                # self._validate_model(model)

                if isinstance(model, NamedModel):
                    self._validate_named_model(model)

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
            assert collection.uri not in self.__collection_uris
            self.__collection_uris.add(collection.uri)
            self.__referenced_institution_uris.add(collection.institution_uri)

        def _validate_collection_references(self):
            self.__validate_uri_references(
                referenced_uris=self.__referenced_collection_uris,
                universe_uris=self.__collection_uris,
                uri_type="collection",
            )

        def _validate_image(self, image: Image):
            self.__image_depicts_uris.add(image.depicts_uri)
            self.__validate_rights(image.rights)

        def _validate_image_references(self):
            pass

        def _validate_institution(self, institution: Institution):
            assert institution.uri not in self.__institution_uris
            self.__institution_uris.add(institution.uri)
            self.__validate_rights(institution.rights)

        def _validate_institution_references(self):
            self.__validate_uri_references(
                referenced_uris=self.__referenced_institution_uris,
                universe_uris=self.__institution_uris,
                uri_type="institution",
            )

        def _validate_license(self, license: License):
            assert license.uri not in self.__license_uris
            self.__license_uris.add(license.uri)

        def _validate_license_references(self):
            self.__validate_uri_references(
                referenced_uris=self.__referenced_license_uris,
                universe_uris=self.__license_uris,
                uri_type="license",
                warn=False,
            )

        def _validate_named_model(self, model: NamedModel):
            if model.uri not in self.__model_uris:
                self.__model_uris.add(model.uri)
            else:
                raise ValueError(f"duplicate model URI: {model.uri}")

        def _validate_named_value(self, named_value: NamedValue):
            pass

        def _validate_named_value_references(self):
            pass

        def _validate_organization(self, organization: Organization):
            assert organization.uri not in self.__organization_uris
            self.__organization_uris.add(organization.uri)

        def _validate_organization_references(self):
            pass

        def _validate_person(self, person: Person):
            assert person.uri not in self.__person_uris
            self.__person_uris.add(person.uri)

        def _validate_person_references(self):
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
            assert rights_statement.uri not in self.__rights_statement_uris
            self.__rights_statement_uris.add(rights_statement.uri)

        def _validate_rights_statement_references(self):
            self.__validate_uri_references(
                referenced_uris=self.__referenced_rights_statement_uris,
                universe_uris=self.__rights_statement_uris,
                uri_type="rights statement",
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
            for collection_uri in work.collection_uris:
                self.__referenced_collection_uris.add(collection_uri)
            self.__referenced_institution_uris.add(work.institution_uri)
            assert work.uri not in self.__work_uris
            self.__work_uris.add(work.uri)
            self.__validate_rights(work.rights)

        def _validate_work_references(self):
            pass

    def transform(self, models: Iterable[Model]) -> Iterable[Model]:  # type: ignore
        yield from self.__Validator(logger=self._logger).validate(models)
