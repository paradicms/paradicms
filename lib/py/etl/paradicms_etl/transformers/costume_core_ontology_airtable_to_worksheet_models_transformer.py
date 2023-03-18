import logging
from enum import Enum
from typing import Dict, Tuple, Iterable, Union, List, Set, FrozenSet, Optional, Any
from urllib.parse import quote_plus

from inflector import Inflector
from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.license import License
from paradicms_etl.models.named_value import NamedValue
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.text import Text
from paradicms_etl.models.worksheet_feature import WorksheetFeature
from paradicms_etl.models.worksheet_feature_set import WorksheetFeatureSet
from rdflib import Graph, URIRef, Literal

from dressdiscover_etl.models.costume_core_term import CostumeCoreTerm
from dressdiscover_etl.namespaces import COCO


class CostumeCoreOntologyAirtableToWorksheetModelsTransformer:
    class __ImageDepictsType(Enum):
        FEATURE = "feature"
        FEATURE_SET = "featureSet"
        FEATURE_VALUE = "featureValue"

        def __str__(self):
            return self.value

    class __ImageType(Enum):
        FULL_SIZE = "fullSize"
        THUMBNAIL = "thumbnail"

        def __str__(self):
            return self.value

    def __init__(self):
        self.__logger = logging.getLogger(__name__)

        self.__available_licenses_by_uri = {
            license.uri: license for license in CreativeCommonsLicenses.as_tuple()
        }
        odc_by_license = License.from_fields(
            identifier="ODC-By",
            title="Open Data Commons Attribution License (ODC-By) v1.0",
            uri=URIRef("http://opendatacommons.org/licenses/by/1-0/"),
            version="1.0",
        )
        self.__available_licenses_by_uri[odc_by_license.uri] = odc_by_license
        self.__available_license_uris = frozenset(
            self.__available_licenses_by_uri.keys()
        )

        self.__available_rights_statements_by_uri = {
            rights_statement.uri: rights_statement
            for rights_statement in RightsStatementsDotOrgRightsStatements.as_tuple()
        }
        self.__available_rights_statement_uris = frozenset(
            self.__available_rights_statements_by_uri.keys()
        )
        self.__referenced_license_uris: Set[URIRef] = set()
        self.__referenced_rights_statement_uris: Set[URIRef] = set()

    @staticmethod
    def __feature_set_uri(feature_set_record) -> URIRef:
        return URIRef(
            ":".join(
                (
                    "urn",
                    "costumeCore",
                    "ontology",
                    "featureSet",
                    quote_plus(feature_set_record["fields"]["id"]),
                )
            )
        )

    @staticmethod
    def __image_uri(
        *,
        depicts_type: __ImageDepictsType,
        depicts_uri: URIRef,
        filename: str,
        type: __ImageType,
    ) -> URIRef:
        return URIRef(
            ":".join(
                (
                    "urn",
                    "costumeCore",
                    "image",
                    str(depicts_type),
                    quote_plus(depicts_uri),
                    filename,
                    str(type),
                )
            )
        )

    def __call__(self, *, records_by_table: Dict[str, Tuple]) -> Graph:  # type: ignore
        feature_records = tuple(records_by_table["features"])
        feature_set_records = tuple(records_by_table["feature_sets"])
        feature_value_records = tuple(records_by_table["feature_values"])
        image_records_by_id = {
            image_record["id"]: image_record
            for image_record in records_by_table["images"]
        }
        # rights_licenses_records = tuple(
        #     record
        #     for record in records_by_table["rights_licenses"]
        #     if "Nickname" in record["fields"]
        # )
        variant_term_records = tuple(records_by_table["AAT_variant_terms"])

        # Track which licenses and rights statements we want to yield as we see references to them

        yield from self.__transform_feature_records(
            feature_records=feature_records,
            feature_set_records=feature_set_records,
            image_records_by_id=image_records_by_id,
        )

        yield from self.__transform_feature_set_records(
            feature_set_records=feature_set_records,
            image_records_by_id=image_records_by_id,
        )

        yield from self.__transform_feature_value_records(
            feature_records=feature_records,
            feature_value_records=feature_value_records,
            image_records_by_id=image_records_by_id,
            variant_term_records=variant_term_records,
        )

        # Yield referenced licenses and rights statements once
        for license_uri in self.__referenced_license_uris:
            yield self.__available_licenses_by_uri[license_uri]

        for rights_statement_uri in self.__referenced_rights_statement_uris:
            yield self.__available_rights_statements_by_uri[rights_statement_uri]

    def __transform_description_fields(
        self, *, record_fields: Dict[str, Union[str, List[str], None]]
    ) -> Optional[Text]:
        description_text_en = record_fields.get("description_text_en")
        if not description_text_en:
            return None
        assert isinstance(description_text_en, str)
        return Text.from_fields(
            rights=self.__transform_rights_fields(
                key_prefix="description",
                record_fields=record_fields,
            ),
            value=description_text_en,
        )

    def __transform_feature_records(
        self, feature_records, feature_set_records, image_records_by_id
    ) -> Iterable[Model]:
        for feature_record in feature_records:
            feature_record_fields = feature_record["fields"]

            if "display_name_en" not in feature_record_fields:
                continue
            if "URI" not in feature_record_fields:
                continue

            feature_set_uris = set()
            for feature_set_record in feature_set_records:
                for feature_record_id in feature_set_record["fields"].get(
                    "features", []
                ):
                    if feature_record_id == feature_record["id"]:
                        feature_set_uris.add(self.__feature_set_uri(feature_set_record))

            if not feature_set_uris:
                self.__logger.debug(
                    "feature %s does not belong to any feature sets",
                    feature_record["fields"]["id"],
                )
                continue

            feature_uri = URIRef(feature_record_fields["URI"])

            yield WorksheetFeature.from_fields(
                abstract=self.__transform_description_fields(
                    record_fields=feature_record_fields,
                ),
                feature_set_uris=tuple(feature_set_uris),
                order=int(feature_record_fields["sort_order"]),
                title=feature_record_fields["display_name_en"],
                uri=feature_uri,
            )

            yield from self.__transform_image_records(
                depicts_type=self.__ImageDepictsType.FEATURE,
                depicts_uri=feature_uri,
                image_records=tuple(
                    image_records_by_id[image_record_id]
                    for image_record_id in feature_record_fields.get("images", [])
                ),
            )

    def __transform_feature_set_records(
        self, *, feature_set_records, image_records_by_id
    ) -> Iterable[Model]:
        for feature_set_record in feature_set_records:
            feature_set_uri = self.__feature_set_uri(feature_set_record)

            yield WorksheetFeatureSet.from_fields(
                abstract=self.__transform_description_fields(
                    record_fields=feature_set_record["fields"],
                ),
                title=feature_set_record["fields"]["display_name_en"],
                uri=feature_set_uri,
            )

            yield from self.__transform_image_records(
                depicts_type=self.__ImageDepictsType.FEATURE_SET,
                depicts_uri=feature_set_uri,
                image_records=tuple(
                    image_records_by_id[image_record_id]
                    for image_record_id in feature_set_record["fields"].get(
                        "images", []
                    )
                ),
            )

    def __transform_feature_value_records(
        self,
        *,
        feature_records,
        feature_value_records,
        image_records_by_id,
        variant_term_records,
    ) -> Iterable[Model]:
        inflector = Inflector()

        variant_term_records_by_feature_value_id: Dict[str, List[Any]] = {}
        for variant_term_record in variant_term_records:
            assert len(variant_term_record["fields"]["feature_values_id"]) == 1
            variant_term_records_by_feature_value_id.setdefault(
                variant_term_record["fields"]["feature_values_id"][0], []
            ).append(variant_term_record)

        for feature_value_record in feature_value_records:
            feature_value_record_fields = feature_value_record["fields"]
            feature_value_id = feature_value_record_fields["id"]

            if not feature_value_id.startswith("CC"):
                continue

            if "display_name_en" not in feature_value_record_fields:
                continue

            feature_uris = []
            for feature_record_id in feature_value_record_fields.get("features", []):
                for feature_record in feature_records:
                    if feature_record["id"] == feature_record_id:
                        feature_uris.append(URIRef(feature_record["fields"]["URI"]))
                        break

            if not feature_uris:
                self.__logger.debug(
                    "feature value %s does not belong to any features",
                    feature_value_id,
                )
                continue

            # aat_id=fields.get("AATID"),
            #     wikidata_id=fields.get("WikidataID"),

            pref_label = feature_value_record_fields["display_name_en"]

            alt_labels = set()
            for variant_term_record in variant_term_records_by_feature_value_id.get(
                feature_value_id, []
            ):
                variant_term = variant_term_record["fields"]["term"]
                if variant_term_record["fields"]["xml-lang"] == "en":
                    if variant_term == pref_label:
                        self.__logger.debug(
                            "feature value %s has variant term that is the same as the preferred label: %s",
                            feature_value_id,
                            pref_label,
                        )
                        continue
                    elif inflector.singularize(variant_term) == pref_label:
                        self.__logger.debug(
                            "feature value %s has variant term (%s) that is the the plural of the preferred label (%s)",
                            feature_value_id,
                            variant_term,
                            pref_label,
                        )
                        continue
                    elif inflector.pluralize(variant_term) == pref_label:
                        self.__logger.debug(
                            "feature value %s has variant term (%s) that is the the singular of the preferred label (%s)",
                            feature_value_id,
                            variant_term,
                            pref_label,
                        )
                        continue
                alt_labels.add(
                    Literal(
                        variant_term, lang=variant_term_record["fields"]["xml-lang"]
                    )
                )

            feature_value_uri = COCO[feature_value_id]
            feature_value = NamedValue.from_fields(
                abstract=self.__transform_description_fields(
                    record_fields=feature_value_record_fields
                ),
                alt_labels=tuple(alt_labels),
                property_uris=tuple(feature_uris),
                title=pref_label,
                value=feature_value_uri,
                uri=feature_value_uri,
            )
            yield feature_value

            image_filename = feature_value_record_fields.get("image_filename")
            if image_filename:
                image_filename = image_filename[0]
                assert image_filename

                image_record = image_records_by_id[image_filename]
                image_filename = image_record["fields"]["filename"]
                image_rights = self.__transform_rights_fields(
                    key_prefix="image", record_fields=feature_value_record_fields
                )

                # See note in transform_image_records re: image URIs.

                full_size_image = Image.from_fields(
                    depicts_uri=feature_value.uri,
                    rights=image_rights,
                    src=CostumeCoreTerm.FULL_SIZE_IMAGE_BASE_URL + image_filename,
                    uri=self.__image_uri(
                        depicts_uri=feature_value.uri,
                        depicts_type=self.__ImageDepictsType.FEATURE_VALUE,
                        filename=image_filename,
                        type=self.__ImageType.FULL_SIZE,
                    ),
                )
                yield full_size_image

                yield Image.from_fields(
                    depicts_uri=feature_value.uri,
                    exact_dimensions=ImageDimensions(height=200, width=200),
                    original_image_uri=full_size_image.uri,
                    rights=image_rights,
                    src=CostumeCoreTerm.THUMBNAIL_BASE_URL + image_filename,
                    uri=self.__image_uri(
                        depicts_uri=feature_value.uri,
                        depicts_type=self.__ImageDepictsType.FEATURE_VALUE,
                        filename=image_filename,
                        type=self.__ImageType.THUMBNAIL,
                    ),
                )

    def __transform_image_records(
        self, *, depicts_type: __ImageDepictsType, depicts_uri: URIRef, image_records
    ) -> Iterable[Image]:
        # yield from self.__transform_image_records(
        #     depicts_uri=feature_set_uri,
        #     image_records=tuple(
        #         image_records_by_id[image_record_id]
        #         for image_record_id in feature_set_record["fields"].get(
        #             "images", []
        #         )
        #     ),
        # )
        if not image_records:
            return

        for image_record in image_records:
            image_filename = image_record["fields"]["filename"]
            image_rights = self.__transform_rights_fields(
                key_prefix="image", record_fields=image_record["fields"]
            )

            # The same image may be used to depict multiple objects e.g., a feature value, a feature, and a feature set.
            # Allow the src to be duplicated but make the URIs unique.

            full_size_image = Image.from_fields(
                depicts_uri=depicts_uri,
                rights=image_rights,
                src=CostumeCoreTerm.FULL_SIZE_IMAGE_BASE_URL + image_filename,
                uri=self.__image_uri(
                    depicts_uri=depicts_uri,
                    depicts_type=depicts_type,
                    filename=image_filename,
                    type=self.__ImageType.FULL_SIZE,
                ),
            )
            yield full_size_image

            yield Image.from_fields(
                depicts_uri=depicts_uri,
                exact_dimensions=ImageDimensions(height=200, width=200),
                original_image_uri=full_size_image.uri,
                rights=image_rights,
                src=CostumeCoreTerm.THUMBNAIL_BASE_URL + image_filename,
                uri=self.__image_uri(
                    depicts_uri=depicts_uri,
                    depicts_type=depicts_type,
                    filename=image_filename,
                    type=self.__ImageType.THUMBNAIL,
                ),
            )

    def __transform_rights_fields(
        self, *, key_prefix: str, record_fields: Dict[str, Union[str, List[str], None]]
    ) -> Rights:
        """
        Utility function to transform a prefixed subset of fields into a Rights model.
        """

        def get_first_list_element(list_: Union[str, List[str], None]):
            if list_ is None:
                return None
            if not isinstance(list_, list):
                return list_
            assert len(list_) == 1
            return list_[0]

        def transform_rights_uri(
            available_rights_uris: FrozenSet[URIRef],
            rights_uri_str: Union[None, str],
            referenced_rights_uris: Set[URIRef],
        ) -> Union[None, str, URIRef]:
            if not rights_uri_str:
                return None

            rights_uri = URIRef(rights_uri_str)
            if rights_uri in available_rights_uris:
                referenced_rights_uris.add(rights_uri)
                return rights_uri

            if str(rights_uri).startswith("https://"):
                http_rights_uri = URIRef("http://" + rights_uri[len("https://") :])
                if http_rights_uri in available_rights_uris:
                    referenced_rights_uris.add(http_rights_uri)
                    return http_rights_uri

            if id(available_rights_uris) != id(
                self.__available_rights_statement_uris
            ) or rights_uri not in (
                URIRef("https://creativecommons.org/publicdomain/zero/1.0/"),
                URIRef("https://creativecommons.org/publicdomain/mark/1.0/"),
            ):
                self.__logger.warning("unknown rights URI: %s", rights_uri)

            return None

        return Rights.from_fields(
            creator=get_first_list_element(
                record_fields.get(f"{key_prefix}_rights_author")
            ),
            license=transform_rights_uri(
                available_rights_uris=self.__available_license_uris,
                rights_uri_str=get_first_list_element(
                    record_fields.get(f"{key_prefix}_rights_license")
                ),
                referenced_rights_uris=self.__referenced_license_uris,
            ),
            statement=transform_rights_uri(
                available_rights_uris=self.__available_rights_statement_uris,
                rights_uri_str=get_first_list_element(
                    record_fields.get(f"{key_prefix}_rights_statement")
                ),
                referenced_rights_uris=self.__referenced_rights_statement_uris,
            ),
            # source_name=get_first_list_element(
            #     fields[f"{key_prefix}_rights_source_name"]
            # ),
            # source_url=get_first_list_element(
            #     fields[f"{key_prefix}_rights_source_url"]
            # ),
        )
