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
        yield from self.__transform_institutions()

    def __transform_collection_objects(self, *, collection: Collection, collection_i: int, institution: Institution, institution_i: int):
        for object_i in range(25):  # Objects per page is 20
            object_ = \
                Object(
                    collection_uris=(collection.uri,),
                    institution_uri=institution.uri,
                    title=f"{collection.title} object {object_i}",
                    uri=URIRef(f"http://example.com/institution{institution_i}/collection{collection_i}/object{object_i}")
                )
            object_.descriptions.append(f"{object_.title} description")
            object_.subjects.append(f"{object_.title} subject")
            object_.rights = Rights(holder=f"{object_.title} rights holder", statements=(f"{object_.title} rights", self.__RIGHTS_STATEMENT_URI,))
            yield from self.__transform_object_images(collection_i=collection_i, institution_i=institution_i, object_=object_, object_i=object_i)
            yield object_

    def __transform_institution_collections(self, institution: Institution, institution_i: int):
        for collection_i in range(2):
            collection = \
                Collection(
                    institution_uri=institution.uri,
                    title=f"{institution.name} collection {collection_i}",
                    uri=URIRef(f"http://example.com/institution{institution_i}/collection{collection_i}")
                )
            collection.rights = Rights(holder=f"{collection.title} rights holder", statements=(f"{collection.title} rights", self.__RIGHTS_STATEMENT_URI,))
            yield from self.__transform_collection_objects(collection=collection, collection_i=collection_i, institution=institution, institution_i=institution_i)
            yield collection

    def __transform_institutions(self):
        for institution_i in range(2):
            institution = Institution(name=f"Institution {institution_i}", uri=URIRef(f"http://example.com/institution{institution_i}"))
            institution.rights = Rights(holder=f"{institution.name} rights holder", statements=(f"{institution.name} rights", self.__RIGHTS_STATEMENT_URI,))
            yield from self.__transform_institution_collections(institution=institution, institution_i=institution_i)
            yield institution

    def __transform_object_images(self, *, collection_i: int, institution_i: int, object_: Object, object_i: int):
        for image_i in range(2):
            original = Image(uri=URIRef(f"https://place-hold.it/1000x1000?text=Institution{institution_i}Collection{collection_i}Object{object_i}Image{image_i}"))
            original.exact_dimensions = ImageDimensions(height=1000, width=1000)

            square_thumbnail = Image(uri=URIRef(f"https://place-hold.it/75x75?text=Institution{institution_i}Collection{collection_i}Object{object_i}Image{image_i}"))
            square_thumbnail.exact_dimensions = ImageDimensions(height=75, width=75)
            yield square_thumbnail
            original.derived_image_uris.append(square_thumbnail.uri)

            thumbnail = Image(uri=URIRef(f"https://place-hold.it/600x600?text=Institution{institution_i}Collection{collection_i}Object{object_i}Image{image_i}"))
            thumbnail.max_dimensions = ImageDimensions(height=600, width=600)
            yield thumbnail
            original.derived_image_uris.append(thumbnail.uri)

            yield original
            object_.image_uris.append(original.uri)
