import logging
from enum import Enum
from typing import Dict, Tuple, Iterable, Union, List, Set, FrozenSet, Optional, Any
from urllib.parse import quote_plus

from inflector import Inflector
from rdflib import URIRef, Literal

from paradicms_etl.model import Model
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.costume_core.costume_core_description import (
    CostumeCoreDescription,
)
from paradicms_etl.models.costume_core.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.models.costume_core.costume_core_predicate import (
    CostumeCorePredicate,
)
from paradicms_etl.models.costume_core.costume_core_rights import CostumeCoreRights
from paradicms_etl.models.costume_core.costume_core_term import CostumeCoreTerm
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.license import License
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work
from paradicms_etl.models.worksheet_feature import WorksheetFeature
from paradicms_etl.models.worksheet_feature_set import WorksheetFeatureSet
from paradicms_etl.namespaces import COCO


class CostumeCoreOntologyAirtableTransformer:
    """
    A transformer that accepts records from the Costume Core ontology reference Airtable (base appS5bN4hk1aWEzE0) and
    transforms the feature sets, features/predicates, and feature values/terms into Paradicms models.

    The code in this class used to be in several transformer implementations. Each implementation transformed the source
    data into different models. The implementations were merged on the assumption that the models should be filtered
    coming out of this transformer.

    The different types of yielded models are:
    - Collection, Image, and Work to build a faceted browser for the Costume Core ontology itself
    - CostumeCoreOntology, CostumeCorePredicate, and CostumeCoreTerm to build an RDF/OWL version of the Costume Core
        ontology
    - Concept (formerly WorksheetFeatureValue), Image, WorksheetFeatureSet, and WorksheetFeature to build a Costume Core
        worksheet app
    """

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

    def __init__(self, *, ontology_version: str):
        self.__logger = logging.getLogger(__name__)
        self.__ontology_version = ontology_version

        self.__available_licenses_by_uri = {
            license.uri: license for license in CreativeCommonsLicenses.as_tuple()
        }
        odc_by_license = (
            License.builder(
                identifier="ODC-By",
                title="Open Data Commons Attribution License (ODC-By) v1.0",
                uri=URIRef("http://opendatacommons.org/licenses/by/1-0/"),
            )
            .set_version(
                version="1.0",
            )
            .build()
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

    def __call__(self, *, base: Dict[str, Any], records_by_table: Dict[str, Tuple]) -> Iterable[Model]:  # type: ignore
        yield CostumeCoreOntology.builder(version=self.__ontology_version).build()

        feature_records = tuple(
            record
            for record in records_by_table["features"]
            if "id" in record["fields"]
        )
        feature_set_records = tuple(
            record
            for record in records_by_table["feature_sets"]
            if "id" in record["fields"]
        )
        feature_value_records = tuple(
            record
            for record in records_by_table["feature_values"]
            if "id" in record["fields"]
        )
        image_records = tuple(
            record
            for record in records_by_table["images"]
            if "filename" in record["fields"]
        )
        image_records_by_id = {
            image_record["id"]: image_record for image_record in image_records
        }
        # rights_licenses_records = tuple(
        #     record
        #     for record in records_by_table["rights_licenses"]
        #     if "Nickname" in record["fields"]
        # )
        variant_term_records = tuple(records_by_table["AAT_variant_terms"])

        # Track which licenses and rights statements we want to yield as we see references to them

        costume_core_terms_by_features: Dict[str, List[CostumeCoreTerm]] = {}
        for model in self.__transform_feature_value_records(
            feature_records=feature_records,
            feature_value_records=feature_value_records,
            image_records_by_id=image_records_by_id,
            variant_term_records=variant_term_records,
        ):
            yield model

            if isinstance(model, CostumeCoreTerm) and model.features:
                for feature in model.features:
                    costume_core_terms_by_features.setdefault(feature, []).append(model)

        yield from self.__transform_feature_records(
            costume_core_terms_by_features=costume_core_terms_by_features,
            feature_records=feature_records,
            feature_set_records=feature_set_records,
            image_records_by_id=image_records_by_id,
        )

        if costume_core_terms_by_features:
            print(
                "Terms that have a 'features' that doesn't correspond to a predicate:"
            )
            for predicate_id, predicate_terms in costume_core_terms_by_features.items():
                print(predicate_id, ", ".join(term.id for term in predicate_terms))

        yield from self.__transform_feature_set_records(
            feature_set_records=feature_set_records,
            image_records_by_id=image_records_by_id,
        )

        # Yield referenced licenses and rights statements once
        for license_uri in self.__referenced_license_uris:
            yield self.__available_licenses_by_uri[license_uri]

        for rights_statement_uri in self.__referenced_rights_statement_uris:
            yield self.__available_rights_statements_by_uri[rights_statement_uri]

    def __transform_description_fields_to_text(
        self, *, record_fields: Dict[str, Union[str, List[str], None]]
    ) -> Optional[Text]:
        description_text_en = record_fields.get("description_text_en")
        if not description_text_en:
            return None
        assert isinstance(description_text_en, str)
        return (
            Text.builder(description_text_en)
            .add_rights(
                self.__transform_rights_fields_to_rights(
                    key_prefix="description",
                    record_fields=record_fields,
                )
            )
            .build()
        )

    def __transform_feature_record_to_collection(
        self, feature_record
    ) -> Collection | None:
        fields = feature_record["fields"]
        if not fields.get("feature_values_labels", []):
            # Don't yield Collections that won't have any associated Works
            return None
        return Collection.builder(
            title=fields["display_name_en"],
            uri=URIRef(fields["URI"]),
        ).build()

    def __transform_feature_record_to_costume_core_predicate(
        self,
        *,
        costume_core_terms_by_features: Dict[str, List[CostumeCoreTerm]],
        feature_record,
    ) -> CostumeCorePredicate:
        fields = feature_record["fields"]
        id_ = fields["id"].lstrip()
        return CostumeCorePredicate(
            description_text_en=fields["description_text_en"],
            display_name_en=fields["display_name_en"],
            id=id_,
            sub_property_of_uri=fields.get("sub_property_of"),
            terms=tuple(costume_core_terms_by_features.pop(id_, tuple())),
            _uri=URIRef(fields["URI"]),
        )

    def __transform_feature_record_to_worksheet_feature(
        self, *, feature_record, feature_set_records
    ) -> WorksheetFeature | None:
        fields = feature_record["fields"]

        feature_set_uris = set()
        for feature_set_record in feature_set_records:
            for feature_record_id in feature_set_record["fields"].get("features", []):
                if feature_record_id == feature_record["id"]:
                    feature_set_uris.add(self.__feature_set_uri(feature_set_record))
                    break

        if not feature_set_uris:
            self.__logger.debug(
                "feature %s does not belong to any feature sets",
                feature_record["fields"]["id"],
            )
            return None

        feature_uri = URIRef(fields["URI"])

        feature_builder = WorksheetFeature.builder(
            title=fields["display_name_en"], uri=feature_uri
        ).set_order(int(fields["sort_order"]))
        feature_description = self.__transform_description_fields_to_text(
            record_fields=fields,
        )
        if feature_description:
            feature_builder.set_description(feature_description)
        for feature_set_uri in feature_set_uris:
            feature_builder.add_feature_set_uri(feature_set_uri)
        return feature_builder.build()

    def __transform_feature_records(
        self,
        *,
        costume_core_terms_by_features: Dict[str, List[CostumeCoreTerm]],
        feature_records,
        feature_set_records,
        image_records_by_id,
    ) -> Iterable[Model]:
        for feature_record in feature_records:
            fields = feature_record["fields"]

            if "display_name_en" not in fields:
                continue
            if "URI" not in fields:
                continue
            if not fields["URI"].startswith(str(COCO)):
                continue

            collection = self.__transform_feature_record_to_collection(
                feature_record=feature_record
            )
            if collection:
                yield collection

            yield self.__transform_feature_record_to_costume_core_predicate(
                costume_core_terms_by_features=costume_core_terms_by_features,
                feature_record=feature_record,
            )

            worksheet_feature = self.__transform_feature_record_to_worksheet_feature(
                feature_record=feature_record, feature_set_records=feature_set_records
            )
            if worksheet_feature:
                yield worksheet_feature

                yield from self.__transform_image_records_to_images(
                    depicts_type=self.__ImageDepictsType.FEATURE,
                    depicts_uri=worksheet_feature.uri,
                    image_records=tuple(
                        image_records_by_id[image_record_id]
                        for image_record_id in fields.get("images", [])
                    ),
                )

    def __transform_feature_set_records(
        self, *, feature_set_records, image_records_by_id
    ) -> Iterable[Model]:
        for feature_set_record in feature_set_records:
            feature_set_uri = self.__feature_set_uri(feature_set_record)

            feature_set_builder = WorksheetFeatureSet.builder(
                title=feature_set_record["fields"]["display_name_en"],
                uri=feature_set_uri,
            )
            feature_set_description = self.__transform_description_fields_to_text(
                record_fields=feature_set_record["fields"],
            )
            if feature_set_description:
                feature_set_builder.set_description(feature_set_description)
            yield feature_set_builder.build()

            yield from self.__transform_image_records_to_images(
                depicts_type=self.__ImageDepictsType.FEATURE_SET,
                depicts_uri=feature_set_uri,
                image_records=tuple(
                    image_records_by_id[image_record_id]
                    for image_record_id in feature_set_record["fields"].get(
                        "images", []
                    )
                ),
            )

    def __transform_feature_value_record_to_images(
        self, *, depicts_uri: URIRef, feature_value_record, image_records_by_id
    ) -> Iterable:
        fields = feature_value_record["fields"]
        image_filename = fields.get("image_filename")
        if not image_filename:
            return

        image_filename = image_filename[0]
        assert image_filename

        image_record = image_records_by_id[image_filename]
        image_filename = image_record["fields"]["filename"]
        image_rights = self.__transform_rights_fields_to_rights(
            key_prefix="image", record_fields=fields
        )

        # See note in transform_image_records re: image URIs.

        full_size_image = (
            Image.builder(
                depicts_uri=depicts_uri,
                uri=self.__image_uri(
                    depicts_uri=depicts_uri,
                    depicts_type=self.__ImageDepictsType.FEATURE_VALUE,
                    filename=image_filename,
                    type=self.__ImageType.FULL_SIZE,
                ),
            )
            .add_rights(image_rights)
            .set_src(
                CostumeCoreTerm.FULL_SIZE_IMAGE_BASE_URL + image_filename,
            )
            .build()
        )
        yield full_size_image

        yield Image.builder(
            depicts_uri=depicts_uri,
            uri=self.__image_uri(
                depicts_uri=depicts_uri,
                depicts_type=self.__ImageDepictsType.FEATURE_VALUE,
                filename=image_filename,
                type=self.__ImageType.THUMBNAIL,
            ),
        ).set_exact_dimensions(
            ImageDimensions(height=200, width=200)
        ).set_original_image_uri(
            full_size_image.uri
        ).add_rights(
            image_rights
        ).set_src(
            CostumeCoreTerm.THUMBNAIL_BASE_URL + image_filename
        ).build()

    def __transform_feature_value_record_to_concept(
        self,
        *,
        feature_records,
        feature_value_record,
        variant_term_records_by_feature_value_id,
    ) -> Concept | None:
        fields = feature_value_record["fields"]
        id_ = feature_value_record["id"]

        feature_uris = []
        for feature_record_id in fields.get("features", []):
            for feature_record in feature_records:
                if feature_record["id"] == feature_record_id:
                    feature_uris.append(URIRef(feature_record["fields"]["URI"]))
                    break

        if not feature_uris:
            self.__logger.debug(
                "feature value %s does not belong to any features",
                id_,
            )
            return None

        # aat_id=fields.get("AATID"),
        #     wikidata_id=fields.get("WikidataID"),

        concept_uri = COCO[fields["id"]]
        concept_builder = Concept.builder(
            property_uris=tuple(feature_uris),
            value=concept_uri,
            uri=concept_uri,
        )

        pref_label = fields["display_name_en"]
        concept_builder.set_pref_label(pref_label)

        alt_labels = set()
        inflector = Inflector()
        for variant_term_record in variant_term_records_by_feature_value_id.get(
            id_, []
        ):
            variant_term = variant_term_record["fields"]["term"]
            if variant_term_record["fields"]["xml-lang"] == "en":
                if variant_term == pref_label:
                    self.__logger.debug(
                        "feature value %s has variant term that is the same as the preferred label: %s",
                        id_,
                        pref_label,
                    )
                    continue
                elif inflector.singularize(variant_term) == pref_label:
                    self.__logger.debug(
                        "feature value %s has variant term (%s) that is the the plural of the preferred label (%s)",
                        id_,
                        variant_term,
                        pref_label,
                    )
                    continue
                elif inflector.pluralize(variant_term) == pref_label:
                    self.__logger.debug(
                        "feature value %s has variant term (%s) that is the the singular of the preferred label (%s)",
                        id_,
                        variant_term,
                        pref_label,
                    )
                    continue
            alt_labels.add(
                Literal(variant_term, lang=variant_term_record["fields"]["xml-lang"])
            )
        for alt_label in alt_labels:
            concept_builder.add_alt_label(alt_label)

        feature_value_description = self.__transform_description_fields_to_text(
            record_fields=fields
        )
        if feature_value_description:
            concept_builder.set_definition(feature_value_description)

        return concept_builder.build()

    def __transform_feature_value_record_to_costume_core_term(
        self, *, feature_records, feature_value_record, image_records_by_id
    ) -> CostumeCoreTerm | None:
        fields = feature_value_record["fields"]

        description_text_en = fields.get("description_text_en")
        if description_text_en:
            description = CostumeCoreDescription(
                rights=self.__transform_rights_fields_to_costume_core_rights(
                    key_prefix="description", record_fields=fields
                ),
                text_en=fields["description_text_en"],
            )
        else:
            description = None

        features_list = []
        for feature_record_id in fields.get("features", []):
            for feature_record in feature_records:
                if feature_record["id"] == feature_record_id:
                    features_list.append(feature_record["fields"]["id"])
                    break
        features = tuple(features_list)

        image_record_id = fields.get("image_filename")
        if image_record_id:
            image_record_id = image_record_id[0]
            assert image_record_id

            image_record = image_records_by_id[image_record_id]
            image_filename = image_record["fields"]["filename"]

            image_rights = self.__transform_rights_fields_to_costume_core_rights(
                key_prefix="image", record_fields=feature_value_record["fields"]
            )
        else:
            self.__logger.debug(
                "feature value record %s has no image_filename",
                feature_value_record["fields"]["id"],
            )
            image_filename = None
            image_rights = None

        # cc_uri = fields.get("CC_URI")
        # if cc_uri is None:
        #     uri = inferred_uri
        # elif cc_uri != inferred_uri:
        #     self.__logger.warning(
        #         "CC_URI (%s) does not match inferred URI (%s)", cc_uri, inferred_uri
        #     )
        #     uri = inferred_uri

        return CostumeCoreTerm(
            aat_id=fields.get("AATID"),
            description=description,
            display_name_en=fields["display_name_en"],
            features=features,
            id=fields["id"],
            image_filename=image_filename,
            image_rights=image_rights,
            _uri=URIRef(str(COCO[fields["id"]])),
            wikidata_id=fields.get("WikidataID"),
        )

    def __transform_feature_value_record_to_work(
        self, *, feature_records, feature_value_record
    ) -> Work | None:
        fields = feature_value_record["fields"]

        work_builder = Work.builder(
            title=fields["display_name_en"], uri=URIRef(str(COCO[fields["id"]]))
        )

        description = self.__transform_description_fields_to_text(record_fields=fields)
        if description:
            work_builder.set_description(description)

        for feature_record_id in fields.get("features", []):
            for feature_record in feature_records:
                if feature_record["id"] == feature_record_id:
                    work_builder.add_collection_uri(
                        URIRef(feature_record["fields"]["URI"])
                    )

        return work_builder.build()

    def __transform_feature_value_records(
        self,
        *,
        feature_records,
        feature_value_records,
        image_records_by_id,
        variant_term_records,
    ) -> Iterable[Model]:
        variant_term_records_by_feature_value_id: Dict[str, List[Any]] = {}
        for variant_term_record in variant_term_records:
            assert len(variant_term_record["fields"]["feature_values_id"]) == 1
            variant_term_records_by_feature_value_id.setdefault(
                variant_term_record["fields"]["feature_values_id"][0], []
            ).append(variant_term_record)

        for feature_value_record in feature_value_records:
            fields = feature_value_record["fields"]
            id_ = fields["id"]

            if not id_.startswith("CC"):
                continue

            if "display_name_en" not in fields:
                continue

            costume_core_term = (
                self.__transform_feature_value_record_to_costume_core_term(
                    feature_records=feature_records,
                    feature_value_record=feature_value_record,
                    image_records_by_id=image_records_by_id,
                )
            )
            if costume_core_term:
                yield costume_core_term

            concept = self.__transform_feature_value_record_to_concept(
                feature_records=feature_records,
                feature_value_record=feature_value_record,
                variant_term_records_by_feature_value_id=variant_term_records_by_feature_value_id,
            )
            if concept is not None:
                yield concept

                yield from self.__transform_feature_value_record_to_images(
                    depicts_uri=concept.uri,
                    feature_value_record=feature_value_record,
                    image_records_by_id=image_records_by_id,
                )

            work = self.__transform_feature_value_record_to_work(
                feature_records=feature_records,
                feature_value_record=feature_value_record,
            )
            if work is not None:
                yield work

                if concept is not None:
                    assert concept.uri == work.uri
                else:
                    yield from self.__transform_feature_value_record_to_images(
                        depicts_uri=work.uri,
                        feature_value_record=feature_value_record,
                        image_records_by_id=image_records_by_id,
                    )

    def __transform_image_records_to_images(
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
            image_rights = self.__transform_rights_fields_to_rights(
                key_prefix="image", record_fields=image_record["fields"]
            )

            # The same image may be used to depict multiple objects e.g., a feature value, a feature, and a feature set.
            # Allow the src to be duplicated but make the URIs unique.

            full_size_image = (
                Image.builder(
                    depicts_uri=depicts_uri,
                    uri=self.__image_uri(
                        depicts_uri=depicts_uri,
                        depicts_type=depicts_type,
                        filename=image_filename,
                        type=self.__ImageType.FULL_SIZE,
                    ),
                )
                .add_rights(image_rights)
                .set_src(CostumeCoreTerm.FULL_SIZE_IMAGE_BASE_URL + image_filename)
                .build()
            )

            yield full_size_image

            yield Image.builder(
                depicts_uri=depicts_uri,
                uri=self.__image_uri(
                    depicts_uri=depicts_uri,
                    depicts_type=depicts_type,
                    filename=image_filename,
                    type=self.__ImageType.THUMBNAIL,
                ),
            ).set_exact_dimensions(
                ImageDimensions(height=200, width=200)
            ).set_original_image_uri(
                full_size_image.uri
            ).add_rights(
                image_rights
            ).set_src(
                CostumeCoreTerm.THUMBNAIL_BASE_URL + image_filename
            ).build()

    def __transform_rights_fields_to_costume_core_rights(
        self, *, key_prefix: str, record_fields: Dict[str, Union[str, List[str], None]]
    ) -> CostumeCoreRights:
        def get_first_list_element(list_: Union[str, List[str], None]):
            if list_ is None:
                return None
            if not isinstance(list_, list):
                return list_
            assert len(list_) == 1
            return list_[0]

        return CostumeCoreRights(
            author=get_first_list_element(record_fields[f"{key_prefix}_rights_author"]),
            license_uri=get_first_list_element(
                record_fields.get(f"{key_prefix}_rights_license")
            ),
            rights_statement_uri=get_first_list_element(
                record_fields.get(f"{key_prefix}_rights_statement")
            ),
            source_name=get_first_list_element(
                record_fields[f"{key_prefix}_rights_source_name"]
            ),
            source_url=get_first_list_element(
                record_fields[f"{key_prefix}_rights_source_url"]
            ),
        )

    def __transform_rights_fields_to_rights(
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

        rights_builder = Rights.builder().add_creator(
            get_first_list_element(record_fields.get(f"{key_prefix}_rights_author"))
        )

        license = transform_rights_uri(
            available_rights_uris=self.__available_license_uris,
            rights_uri_str=get_first_list_element(
                record_fields.get(f"{key_prefix}_rights_license")
            ),
            referenced_rights_uris=self.__referenced_license_uris,
        )
        if license:
            rights_builder.add_license(license)

        rights_statement = transform_rights_uri(
            available_rights_uris=self.__available_rights_statement_uris,
            rights_uri_str=get_first_list_element(
                record_fields.get(f"{key_prefix}_rights_statement")
            ),
            referenced_rights_uris=self.__referenced_rights_statement_uris,
        )
        if rights_statement:
            rights_builder.add_statement(rights_statement)

        return rights_builder.build()
        # source_name=get_first_list_element(
        #     fields[f"{key_prefix}_rights_source_name"]
        # ),
        # source_url=get_first_list_element(
        #     fields[f"{key_prefix}_rights_source_url"]
        # ),
