import json
import logging
from dataclasses import dataclass
from functools import cache
from pathlib import Path
from typing import Iterable, Optional, Tuple, Dict, Any
from urllib.parse import urlparse, quote, unquote

from bs4 import BeautifulSoup
from rdflib import URIRef
from stringcase import snakecase

from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.stub.stub_image import StubImage
from paradicms_etl.utils.file_cache import FileCache

logger = logging.getLogger(__name__)


_ALPHA_2_COUNTRY_CODES = [
    "EG",
    "DZ",
    "GW",
    "YT",
    "VC",
    "TO",
    "MD",
    "DE",
    "KW",
    "AX",
    "NR",
    "BY",
    "NC",
    "MM",
    "RU",
    "WS",
    "YE",
    "CF",
    "MC",
    "LY",
    "FR",
    "JP",
    "BD",
    "SI",
    "HU",
    "PM",
    "FI",
    "BB",
    "OM",
    "BA",
    "BR",
    "BF",
    "BL",
    "FJ",
    "IS",
    "VG",
    "GE",
    "MV",
    "CZ",
    "GI",
    "MO",
    "IQ",
    "AE",
    "MF",
    "DO",
    "CU",
    "AG",
    "KI",
    "RW",
    "MG",
    "NO",
    "TT",
    "KG",
    "NL",
    "PL",
    "AD",
    "GN",
    "EC",
    "SJ",
    "VA",
    "MS",
    "TZ",
    "CI",
    "PS",
    "SK",
    "MH",
    "IT",
    "GG",
    "GT",
    "EE",
    "ML",
    "AU",
    "UY",
    "NI",
    "PY",
    "ST",
    "SD",
    "SN",
    "WF",
    "BT",
    "GL",
    "PG",
    "DK",
    "VU",
    "TW",
    "VE",
    "ER",
    "TK",
    "IR",
    "PF",
    "GR",
    "HR",
    "BE",
    "ID",
    "MK",
    "CR",
    "CA",
    "CO",
    "LK",
    "GH",
    "CC",
    "ZM",
    "TD",
    "NG",
    "SA",
    "BG",
    "RO",
    "TG",
    "MQ",
    "HT",
    "ET",
    "CY",
    "AZ",
    "ME",
    "LV",
    "CH",
    "AW",
    "SE",
    "US",
    "PR",
    "AQ",
    "NZ",
    "TH",
    "MZ",
    "GY",
    "GB",
    "GS",
    "UG",
    "LC",
    "LU",
    "KZ",
    "MT",
    "NA",
    "VI",
    "IN",
    "EH",
    "TC",
    "BW",
    "SC",
    "SG",
    "PH",
    "KE",
    "ES",
    "TM",
    "CK",
    "AI",
    "GD",
    "TR",
    "LI",
    "LR",
    "ZW",
    "AL",
    "DJ",
    "BH",
    "KP",
    "MA",
    "SM",
    "TL",
    "SH",
    "IM",
    "NU",
    "KN",
    "LA",
    "LT",
    "PW",
    "JM",
    "BJ",
    "AN",
    "CL",
    "CN",
    "MN",
    "SZ",
    "SY",
    "TN",
    "JE",
    "MP",
    "IE",
    "GF",
    "IL",
    "LB",
    "AR",
    "PN",
    "CX",
    "GU",
    "BI",
    "GM",
    "BN",
    "DM",
    "PE",
    "AS",
    "IO",
    "TF",
    "MY",
    "AM",
    "RS",
    "TJ",
    "TV",
    "BM",
    "HN",
    "ZA",
    "UM",
    "SO",
    "FK",
    "KM",
    "QA",
    "BO",
    "CD",
    "MU",
    "SL",
    "FO",
    "HK",
    "UZ",
    "VN",
    "PT",
    "BZ",
    "KY",
    "SV",
    "NE",
    "AO",
    "PA",
    "BS",
    "SB",
    "FM",
    "NF",
    "KH",
    "MX",
    "MR",
    "MW",
    "GP",
    "CG",
    "AT",
    "UA",
    "PK",
    "CM",
    "GQ",
    "RE",
    "GA",
    "LS",
    "CV",
    "AF",
    "HM",
    "BV",
    "NP",
    "SR",
    "JO",
    "KR",
]


