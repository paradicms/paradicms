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
            collection = \
                Collection(
                    institution_uri=institution.uri,
                    title=f"{institution.name}Collection{collection_i}",
                    uri=URIRef(f"{institution.uri}/collection{collection_i}")
                )
            collection.rights = Rights(holder=f"{collection.title} rights holder", statements=(f"{collection.title} rights", self.__RIGHTS_STATEMENT_URI,))
            yield from self.__generate_collection_objects(collection=collection, institution=institution)
            yield collection

    def __generate_institutions(self):
        for institution_i in range(2):
            institution = Institution(name=f"Institution{institution_i}", uri=URIRef(f"http://example.com/institution{institution_i}"))
            institution.rights = Rights(holder=f"{institution.name} rights holder", statements=(f"{institution.name} rights", self.__RIGHTS_STATEMENT_URI,))
            collections = []
            for model in self.__generate_institution_collections(institution=institution):
                if isinstance(model, Collection):
                    collections.append(model)
                yield model
            yield from self.__generate_shared_objects(collections=tuple(collections), institution=institution)
            yield institution

    def __generate_object(self, *, collection_uris: Tuple[URIRef, ...], institution: Institution, object_i: int, title: str, uri: URIRef):
        def object_property_values(all_property_values: List[Union[URIRef, str]], count):
            return tuple(all_property_values[(object_i + i) % len(all_property_values)] for i in range(count))

        object_ = \
            Object(
                collection_uris=collection_uris,
                institution_uri=institution.uri,
                title=title,
                uri=uri
            )
        object_.alternative_titles.extend(f"{object_.title} alternative title {i}" for i in range(2))
        object_.creators.extend(object_property_values(self.__CREATORS, 2))
        object_.cultural_contexts.extend(object_property_values(self.__CULTURAL_CONTEXTS, 2))
        object_.dates.extend((date(year=2020, month=8, day=9) - timedelta(minutes=(60 * 24 * (object_i + date_i)))).isoformat() for date_i in range(2))
        object_.descriptions.extend(f"{object_.title} description {i}" for i in range(2))
        object_.extents.extend(object_property_values(self.__EXTENTS, 2))
        object_.identifiers.extend(f"{object_.title}Id{i}" for i in range(2))
        object_.languages.extend(object_property_values(self.__LANGUAGES, 2))
        object_.materials.extend(object_property_values(self.__MATERIALS, 2))
        object_.media.extend(object_property_values(self.__MEDIA, 2))
        object_.provenances.extend(f"{object_.title} provenance {i}" for i in range(2))
        object_.publishers.extend(object_property_values(self.__PUBLISHERS, 2))
        object_.rights = Rights(holder=f"{object_.title} rights holder", statements=(f"{object_.title} rights", self.__RIGHTS_STATEMENT_URI,))
        object_.sources.extend(object_property_values(self.__SOURCES, 2))
        object_.spatials.extend(object_property_values(self.__SPATIALS, 2))
        object_.subjects.extend(object_property_values(self.__SUBJECTS, 2))
        object_.techniques.extend(object_property_values(self.__TECHNIQUES, 2))
        object_.temporals.extend(object_property_values(self.__TEMPORALS, 2))
        object_.types.extend(object_property_values(self.__TYPES, 2))
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
