from datetime import date, timedelta
from pathlib import Path
from typing import List, Tuple, Union

from rdflib import URIRef

from paradicms_etl._pipeline import _Pipeline
from paradicms_etl._transformer import _Transformer
from paradicms_etl.extractors.nop_extractor import NopExtractor
from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.gui_metadata import GuiMetadata
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.object import Object
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.models.dublin_core_property_definitions import (
    DublinCorePropertyDefinitions,
)
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.vra_core_property_definitions import (
    VraCorePropertyDefinitions,
)


class TestDataPipeline(_Pipeline):
    __ID = "test_data"

    class __TestDataTransformer(_Transformer):
        __CREATORS = tuple(f"Creator {i}" for i in range(10))
        __CULTURAL_CONTEXTS = tuple(f"Cultural context {i}" for i in range(10))
        __EXTENTS = tuple(f"Extent {i}" for i in range(10))
        __LANGUAGES = tuple(f"Language {i}" for i in range(10))
        __LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae."
        __MATERIALS = tuple(f"Material {i}" for i in range(10))
        __MEDIA = tuple(f"Medium {i}" for i in range(10))
        __PUBLISHERS = tuple(f"Publisher {i}" for i in range(10))
        __SOURCES = tuple(f"Source {i}" for i in range(10))
        __SPATIALS = tuple(f"Spatial {i}" for i in range(10))
        __SUBJECTS = tuple(f"Subject {i}" for i in range(10))
        __TECHNIQUES = tuple(f"Technique {i}" for i in range(10))
        __TEMPORALS = tuple(f"Temporal {i}" for i in range(10))
        __TYPES = tuple(f"Type {i}" for i in range(10))

        def transform(self):
            yield from CreativeCommonsLicenses.as_tuple()
            yield from DublinCorePropertyDefinitions.as_tuple()
            yield from RightsStatementsDotOrgRightsStatements.as_tuple()
            yield from VraCorePropertyDefinitions.as_tuple()

            yield GuiMetadata(document_title="Test data", navbar_title="Test data")

            yield from self.__generate_institutions()

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
            rights = Rights(
                holder=f"{institution.name} rights holder",
                statement=RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
            )

            for image_i in range(2):
                original = Image.create(
                    depicts_uri=depicts_uri,
                    exact_dimensions=ImageDimensions(height=1000, width=1000),
                    institution_uri=institution.uri,
                    rights=rights,
                    uri=URIRef(
                        f"https://place-hold.it/1000x1000?text={text_prefix}Image{image_i}"
                    ),
                )
                yield original

                for thumbnail_dimensions in (
                    ImageDimensions(75, 75),
                    ImageDimensions(600, 600),
                ):
                    yield Image.create(
                        depicts_uri=depicts_uri,
                        exact_dimensions=thumbnail_dimensions,
                        institution_uri=institution.uri,
                        original_image_uri=original.uri,
                        rights=rights,
                        uri=URIRef(
                            f"https://place-hold.it/{thumbnail_dimensions.width}x{thumbnail_dimensions.height}?text={text_prefix}Image{image_i}"
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
                        statement=RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
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
                    DublinCorePropertyDefinitions.ALTERNATIVE_TITLE,
                    f"{title} alternative title {i}",
                )
                for i in range(2)
            )
            properties.extend(
                object_property_values(
                    self.__CREATORS, 2, DublinCorePropertyDefinitions.CREATOR
                )
            )
            properties.extend(
                object_property_values(
                    self.__CULTURAL_CONTEXTS,
                    2,
                    VraCorePropertyDefinitions.CULTURAL_CONTEXT,
                )
            )
            properties.extend(
                Property(
                    DublinCorePropertyDefinitions.DATE,
                    (
                        date(year=2020, month=8, day=9)
                        - timedelta(minutes=(60 * 24 * (object_i + date_i)))
                    ).isoformat(),
                )
                for date_i in range(2)
            )
            properties.append(
                Property(
                    DublinCorePropertyDefinitions.DESCRIPTION,
                    self.__LOREM_IPSUM,
                )
            )
            properties.extend(
                Property(
                    DublinCorePropertyDefinitions.DESCRIPTION,
                    f"{title} description {i}",
                )
                for i in range(2)
            )
            properties.extend(
                object_property_values(
                    self.__EXTENTS, 2, DublinCorePropertyDefinitions.EXTENT
                )
            )
            properties.extend(
                Property(DublinCorePropertyDefinitions.IDENTIFIER, f"{title}Id{i}")
                for i in range(2)
            )
            properties.extend(
                object_property_values(
                    self.__LANGUAGES, 2, DublinCorePropertyDefinitions.LANGUAGE
                )
            )
            properties.extend(
                object_property_values(
                    self.__MATERIALS, 2, VraCorePropertyDefinitions.MATERIAL
                )
            )
            properties.extend(
                object_property_values(
                    self.__MEDIA, 2, DublinCorePropertyDefinitions.MEDIUM
                )
            )
            properties.extend(
                Property(
                    DublinCorePropertyDefinitions.PROVENANCE, f"{title} provenance {i}"
                )
                for i in range(2)
            )
            properties.extend(
                object_property_values(
                    self.__PUBLISHERS, 2, DublinCorePropertyDefinitions.PUBLISHER
                )
            )
            properties.extend(
                object_property_values(
                    self.__SOURCES, 2, DublinCorePropertyDefinitions.SOURCE
                )
            )
            properties.extend(
                object_property_values(
                    self.__SPATIALS, 2, DublinCorePropertyDefinitions.SPATIAL
                )
            )
            properties.extend(
                object_property_values(
                    self.__SUBJECTS, 2, DublinCorePropertyDefinitions.SUBJECT
                )
            )
            properties.extend(
                object_property_values(
                    self.__TECHNIQUES, 2, VraCorePropertyDefinitions.TECHNIQUE
                )
            )
            properties.extend(
                object_property_values(
                    self.__TEMPORALS, 2, DublinCorePropertyDefinitions.TEMPORAL
                )
            )
            properties.extend(
                object_property_values(
                    self.__TYPES, 2, DublinCorePropertyDefinitions.TYPE
                )
            )

            object_ = Object(
                abstract=self.__LOREM_IPSUM,
                collection_uris=collection_uris,
                institution_uri=institution.uri,
                properties=tuple(properties),
                rights=Rights(
                    holder=f"{title} rights holder",
                    statement=RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
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
                    RdfFileLoader(
                        file_path=root_dir_path
                        / "integration"
                        / "material-ui-union"
                        / "cypress"
                        / "fixtures"
                        / "data.ttl",
                        pipeline_id=self.__ID,
                    ),
                    RdfFileLoader(
                        file_path=root_dir_path
                        / "etl"
                        / "data"
                        / "test_data"
                        / "loaded"
                        / "data.ttl",
                        pipeline_id=self.__ID,
                    ),
                ),
                pipeline_id=self.__ID,
            ),
            transformer=self.__TestDataTransformer(pipeline_id=self.__ID),
            **kwds,
        )


if __name__ == "__main__":
    TestDataPipeline.main()
