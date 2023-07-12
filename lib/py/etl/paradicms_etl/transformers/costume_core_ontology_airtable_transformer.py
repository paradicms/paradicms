import logging
from typing import (
    Dict,
    Tuple,
    Iterable,
    Union,
    List,
    Set,
    Optional,
    Any,
    TypeVar,
)
from urllib.parse import quote_plus

import PIL
from inflector import Inflector
from rdflib import URIRef, Literal

from paradicms_etl.model import Model
from paradicms_etl.models.cms.cms_image_data import CmsImageData
from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.dc.dc_license_document import DcLicenseDocument
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.license import License
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_group import PropertyGroup
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_property import SchemaProperty
from paradicms_etl.models.schema.schema_text_object import SchemaTextObject
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work
from paradicms_etl.namespaces import COCO

_RightsMixinBuilderT = TypeVar("_RightsMixinBuilderT", bound=RightsMixin.Builder)


class CostumeCoreOntologyAirtableTransformer:
    """
    A transformer that accepts records from the Costume Core ontology reference Airtable (base appS5bN4hk1aWEzE0) and
    transforms the feature sets, features/predicates, and feature values/terms into Paradicms models.

    The code in this class used to be in several transformer implementations. Each implementation transformed the source
    data into different models. The implementations were merged on the assumption that the models should be filtered
    coming out of this transformer.

    The different types of yielded models are:
    - Collection, Image, and Work to build a faceted browser for the Costume Core ontology itself
    - CostumeCoreOntology, CostumeCoreOntology.Predicate, and CostumeCoreOntology.Term to build an RDF/OWL version of the Costume Core
        ontology
    - Concept (formerly WorksheetFeatureValue), Image, Property (formerly WorksheetFeature), and PropertyGroup (formerly WorksheetFeatureSet) to build a Costume Core
        worksheet app
    """

    def __init__(
        self,
        *,
        ontology_version: Optional[str] = None,
    ):
        self.__logger = logging.getLogger(__name__)
        self.__ontology_version = ontology_version

        self.__available_licenses_by_uri: Dict[URIRef, License] = {}
        self.__available_licenses_by_uri.update(CreativeCommonsLicenses.by_uri())
        odc_by_license = (
            DcLicenseDocument.builder(
                title="Open Data Commons Attribution DcLicenseDocument (ODC-By) v1.0",
                uri=URIRef("http://opendatacommons.org/licenses/by/1-0/"),
            )
            .set_identifier(
                "ODC-By",
            )
            .set_version(
                version="1.0",
            )
            .build()
        )
        self.__available_licenses_by_uri[odc_by_license.uri] = odc_by_license  # type: ignore

        self.__available_rights_statements_by_uri = (
            RightsStatementsDotOrgRightsStatements.by_uri()
        )
        # Track which licenses and rights statements we want to yield as we see references to them
        self.__referenced_license_uris: Set[URIRef] = set()
        self.__referenced_rights_statement_uris: Set[URIRef] = set()

    @staticmethod
    def __feature_range_uri(feature_record) -> URIRef:
        return URIRef(
            ":".join(
                (
                    "urn",
                    "costumeCore",
                    "ontology",
                    "featureRange",
                    quote_plus(feature_record["fields"]["id"]),
                )
            )
        )

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

    def __call__(self, *, base: Dict[str, Any], records_by_table: Dict[str, Tuple]) -> Iterable[Model]:  # type: ignore
        costume_core_ontology_builder = CostumeCoreOntology.builder()
        if self.__ontology_version is not None:
            costume_core_ontology_builder.set_version(self.__ontology_version)
        yield costume_core_ontology_builder.build()

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
        image_records = tuple(record for record in records_by_table["images"])
        image_records_by_id = {
            image_record["id"]: image_record for image_record in image_records
        }
        # rights_licenses_records = tuple(
        #     record
        #     for record in records_by_table["rights_licenses"]
        #     if "Nickname" in record["fields"]
        # )
        variant_term_records = tuple(records_by_table["AAT_variant_terms"])
        variant_term_records_by_feature_value_id: Dict[str, List[Any]] = {}
        for variant_term_record in variant_term_records:
            assert len(variant_term_record["fields"]["feature_values_id"]) == 1
            variant_term_records_by_feature_value_id.setdefault(
                variant_term_record["fields"]["feature_values_id"][0], []
            ).append(variant_term_record)

        # Track the outputs of various transformations to use in other transformatios

        # Feature values
        costume_core_ontology_terms_by_feature: Dict[
            str, List[CostumeCoreOntology.Term]
        ] = {}
        works_by_feature_record_id: Dict[str, List[Work]] = {}
        for feature_value_record in feature_value_records:
            feature_value_record_fields = feature_value_record["fields"]
            feature_value_id = feature_value_record_fields["id"]

            if not feature_value_id.startswith("CC"):
                continue

            if "display_name_en" not in feature_value_record_fields:
                continue

            costume_core_ontology_term = (
                self.__transform_feature_value_record_to_costume_core_ontology_term(
                    feature_records=feature_records,
                    feature_value_record=feature_value_record,
                )
            )
            if costume_core_ontology_term:
                yield costume_core_ontology_term

                if costume_core_ontology_term.features:
                    for (
                        costume_core_ontology_term_feature
                    ) in costume_core_ontology_term.features:
                        costume_core_ontology_terms_by_feature.setdefault(
                            costume_core_ontology_term_feature, []
                        ).append(costume_core_ontology_term)

            feature_value_image_records = []
            for feature_value_image in feature_value_record["fields"].get("images", []):
                feature_value_image_record = None
                for image_record in image_records_by_id.values():
                    if (
                        image_record["fields"]["image"][0]["id"]
                        == feature_value_image["id"]
                    ):
                        feature_value_image_record = image_record
                        break
                if feature_value_image_record is not None:
                    feature_value_image_records.append(feature_value_image_record)
                else:
                    self.__logger.warning(
                        "no image record found for feature value image %s",
                        feature_value_image,
                    )

            yield from self.__transform_feature_value_record_to_concept(
                feature_records=feature_records,
                feature_value_image_records=feature_value_image_records,
                feature_value_record=feature_value_record,
                variant_term_records_by_feature_value_id=variant_term_records_by_feature_value_id,
            )

            for feature_value_model in self.__transform_feature_value_record_to_work(
                feature_value_image_records=feature_value_image_records,
                feature_value_record=feature_value_record,
            ):
                yield feature_value_model
                if isinstance(feature_value_model, Work):
                    for feature_record_id in feature_value_record_fields.get(
                        "features", []
                    ):
                        works_by_feature_record_id.setdefault(
                            feature_record_id, []
                        ).append(feature_value_model)

        # Features
        properties_by_feature_record_id: Dict[str, Property] = {}
        for feature_record in feature_records:
            feature_record_fields = feature_record["fields"]

            if "display_name_en" not in feature_record_fields:
                continue
            if "URI" not in feature_record_fields:
                continue

            if feature_record_fields["URI"].startswith(str(COCO)):
                collection = self.__transform_feature_record_to_collection(
                    feature_record=feature_record,
                    feature_works=tuple(
                        works_by_feature_record_id.get(feature_record["id"], [])
                    ),
                )
                if collection:
                    yield collection

                yield self.__transform_feature_record_to_costume_core_ontology_predicate(
                    costume_core_ontology_terms_by_feature=costume_core_ontology_terms_by_feature,
                    feature_record=feature_record,
                )

            for feature_model in self.__transform_feature_record_to_property(
                feature_image_records=tuple(
                    image_records_by_id[image_record_id]
                    for image_record_id in feature_record_fields.get("images", [])
                ),
                feature_record=feature_record,
            ):
                yield feature_model
                if isinstance(feature_model, Property):
                    assert feature_record["id"] not in properties_by_feature_record_id
                    properties_by_feature_record_id[
                        feature_record["id"]
                    ] = feature_model

        # Feature sets
        for feature_set_record in feature_set_records:
            feature_set_properties: List[Property] = []
            for feature_set_feature_record_id in feature_set_record["fields"].get(
                "features", []
            ):
                for feature_record in feature_records:
                    if feature_set_feature_record_id == feature_record["id"]:
                        feature_set_properties.append(
                            properties_by_feature_record_id[
                                feature_set_feature_record_id
                            ]
                        )
                        break

            yield from self.__transform_feature_set_record_to_property_group(
                feature_set_properties=tuple(feature_set_properties),
                feature_set_record=feature_set_record,
                image_records_by_id=image_records_by_id,
            )

        if costume_core_ontology_terms_by_feature:
            print(
                "Terms that have a 'features' that doesn't correspond to a predicate:"
            )
            for (
                predicate_id,
                predicate_terms,
            ) in costume_core_ontology_terms_by_feature.items():
                print(predicate_id, ", ".join(term.id for term in predicate_terms))

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
        return self.__transform_rights_fields_to_rights(
            key_prefix="description",
            record_fields=record_fields,
            model_builder=SchemaTextObject.builder(description_text_en),
        ).build()

    @staticmethod
    def __transform_feature_record_to_collection(
        feature_record, feature_works: Tuple[Work, ...]
    ) -> Optional[Collection]:
        fields = feature_record["fields"]
        if not fields.get("feature_values_labels", []):
            # Don't yield Collections that won't have any associated Works
            return None
        collection_builder = SchemaCollection.builder(
            name=fields["display_name_en"],
            uri=URIRef(fields["URI"]),
        )
        for work in feature_works:
            collection_builder.add_work(work.uri)
        return collection_builder.build()

    @staticmethod
    def __transform_feature_record_to_costume_core_ontology_predicate(
        *,
        costume_core_ontology_terms_by_feature: Dict[
            str, List[CostumeCoreOntology.Term]
        ],
        feature_record,
    ) -> CostumeCoreOntology.Predicate:
        fields = feature_record["fields"]
        id_ = fields["id"].lstrip()
        return CostumeCoreOntology.Predicate(
            description_text_en=fields["description_text_en"],
            display_name_en=fields["display_name_en"],
            id=id_,
            sub_property_of_uri=fields.get("sub_property_of"),
            terms=tuple(costume_core_ontology_terms_by_feature.pop(id_, tuple())),
            _uri=URIRef(fields["URI"]),
        )

    def __transform_feature_record_to_property(
        self, *, feature_image_records, feature_record
    ) -> Iterable[Union[Image, Property]]:
        fields = feature_record["fields"]

        feature_uri = URIRef(fields["URI"])

        property_builder = (
            SchemaProperty.builder(name=fields["display_name_en"], uri=feature_uri)
            .set_order(int(fields["sort_order"]))
            .set_range(self.__feature_range_uri(feature_record))
        )

        for image in self.__transform_image_records_to_images(
            depicts_type="property",
            depicts_uri=property_builder.uri,
            image_records=feature_image_records,
        ):
            yield image
            property_builder.add_image(image)

        feature_description = self.__transform_description_fields_to_text(
            record_fields=fields,
        )
        if feature_description:
            property_builder.set_description(feature_description)

        if fields["Filterable"] == "Y":
            # if fields.get("feature_values_ids", []):
            property_builder.set_filterable(True)
        # elif feature_uri in self.__FILTERABLE_FEATURE_URIS:
        #     property_builder.set_filterable(True)
        else:
            assert fields["Filterable"] == "N"

        if fields["Searchable"] == "Y":
            property_builder.set_searchable(True)
        else:
            assert fields["Searchable"] == "N"

        yield property_builder.build()

    def __transform_feature_set_record_to_property_group(
        self,
        feature_set_properties: Tuple[Property, ...],
        feature_set_record,
        image_records_by_id,
    ) -> Iterable[Union[Image, PropertyGroup]]:
        feature_set_uri = self.__feature_set_uri(feature_set_record)

        property_group_builder = CmsPropertyGroup.builder(
            label=feature_set_record["fields"]["display_name_en"],
            uri=feature_set_uri,
        )
        feature_set_description = self.__transform_description_fields_to_text(
            record_fields=feature_set_record["fields"],
        )
        if feature_set_description:
            property_group_builder.set_comment(feature_set_description)

        for image in self.__transform_image_records_to_images(
            depicts_type="propertyGroup",
            depicts_uri=property_group_builder.uri,
            image_records=tuple(
                image_records_by_id[image_record_id]
                for image_record_id in feature_set_record["fields"].get("images", [])
            ),
        ):
            yield image
            property_group_builder.add_image(image)

        for property_ in feature_set_properties:
            property_group_builder.add_property(property_)

        yield property_group_builder.build()

    def __transform_feature_value_record_to_concept(
        self,
        *,
        feature_records,
        feature_value_image_records,
        feature_value_record,
        variant_term_records_by_feature_value_id,
    ) -> Iterable[Union[Concept, Image]]:
        fields = feature_value_record["fields"]
        id_ = feature_value_record["id"]

        # aat_id=fields.get("AATID"),
        #     wikidata_id=fields.get("WikidataID"),

        concept_uri = COCO[fields["id"]]
        pref_label = fields["display_name_en"]

        concept_builder = SchemaDefinedTerm.builder(
            name=pref_label,
            uri=concept_uri,
        )

        added_features = False
        for feature_record_id in fields.get("features", []):
            for feature_record in feature_records:
                if feature_record["id"] == feature_record_id:
                    concept_builder.add_type_uri(
                        self.__feature_range_uri(feature_record)
                    )
                    added_features = True
                    break
        if not added_features:
            self.__logger.debug(
                "feature value %s does not belong to any features",
                id_,
            )
            return None

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
            concept_builder.add_alternate_name(alt_label)

        feature_value_description = self.__transform_description_fields_to_text(
            record_fields=fields
        )
        if feature_value_description:
            concept_builder.set_description(feature_value_description)

        for image in self.__transform_image_records_to_images(
            depicts_type="concept",
            depicts_uri=concept_uri,
            image_records=feature_value_image_records,
        ):
            yield image
            concept_builder.add_image(image.uri)

        yield concept_builder.build()

    def __transform_feature_value_record_to_costume_core_ontology_term(
        self, *, feature_records, feature_value_record
    ) -> Optional[CostumeCoreOntology.Term]:
        fields = feature_value_record["fields"]

        description_text_en = fields.get("description_text_en")
        if description_text_en:
            description = CostumeCoreOntology.Description(
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

        # cc_uri = fields.get("CC_URI")
        # if cc_uri is None:
        #     uri = inferred_uri
        # elif cc_uri != inferred_uri:
        #     self.__logger.warning(
        #         "CC_URI (%s) does not match inferred URI (%s)", cc_uri, inferred_uri
        #     )
        #     uri = inferred_uri

        return CostumeCoreOntology.Term(
            aat_id=fields.get("AATID"),
            description=description,
            display_name_en=fields["display_name_en"],
            features=features,
            id=fields["id"],
            _uri=URIRef(str(COCO[fields["id"]])),
            wikidata_id=fields.get("WikidataID"),
        )

    def __transform_feature_value_record_to_work(
        self, *, feature_value_image_records, feature_value_record
    ) -> Iterable[Union[Image, Work]]:
        fields = feature_value_record["fields"]

        work_builder = SchemaCreativeWork.builder(
            name=fields["display_name_en"], uri=URIRef(str(COCO[fields["id"]]))
        )

        description = self.__transform_description_fields_to_text(record_fields=fields)
        if description:
            work_builder.set_description(description)

        # for feature_record_id in fields.get("features", []):
        #     for feature_record in feature_records:
        #         if feature_record["id"] == feature_record_id:
        #             work_builder.add_collection_uri(
        #                 URIRef(feature_record["fields"]["URI"])
        #             )

        for image in self.__transform_image_records_to_images(
            depicts_type="work",
            depicts_uri=work_builder.uri,
            image_records=feature_value_image_records,
        ):
            yield image
            work_builder.add_image(image.uri)

        yield work_builder.build()

    def __transform_image_records_to_images(
        self, *, depicts_type: str, depicts_uri: URIRef, image_records
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
            for image_field_value in image_record["fields"]["image"]:
                if "cached_file_path" not in image_field_value:
                    self.__logger.warning(
                        "image %s (url=%s) does not have a cached_file_path, skipping",
                        image_field_value["id"],
                        image_field_value["url"],
                    )
                    continue

                with PIL.Image.open(image_field_value["cached_file_path"]) as pil_image:
                    image_data = CmsImageData.from_pil_image(
                        pil_image.copy().convert("RGB")
                    )

                # The same image may be used to depict multiple objects e.g., a feature value, a feature, and a feature set.
                # Allow the src to be duplicated but make the URIs unique.
                yield self.__transform_rights_fields_to_rights(
                    key_prefix="image",
                    record_fields=image_record["fields"],
                    model_builder=SchemaImageObject.builder(
                        uri=URIRef(
                            ":".join(
                                (
                                    "urn",
                                    "costumeCore",
                                    "image",
                                    str(depicts_type),
                                    quote_plus(depicts_uri),
                                    image_field_value["id"],
                                )
                            )
                        ),
                    )
                    .set_encoding_format(image_field_value["type"])
                    .set_exact_dimensions(
                        ImageDimensions(
                            height=image_field_value["height"],
                            width=image_field_value["width"],
                        )
                    )
                    .set_src(image_data),
                ).build()

    @staticmethod
    def __transform_rights_fields_to_costume_core_rights(
        *, key_prefix: str, record_fields: Dict[str, Union[str, List[str], None]]
    ) -> CostumeCoreOntology.Rights:
        def get_first_list_element(list_: Union[str, List[str], None]):
            if list_ is None:
                return None
            if not isinstance(list_, list):
                return list_
            assert len(list_) == 1
            return list_[0]

        return CostumeCoreOntology.Rights(
            author=get_first_list_element(
                record_fields.get(f"{key_prefix}_rights_author")
            ),
            license_uri=get_first_list_element(
                record_fields.get(f"{key_prefix}_rights_license")
            ),
            rights_statement_uri=get_first_list_element(
                record_fields.get(f"{key_prefix}_rights_statement")
            ),
            source_name=get_first_list_element(
                record_fields.get(f"{key_prefix}_rights_source_name")
            ),
            source_url=get_first_list_element(
                record_fields.get(f"{key_prefix}_rights_source_url")
            ),
        )

    def __transform_rights_fields_to_rights(
        self,
        *,
        key_prefix: str,
        model_builder: _RightsMixinBuilderT,
        record_fields: Dict[str, Union[str, List[str], None]],
    ) -> _RightsMixinBuilderT:
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

        model_builder.add_creator(
            get_first_list_element(record_fields.get(f"{key_prefix}_rights_author"))
        )

        license_uri: Optional[URIRef] = None
        rights_statement_uri: Optional[URIRef] = None

        license_uri_str = get_first_list_element(
            record_fields.get(f"{key_prefix}_rights_license")
        )
        if license_uri_str:
            license_uri = URIRef(license_uri_str)

        rights_statement_uri_str = get_first_list_element(
            record_fields.get(f"{key_prefix}_rights_statement")
        )
        if rights_statement_uri_str:
            if rights_statement_uri_str in {
                "https://creativecommons.org/publicdomain/mark/1.0/",
                "https://creativecommons.org/publicdomain/zero/1.0/",
            }:
                if license_uri is None:
                    license_uri = URIRef(rights_statement_uri_str)
            else:
                rights_statement_uri = URIRef(rights_statement_uri_str)

        if license_uri is not None:
            if license_uri in self.__available_licenses_by_uri:
                model_builder.add_license(license_uri)
                self.__referenced_license_uris.add(license_uri)
            else:
                self.__logger.warning("unknown license URI: %s", license_uri)

        if rights_statement_uri is not None:
            if rights_statement_uri in self.__available_rights_statements_by_uri:
                model_builder.add_rights_statement(rights_statement_uri)
                self.__referenced_rights_statement_uris.add(rights_statement_uri)
            else:
                self.__logger.warning(
                    "unknown rights statement URI: %s", rights_statement_uri
                )

        # source_name=get_first_list_element(
        #     fields[f"{key_prefix}_rights_source_name"]
        # ),
        # source_url=get_first_list_element(
        #     fields[f"{key_prefix}_rights_source_url"]
        # ),

        return model_builder
