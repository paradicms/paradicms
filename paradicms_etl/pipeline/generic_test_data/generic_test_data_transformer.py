from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF

from paradicms_etl.model.collection import Collection
from paradicms_etl.model.image import Image
from paradicms_etl.model.institution import Institution
from paradicms_etl.model.object import Object
from paradicms_etl.model.user import User
from paradicms_etl.namespace import CMS
from paradicms_etl.pipeline._transformer import _Transformer


class GenericTestDataTransformer(_Transformer):
    def transform(self):
        graph = Graph()

        institution = Institution(graph=graph, uri=URIRef("http://example.com/institution"))
        institution.name = "Test institution"
        institution.owner = CMS.public
        rights_uri = URIRef("https://rightsstatements.org/page/InC-EDU/1.0/?language=en")
        institution.resource.add(DCTERMS.rights, rights_uri)
        institution.resource.add(DCTERMS.rights, Literal("Institution rights"))
        institution.resource.add(DCTERMS.rightsHolder, Literal("Institution rights holder"))

        collection = Collection(graph=graph, uri=URIRef("http://example.com/collection"))
        collection.owner = CMS.inherit
        collection.title = "Test collection"
        collection.resource.add(DCTERMS.rights, rights_uri)
        collection.resource.add(DCTERMS.rights, Literal("Collection rights"))
        collection.resource.add(DCTERMS.rightsHolder, Literal("Collection rights holder"))

        for object_i in range(100): # Objects per page is 20
            object_ = Object(graph=graph, uri=URIRef(f"http://example.com/object{object_i}"))
            object_.owner = CMS.inherit
            object_.resource.add(DCTERMS.description, Literal(f"Test description {object_i}"))
            object_.resource.add(DCTERMS.subject, Literal(f"Test subject {object_i}"))
            object_.resource.add(DCTERMS.rights, rights_uri)
            object_.resource.add(DCTERMS.rights, Literal("Object rights"))
            object_.resource.add(DCTERMS.rightsHolder, Literal("Object rights holder"))
            for image_i in range(3):
                image = Image(graph=graph, uri=URIRef(f"https://place-hold.it/1000x1000?text=Object{object_i}Image{image_i}"))
                image.height = 1000
                image.width = 1000
                object_.resource.add(FOAF.depiction, image.uri)
                square_thumbnail = Image(graph=graph, uri=URIRef(f"https://place-hold.it/75x75?text=Object{object_i}Image{image_i}"))
                square_thumbnail.height = 75
                square_thumbnail.width = 75
                image.resource.add(FOAF.thumbnail, square_thumbnail.uri)
                thumbnail = Image(graph=graph, uri=URIRef(f"https://place-hold.it/600x600?text=Object{object_i}Image{image_i}"))
                thumbnail.max_height = 600
                thumbnail.max_width = 600
                image.resource.add(FOAF.thumbnail, thumbnail.uri)
            object_.title = f"Test object {object_i}"
            collection.add_object(object_)

        institution.add_collection(collection)

        user = User(graph=graph, uri=URIRef("http://example.com/user"))
        user.email = "test@example.com"
        user.name = "Test user"

        return graph
