from datetime import date, timedelta
from pathlib import Path
from typing import List, Tuple, Union

from rdflib import URIRef

from paradicms_etl._pipeline import _Pipeline
from paradicms_etl._transformer import _Transformer
from paradicms_etl.extractors.nop_extractor import NopExtractor
from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.json_directory_loader import JsonDirectoryLoader
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.object import Object
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.models.property_definitions import PropertyDefinitions
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_value import RightsValue


class TestDataPipeline(_Pipeline):
    __ID = "test_data"

    class __TestDataTransformer(_Transformer):
        __CREATORS = tuple(f"Creator {i}" for i in range(10))
        __CULTURAL_CONTEXTS = tuple(f"Cultural context {i}" for i in range(10))
        __EXTENTS = tuple(f"Extent {i}" for i in range(10))
        __LANGUAGES = tuple(f"Language {i}" for i in range(10))
        __MATERIALS = tuple(f"Material {i}" for i in range(10))
        __MEDIA = tuple(f"Medium {i}" for i in range(10))
        __PUBLISHERS = tuple(f"Publisher {i}" for i in range(10))
        __RIGHTS_STATEMENT_URI = URIRef(
            "https://rightsstatements.org/page/InC-EDU/1.0/?language=en"
        )
        __SOURCES = tuple(f"Source {i}" for i in range(10))
        __SPATIALS = tuple(f"Spatial {i}" for i in range(10))
        __SUBJECTS = tuple(f"Subject {i}" for i in range(10))
        __TECHNIQUES = tuple(f"Technique {i}" for i in range(10))
        __TEMPORALS = tuple(f"Temporal {i}" for i in range(10))
        __TYPES = tuple(f"Type {i}" for i in range(10))

        def transform(self):
            yield from self.__generate_institutions()
            yield from PropertyDefinitions.as_tuple()

        def __generate_collection_objects(
            self, *, collection: Collection, institution: Institution
        ):
            for object_i in range(20):  # Objects per page is 20
                yield from self.__generate_object(
                    collection_uris=(collection.uri,),
                    institution=institution,
                    object_i=object_i,
                    title=f"{collection.title}Object{object_i}",
                    uri=URIRef(f"{collection.uri}/object{object_i}"),
                )

        def __generate_images(
            self, *, depicts_uri: URIRef, institution: Institution, text_prefix: str
        ):
            for image_i in range(2):
                original = Image(
                    depicts_uri=depicts_uri,
                    exact_dimensions=ImageDimensions(height=1000, width=1000),
                    institution_uri=institution.uri,
                    uri=URIRef(
                        f"https://place-hold.it/1000x1000?text={text_prefix}Image{image_i}"
                    ),
                )
                yield original

                yield Image(
                    depicts_uri=depicts_uri,
                    exact_dimensions=ImageDimensions(height=75, width=75),
                    institution_uri=institution.uri,
                    original_image_uri=original.uri,
                    uri=URIRef(
                        f"https://place-hold.it/75x75?text={text_prefix}Image{image_i}"
                    ),
                )

                yield Image(
                    depicts_uri=depicts_uri,
                    institution_uri=institution.uri,
                    max_dimensions=ImageDimensions(height=600, width=600),
                    original_image_uri=original.uri,
                    uri=URIRef(
                        f"https://place-hold.it/600x600?text={text_prefix}Image{image_i}"
                    ),
                )

        def __generate_institution_collections(self, institution: Institution):
            for collection_i in range(2):
                collection_title = f"{institution.name}Collection{collection_i}"
                collection = Collection(
                    institution_uri=institution.uri,
                    title=collection_title,
                    uri=URIRef(f"{institution.uri}/collection{collection_i}"),
                )
                yield collection

                if collection_i > 0:
                    yield from self.__generate_images(
                        depicts_uri=collection.uri,
                        institution=institution,
                        text_prefix=collection.title,
                    )
                # For collection 0, force the GUI to use an object image

                yield from self.__generate_collection_objects(
                    collection=collection, institution=institution
                )

        def __generate_institutions(self):
            for institution_i in range(2):
                institution_name = f"Institution{institution_i}"
                institution = Institution(
                    name=institution_name,
                    rights=Rights(
                        holder=f"{institution_name} rights holder",
                        statement=RightsValue(
                            text=f"{institution_name} rights",
                            uri=self.__RIGHTS_STATEMENT_URI,
                        ),
                    ),
                    uri=URIRef(f"http://example.com/institution{institution_i}"),
                )
                yield institution

                yield from self.__generate_images(
                    depicts_uri=institution.uri,
                    institution=institution,
                    text_prefix=institution.name,
                )

                collections = []
                for model in self.__generate_institution_collections(
                    institution=institution
                ):
                    if isinstance(model, Collection):
                        collections.append(model)
                    yield model

                yield from self.__generate_shared_objects(
                    collections=tuple(collections), institution=institution
                )

        def __generate_object(
            self,
            *,
            collection_uris: Tuple[URIRef, ...],
            institution: Institution,
            object_i: int,
            title: str,
            uri: URIRef,
        ):
            def object_property_values(
                all_property_values: List[Union[URIRef, str]],
                count,
                property_definition: PropertyDefinition,
            ):
                return tuple(
                    Property(
                        property_definition,
                        all_property_values[(object_i + i) % len(all_property_values)],
                    )
                    for i in range(count)
                )

            properties = []
            properties.extend(
                Property(
                    PropertyDefinitions.ALTERNATIVE_TITLE,
                    f"{title} alternative title {i}",
                )
                for i in range(2)
            )
            properties.extend(
                object_property_values(self.__CREATORS, 2, PropertyDefinitions.CREATOR)
            )
            properties.extend(
                object_property_values(
                    self.__CULTURAL_CONTEXTS, 2, PropertyDefinitions.CULTURAL_CONTEXT
                )
            )
            properties.extend(
                Property(
                    PropertyDefinitions.DATE,
                    (
                        date(year=2020, month=8, day=9)
                        - timedelta(minutes=(60 * 24 * (object_i + date_i)))
                    ).isoformat(),
                )
                for date_i in range(2)
            )
            properties.extend(
                Property(PropertyDefinitions.DESCRIPTION, f"{title} description {i}",)
                for i in range(2)
            )
            properties.extend(
                object_property_values(self.__EXTENTS, 2, PropertyDefinitions.EXTENT)
            )
            properties.extend(
                Property(PropertyDefinitions.IDENTIFIER, f"{title}Id{i}")
                for i in range(2)
            )
            properties.extend(
                object_property_values(
                    self.__LANGUAGES, 2, PropertyDefinitions.LANGUAGE
                )
            )
            properties.extend(
                object_property_values(
                    self.__MATERIALS, 2, PropertyDefinitions.MATERIAL
                )
            )
            properties.extend(
                object_property_values(self.__MEDIA, 2, PropertyDefinitions.MEDIUM)
            )
            properties.extend(
                Property(PropertyDefinitions.PROVENANCE, f"{title} provenance {i}")
                for i in range(2)
            )
            properties.extend(
                object_property_values(
                    self.__PUBLISHERS, 2, PropertyDefinitions.PUBLISHER
                )
            )
            properties.extend(
                object_property_values(self.__SOURCES, 2, PropertyDefinitions.SOURCE)
            )
            properties.extend(
                object_property_values(self.__SPATIALS, 2, PropertyDefinitions.SPATIAL)
            )
            properties.extend(
                object_property_values(self.__SUBJECTS, 2, PropertyDefinitions.SUBJECT)
            )
            properties.extend(
                object_property_values(
                    self.__TECHNIQUES, 2, PropertyDefinitions.TECHNIQUE
                )
            )
            properties.extend(
                object_property_values(
                    self.__TEMPORALS, 2, PropertyDefinitions.TEMPORAL
                )
            )
            properties.extend(
                object_property_values(self.__TYPES, 2, PropertyDefinitions.TYPE)
            )

            object_ = Object(
                abstract=f"{title} abstract",
                collection_uris=collection_uris,
                institution_uri=institution.uri,
                properties=tuple(properties),
                rights=Rights(
                    holder=f"{title} rights holder",
                    statement=RightsValue(
                        text=f"{title} rights", uri=self.__RIGHTS_STATEMENT_URI
                    ),
                ),
                title=title,
                uri=uri,
            )
            yield object_

            yield from self.__generate_images(
                depicts_uri=object_.uri,
                institution=institution,
                text_prefix=object_.title,
            )

        def __generate_shared_objects(
            self, *, collections: Tuple[Collection, ...], institution: Institution
        ):
            for object_i in range(5):  # Per institution
                yield from self.__generate_object(
                    collection_uris=tuple(
                        map(lambda collection: collection.uri, collections)
                    ),
                    institution=institution,
                    object_i=object_i,
                    title=f"{institution.name}SharedObject{object_i}",
                    uri=URIRef(f"{institution.uri}/shared/object{object_i}"),
                )

    def __init__(self, **kwds):
        root_dir_path = Path(__file__).absolute().parent.parent.parent.parent
        _Pipeline.__init__(
            self,
            extractor=NopExtractor(pipeline_id=self.__ID),
            id=self.__ID,
            loader=CompositeLoader(
                loaders=(
                    JsonDirectoryLoader(
                        clean=True,
                        pipeline_id=self.__ID,
                        loaded_data_dir_path=root_dir_path
                        / "gui"
                        / "union"
                        / "data"
                        / "test",
                    ),
                    JsonDirectoryLoader(
                        clean=True,
                        pipeline_id=self.__ID,
                        loaded_data_dir_path=root_dir_path
                        / "integration"
                        / "union"
                        / "cypress"
                        / "fixtures",
                    ),
                ),
                pipeline_id=self.__ID,
            ),
            transformer=self.__TestDataTransformer(pipeline_id=self.__ID),
            **kwds,
        )


if __name__ == "__main__":
    TestDataPipeline.main()
