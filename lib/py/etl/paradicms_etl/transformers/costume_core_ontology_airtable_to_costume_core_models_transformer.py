import logging
from typing import Any, Dict, List, Tuple, Union

from rdflib import Graph, URIRef

from paradicms_etl.models.costume_core.costume_core_description import (
    CostumeCoreDescription,
)
from paradicms_etl.models.costume_core.costume_core_ontology import CostumeCoreOntology
from paradicms_etl.models.costume_core.costume_core_predicate import (
    CostumeCorePredicate,
)
from paradicms_etl.models.costume_core.costume_core_rights import CostumeCoreRights
from paradicms_etl.models.costume_core.costume_core_term import CostumeCoreTerm
from paradicms_etl.namespaces import COCO


class CostumeCoreOntologyAirtableToCostumeCoreModelsTransformer:
    def __init__(self, *, ontology_version: str):
        self.__logger = logging.getLogger(__name__)
        self.__ontology_version = ontology_version

    def __parse_predicates(
        self, *, feature_records, terms_by_features: Dict[str, List[CostumeCoreTerm]]
    ) -> Tuple[CostumeCorePredicate, ...]:
        predicates = []

        for feature_record in feature_records:
            fields = feature_record["fields"]
            try:
                uri = fields["URI"]
            except KeyError:
                continue
            id = fields["id"].lstrip()
            try:
                predicate_terms = tuple(terms_by_features.pop(id))
            except KeyError:
                predicate_terms = tuple()
            predicates.append(
                CostumeCorePredicate(
                    description_text_en=fields["description_text_en"],
                    display_name_en=fields["display_name_en"],
                    id=id,
                    sub_property_of_uri=fields.get("sub_property_of"),
                    terms=predicate_terms,
                    _uri=URIRef(uri),
                )
            )
        return tuple(sorted(predicates, key=lambda predicate: predicate.id))

    def __parse_rights(
        self, fields: Dict[str, Union[str, List[str], None]], key_prefix: str
    ) -> CostumeCoreRights:
        def get_first_list_element(list_: Union[str, List[str], None]):
            if list_ is None:
                return None
            if not isinstance(list_, list):
                return list_
            assert len(list_) == 1
            return list_[0]

        return CostumeCoreRights(
            author=get_first_list_element(fields[f"{key_prefix}_rights_author"]),
            license_uri=get_first_list_element(
                fields.get(f"{key_prefix}_rights_license")
            ),
            rights_statement_uri=get_first_list_element(
                fields.get(f"{key_prefix}_rights_statement")
            ),
            source_name=get_first_list_element(
                fields[f"{key_prefix}_rights_source_name"]
            ),
            source_url=get_first_list_element(
                fields[f"{key_prefix}_rights_source_url"]
            ),
        )

    def __parse_terms(
        self, *, feature_records, feature_value_records, image_records
    ) -> Tuple[CostumeCoreTerm, ...]:
        image_records_by_id = {
            image_record["id"]: image_record for image_record in image_records
        }

        terms = []
        for feature_value_record in feature_value_records:
            fields = feature_value_record["fields"]

            if not fields["id"].startswith("CC"):
                # All term ID's start with CC.
                # The predicates are appended to the end of the terms spreadsheet, and don't start with CC.
                continue

            if "display_name_en" not in fields:
                continue

            description_text_en = fields.get("description_text_en")
            if description_text_en:
                description = CostumeCoreDescription(
                    rights=self.__parse_rights(fields, "description"),
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

                image_rights = self.__parse_rights(
                    feature_value_record["fields"], "image"
                )
            else:
                self.__logger.debug(
                    "feature value record %s has no image_filename",
                    feature_value_record["fields"]["id"],
                )
                image_filename = None
                image_rights = None

            # cc_uri = fields.get("CC_URI")
            inferred_uri = str(COCO[fields["id"]])
            # if cc_uri is None:
            #     uri = inferred_uri
            # elif cc_uri != inferred_uri:
            #     self.__logger.warning(
            #         "CC_URI (%s) does not match inferred URI (%s)", cc_uri, inferred_uri
            #     )
            #     uri = inferred_uri

            term = CostumeCoreTerm(
                aat_id=fields.get("AATID"),
                description=description,
                display_name_en=fields["display_name_en"],
                features=features,
                id=fields["id"],
                image_filename=image_filename,
                image_rights=image_rights,
                _uri=URIRef(inferred_uri),
                wikidata_id=fields.get("WikidataID"),
            )
            terms.append(term)
        return tuple(sorted(terms, key=lambda term: term.id))

    def __call__(self, *, base: Dict[str, Any], records_by_table: Dict[str, Tuple]) -> Graph:  # type: ignore
        yield CostumeCoreOntology.builder(version=self.__ontology_version).build()

        feature_records = tuple(
            record
            for record in records_by_table["features"]
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
        # rights_licenses_records = tuple(
        #     record
        #     for record in records_by_table["rights_licenses"]
        #     if "Nickname" in record["fields"]
        # )

        terms = self.__parse_terms(
            feature_records=feature_records,
            image_records=image_records,
            feature_value_records=feature_value_records,
        )
        yield from terms

        terms_by_features: Dict[str, List[CostumeCoreTerm]] = {}
        for term in terms:
            if term.features:
                for feature in term.features:
                    terms_by_features.setdefault(feature, []).append(term)

        terms_by_features_left = terms_by_features.copy()
        predicates = self.__parse_predicates(
            feature_records=feature_records,
            terms_by_features=terms_by_features_left,
        )
        yield from predicates

        if terms_by_features_left:
            print(
                "Terms that have a 'features' that doesn't correspond to a predicate:"
            )
            for predicate_id, predicate_terms in terms_by_features_left.items():
                print(predicate_id, ", ".join(term.id for term in predicate_terms))
