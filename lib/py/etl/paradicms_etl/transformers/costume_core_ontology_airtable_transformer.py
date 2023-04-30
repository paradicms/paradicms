import logging
from enum import Enum
from typing import (
    Dict,
    Tuple,
    Iterable,
    Union,
    List,
    Set,
    FrozenSet,
    Optional,
    Any,
    TypeVar,
)
from urllib.parse import quote_plus

from inflector import Inflector
from rdflib import URIRef, Literal

from paradicms_etl.model import Model
from paradicms_etl.models.cms.cms_collection import CmsCollection
from paradicms_etl.models.cms.cms_concept import CmsConcept
from paradicms_etl.models.cms.cms_image import CmsImage
from paradicms_etl.models.cms.cms_license import CmsLicense
from paradicms_etl.models.cms.cms_property import CmsProperty
from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.cms.cms_rights_mixin import CmsRightsMixin
from paradicms_etl.models.cms.cms_text import CmsText
from paradicms_etl.models.cms.cms_work import CmsWork
from paradicms_etl.models.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.namespaces import COCO

_RightsMixinBuilderT = TypeVar("_RightsMixinBuilderT", bound=CmsRightsMixin.Builder)


class CostumeCoreOntologyAirtableTransformer:
    """
    A transformer that accepts records from the Costume Core ontology reference Airtable (base appS5bN4hk1aWEzE0) and
    transforms the feature sets, features/predicates, and feature values/terms into Paradicms models.

    The code in this class used to be in several transformer implementations. Each implementation transformed the source
    data into different models. The implementations were merged on the assumption that the models should be filtered
    coming out of this transformer.

    The different types of yielded models are:
    - CmsCollection, CmsImage, and CmsWork to build a faceted browser for the Costume Core ontology itself
    - CostumeCoreOntology, CostumeCoreOntology.Predicate, and CostumeCoreOntology.Term to build an RDF/OWL version of the Costume Core
        ontology
    - CmsConcept (formerly WorksheetFeatureValue), CmsImage, CmsProperty (formerly WorksheetFeature), and CmsPropertyGroup (formerly WorksheetFeatureSet) to build a Costume Core
        worksheet app
    """

    class __ImageDepictsType(Enum):
        FEATURE = "feature"
        FEATURE_SET = "featureSet"
        FEATURE_VALUE = "featureValue"

        def __str__(self):
            return self.value

    def __init__(self, *, ontology_version: Optional[str] = None):
        self.__logger = logging.getLogger(__name__)
        self.__ontology_version = ontology_version

        self.__available_licenses_by_uri = {
            license.uri: license for license in CreativeCommonsLicenses.as_tuple()
        }
        odc_by_license = (
            CmsLicense.builder(
                identifier="ODC-By",
                title="Open Data Commons Attribution CmsLicense (ODC-By) v1.0",
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

        # Track which licenses and rights statements we want to yield as we see references to them

        costume_core_ontology_terms_by_features: Dict[
            str, List[CostumeCoreOntology.Term]
        ] = {}
        for model in self.__transform_feature_value_records(
            feature_records=feature_records,
            feature_value_records=feature_value_records,
            image_records_by_id=image_records_by_id,
            variant_term_records=variant_term_records,
        ):
            yield model

            if isinstance(model, CostumeCoreOntology.Term) and model.features:
                for feature in model.features:
                    costume_core_ontology_terms_by_features.setdefault(
                        feature, []
                    ).append(model)

        yield from self.__transform_feature_records(
            costume_core_ontology_terms_by_features=costume_core_ontology_terms_by_features,
            feature_records=feature_records,
            feature_set_records=feature_set_records,
            image_records_by_id=image_records_by_id,
        )

        if costume_core_ontology_terms_by_features:
            print(
                "Terms that have a 'features' that doesn't correspond to a predicate:"
            )
            for (
                predicate_id,
                predicate_terms,
            ) in costume_core_ontology_terms_by_features.items():
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
    ) -> Optional[CmsText]:
        description_text_en = record_fields.get("description_text_en")
        if not description_text_en:
            return None
        assert isinstance(description_text_en, str)
        return self.__transform_rights_fields_to_rights(
            key_prefix="description",
            record_fields=record_fields,
            model_builder=CmsText.builder(description_text_en),
        ).build()

    def __transform_feature_record_to_collection(
        self, feature_record
    ) -> Optional[CmsCollection]:
        fields = feature_record["fields"]
        if not fields.get("feature_values_labels", []):
            # Don't yield Collections that won't have any associated Works
            return None
        return CmsCollection.builder(
            title=fields["display_name_en"],
            uri=URIRef(fields["URI"]),
        ).build()

    def __transform_feature_record_to_costume_core_ontology_predicate(
        self,
        *,
        costume_core_ontology_terms_by_features: Dict[
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
            terms=tuple(costume_core_ontology_terms_by_features.pop(id_, tuple())),
            _uri=URIRef(fields["URI"]),
        )

    def __transform_feature_record_to_property(
        self, *, feature_record, feature_set_records
    ) -> Optional[CmsProperty]:
        fields = feature_record["fields"]

        feature_set_uris = set()
        for feature_set_record in feature_set_records:
            for feature_record_id in feature_set_record["fields"].get("features", []):
                if feature_record_id == feature_record["id"]:
                    feature_set_uris.add(self.__feature_set_uri(feature_set_record))
                    break

        feature_uri = URIRef(fields["URI"])

        property_builder = (
            CmsProperty.builder(label=fields["display_name_en"], uri=feature_uri)
            .set_order(int(fields["sort_order"]))
            .set_range(self.__feature_range_uri(feature_record))
        )

        for feature_set_uri in feature_set_uris:
            property_builder.add_group_uri(feature_set_uri)

        feature_description = self.__transform_description_fields_to_text(
            record_fields=fields,
        )
        if feature_description:
            property_builder.set_comment(feature_description)

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

        return property_builder.build()

    def __transform_feature_records(
        self,
        *,
        costume_core_ontology_terms_by_features: Dict[
            str, List[CostumeCoreOntology.Term]
        ],
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

            if fields["URI"].startswith(str(COCO)):
                collection = self.__transform_feature_record_to_collection(
                    feature_record=feature_record
                )
                if collection:
                    yield collection

                yield self.__transform_feature_record_to_costume_core_ontology_predicate(
                    costume_core_ontology_terms_by_features=costume_core_ontology_terms_by_features,
                    feature_record=feature_record,
                )

            property_ = self.__transform_feature_record_to_property(
                feature_record=feature_record, feature_set_records=feature_set_records
            )
            if property_:
                yield property_

                yield from self.__transform_image_records_to_images(
                    depicts_type=self.__ImageDepictsType.FEATURE,
                    depicts_uri=property_.uri,
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

            property_group_builder = CmsPropertyGroup.builder(
                label=feature_set_record["fields"]["display_name_en"],
                uri=feature_set_uri,
            )
            feature_set_description = self.__transform_description_fields_to_text(
                record_fields=feature_set_record["fields"],
            )
            if feature_set_description:
                property_group_builder.set_comment(feature_set_description)
            yield property_group_builder.build()

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

        yield from self.__transform_image_records_to_images(
            depicts_type=self.__ImageDepictsType.FEATURE_VALUE,
            depicts_uri=depicts_uri,
            image_records=feature_value_image_records,
        )

    def __transform_feature_value_record_to_concept(
        self,
        *,
        feature_records,
        feature_value_record,
        variant_term_records_by_feature_value_id,
    ) -> Optional[CmsConcept]:
        fields = feature_value_record["fields"]
        id_ = feature_value_record["id"]

        # aat_id=fields.get("AATID"),
        #     wikidata_id=fields.get("WikidataID"),

        concept_uri = COCO[fields["id"]]
        concept_builder = CmsConcept.builder(
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

    def __transform_feature_value_record_to_costume_core_ontology_term(
        self, *, feature_records, feature_value_record, image_records_by_id
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
        self, *, feature_records, feature_value_record
    ) -> Optional[CmsWork]:
        fields = feature_value_record["fields"]

        work_builder = CmsWork.builder(
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

            costume_core_ontology_term = (
                self.__transform_feature_value_record_to_costume_core_ontology_term(
                    feature_records=feature_records,
                    feature_value_record=feature_value_record,
                    image_records_by_id=image_records_by_id,
                )
            )
            if costume_core_ontology_term:
                yield costume_core_ontology_term

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
    ) -> Iterable[CmsImage]:
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
            assert len(image_record["fields"]["image"]) == 1, len(
                image_record["fields"]["image"]
            )

            # The same image may be used to depict multiple objects e.g., a feature value, a feature, and a feature set.
            # Allow the src to be duplicated but make the URIs unique.

            full_size_image = self.__transform_rights_fields_to_rights(
                key_prefix="image",
                record_fields=image_record["fields"],
                model_builder=CmsImage.builder(
                    depicts_uri=depicts_uri,
                    uri=URIRef(
                        ":".join(
                            (
                                "urn",
                                "costumeCore",
                                "image",
                                str(depicts_type),
                                quote_plus(depicts_uri),
                                image_record["fields"]["image"][0]["id"],
                            )
                        )
                    ),
                ).set_src(image_record["fields"]["image"][0]["url"]),
            ).build()

            yield full_size_image

    def __transform_rights_fields_to_costume_core_rights(
        self, *, key_prefix: str, record_fields: Dict[str, Union[str, List[str], None]]
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

        model_builder.add_creator(
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
            model_builder.add_license(license)

        rights_statement = transform_rights_uri(
            available_rights_uris=self.__available_rights_statement_uris,
            rights_uri_str=get_first_list_element(
                record_fields.get(f"{key_prefix}_rights_statement")
            ),
            referenced_rights_uris=self.__referenced_rights_statement_uris,
        )
        if rights_statement:
            model_builder.add_rights_statement(rights_statement)

        # source_name=get_first_list_element(
        #     fields[f"{key_prefix}_rights_source_name"]
        # ),
        # source_url=get_first_list_element(
        #     fields[f"{key_prefix}_rights_source_url"]
        # ),

        return model_builder
