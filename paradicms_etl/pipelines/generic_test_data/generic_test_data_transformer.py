from rdflib import URIRef

from paradicms_etl._transformer import _Transformer
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.object import Object
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.user import User
from paradicms_etl.namespace import CMS


class GenericTestDataTransformer(_Transformer):
    def transform(self):
        institution = Institution(name="Test institution", owner_uri=CMS.public, uri=URIRef("http://example.com/institution"))
        rights_statement_uri = URIRef("https://rightsstatements.org/page/InC-EDU/1.0/?language=en")
        institution.rights = Rights(holder="Institution rights holder", statements=("Institution rights", rights_statement_uri,))

        collection = Collection(title="Test collection", uri=URIRef("http://example.com/collection"))
        collection.rights = Rights(holder="Collection rights holder", statements=("Collection rights", rights_statement_uri,))

        for object_i in range(100): # Objects per page is 20
            object_ = Object(title=f"Test object {object_i}", uri=URIRef(f"http://example.com/object{object_i}"))
            object_.descriptions.append(f"Test description {object_i}")
            object_.subjects.append(f"Test subject {object_i}")
            object_.rights = Rights(holder="Object rights holder", statements=("Object rights", rights_statement_uri,))
            for image_i in range(3):
                original = Image(uri=URIRef(f"https://place-hold.it/1000x1000?text=Object{object_i}Image{image_i}"))
                original.height = 1000
                original.width = 1000

                square_thumbnail = Image(uri=URIRef(f"https://place-hold.it/75x75?text=Object{object_i}Image{image_i}"))
                square_thumbnail.height = 75
                square_thumbnail.width = 75
                yield square_thumbnail
                original.derived_image_uris.append(square_thumbnail.uri)

                thumbnail = Image(uri=URIRef(f"https://place-hold.it/600x600?text=Object{object_i}Image{image_i}"))
                thumbnail.max_height = 600
                thumbnail.max_width = 600
                yield thumbnail
                original.derived_image_uris.append(thumbnail.uri)

                yield original
                object_.image_uris.append(original.uri)
            yield object_
            collection.object_uris.append(object_.uri)

        yield collection

        institution.collection_uris.append(collection.uri)
        yield institution

        yield \
            User(
                email="test@example.com",
                name="Test user",
                uri=URIRef("http://example.com/user")
            )
