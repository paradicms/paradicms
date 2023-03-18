import logging
from typing import Set, FrozenSet, Union

from rdflib import URIRef, DCTERMS

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.costume_core.costume_core import CostumeCore
from paradicms_etl.models.costume_core.costume_core_rights import CostumeCoreRights
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.license import License
from paradicms_etl.models.property import Property
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.work import Work


class CostumeCoreModelsToParadicmsModelsTransformer:
    def __init__(self):
        self.__costume_core = CostumeCore()
        self.__logger = logging.getLogger(__name__)

    def __call__(self):
        predicates_by_id = {
            predicate.id: predicate for predicate in self.__costume_core.predicates
        }

        available_licenses_by_uri = {
            license.uri: license for license in CreativeCommonsLicenses.as_tuple()
        }
        odc_by_license = License.from_fields(
            identifier="ODC-By",
            title="Open Data Commons Attribution License (ODC-By) v1.0",
            uri=URIRef("http://opendatacommons.org/licenses/by/1-0/"),
            version="1.0",
        )
        available_licenses_by_uri[odc_by_license.uri] = odc_by_license
        available_license_uris = frozenset(available_licenses_by_uri.keys())

        available_rights_statements_by_uri = {
            rights_statement.uri: rights_statement
            for rights_statement in RightsStatementsDotOrgRightsStatements.as_tuple()
        }
        available_rights_statement_uris = frozenset(
            available_rights_statements_by_uri.keys()
        )

        yielded_license_uris: Set[URIRef] = set()
        yielded_rights_statement_uris: Set[URIRef] = set()
        yielded_collection_uris: Set[URIRef] = set()

        def transform_to_paradicms_rights(rights: CostumeCoreRights) -> Rights:
            def transform_rights_field(
                available_rights_uris: FrozenSet[URIRef],
                rights_uri: Union[None, str],
                yielded_rights_uris: Set[URIRef],
            ) -> Union[None, str, URIRef]:
                if not rights_uri:
                    return None

                rights_uri = URIRef(rights_uri)
                if rights_uri in available_rights_uris:
                    yielded_rights_uris.add(rights_uri)
                    return rights_uri

                if str(rights_uri).startswith("https://"):
                    http_rights_uri = URIRef("http://" + rights_uri[len("https://") :])
                    if http_rights_uri in available_rights_uris:
                        yielded_rights_uris.add(http_rights_uri)
                        return http_rights_uri

                if id(available_rights_uris) != id(
                    available_rights_statement_uris
                ) or rights_uri not in (
                    URIRef("https://creativecommons.org/publicdomain/zero/1.0/"),
                    URIRef("https://creativecommons.org/publicdomain/mark/1.0/"),
                ):
                    self.__logger.warning("unknown rights URI: %s", rights_uri)

                # for rights_license_record in rights_licenses_records:
                #     if rights_license_record["fields"]["URL"] == rights_uri:
                #         return rights_license_record["fields"]["Nickname"]

                # return URIRef(rights_uri)
                return None

            return Rights.from_fields(
                creator=rights.author,
                # holder=RightsValue(text=rights.source_name, uri=rights.source_url),
                holder=rights.source_name,
                # license=RightsValue(
                #     text=uri_text(rights.license_uri), uri=rights.license_uri
                # )
                # if rights.license_uri
                # else None,
                license=transform_rights_field(
                    available_license_uris,
                    rights.license_uri,
                    yielded_license_uris,
                ),
                # statement=RightsValue(
                #     text=uri_text(rights.rights_statement_uri),
                #     uri=rights.rights_statement_uri,
                # )
                # if rights.rights_statement_uri
                # else None,
                statement=transform_rights_field(
                    available_rights_statement_uris,
                    rights.rights_statement_uri,
                    yielded_rights_statement_uris,
                ),
            )

        for term in self.__costume_core.terms:
            # A term can belong to multiple predicates/collections, so yield them separately
            if not term.features:
                self.__logger.debug(
                    "term %s does not belong to any features, skipping", term.id
                )
                continue  # Doesn't belong to any predicates/collections

            term_predicates = tuple(
                predicates_by_id[feature_id] for feature_id in term.features
            )

            for predicate in term_predicates:
                collection_uri = URIRef(predicate.uri)
                if collection_uri in yielded_collection_uris:
                    continue

                # feature_record = feature_records_by_id[predicate.id]
                collection = Collection.from_fields(
                    title=predicate.label,
                    uri=collection_uri,
                )
                yield collection
                yielded_collection_uris.add(collection_uri)

            work_properties = []
            if term.description:
                work_properties.append(
                    Property(
                        DCTERMS.description,
                        term.description.text_en,
                    )
                )
                work_properties.append(
                    Property(
                        DCTERMS.creator,
                        term.description.rights.author,
                    )
                )

            work = Work.from_fields(
                abstract=term.description.text_en if term.description else None,
                collection_uris=tuple(
                    URIRef(term_predicate.uri) for term_predicate in term_predicates
                ),
                rights=transform_to_paradicms_rights(term.description.rights)
                if term.description
                else None,
                title=term.label,
                uri=URIRef(term.uri),
            )
            yield work

            if term.image_filename is None:
                continue
            assert term.image_rights is not None

            image_rights = transform_to_paradicms_rights(term.image_rights)

            original_image = Image.from_fields(
                depicts_uri=work.uri,
                rights=image_rights,
                uri=URIRef(str(term.full_size_image_url)),
            )
            yield original_image

            yield Image.from_fields(
                depicts_uri=work.uri,
                exact_dimensions=ImageDimensions(height=200, width=200),
                original_image_uri=original_image.uri,
                rights=image_rights,
                uri=URIRef(str(term.thumbnail_url)),
            )

        # Yield only the licenses and rights statements we use
        for yielded_license_uri in yielded_license_uris:
            yield available_licenses_by_uri[yielded_license_uri]

        for yielded_rights_statement_uri in yielded_rights_statement_uris:
            yield available_rights_statements_by_uri[yielded_rights_statement_uri]
