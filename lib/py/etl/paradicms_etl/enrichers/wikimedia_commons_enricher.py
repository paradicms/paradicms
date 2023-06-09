import json
import logging
from dataclasses import dataclass
from functools import cache
from pathlib import Path
from typing import Iterable, Optional, Tuple
from urllib.parse import urlparse, quote, unquote

from rdflib import URIRef
from stringcase import snakecase

from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.utils.file_cache import FileCache

logger = logging.getLogger(__name__)


class WikimediaCommonsEnricher:
    @dataclass(frozen=True)
    class __WikimediaCommonsImageInfo:
        __LICENSE_URIS_BY_ID = {
            # "Attribution": CreativeCommonsLicenses.BY_4_0,
            "cc0": CreativeCommonsLicenses.CC0_1_0.uri,
            "cc-by-3.0": CreativeCommonsLicenses.BY_3_0.uri,
            "cc-by-sa-2.5": CreativeCommonsLicenses.BY_SA_2_5.uri,
            "cc-by-sa-3.0": CreativeCommonsLicenses.BY_SA_3_0.uri,
            "cc-by-sa-4.0": CreativeCommonsLicenses.BY_SA_4_0.uri,
            # "GFDL": None,
            "pd": CreativeCommonsLicenses.MARK_1_0.uri,
        }

        file_name: str
        artist: Optional[str] = None
        # Ignore Assessments
        attribution_required: Optional[bool] = None
        categories: Optional[Tuple[str, ...]] = None
        # Ignore CommonsMetadataExtension
        copyrighted: Optional[bool] = None
        credit: Optional[str] = None
        date_time: Optional[str] = None
        date_time_original: Optional[str] = None
        image_description: Optional[str] = None
        license: Optional[str] = None
        license_short_name: Optional[str] = None
        object_name: Optional[str] = None
        restrictions: Optional[str] = None
        usage_terms: Optional[str] = None

        @property
        @cache
        def license_uri(self) -> Optional[URIRef]:
            if self.license is None:
                return None

            try:
                return self.__LICENSE_URIS_BY_ID[self.license]
            except KeyError:
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
        image_wikimedia_commons_file_name = self.__get_wikimedia_commons_file_name(
            str(image.source if image.source is not None else image.uri)
        )
        if image_wikimedia_commons_file_name is None:
            return image
        wikimedia_commons_image_info = self.__get_wikimedia_commons_image_info(
            image_wikimedia_commons_file_name
        )

        image_replacer = image.replacer()

        if wikimedia_commons_image_info.copyrighted:
            if image.rights_statement:
                self.__logger.debug(
                    "image %s: already has a rights statement, ignoring information from Wikimedia Commons",
                    image.uri,
                )
            else:
                image_replacer.add_rights_statement(
                    RightsStatementsDotOrgRightsStatements.InC
                )

        if wikimedia_commons_image_info.credit is not None:
            if image.creators:
                self.__logger.debug(
                    "image %s: already has a creator(s), ignoring information from Wikimedia Commons",
                    image.uri,
                )
            else:
                image_replacer.add_creator(wikimedia_commons_image_info.credit)

        if wikimedia_commons_image_info.license_uri is not None:
            if image.license:
                self.__logger.debug(
                    "image %s: already has a license(s), ignoring information from Wikimedia Commons",
                    image.uri,
                )
            else:
                image_replacer.add_license(wikimedia_commons_image_info.license_uri)

        if wikimedia_commons_image_info.image_description is not None:
            image_replacer.set_title(wikimedia_commons_image_info.image_description)

        return image_replacer.build()

    def __get_wikimedia_commons_file_name(self, url: str) -> Optional[str]:
        try:
            parsed_url = urlparse(str(url))
        except ValueError:
            return None
        if parsed_url.netloc == "commons.wikimedia.org":
            path_prefix = "/wiki/File:"
            if parsed_url.path.startswith(path_prefix):
                return unquote(parsed_url.path[len(path_prefix) :])
        return None

    def __get_wikimedia_commons_image_info(
        self, file_name: str
    ) -> __WikimediaCommonsImageInfo:
        api_url = f"https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=extmetadata&titles=File%3a{quote(file_name)}&format=json"
        with open(self.__file_cache.get_file(URIRef(api_url))) as image_info_json_file:
            image_info_json = json.load(image_info_json_file)

        for pageid, page in image_info_json["query"]["pages"].items():
            imageinfos = page["imageinfo"]
            if not imageinfos:
                continue
            if len(imageinfos) > 1:
                raise NotImplementedError(f"{file_name} has more than one imageinfo")
            imageinfo = imageinfos[0]
            dataclass_kwds = {"file_name": file_name}
            for key, value_object in imageinfo["extmetadata"].items():
                value = value_object["value"]
                if not value:
                    continue
                dataclass_key = snakecase(key)
                if key in {"Assessments", "CommonsMetadataExtension"}:
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
                    "Restrictions",
                    "UsageTerms",
                }:
                    dataclass_kwds[dataclass_key] = value
                elif key in {"AttributionRequired", "Copyrighted"}:
                    if value == "false":
                        dataclass_kwds[dataclass_key] = False
                    elif value == "true":
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

            return self.__WikimediaCommonsImageInfo(**dataclass_kwds)

        raise NotImplementedError(
            "no Wikimedia Commons info for file name " + file_name
        )