@dataclass(frozen=True)
class _WikimediaCommonsImageInfoExtMetadata:
    IGNORE_API_PROPERTIES = {
        "Assessments",
        "CommonsMetadataExtension",
        "DeletionReason",
        "GPSLatitude",
        "GPSLongitude",
        "GPSMapDatum",
        "LicenseUrl",  # Do our own lookup
    }

    __LICENSE_URIS_BY_ID = {
        # "Attribution": CreativeCommonsLicenses.BY_4_0,
        "cc0": CreativeCommonsLicenses.CC0_1_0.uri,
        # "GFDL": None,
        "pd": CreativeCommonsLicenses.MARK_1_0.uri,
    }

    file_name: str
    artist: Optional[str] = None
    attribution_required: Optional[bool] = None
    categories: Optional[Tuple[str, ...]] = None
    copyrighted: Optional[bool] = None
    credit: Optional[str] = None
    date_time: Optional[str] = None
    date_time_original: Optional[str] = None
    image_description: Optional[str] = None
    license: Optional[str] = None
    license_short_name: Optional[str] = None
    object_name: Optional[str] = None
    permission: Optional[str] = None
    restrictions: Optional[str] = None
    usage_terms: Optional[str] = None

    @property  # type: ignore
    @cache
    def license_uri(self) -> Optional[URIRef]:
        if self.license is None:
            return None

        try:
            # Explicit table lookup
            return self.__LICENSE_URIS_BY_ID[self.license]
        except KeyError:
            if not self.license.startswith("cc-"):
                raise
            # Resolve cc-* against the CreativeCommonsLicenses e.g.,
            # cc-by-2.5 -> CreativeCommonsLicenses.BY_2_5
            cc_license_attr = (
                self.license[len("cc-") :].replace("-", "_").replace(".", "_").upper()
            )
            for alpha_2_country_code in _ALPHA_2_COUNTRY_CODES + ["UK"]:
                if cc_license_attr.endswith("_" + alpha_2_country_code):
                    cc_license_attr = cc_license_attr[:-3]
                    break
            try:
                return getattr(
                    CreativeCommonsLicenses,
                    cc_license_attr,
                ).uri
            except AttributeError:
                logger.warning(
                    "Wikimedia Commons file (%s) has unknown license: %s",
                    self.file_name,
                    self.license,
                )
                return None


@dataclass(frozen=True)
class _WikimediaCommonsImageInfo:
    descriptionshorturl: str
    descriptionurl: str
    extmetadata: _WikimediaCommonsImageInfoExtMetadata
    height: int
    size: int
    url: str
    width: int


