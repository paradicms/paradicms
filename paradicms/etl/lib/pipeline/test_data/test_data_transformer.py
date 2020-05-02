from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF

from paradicms.etl.lib.model.collection import Collection
from paradicms.etl.lib.model.image import Image
from paradicms.etl.lib.model.institution import Institution
from paradicms.etl.lib.model.object import Object
from paradicms.etl.lib.model.user import User
from paradicms.etl.lib.namespace import CMS
from paradicms.etl.lib.pipeline._transformer import _Transformer


class TestDataTransformer(_Transformer):
    def transform(self):
        graph = Graph()

        institution = Institution(graph=graph, uri=URIRef("http://example.com/institution"))
        institution.name = "Test institution"
        institution.owner = CMS.public

        collection = Collection(graph=graph, uri=URIRef("http://example.com/collection"))
        collection.owner = CMS.inherit
        collection.title = "Test collection"

        for object_i in range(10):
            object_ = Object(graph=graph, uri=URIRef(f"http://example.com/object{object_i}"))
            object_.owner = CMS.inherit
            object_.resource.add(DCTERMS.subject, Literal(f"Test subject {object_i}"))
            for image_i in range(3):
                image = Image(graph=graph, uri=URIRef(f"http://example.com/object{object_i}/image{image_i}"))
                image.height = 1000
                image.width = 1000
                object_.resource.add(FOAF.depiction, image.uri)
                square_thumbnail = Image(graph=graph, uri=URIRef(f"http://example.com/object{object_i}/image{image_i}/square_thumbnail"))
                square_thumbnail.height = 75
                square_thumbnail.width = 75
                image.resource.add(FOAF.thumbnail, square_thumbnail.uri)
                thumbnail = Image(graph=graph, uri=URIRef(f"http://example.com/object{object_i}/image{image_i}/thumbnail"))
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
