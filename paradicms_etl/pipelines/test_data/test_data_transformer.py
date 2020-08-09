from dataclasses import dataclass
from typing import Optional, Tuple

from rdflib import URIRef

from paradicms_etl._transformer import _Transformer
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.object import Object
from paradicms_etl.models.rights import Rights


class TestDataTransformer(_Transformer):
    __RIGHTS_STATEMENT_URI = URIRef("https://rightsstatements.org/page/InC-EDU/1.0/?language=en")

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
        object_ = \
            Object(
                collection_uris=collection_uris,
                institution_uri=institution.uri,
                title=title,
                uri=uri
            )
        object_.descriptions.append(f"{object_.title} description")
        object_.subjects.append(f"{object_.title} subject")
        object_.rights = Rights(holder=f"{object_.title} rights holder", statements=(f"{object_.title} rights", self.__RIGHTS_STATEMENT_URI,))
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
