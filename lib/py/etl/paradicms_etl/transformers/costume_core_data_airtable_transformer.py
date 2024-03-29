import json
import logging
from typing import Dict, Any, Iterable, Union

from rdflib import URIRef

from paradicms_etl.extractors.airtable_extractor import AirtableExtractor
from paradicms_etl.loaders.nop_loader import nop_loader
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.dc.dc_image import DcImage
from paradicms_etl.models.dc.dc_physical_object import DcPhysicalObject
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.property import Property
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.work import Work
from paradicms_etl.namespaces import COCO
from paradicms_etl.pipelines.costume_core_ontology_airtable_pipeline import (
    CostumeCoreOntologyAirtablePipeline,
)


class CostumeCoreDataAirtableTransformer:
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

    def __init__(
        self,
    ):
        self.__logger = logging.getLogger(__name__)

    def __call__(self, *, base: Dict[str, Any], records_by_table, **kwds):
        properties_by_label: Dict[str, Property] = {}

        for ontology_model in CostumeCoreOntologyAirtablePipeline(
            airtable_access_token="neverused",
            loader=nop_loader,
        )(force_extract=False):
            if isinstance(ontology_model, Concept):
                yield ontology_model
            elif isinstance(ontology_model, Image):
                # To get Concept images
                yield ontology_model
            elif isinstance(ontology_model, Property):
                property_ = ontology_model
                properties_by_label[property_.label] = property_
                yield property_

        collection_builder = SchemaCollection.builder(
            name=base["name"], uri=AirtableExtractor.base_url(base_id=base["id"])
        )

        for model in self.__transform_object_records(
            base_id=base["id"],
            image_records=records_by_table["Images"],
            name_records=records_by_table["Names"],
            object_records=records_by_table["Objects"],
            properties_by_label=properties_by_label,
            term_records=records_by_table["Terms"],
        ):
            yield model
            if isinstance(model, Work):
                collection_builder.add_work(model.uri)

        yield collection_builder.build()

    def __transform_object_records(
        self,
        *,
        base_id: str,
        image_records,
        name_records,
        object_records,
        properties_by_label: Dict[str, Property],
        term_records,
    ) -> Iterable[Union[Image, Work]]:
        image_records_by_display_image_id = {}
        for image_record in image_records:
            assert len(image_record["fields"]["Display Image"]) == 1, image_record["id"]
            image_records_by_display_image_id[
                image_record["fields"]["Display Image"][0]["id"]
            ] = image_record

        name_records_by_id = {
            name_record["id"]: name_record for name_record in name_records
        }

        term_records_by_id = {
            term_record["id"]: term_record for term_record in term_records
        }

        for object_record in object_records:
            work_uri = URIRef(
                AirtableExtractor.record_url(
                    base_id=base_id,
                    record_id=object_record["id"],
                    table=self.__OBJECTS_TABLE,
                )
            )

            work_builder = DcPhysicalObject.builder(
                # rights=Rights.from_properties(properties),
                title=object_record["fields"]["Title"],
                uri=work_uri,
            )

            if object_record["fields"].get("Date", "").strip():
                work_builder.set_created(object_record["fields"]["Date"])

            for field_key, field_value in object_record["fields"].items():
                try:
                    property_ = properties_by_label[field_key]
                except KeyError:
                    if field_key in self.__IGNORE_OBJECT_RECORD_FIELD_KEYS:
                        continue

                    if field_key == "Images":
                        for image in self.__transform_object_images(
                            image_records_by_display_image_id=image_records_by_display_image_id,
                            object_images=field_value,
                        ):
                            yield image
                            work_builder.add_image(image.uri)
                        continue

                    self.__logger.warning(
                        "no such Costume Core property %s for object record %s",
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
                            work_builder.add(
                                property_.uri,
                                name_record["fields"]["Full Name"],
                            )
                        elif term_record is not None:
                            term_id = term_record["fields"]["id"]
                            term_uri = COCO[term_id]
                            work_builder.add(property_.uri, term_uri)
                        else:
                            raise NotImplementedError
                    else:
                        work_builder.add(property_.uri, field_value)

            yield work_builder.build()

    @staticmethod
    def __transform_object_images(
        *, image_records_by_display_image_id, object_images
    ) -> Iterable[Image]:
        for object_image in object_images:
            image_record = image_records_by_display_image_id[object_image["id"]]
            image_record_fields = image_record["fields"]
            display_image = image_record_fields["Display Image"][0]
            assert json.dumps(display_image) == json.dumps(object_image)

            original_image_builder = DcImage.builder(
                uri=URIRef(display_image["url"]),
            )
            original_image_builder.set_exact_dimensions(
                ImageDimensions(
                    height=display_image["height"],
                    width=display_image["width"],
                )
            ).set_format(display_image["type"])
            if image_record_fields.get("imageID"):
                original_image_builder.add_identifier(image_record_fields["imageID"])
            if image_record_fields.get("image_creator"):
                original_image_builder.add_creator(image_record_fields["image_creator"])
            if image_record_fields.get("image_rights_license"):
                original_image_builder.add_license(
                    URIRef(image_record_fields["image_rights_license"])
                )
            if image_record_fields.get("image_rights_statement"):
                original_image_builder.add_rights_statement(
                    URIRef(image_record_fields["image_rights_statement"])
                )

            # Don't include Airtable's thumbnails, make our own
            # for thumbnail in object_image["thumbnails"].values():
            #     thumbnail_image = (
            #         SchemaImageObject.builder(
            #             uri=URIRef(thumbnail["url"]),
            #         )
            #         .set_exact_dimensions(
            #             ImageDimensions(
            #                 height=thumbnail["height"],
            #                 width=thumbnail["width"],
            #             )
            #         )
            #         .build()
            #     )
            #     yield thumbnail_image
            #     original_image_builder.add_thumbnail(thumbnail_image)

            yield original_image_builder.build()
