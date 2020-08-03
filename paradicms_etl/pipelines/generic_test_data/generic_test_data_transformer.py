from rdflib import URIRef

from paradicms_etl._transformer import _Transformer
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.object import Object
from paradicms_etl.models.rights import Rights


class GenericTestDataTransformer(_Transformer):
    def transform(self):
        institution = Institution(name="Test institution", uri=URIRef("http://example.com/institution"))
        rights_statement_uri = URIRef("https://rightsstatements.org/page/InC-EDU/1.0/?language=en")
        institution.rights = Rights(holder="Institution rights holder", statements=("Institution rights", rights_statement_uri,))
        yield institution

        collection = \
            Collection(
                institution_uri=institution.uri,
                title="Test collection",
                uri=URIRef("http://example.com/collection")
            )
        collection.rights = Rights(holder="Collection rights holder", statements=("Collection rights", rights_statement_uri,))
        yield collection

        for object_i in range(100): # Objects per page is 20
            object_ = \
                Object(
                    collection_uris=(collection.uri,),
                    institution_uri=institution.uri,
                    title=f"Test object {object_i}",
                    uri=URIRef(f"http://example.com/object{object_i}")
                )
            object_.descriptions.append(f"Test description {object_i}")
            object_.subjects.append(f"Test subject {object_i}")
            object_.rights = Rights(holder="Object rights holder", statements=("Object rights", rights_statement_uri,))
            for image_i in range(3):
                original = Image(uri=URIRef(f"https://place-hold.it/1000x1000?text=Object{object_i}Image{image_i}"))
                original.exact_dimensions = ImageDimensions(height=1000, width=1000)

                square_thumbnail = Image(uri=URIRef(f"https://place-hold.it/75x75?text=Object{object_i}Image{image_i}"))
                square_thumbnail.exact_dimensions = ImageDimensions(height=75, width=75)
                yield square_thumbnail
                original.derived_image_uris.append(square_thumbnail.uri)

                thumbnail = Image(uri=URIRef(f"https://place-hold.it/600x600?text=Object{object_i}Image{image_i}"))
                thumbnail.max_dimensions = ImageDimensions(height=600, width=600)
                yield thumbnail
                original.derived_image_uris.append(thumbnail.uri)

                yield original
                object_.image_uris.append(original.uri)
            yield object_