class WikimediaCommonsEnricher:
    def __init__(self, *, cache_dir_path: Path):
        self.__file_cache = FileCache(cache_dir_path=cache_dir_path)
        self.__logger = logger

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        for model in models:
            if isinstance(model, Image):
                yield self.__enrich_image(model)
            else:
                yield model

    def __enrich_image(self, image: Image) -> Image:
        wikimedia_commons_image_file_name: Optional[str] = None
        for image_source in [image.src, image.uri] + list(image.same_as_uris):
            if image_source is None:
                continue
            wikimedia_commons_image_file_name = self.__get_wikimedia_commons_file_name(
                str(image_source)
            )
            if wikimedia_commons_image_file_name is not None:
                break
        if wikimedia_commons_image_file_name is None:
            return image

        wikimedia_commons_image_info = self.__get_wikimedia_commons_image_info(
            wikimedia_commons_image_file_name
        )

        image_replacer: Image.Builder
        if isinstance(image, StubImage):
            # Replace the StubImage with a new Image model
            image_replacer = SchemaImageObject.builder(uri=image.uri)
        else:
            image_replacer = image.replacer()

        if wikimedia_commons_image_info.extmetadata.copyrighted:
            if not image.rights_statements:
                image_replacer.add_rights_statement(
                    RightsStatementsDotOrgRightsStatements.InC
                )
            else:
                self.__logger.debug(
                    "image %s: already has a rights statement, ignoring information from Wikimedia Commons",
                    image.uri,
                )

        image_replacer.set_exact_dimensions(
            ImageDimensions(
                height=wikimedia_commons_image_info.height,
                width=wikimedia_commons_image_info.width,
            )
        )

        if wikimedia_commons_image_info.extmetadata.artist is not None:
            if not image.creators:
                image_replacer.add_creator(
                    BeautifulSoup(
                        wikimedia_commons_image_info.extmetadata.artist,
                        features="html.parser",
                    )
                    .get_text()
                    .strip()
                )
            else:
                self.__logger.debug(
                    "image %s: already has a creator(s), ignoring information from Wikimedia Commons",
                    image.uri,
                )

        if wikimedia_commons_image_info.extmetadata.license_uri is not None:
            if not image.licenses:
                image_replacer.add_license(
                    wikimedia_commons_image_info.extmetadata.license_uri
                )
            else:
                self.__logger.debug(
                    "image %s: already has a license(s), ignoring information from Wikimedia Commons",
                    image.uri,
                )

        if wikimedia_commons_image_info.extmetadata.image_description is not None:
            image_replacer.set_title(
                wikimedia_commons_image_info.extmetadata.image_description
            )

        # if image.source is None:
        #     image_replacer.set_source(
        #         URIRef(
        #             f"http://commons.wikimedia.org/wiki/File:{quote(wikimedia_commons_image_file_name)}"
        #         )
        #     )
        # else:
        #     self.__logger.debug(
        #         "image %s: already has a source, ignoring information from Wikimedia Commons",
        #         image.uri,
        #     )

        if image.src is None:
            image_replacer.set_src(wikimedia_commons_image_info.url)
        else:
            self.__logger.debug(
                "image %s: already has a src, ignoring information from Wikimedia Commons",
                image.uri,
            )

        return image_replacer.build()

    def __get_wikimedia_commons_file_name(self, url: str) -> Optional[str]:
        try:
            parsed_url = urlparse(str(url))
        except ValueError:
            self.__logger.warning("error parsing URL: %s", url)
            return None

        if parsed_url.netloc == "commons.wikimedia.org":
            #  http://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine.jpg
            for path_prefix in ("/wiki/File:", "/wiki/Special:FilePath/"):
                if parsed_url.path.startswith(path_prefix):
                    return unquote(parsed_url.path[len(path_prefix) :])
        elif parsed_url.netloc.endswith("upload.wikimedia.org"):
            # https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Akhilleus_Patroklos_Antikensammlung_Berlin_F2278.jpg/375px-Akhilleus_Patroklos_Antikensammlung_Berlin_F2278.jpg
            if parsed_url.path.startswith("/wikipedia/commons/thumb/"):
                return unquote(parsed_url.path.rsplit("/", 2)[-2])
        elif parsed_url.netloc.endswith("wikipedia.org"):
            # https://en.wikipedia.org/wiki/File:Judgement_of_Paris_Met_98.8.11_cca2_img_by_Marie-Lan_Nguyen_edited_by_K_Vail.jpg
            path_prefix = "/wiki/File:"
            if parsed_url.path.startswith(path_prefix):
                return unquote(parsed_url.path[len(path_prefix) :])
        else:
            return None
        self.__logger.debug(
            "unrecognized Wikimedia Commons URL pattern: %s", parsed_url
        )
        return None

    def __get_wikimedia_commons_image_info(
        self, file_name: str
    ) -> _WikimediaCommonsImageInfo:
        with open(
            self.__file_cache.get_file(
                URIRef(
                    f"https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop={quote('extmetadata|size|url')}&titles=File%3a{quote(file_name)}&format=json"
                )
            )
        ) as image_info_json_file:
            image_info_json = json.load(image_info_json_file)

        for pageid, page in image_info_json["query"]["pages"].items():
            if pageid == "-1":
                raise ValueError("missing file from Wikimedia Commons: " + file_name)
            imageinfos = page["imageinfo"]
            if not imageinfos:
                raise ValueError(
                    "missing imageinfos for Wikimedia Commons file: " + file_name
                )
            if len(imageinfos) > 1:
                raise NotImplementedError(f"{file_name} has more than one imageinfo")
            imageinfo = imageinfos[0]

            extmetadata_dataclass_kwds: Dict[str, Any] = {"file_name": file_name}
            for key, value_object in imageinfo["extmetadata"].items():
                value = value_object["value"]
                if not value:
                    continue
                dataclass_key = snakecase(key)
                if key in _WikimediaCommonsImageInfoExtMetadata.IGNORE_API_PROPERTIES:
                    self.__logger.debug(
                        "Wikidata file %s: ignoring %s=%s", file_name, key, value
                    )
                    continue
                elif key in {
                    "Artist",
                    "Credit",
                    "DateTime",
                    "DateTimeOriginal",
                    "ImageDescription",
                    "License",
                    "LicenseShortName",
                    "ObjectName",
                    "Permission",
                    "Restrictions",
                    "UsageTerms",
                }:
                    extmetadata_dataclass_kwds[dataclass_key] = value
                elif key in {"AttributionRequired", "Copyrighted"}:
                    value_lower = value.lower()
                    if value_lower == "false":
                        extmetadata_dataclass_kwds[dataclass_key] = False
                    elif value_lower == "true":
                        extmetadata_dataclass_kwds[dataclass_key] = True
                    else:
                        self.__logger.warning(
                            "unhandled Wikimedia file %s boolean value %s=%s",
                            file_name,
                            key,
                            value,
                        )
                elif key == "Categories":
                    extmetadata_dataclass_kwds[dataclass_key] = tuple(value.split("|"))
                else:
                    self.__logger.warning(
                        "unhandled Wikimedia Commons file %s imageinfo extmetadata %s=%s",
                        file_name,
                        key,
                        value,
                    )
                    continue

            return _WikimediaCommonsImageInfo(
                descriptionshorturl=imageinfo["descriptionshorturl"],
                descriptionurl=imageinfo["descriptionurl"],
                extmetadata=_WikimediaCommonsImageInfoExtMetadata(
                    **extmetadata_dataclass_kwds
                ),
                height=int(imageinfo["height"]),
                size=int(imageinfo["size"]),
                url=imageinfo["url"],
                width=int(imageinfo["width"]),
            )

        raise NotImplementedError(
            "no Wikimedia Commons image info for image file name " + file_name
        )
