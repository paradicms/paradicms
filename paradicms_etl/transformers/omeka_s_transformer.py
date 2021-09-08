import json
from typing import Dict, Tuple

from rdflib import Namespace, RDF, URIRef
from rdflib.namespace import DCTERMS, FOAF
from rdflib.resource import Resource

from paradicms_etl._transformer import _Transformer
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.work import Work
from paradicms_etl.namespace import CMS, PROV

# Omeka namespace
O = Namespace("http://omeka.org/s/vocabs/o#")


class OmekaSTransformer(_Transformer):
    def __init__(
        self, *, square_thumbnail_height_px: int, square_thumbnail_width_px: int, **kwds
    ):
        _Transformer.__init__(self, **kwds)
        self.__institution_kwds = kwds
        self.__square_thumbnail_height_px = square_thumbnail_height_px
        self.__square_thumbnail_width_px = square_thumbnail_width_px

    def transform(self, *, items, item_sets, media):
        graph = self._new_graph

        graph.parse(data=json.dumps(items), format="json-ld")
        graph.parse(data=json.dumps(item_sets), format="json-ld")
        graph.parse(data=json.dumps(media), format="json-ld")

        institution = self._transform_institution_from_arguments(
            graph=graph, **self.__institution_kwds
        )

        collections_by_id = {}
        for item_set_uri in graph.subjects(RDF.type, O.ItemSet):
            item_set_resource = graph.resource(item_set_uri)
            item_set_id = item_set_resource.value(O.id).toPython()
            assert isinstance(item_set_id, int)
            collection = self.__transform_item_set(item_set=item_set_resource)
            collections_by_id[item_set_id] = collection

        media_by_item_id = {}
        for media_uri in graph.subjects(RDF.type, O.Media):
            media_resource = graph.resource(media_uri)
            item_resource = media_resource.value(O.item)
            item_id = item_resource.value(O.id).toPython()
            assert isinstance(item_id, int)
            media_by_item_id.setdefault(item_id, []).append(media_resource)

        for item_uri in graph.subjects(RDF.type, O.Item):
            item_resource = graph.resource(item_uri)
            if not item_resource.value(O.is_public).toPython():
                # Will still have the data, but won't be visible because it won't have the rdf:type CMS:Work
                continue
            work_ = self.__transform_item(item_resource, media_by_item_id)
            for item_set_resource in item_resource.objects(O.item_set):
                item_set_id = item_set_resource.value(O.id).toPython()
                collections_by_id[item_set_id].add_work(work_)

        for collection in collections_by_id.values():
            institution.add_collection(collection)

        return graph

    def __transform_item(
        self, item: Resource, media_by_item_id: Dict[int, Resource]
    ) -> Work:
        item_id = item.value(O.id).toPython()
        work_ = Work(resource=item)
        work_.owner = CMS.inherit
        for media in media_by_item_id.get(item_id, []):
            original_image, thumbnail_image = self.__transform_media(media)
            if not original_image:
                continue
            original_image.resource.add(FOAF.depicts, work_.uri)
            work_.resource.add(FOAF.depiction, original_image.uri)
        return work_

    def __transform_item_set(self, item_set: Resource) -> Collection:
        collection = Collection(resource=item_set)
        collection.owner = CMS.inherit
        return collection

    def __transform_media(self, media: Resource) -> Tuple[Image, ...]:
        if not media.value(O.media_type).toPython().startswith("image/"):
            return None, None
        if not media.value(O.is_public).toPython():
            return None, None

        original = Image.from_fields(
            graph=media.graph, uri=URIRef(media.value(O.original_url))
        )

        # thumbnail_urls is a JSON payload that rdflib can't read
        # Reconstruct the square thumbnail URL from the original
        thumbnail = Image.from_fields(
            graph=media.graph,
            uri=URIRef(str(original.uri).replace("/files/original/", "/files/square/")),
        )
        thumbnail.height = self.__square_thumbnail_height_px
        thumbnail.width = self.__square_thumbnail_width_px
        thumbnail.resource.add(PROV.wasDerivedFrom, original.uri)
        original.resource.add(FOAF.thumbnail, thumbnail.uri)

        for image in (original, thumbnail):
            image.resource.add(DCTERMS.created, media.value(O.created))
            image.resource.add(DCTERMS.modified, media.value(O.modified))

        return original, thumbnail
