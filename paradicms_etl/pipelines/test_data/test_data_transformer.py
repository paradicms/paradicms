from dataclasses import dataclass
from datetime import date, datetime, timedelta
from typing import List, Optional, Tuple, Union

from rdflib import URIRef

from paradicms_etl._transformer import _Transformer
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.object import Object
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.models.property_definitions import PropertyDefinitions
from paradicms_etl.models.rights import Rights


class TestDataTransformer(_Transformer):
    __CREATORS = tuple(f"Creator {i}" for i in range(10))
    __CULTURAL_CONTEXTS = tuple(f"Cultural context {i}" for i in range(10))
    __EXTENTS = tuple(f"Extent {i}" for i in range(10))
    __LANGUAGES = tuple(f"Language {i}" for i in range(10))
    __MATERIALS = tuple(f"Material {i}" for i in range(10))
    __MEDIA = tuple(f"Medium {i}" for i in range(10))
    __PUBLISHERS = tuple(f"Publisher {i}" for i in range(10))
    __RIGHTS_STATEMENT_URI = URIRef("https://rightsstatements.org/page/InC-EDU/1.0/?language=en")
    __SOURCES = tuple(f"Source {i}" for i in range(10))
    __SPATIALS = tuple(f"Spatial {i}" for i in range(10))
    __SUBJECTS = tuple(f"Subject {i}" for i in range(10))
    __TECHNIQUES = tuple(f"Technique {i}" for i in range(10))
    __TEMPORALS = tuple(f"Temporal {i}" for i in range(10))
    __TYPES = tuple(f"Type {i}" for i in range(10))

    def transform(self):
        yield from self.__generate_institutions()
        yield from PropertyDefinitions.as_tuple()

    def __generate_collection_objects(self, *, collection: Collection, institution: Institution):
        for object_i in range(20):  # Objects per page is 20
            yield from self.__generate_object(
                collection_uris=(collection.uri,),
                institution=institution,
                object_i=object_i,
                title=f"{collection.title}Object{object_i}",
                uri=URIRef(f"{collection.uri}/object{object_i}")
            )

    def __generate_institution_collections(self, institution: Institution):
        for collection_i in range(2):
            collection_title = f"{institution.name}Collection{collection_i}"
            collection = \
                Collection(
                    institution_uri=institution.uri,
                    rights=Rights(holder=f"{collection_title} rights holder", statements=(f"{collection_title} rights", self.__RIGHTS_STATEMENT_URI,)),
                    title=collection_title,
                    uri=URIRef(f"{institution.uri}/collection{collection_i}")
                )
            yield from self.__generate_collection_objects(collection=collection, institution=institution)
            yield collection

    def __generate_institutions(self):
        for institution_i in range(2):
            institution_name = f"Institution{institution_i}"
            institution = \
                Institution(
                    name=institution_name,
                    rights=Rights(holder=f"{institution_name} rights holder", statements=(f"{institution_name} rights", self.__RIGHTS_STATEMENT_URI,)),
                    uri=URIRef(f"http://example.com/institution{institution_i}")
                )
            collections = []
            for model in self.__generate_institution_collections(institution=institution):
                if isinstance(model, Collection):
                    collections.append(model)
                yield model
            yield from self.__generate_shared_objects(collections=tuple(collections), institution=institution)
            yield institution

    def __generate_object(self, *, collection_uris: Tuple[URIRef, ...], institution: Institution, object_i: int, title: str, uri: URIRef):
        def object_property_values(all_property_values: List[Union[URIRef, str]], count, property_definition: PropertyDefinition):
            return tuple(Property(key=property_definition.key, value=all_property_values[(object_i + i) % len(all_property_values)])
                         for i in range(count))

        properties = []
        properties.extend(Property(key=PropertyDefinitions.ALTERNATIVE_TITLE.key, value=f"{title} alternative title {i}") for i in range(2))
        properties.extend(object_property_values(self.__CREATORS, 2, PropertyDefinitions.CREATOR))
        properties.extend(object_property_values(self.__CULTURAL_CONTEXTS, 2, PropertyDefinitions.CULTURAL_CONTEXT))
        properties.extend(Property(key=PropertyDefinitions.DATE.key, value=(date(year=2020, month=8, day=9) - timedelta(minutes=(60 * 24 * (object_i + date_i)))).isoformat()) for date_i in range(2))
        properties.extend(Property(key=PropertyDefinitions.DESCRIPTION.key, value=f"{title} description {i}") for i in range(2))
        properties.extend(object_property_values(self.__EXTENTS, 2, PropertyDefinitions.EXTENT))
        properties.extend(Property(key=PropertyDefinitions.IDENTIFIER.key, value=f"{title}Id{i}") for i in range(2))
        properties.extend(object_property_values(self.__LANGUAGES, 2, PropertyDefinitions.LANGUAGE))
        properties.extend(object_property_values(self.__MATERIALS, 2, PropertyDefinitions.MATERIAL))
        properties.extend(object_property_values(self.__MEDIA, 2, PropertyDefinitions.MEDIUM))
        properties.extend(Property(key=PropertyDefinitions.PROVENANCE.key, value=f"{title} provenance {i}") for i in range(2))
        properties.extend(object_property_values(self.__PUBLISHERS, 2, PropertyDefinitions.PUBLISHER))
        properties.extend(object_property_values(self.__SOURCES, 2, PropertyDefinitions.SOURCE))
        properties.extend(object_property_values(self.__SPATIALS, 2, PropertyDefinitions.SPATIAL))
        properties.extend(object_property_values(self.__SUBJECTS, 2, PropertyDefinitions.SUBJECT))
        properties.extend(object_property_values(self.__TECHNIQUES, 2, PropertyDefinitions.TECHNIQUE))
        properties.extend(object_property_values(self.__TEMPORALS, 2, PropertyDefinitions.TEMPORAL))
        properties.extend(object_property_values(self.__TYPES, 2, PropertyDefinitions.TYPE))

        object_ = \
            Object(
                collection_uris=collection_uris,
                institution_uri=institution.uri,
                properties=tuple(properties),
                rights=Rights(holder=f"{title} rights holder", statements=(f"{title} rights", self.__RIGHTS_STATEMENT_URI,)),
                title=title,
                uri=uri
            )
        yield object_
        yield from self.__generate_object_images(institution=institution, object_=object_)

    def __generate_object_images(self, *, institution: Institution, object_: Object):
        for image_i in range(2):
            original = \
                Image(
                    exact_dimensions = ImageDimensions(height=1000, width=1000),
                    institution_uri=institution.uri,
                    object_uri=object_.uri,
                    uri=URIRef(f"https://place-hold.it/1000x1000?text={object_.title}Image{image_i}")
                )
            yield original

            yield \
                Image(
                    exact_dimensions=ImageDimensions(height=75, width=75),
                    institution_uri=institution.uri,
                    object_uri=object_.uri,
                    original_image_uri=original.uri,
                    uri=URIRef(f"https://place-hold.it/75x75?text={object_.title}Image{image_i}")
                )

            yield \
                Image(
                    institution_uri=institution.uri,
                    max_dimensions=ImageDimensions(height=600, width=600),
                    object_uri=object_.uri,
                    original_image_uri=original.uri,
                    uri=URIRef(f"https://place-hold.it/600x600?text={object_.title}Image{image_i}")
                )

    def __generate_shared_objects(self, *, collections: Tuple[Collection, ...], institution: Institution):
        for object_i in range(5):  # Per institution
            yield from \
                self.__generate_object(
                    collection_uris=tuple(map(lambda collection: collection.uri, collections)),
                    institution=institution,
                    object_i=object_i,
                    title=f"{institution.name}SharedObject{object_i}",
                    uri=URIRef(f"{institution.uri}/shared/object{object_i}")
                )
