from datetime import datetime
from typing import Dict, Generator, List, Tuple, Iterable, Any

from rdflib import URIRef, DCTERMS

from paradicms_etl.extractors.luna_extractor import LunaExtractor
from paradicms_etl.model import Model
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.property import Property
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.work import Work
from paradicms_etl.namespaces import VRA


class LunaTransformer:
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

    @staticmethod
    def _pop_qualified_field_values(
        field_values: Dict[str, List[str]],
        primary_field_name,
        *qualifier_field_names: str,
    ):
        """
        Fields such as "Title" have qualifying fields such as "Title Type",
        which should have the same number of values.

        :param field_values: field values dict passed to _transform_object_field_values
        :param primary_field_name: primary field name, such as "Title"
        :param qualifier_field_names: qualifier field names, such as "Title Type"
        :return: a generator of field value tuple (primary field value, qualifier field value 1, qualifier field value 2, ...)
        """

        primary_field_values = field_values.pop(primary_field_name, [])
        all_field_values = [primary_field_values]
        for qualifier_field_name in qualifier_field_names:
            qualifier_field_values: List[Any] = field_values.pop(
                qualifier_field_name, []
            )
            if qualifier_field_values:
                while len(qualifier_field_values) < len(primary_field_values):
                    qualifier_field_values.append(None)
            else:
                qualifier_field_values = [None] * len(primary_field_values)
            all_field_values.append(qualifier_field_values)
        yield from zip(*all_field_values)

    def __call__(self, *, base_url: str, search_results):  # type: ignore
        institution = self._transform_institution(
            base_url=base_url, institution_name=search_results["institutionName"]
        )
        yield institution

        collections_by_id = {}
        collections_by_uri = {}
        for collection_pair in search_results["collections"]:
            assert len(collection_pair) == 1
            for collection_id, luna_collection in collection_pair.items():
                collection = self._transform_collection(
                    base_url=base_url,
                    id_=collection_id,
                    institution=institution,
                    luna_collection=luna_collection,
                )
                yield collection
                collections_by_id[collection_id] = collection
                collections_by_uri[collection.uri] = collection

        for luna_object in search_results["results"]:
            yield from self._transform_object(
                collections_by_id=collections_by_id,
                institution=institution,
                luna_object=luna_object,
            )

    def _transform_collection(
        self,
        *,
        base_url: str,
        id_: str,
        institution: Institution,
        luna_collection: Dict[str, str],
    ) -> Collection:
        description = luna_collection.get("description", "").strip()
        return Collection.from_fields(
            abstract=description if description else None,
            institution_uri=institution.uri,
            title=luna_collection["name"],
            uri=URIRef(
                LunaExtractor.create_search_url(base_url=base_url, query={"lc": id_})
            ),
        )

    def _transform_institution(
        self, *, base_url: str, institution_name: str
    ) -> Institution:
        return Institution.from_fields(name=institution_name, uri=URIRef(base_url))

    def _transform_object(
        self,
        *,
        collections_by_id: Dict[str, Collection],
        institution: Institution,
        luna_object,
    ) -> Iterable[Model]:
        id_ = luna_object["id"].strip()
        assert id_

        collection_uris: Tuple[URIRef, ...] = ()
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

        field_values_dict = {}
        for field_value_pair in luna_object["fieldValues"]:
            assert len(field_value_pair) == 1
            for field_name, field_values in field_value_pair.items():
                assert field_name not in field_values_dict, field_name
                field_values_dict[field_name] = field_values
                self._logger.debug(
                    "object %s: field %s = %s", id_, field_name, field_values
                )

        properties = self._transform_object_field_values(field_values=field_values_dict)

        work = Work.from_fields(
            abstract=description,
            collection_uris=collection_uris,
            institution_uri=institution.uri,
            properties=properties,
            title=display_name,
            uri=URIRef(luna_object["iiifManifest"]),
        )
        yield work

        yield from self._transform_object_images(
            field_values=field_values_dict,
            luna_object=luna_object,
            work=work,
        )

        for field_name, field_values in field_values_dict.items():
            self._logger.warning(
                "work %s: untransformed field %s = %s", id_, field_name, field_values
            )

    def _transform_object_field_values(
        self, *, field_values: Dict[str, List[str]]
    ) -> Tuple[Property, ...]:
        """
        Transform LUNA object fieldValues into zero or more object Property's
        Should mutate field_values to indicate that those fields have been consumed.
        """

        properties = []

        for field_name, property_uri in (
            ("Culture", VRA.culturalContext),
            ("Description", DCTERMS.description),
            ("Subject", DCTERMS.subject),
            ("Work Type", DCTERMS.type),
        ):
            for field_value in field_values.pop(field_name, []):
                properties.append(Property(property_uri, field_value))

        def pop_qualified_field_values(*args):
            return self._pop_qualified_field_values(field_values, *args)

        for (
            creator,
            creator_dates,
            creator_role,
            creator_type,
        ) in pop_qualified_field_values(
            "Creator", "Creator Dates", "Creator Type", "Creator Role"
        ):
            properties.append(Property(DCTERMS.creator, creator))

        for date, date_type in pop_qualified_field_values("Date", "Date Type"):
            if date_type == "completion date":
                property_uri = DCTERMS.dateSubmitted
            elif date_type == "creation":
                property_uri = DCTERMS.created
            else:
                raise ValueError(date_type)
            properties.append(Property(property_uri, date))

        for location, location_type in pop_qualified_field_values(
            "Location", "Location Type"
        ):
            pass

        for material, material_type in pop_qualified_field_values(
            "Material", "Material Type"
        ):
            properties.append(Property(VRA.material, material))

        for title, title_type in pop_qualified_field_values("Title", "Title Type"):
            properties.append(Property(DCTERMS.title, title))

        for ignore_key in (
            "Repository",
            "Repository Type",
            "Work Class",
            "Work Record ID",
        ):
            field_values.pop(ignore_key, None)

        return tuple(properties)

    def _transform_object_images(
        self,
        *,
        field_values: Dict[str, List[str]],
        luna_object,
        work: Work,
    ) -> Generator[Image, None, None]:
        def pop_qualified_field_values(*args):
            return self._pop_qualified_field_values(field_values, *args)

        field_values.pop("Reproduction Description", None)
        field_values.pop("Reproduction Record ID")

        for reproduction_view, reproduction_view_type in pop_qualified_field_values(
            "Reproduction View", "Reproduction View Type"
        ):
            # Front, rear view
            # Don't have anything to do with this currently.
            pass

        image_created = None
        for reproduction_date, reproduction_date_type in pop_qualified_field_values(
            "Reproduction Date", "Reproduction Date Type"
        ):
            reproduction_year = int(reproduction_date)
            if reproduction_date_type == "creation":
                image_created = datetime(reproduction_year, 1, 1)

        reproduction_rights_statement = field_values.pop(
            "Reproduction Rights Statement"
        )
        assert reproduction_rights_statement

        image_urls = []
        url_size_i = 0
        while True:
            try:
                image_urls.append(luna_object[f"urlSize{url_size_i}"])
            except KeyError:
                break
            url_size_i += 1

        if not image_urls:
            return

        # Treat the largest image as the original.
        original_image_uri = URIRef(image_urls[-1])

        for url_size_i, image_url in enumerate(image_urls):
            image_dimension_max = self.__URL_SIZES[url_size_i]
            image_uri = URIRef(image_url)
            yield Image.from_fields(
                created=image_created,
                depicts_uri=work.uri,
                max_dimensions=ImageDimensions(
                    height=image_dimension_max,
                    width=image_dimension_max,
                ),
                original_image_uri=original_image_uri
                if image_uri != original_image_uri
                else None,
                rights=Rights.from_fields(statement=reproduction_rights_statement[0]),
                uri=image_uri,
            )
