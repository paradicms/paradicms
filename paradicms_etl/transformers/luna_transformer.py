from typing import Dict, Generator, List, Optional, Tuple

from rdflib import URIRef

from paradicms_etl._model import _Model
from paradicms_etl._transformer import _Transformer
from paradicms_etl.extractors.luna_extractor import LunaExtractor
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.object import Object
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definitions import PropertyDefinitions
from paradicms_etl.models.rights import Rights


class LunaTransformer(_Transformer):
    # __OBJECT_FIELD_PROPERTY_DEFINITIONS = {
    #     "Reproduction Record ID": None,
    #     "Work Class": None,
    #     "Work Record ID": None,
    # }

    # https://doc.lunaimaging.com/display/V71D/Credentials+and+Access+Permissions
    # Size 0    up to 96 pixels on long side
    # Size 1	up to 192 pixels on long side
    # Size 2	up to 384 pixels on long side
    # Size 3	up to 768 pixels on long side
    # Size 4	up to 1536 pixels on long side
    # Size 5	up to 3072 pixels on long side
    # Size 6	up to 6144 pixels on long side
    # Size 7	up to 12288 pixels on long side
    # Size 8	up to 24576 pixels on long side

    __URL_SIZES = (96, 192, 384, 768, 1536, 3072, 6144, 12288, 24576)

    def transform(self, base_url: str, search_results):
        yield from PropertyDefinitions.as_tuple()

        institution = self.__transform_institution(
            base_url=base_url, institution_name=search_results["institutionName"]
        )
        yield institution

        collections_by_id = {}
        collections_by_uri = {}
        for collection_id, collection_name in search_results["collections"].items():
            collection = self._transform_collection(
                base_url=base_url,
                id_=collection_id,
                institution=institution,
                name=collection_name,
            )
            collections_by_id[collection_id] = collection
            collections_by_uri[collection.uri] = collection
            # Don't yield the collection until we see an object with it

        yielded_collection_uris = set()
        for luna_object in search_results["results"]:
            for model in self._transform_object(
                collections_by_id=collections_by_id,
                institution=institution,
                luna_object=luna_object,
            ):
                yield model
                if not isinstance(model, Object):
                    continue
                for object_collection_uri in model.collection_uris:
                    if object_collection_uri in yielded_collection_uris:
                        continue
                    collection = collections_by_uri[object_collection_uri]
                    yield collection
                    yielded_collection_uris.add(collection_id.uri)

    def _transform_collection(
        self, *, base_url: str, id_: str, institution: Institution, name: str
    ) -> Collection:
        return Collection(
            institution_uri=institution.uri,
            title=name,
            uri=URIRef(
                LunaExtractor.create_search_url(base_url=base_url, query={"lc": id_})
            ),
        )

    def _transform_institution(
        self, *, base_url: str, institution_name: str
    ) -> Institution:
        return Institution(name=institution_name, uri=URIRef(base_url))

    def _transform_object(
        self,
        *,
        collections_by_id: Dict[str, Collection],
        institution: Institution,
        luna_object,
    ) -> Generator[_Model, None, None]:
        id_ = luna_object["id"].strip()
        assert id_

        collection_uris = ()
        for collection_id, collection in collections_by_id.items():
            if id_.startswith(collection_id):
                collection_uris = (collection.uri,)
                break

        display_name = luna_object["displayName"].strip()
        assert display_name

        description = luna_object["description"].strip()
        if not description:
            description = None

        media_type = luna_object["mediaType"]
        assert media_type == "Image", media_type

        properties = self._transform_object_field_values(luna_object["fieldValues"])

        object_ = Object(
            abstract=description,
            collection_uris=collection_uris,
            rights=Rights.from_properties(properties),
            title=display_name,
            uri=URIRef(luna_object["iifManifest"]),
        )
        yield object_

        url_size_i = 0
        while True:
            try:
                image_url = luna_object[f"urlSize{url_size_i}"]
            except KeyError:
                break
            image_dimension_max = self.__URL_SIZES[url_size_i]
            yield Image.create(
                depicts_uri=object_.uri,
                institution_uri=institution.uri,
                max_dimensions=ImageDimensions(
                    height=image_dimension_max,
                    width=image_dimension_max,
                ),
                uri=URIRef(image_url),
            )

    def _transform_object_field_values(self, *, field_values) -> Tuple[Property, ...]:
        return ()
