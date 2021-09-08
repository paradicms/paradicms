from typing import Generator, Set

from rdflib import URIRef

from paradicms_etl._model import _Model
from paradicms_etl._transformer import _Transformer
from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.models.work import Work


class ValidationTransformer(_Transformer):
    """
    A transformer that validates models from other transformers.
    """

    def transform(
        self, models: Generator[_Model, None, None]
    ) -> Generator[_Model, None, None]:
        collections_by_uri = {}
        image_depicts_uris = set()
        institutions_by_uri = {}
        property_definitions_by_uri = {}
        model_uris = set()
        works_by_uri = {}
        referenced_collection_uris = set()
        referenced_institution_uris = set()

        for model in models:
            if isinstance(model, _NamedModel):
                if model.uri not in model_uris:
                    model_uris.add(model.uri)
                elif not isinstance(model, PropertyDefinition):
                    raise ValueError(f"duplicate model URI: {model.uri}")

            if isinstance(model, Collection):
                collection = model
                assert collection.uri not in collections_by_uri
                collections_by_uri[collection.uri] = collection
                referenced_institution_uris.add(collection.institution_uri)
            elif isinstance(model, Image):
                image = model
                image_depicts_uris.add(image.depicts_uri)
            elif isinstance(model, Institution):
                institution = model
                assert institution.uri not in institutions_by_uri
                institutions_by_uri[institution.uri] = institution
            elif isinstance(model, Work):
                work = model
                for collection_uri in work.collection_uris:
                    referenced_collection_uris.add(collection_uri)
                referenced_institution_uris.add(work.institution_uri)
                assert work.uri not in works_by_uri
                works_by_uri[work.uri] = work
            elif isinstance(model, PropertyDefinition):
                property_definition = model
                existing_property_definition = property_definitions_by_uri.get(
                    property_definition.uri
                )
                if existing_property_definition is not None:
                    if property_definition != existing_property_definition:
                        raise ValueError(
                            f"conflicting definition of property {property_definition.uri}: {property_definition} vs. {existing_property_definition}"
                        )
                    self._logger.info(
                        "ignoring exact duplicate property definition for %s",
                        property_definition.uri,
                    )
                    continue  # Don't yield twice
                else:
                    property_definitions_by_uri[
                        property_definition.uri
                    ] = property_definition

            yield model

        def check_uri_references(
            *, referenced_uris: Set[URIRef], universe_uris: Set[URIRef], uri_type: str
        ):
            if universe_uris.intersection(referenced_uris) != len(universe_uris):
                for referenced_uri in referenced_uris:
                    if referenced_uri not in universe_uris:
                        raise ValueError(
                            f"dangling {uri_type} URI reference: {referenced_uri} (universe: {universe_uris})"
                        )
                for universe_uri in universe_uris:
                    if universe_uri not in referenced_uris:
                        self._logger.warning(
                            f"unreferenced {uri_type} URI: %s", universe_uri
                        )

        check_uri_references(
            referenced_uris=referenced_institution_uris,
            universe_uris=set(institutions_by_uri.keys()),
            uri_type="institution",
        )
        check_uri_references(
            referenced_uris=referenced_collection_uris,
            universe_uris=set(collections_by_uri.keys()),
            uri_type="collection",
        )
        # check_uri_references(
        #     referenced_uris=image_depicts_uris,
        #     universe_uris=model_uris,
        #     uri_type="image depicts",
        # )
