import logging
from pathlib import Path
from typing import Iterable, Optional
from urllib.parse import urlparse

from bs4 import BeautifulSoup
from rdflib import URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image import Image
from paradicms_etl.utils.file_cache import FileCache


class WikimediaCommonsEnricher:
    __LICENSE_URIS_BY_ID = {
        "Attribution": CreativeCommonsLicenses.BY_4_0,
        "CC0": CreativeCommonsLicenses.CC0_1_0.uri,
        "CC BY 3.0": CreativeCommonsLicenses.BY_3_0.uri,
        "CC BY-SA 2.5": CreativeCommonsLicenses.BY_SA_2_5.uri,
        "CC BY-SA 3.0": CreativeCommonsLicenses.BY_SA_3_0.uri,
        "CC BY-SA 4.0": CreativeCommonsLicenses.BY_SA_4_0.uri,
        "GFDL": None,
        "Public domain": CreativeCommonsLicenses.MARK_1_0.uri,
    }

    def __init__(self, *, cache_dir_path: Path):
        self.__file_cache = FileCache(cache_dir_path=cache_dir_path)
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        for model in models:
            if isinstance(model, Image):
                yield self.__enrich_image(model)
            else:
                yield model

    def __enrich_image(self, image: Image) -> Image:
        image_wikimedia_commons_file_url = self.__get_wikimedia_commons_file_url(image)
        if image_wikimedia_commons_file_url is None:
            return image
        with open(
            self.__file_cache.get_file(file_url=image_wikimedia_commons_file_url), "r"
        ) as wikimedia_commons_file_html_file:
            return self.__parse_wikimedia_commons_file_html(
                image,
                wikimedia_commons_file_html=wikimedia_commons_file_html_file.read(),
                wikimedia_commons_file_url=image_wikimedia_commons_file_url,
            )

    def __get_wikimedia_commons_file_url(self, image: Image) -> Optional[URIRef]:
        image_source = image.source
        if image_source is None:
            return None
        try:
            parsed_image_source = urlparse(str(image_source))
        except ValueError:
            return None
        if parsed_image_source.netloc != "commons.wikimedia.org":
            return None
        if not parsed_image_source.path.startswith("/wiki/File:"):
            return None
        return image_source

    def __parse_wikimedia_commons_file_html(
        self,
        image: Image,
        wikimedia_commons_file_html: str,
        wikimedia_commons_file_url: URIRef,
    ) -> Image:
        image_replacer = image.replacer()

        soup = BeautifulSoup(wikimedia_commons_file_html, features="html.parser")
        commons_file_information_table = (
            soup.find(class_="commons-file-information-table")
            .find(name="table", recursive=False)
            .find(name="tbody", recursive=False)
        )

        for (
            commons_file_information_table_row
        ) in commons_file_information_table.find_all(name="tr", recursive=False):
            commons_file_information_table_cells = tuple(
                commons_file_information_table_row.find_all(name="td", recursive=False)
            )
            if len(commons_file_information_table_cells) != 2:
                continue
            key = commons_file_information_table_cells[0].text.strip()
            if not key:
                continue
            value_element = commons_file_information_table_cells[1]
            value_text = value_element.text.strip()
            if key in {"Author", "Photographer"}:
                if image.creators:
                    self.__logger.info(
                        "image %s: already has a creator(s), ignoring information from Wikimedia Commons file HTML (%s)",
                        image.uri,
                        wikimedia_commons_file_url,
                    )
                    continue

                added_creator = False
                commons_creator_table = value_element.find(
                    class_="commons-creator-table"
                )
                if commons_creator_table:
                    creator_span = commons_creator_table.find(attrs={"id": "creator"})
                    if creator_span:
                        # Could get Wikidata QID and construct an agent here, but we're not that interested in image agents at the moment.
                        creator_text = creator_span.text
                        self.__logger.debug(
                            "image %s: adding text creator %s from Wikimedia Commons file HTML (%s)",
                            image.uri,
                            creator_text,
                            wikimedia_commons_file_url,
                        )
                        image_replacer.add_creator(creator_text)
                        added_creator = True

                if not added_creator:
                    self.__logger.debug(
                        "image %s: adding text creator %s from Wikimedia Commons file HTML (%s)",
                        image.uri,
                        value_text,
                        wikimedia_commons_file_url,
                    )
                    image_replacer.add_creator(value_text)
            elif key == "Date":
                time_value_element = value_element.find("time")
                if not time_value_element:
                    continue
                datetime_attr = time_value_element.get("datetime")
                if not datetime_attr:
                    continue
                self.__logger.debug(
                    "image %s: Wikimedia Commons file HTML (%s) datetime: %s",
                    image.uri,
                    wikimedia_commons_file_url,
                    datetime_attr,
                )
            elif key.startswith("Description"):
                pass
            elif key == "Permission(Reusing this file)":
                continue
            elif key in {
                "Flickr setsInfoField",
                "Other versions",
                "Source",
                "SVG developmentInfoField",
                "Title",
            }:
                pass
            else:
                self.__logger.warning(
                    "image %s: Wikimedia commons file HTML (%s): unhandled key (%s) = value (%s)",
                    image.uri,
                    wikimedia_commons_file_url,
                    key,
                    value_text,
                )

        if image.license:
            self.__logger.info(
                "image %s: already has a license(s), ignoring information from Wikimedia Commons file HTML (%s)",
                image.uri,
                wikimedia_commons_file_url,
            )
        else:
            added_license = False
            for license_id_element in soup.find_all(class_="licensetpl_short"):
                license_id = license_id_element.text.strip()
                if not license_id:
                    continue

                try:
                    license_uri = self.__LICENSE_URIS_BY_ID[license_id]
                except KeyError:
                    self.__logger.warning(
                        "image %s: Wikimedia Commons file HTML (%s) has unknown license: %s",
                        image.uri,
                        wikimedia_commons_file_url,
                        license_id,
                    )
                    continue
                self.__logger.debug(
                    "image %s: Wikimedia Commons file HTML (%s) license: %s -> %s",
                    image.uri,
                    wikimedia_commons_file_url,
                    license_id,
                    license_uri,
                )
                if license_uri is not None:
                    image_replacer.add_license(license_uri)
                    added_license = True
            if not added_license:
                self.__logger.warning(
                    "image %s: could not parse a license from Wikimedia Commons file HTML (%s)",
                    image.uri,
                    wikimedia_commons_file_url,
                )

        return image_replacer.build()
