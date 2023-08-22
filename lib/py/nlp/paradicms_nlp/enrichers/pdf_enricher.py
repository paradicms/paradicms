import logging
import re
from datetime import datetime
from pathlib import Path
from typing import Iterable, Optional

import pdftotext
from dateutil.tz import tzoffset, tzutc
from paradicms_etl.model import Model
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.utils.file_cache import FileCache
from pdfminer.pdfdocument import PDFDocument
from pdfminer.pdfparser import PDFParser

logging.getLogger("pdfminer.cmapdb").setLevel(logging.WARNING)
logging.getLogger("pdfminer.encodingdb").setLevel(logging.WARNING)
logging.getLogger("pdfminer.pdfdocument").setLevel(logging.WARNING)
logging.getLogger("pdfminer.pdfinterp").setLevel(logging.WARNING)
logging.getLogger("pdfminer.pdfpage").setLevel(logging.WARNING)
logging.getLogger("pdfminer.pdfparser").setLevel(logging.WARNING)
logging.getLogger("pdfminer.psparser").setLevel(logging.WARNING)


class PdfEnricher:
    __DATE_STRING_PATTERN = re.compile(
        "".join(
            [
                r"(D:)?",
                r"(?P<year>\d\d\d\d)",
                r"(?P<month>\d\d)",
                r"(?P<day>\d\d)",
                r"(?P<hour>\d\d)",
                r"(?P<minute>\d\d)",
                r"(?P<second>\d\d)",
                r"(?P<tz_offset>[+-zZ])?",
                r"(?P<tz_hour>\d\d)?",
                r"'?(?P<tz_minute>\d\d)?'?",
            ]
        )
    )

    __IGNORE_INFO_KEYS = {"Creator", "Producer"}

    def __init__(self, *, cache_dir_path: Path):
        self.__file_cache = FileCache(cache_dir_path=cache_dir_path)
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        for model in models:
            yield self.__enrich(model)

    def __enrich(self, model: Model) -> Model:
        if not isinstance(model, SchemaCreativeWork):
            return model

        work: SchemaCreativeWork = model
        if work.text:
            self.__logger.debug("work %s already has a text, skipping", work.uri)
            return model

        if work.encoding_format != "application/pdf":
            self.__logger.debug("work %s is not a PDF, skipping", work.uri)
            return model

        pdf_work = work

        pdf_file_path = self.__file_cache.get_file(pdf_work.uri, file_extension=".pdf")

        pdf_work_replacer = pdf_work.replacer()

        self.__extract_text(
            pdf_file_path=pdf_file_path, pdf_work_builder=pdf_work_replacer
        )
        self.__parse_info(
            pdf_file_path=pdf_file_path, pdf_work_builder=pdf_work_replacer
        )

        return pdf_work_replacer.build()

    def __extract_text(
        self, pdf_file_path: Path, pdf_work_builder: SchemaCreativeWork.Builder
    ) -> None:
        with open(pdf_file_path, "rb") as pdf_file:
            pdf = pdftotext.PDF(pdf_file)  # type: ignore
            text: str = "\n\n".join(pdf)  # type: ignore

        if not text:
            return None

        # normalized_text = unicodedata.normalize("NFC", text).replace("\u00A0", " ")
        normalized_text = text.replace("\u000A0", " ").replace("\u000C", "\n")
        pdf_work_builder.set_text(normalized_text)
        return None

    def __parse_date_string(self, date_string: str) -> Optional[datetime]:
        # https://stackoverflow.com/questions/16503075/convert-creationtime-of-pdf-to-a-readable-format-in-python

        match = self.__DATE_STRING_PATTERN.match(date_string)
        if not match:
            return None
        date_info = match.groupdict()

        for k, v in date_info.items():  # transform values
            if v is None:
                pass
            elif k == "tz_offset":
                date_info[k] = v.lower()  # so we can treat Z as z
            else:
                date_info[k] = int(v)

        if date_info["tz_offset"] in ("z", None):  # UTC
            date_info["tzinfo"] = tzutc()
        else:
            multiplier = 1 if date_info["tz_offset"] == "+" else -1
            date_info["tzinfo"] = tzoffset(
                None,
                multiplier
                * (3600 * date_info["tz_hour"] + 60 * date_info["tz_minute"]),
            )

        for k in ("tz_offset", "tz_hour", "tz_minute"):  # no longer needed
            del date_info[k]

        return datetime(**date_info)  # type: ignore

    def __parse_info(
        self, pdf_file_path: Path, pdf_work_builder: SchemaCreativeWork.Builder
    ) -> None:
        with open(pdf_file_path, "rb") as pdf_file:
            parser = PDFParser(pdf_file)
            doc = PDFDocument(parser)
            for info in doc.info:  # type: ignore
                # https://www.oreilly.com/library/view/pdf-explained/9781449321581/ch04.html
                for key, value in info.items():  # type: ignore
                    assert isinstance(key, str)
                    assert isinstance(value, bytes)
                    if key == "Author":
                        pdf_work_builder.add_creator(value.decode("utf-8"))
                    elif key == "CreationDate":
                        creation_date = self.__parse_date_string(value.decode("ascii"))
                        if creation_date is not None:
                            pdf_work_builder.set_date_created(creation_date)
                    elif key == "ModDate":
                        modification_date = self.__parse_date_string(
                            value.decode("ascii")
                        )
                        if modification_date is not None:
                            pdf_work_builder.set_date_modified(modification_date)
                    elif key == "Title":
                        pdf_work_builder.add_alternate_name(value.decode("utf-8"))
                    elif key in self.__IGNORE_INFO_KEYS:
                        self.__logger.debug(
                            "ignoring PDF document info field %s",
                            key,
                        )
                    else:
                        self.__logger.warning(
                            "nknown PDF document info field %s: %s",
                            key,
                            value,
                        )
