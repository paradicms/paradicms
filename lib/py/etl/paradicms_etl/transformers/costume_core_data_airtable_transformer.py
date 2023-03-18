import logging
from typing import Optional

from rdflib import URIRef

from paradicms_etl.extractors.airtable_extractor import AirtableExtractor
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.costume_core.costume_core import CostumeCore
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.property import Property
from paradicms_etl.models.work import Work


class CostumeCoreDataAirtableTransformer:
    # __IGNORE_FEATURE_RECORD_IDS = {
    #     # feature display
    #     "recI7sxKzQwM5YKhT",
    #     # Measurements autofill
    #     "recJh1nbz5NlsFc76",
    # }
    __IGNORE_OBJECT_RECORD_FIELD_KEYS = {
        "CreatedBy",
        "CreationTimestamp",
        "Description Auto",
        "ImageIDs",
        "Materials",
        "Measurements Autofill",
        "ModificationTimestamp",
        "ModifiedBy",
    }
    __OBJECTS_TABLE = "Objects"

    # class __Feature(NamedTuple):
    #     custom_property_definition: PropertyDefinition
    #     id: str
    #     paradicms_property_definition: Optional[PropertyDefinition]
    #     label: str
    #     record: Dict
    #     term_records: Tuple[Dict, ...]

    def __init__(
        self,
        *,
        base_id: str,
        collection: Collection,
        costume_core: Optional[CostumeCore] = None,
    ):
        self.__base_id = base_id
        self.__collection = collection
        self.__costume_core = (
            costume_core if costume_core is not None else CostumeCore()
        )
        self.__logger = logging.getLogger(__name__)

    def __call__(self, *, records_by_table, **kwds):
        yield from self.__costume_core.concepts

        yield self.__collection

        # features = self.__transform_feature_records(
        #     feature_records=records_by_table["Features"], term_records=term_records
        # )
        # for feature in features:
        #     if feature.paradicms_property_definition is None:
        #         yield feature.custom_property_definition

        yield from self.__transform_object_records(
            collection_uri=self.__collection.uri,
            name_records=records_by_table["Names"],
            object_records=records_by_table["Objects"],
            term_records=records_by_table["Terms"],
        )

    # def __transform_feature_records(
    #     self, *, feature_records, term_records
    # ) -> Tuple[__Feature, ...]:
    #     paradicms_property_definitions_by_uri = {
    #         str(property_definition): property_definition
    #         for property_definition in PropertyDefinitions.as_tuple()
    #     }
    #
    #     term_records_by_term_id = {
    #         term_record["fields"]["id"]: term_record for term_record in term_records
    #     }
    #
    #     features = []
    #     for feature_record in feature_records:
    #         if feature_record["id"] in self.__IGNORE_FEATURE_RECORD_IDS:
    #             continue
    #
    #         try:
    #             id_ = feature_record["fields"]["id"]
    #             label = feature_record["fields"]["Label"]
    #             uri = feature_record["fields"]["URI"]
    #         except KeyError as e:
    #             self.__logger.warning(
    #                 "malformed feature record %s: missing %s", feature_record["id"], e
    #             )
    #             continue
    #
    #         feature_term_records = []
    #         for term_id in feature_record["fields"].get("feature_values_ids", []):
    #             feature_term_records.append(term_records_by_term_id[term_id])
    #
    #         features.append(
    #             self.__Feature(
    #                 custom_property_definition=PropertyDefinition(
    #                     faceted=len(feature_term_records) > 0,
    #                     label=label,
    #                     uri=URIRef(uri),
    #                 ),
    #                 id=id_,
    #                 label=label,
    #                 paradicms_property_definition=paradicms_property_definitions_by_uri.get(
    #                     uri
    #                 ),
    #                 record=feature_record,
    #                 term_records=tuple(feature_term_records),
    #             )
    #         )
    #     return tuple(features)

    def __transform_object_records(
        self,
        *,
        collection_uri: URIRef,
        name_records,
        object_records,
        term_records,
    ):
        name_records_by_id = {
            name_record["id"]: name_record for name_record in name_records
        }

        term_records_by_id = {
            term_record["id"]: term_record for term_record in term_records
        }

        for object_record in object_records:
            work_uri = URIRef(
                AirtableExtractor.record_url(
                    base_id=self.__base_id,
                    record_id=object_record["id"],
                    table=self.__OBJECTS_TABLE,
                )
            )

            properties = []
            for field_key, field_value in object_record["fields"].items():
                try:
                    predicate = self.__costume_core.predicates_by_label[field_key]
                except KeyError:
                    if field_key in self.__IGNORE_OBJECT_RECORD_FIELD_KEYS:
                        continue

                    if field_key == "Images":
                        yield from self.__transform_object_images(
                            object_images=field_value,
                            work_uri=work_uri,
                        )
                        continue

                    self.__logger.warning(
                        "no such Costume Core predicate %s for object record %s",
                        field_key,
                        object_record["id"],
                    )
                    continue

                if isinstance(field_value, list):
                    field_values = field_value
                else:
                    field_values = [field_value]

                for field_value in field_values:
                    if field_value.startswith("rec"):
                        try:
                            name_record = name_records_by_id[field_value]
                            term_record = None
                        except KeyError:
                            name_record = None
                            term_record = term_records_by_id[field_value]

                        if name_record is not None:
                            properties.append(
                                Property(
                                    URIRef(predicate.uri),
                                    name_record["fields"]["Full Name"],
                                )
                            )
                        elif term_record is not None:
                            term_id = term_record["fields"]["id"]
                            term = self.__costume_core.terms_by_id[term_id]
                            properties.append(
                                Property(URIRef(predicate.uri), term.label)
                            )
                        else:
                            raise NotImplementedError
                    else:
                        properties.append(Property(URIRef(predicate.uri), field_value))

            yield Work.from_fields(
                collection_uris=(collection_uri,),
                properties=tuple(properties),
                # rights=Rights.from_properties(properties),
                title=object_record["fields"]["Title"],
                uri=work_uri,
            )

    def __transform_object_images(self, *, object_images, work_uri: URIRef):
        for object_image in object_images:
            original_image = Image.from_fields(
                depicts_uri=work_uri,
                uri=URIRef(object_image["url"]),
            )
            yield original_image

            for thumbnail in object_image["thumbnails"].values():
                yield Image.from_fields(
                    depicts_uri=work_uri,
                    exact_dimensions=ImageDimensions(
                        height=thumbnail["height"],
                        width=thumbnail["width"],
                    ),
                    original_image_uri=original_image.uri,
                    uri=URIRef(thumbnail["url"]),
                )
