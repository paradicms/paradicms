from typing import Generator, Set

from rdflib import URIRef
from stringcase import snakecase

from paradicms_etl._model import _Model
from paradicms_etl._transformer import _Transformer
from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.work import Work


class ValidationTransformer(_Transformer):
    """
    A transformer that validates models from other transformers.
    """

    class __Validator:
        def __init__(self, logger):
            self.__collections_by_uri = {}
            self.__image_depicts_uris = set()
            self.__institutions_by_uri = {}
            self.__property_definitions_by_uri = {}
            self.__logger = logger
            self.__model_uris = set()
            self.__referenced_collection_uris = set()
            self.__referenced_institution_uris = set()
            self.__works_by_uri = {}

        def validate(
            self, models: Generator[_Model, None, None]
        ) -> Generator[_Model, None, None]:
            model_class_names_snake_case = set()
            missing_method_names = set()

            for model in models:
                model_class_name_snake_case = snakecase(model.__class__.__name__)
                model_class_names_snake_case.add(model_class_name_snake_case)

                # self._validate_model(model)

                if isinstance(model, _NamedModel):
                    self._validate_named_model(model)

                validate_method_name = "_validate_" + model_class_name_snake_case
                try:
                    validate_method = getattr(self, validate_method_name)
                except AttributeError:
                    if validate_method_name not in missing_method_names:
                        self.__logger.debug("missing %s method", validate_method_name)
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
                except:
                    if validate_references_method_name not in missing_method_names:
                        self.__logger.debug(
                            "missing %s method", validate_references_method_name
                        )
                        missing_method_names.add(validate_references_method_name)
                    validate_references_method = None

                if validate_references_method is not None:
                    validate_references_method()

        def _validate_collection(self, collection: Collection):
            assert collection.uri not in self.__collections_by_uri
            self.__collections_by_uri[collection.uri] = collection
            self.__referenced_institution_uris.add(collection.institution_uri)

        def _validate_collection_references(self):
            self.__validate_uri_references(
                referenced_uris=self.__referenced_collection_uris,
                universe_uris=set(self.__collections_by_uri.keys()),
                uri_type="collection",
            )

        def _validate_image(self, image: Image):
            self.__image_depicts_uris.add(image.depicts_uri)

        # def _validate_image_references(self):
        # check_uri_references(
        #     referenced_uris=image_depicts_uris,
        #     universe_uris=model_uris,
        #     uri_type="image depicts",
        # )

        def _validate_institution(self, institution: Institution):
            assert institution.uri not in self.__institutions_by_uri
            self.__institutions_by_uri[institution.uri] = institution

        def _validate_institution_references(self):
            self.__validate_uri_references(
                referenced_uris=self.__referenced_institution_uris,
                universe_uris=set(self.__institutions_by_uri.keys()),
                uri_type="institution",
            )

        def _validate_named_model(self, model: _NamedModel):
            if model.uri not in self.__model_uris:
                self.__model_uris.add(model.uri)
            else:
                # elif not isinstance(model, PropertyDefinition):
                raise ValueError(f"duplicate model URI: {model.uri}")

        # def _validate_property_definition(self, property_definition: PropertyDefinition):
        #     existing_property_definition = self.__property_definitions_by_uri.get(
        #         property_definition.uri
        #     )
        #     if existing_property_definition is not None:
        #         if property_definition != existing_property_definition:
        #             raise ValueError(
        #                 f"conflicting definition of property {property_definition.uri}: {property_definition} vs. {existing_property_definition}"
        #             )
        #         self._logger.info(
        #             "ignoring exact duplicate property definition for %s",
        #             property_definition.uri,
        #         )
        #         continue  # Don't yield twice
        #     else:
        #         property_definitions_by_uri[
        #             property_definition.uri
        #         ] = property_definition
        #     pass

        def __validate_uri_references(
            self,
            *,
            referenced_uris: Set[URIRef],
            universe_uris: Set[URIRef],
            uri_type: str,
        ):
            if universe_uris.intersection(referenced_uris) != len(universe_uris):
                for referenced_uri in referenced_uris:
                    if referenced_uri not in universe_uris:
                        raise ValueError(
                            f"dangling {uri_type} URI reference: {referenced_uri} (universe: {universe_uris})"
                        )
                for universe_uri in universe_uris:
                    if universe_uri not in referenced_uris:
                        self.__logger.warning(
                            f"unreferenced {uri_type} URI: %s", universe_uri
                        )

        def _validate_work(self, work: Work):
            for collection_uri in work.collection_uris:
                self.__referenced_collection_uris.add(collection_uri)
            self.__referenced_institution_uris.add(work.institution_uri)
            assert work.uri not in self.__works_by_uri
            self.__works_by_uri[work.uri] = work

    def transform(
        self, models: Generator[_Model, None, None]
    ) -> Generator[_Model, None, None]:
        yield from self.__Validator(logger=self._logger).validate(models)
