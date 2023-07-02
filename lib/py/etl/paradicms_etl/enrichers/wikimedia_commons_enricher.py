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
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.utils.file_cache import FileCache

logger = logging.getLogger(__name__)


class WikimediaCommonsEnricher:
    @dataclass(frozen=True)
    class __WikimediaCommonsImageExtendedMetadata:
        IGNORE_API_PROPERTIES = {
            "Assessments",
            "CommonsMetadataExtension",
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
                try:
                    return getattr(
                        CreativeCommonsLicenses,
                        self.license[len("cc-") :]
                        .replace("-", "_")
                        .replace(".", "_")
                        .upper(),
                    ).uri
                except AttributeError:
                    logger.warning(
                        "Wikimedia Commons file (%s) has unknown license: %s",
                        self.file_name,
                        self.license,
                    )
                    return None

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
        for image_source in (image.src, image.uri):
            if image_source is None:
                continue
            wikimedia_commons_image_file_name = self.__get_wikimedia_commons_file_name(
                str(image_source)
            )
            if wikimedia_commons_image_file_name is not None:
                break
        if wikimedia_commons_image_file_name is None:
            return image

        wikimedia_commons_image_extended_metadata = (
            self.__get_wikimedia_commons_image_extended_metadata(
                wikimedia_commons_image_file_name
            )
        )

        image_replacer = image.replacer()

        if wikimedia_commons_image_extended_metadata.copyrighted:
            if not image.rights_statements:
                image_replacer.add_rights_statement(
                    RightsStatementsDotOrgRightsStatements.InC
                )
            else:
                self.__logger.debug(
                    "image %s: already has a rights statement, ignoring information from Wikimedia Commons",
                    image.uri,
                )

        if wikimedia_commons_image_extended_metadata.artist is not None:
            if not image.creators:
                image_replacer.add_creator(
                    BeautifulSoup(
                        wikimedia_commons_image_extended_metadata.artist,
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

        if wikimedia_commons_image_extended_metadata.license_uri is not None:
            if not image.licenses:
                image_replacer.add_license(
                    wikimedia_commons_image_extended_metadata.license_uri
                )
            else:
                self.__logger.debug(
                    "image %s: already has a license(s), ignoring information from Wikimedia Commons",
                    image.uri,
                )

        if wikimedia_commons_image_extended_metadata.image_description is not None:
            image_replacer.set_title(
                wikimedia_commons_image_extended_metadata.image_description
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
            image_replacer.set_src(
                self.__get_wikimedia_commons_image_url(
                    wikimedia_commons_image_file_name
                )
            )
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
        self.__logger.warning(
            "unrecognized Wikimedia Commons URL pattern: %s", parsed_url
        )
        return None

    def __get_wikimedia_commons_image_extended_metadata(
        self, file_name: str
    ) -> __WikimediaCommonsImageExtendedMetadata:
        with open(
            self.__file_cache.get_file(
                URIRef(
                    f"https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=extmetadata&titles=File%3a{quote(file_name)}&format=json"
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
            dataclass_kwds: Dict[str, Any] = {"file_name": file_name}
            for key, value_object in imageinfo["extmetadata"].items():
                value = value_object["value"]
                if not value:
                    continue
                dataclass_key = snakecase(key)
                if (
                    key
                    in WikimediaCommonsEnricher.__WikimediaCommonsImageExtendedMetadata.IGNORE_API_PROPERTIES
                ):
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
                    dataclass_kwds[dataclass_key] = value
                elif key in {"AttributionRequired", "Copyrighted"}:
                    value_lower = value.lower()
                    if value_lower == "false":
                        dataclass_kwds[dataclass_key] = False
                    elif value_lower == "true":
                        dataclass_kwds[dataclass_key] = True
                    else:
                        self.__logger.warning(
                            "unhandled Wikimedia file %s boolean value %s=%s",
                            file_name,
                            key,
                            value,
                        )
                elif key == "Categories":
                    dataclass_kwds[dataclass_key] = tuple(value.split("|"))
                else:
                    self.__logger.warning(
                        "unhandled Wikimedia Commons file %s imageinfo extmetadata %s=%s",
                        file_name,
                        key,
                        value,
                    )
                    continue

            return self.__WikimediaCommonsImageExtendedMetadata(**dataclass_kwds)

        raise NotImplementedError(
            "no Wikimedia Commons extended metadata for image file name " + file_name
        )

    def __get_wikimedia_commons_image_url(self, file_name: str) -> str:
        with open(
            self.__file_cache.get_file(
                URIRef(
                    f"https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&titles=File%3a{quote(file_name)}&format=json"
                )
            )
        ) as image_info_json_file:
            image_info_json = json.load(image_info_json_file)

        for pageid, page in image_info_json["query"]["pages"].items():
            # if pageid != "-1":
            #     raise ValueError(
            #         "unable to retrieve URL for Wikimedia Commons file " + file_name
            #     )
            imageinfos = page["imageinfo"]
            if not imageinfos:
                raise ValueError(
                    "missing imageinfos for Wikimedia Commons file: " + file_name
                )
            if len(imageinfos) > 1:
                raise NotImplementedError(f"{file_name} has more than one imageinfo")
            imageinfo = imageinfos[0]
            return imageinfo["url"]

        raise NotImplementedError(
            "no Wikimedia Commons URL for image file name " + file_name
        )
