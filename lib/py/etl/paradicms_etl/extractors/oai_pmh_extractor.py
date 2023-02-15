import json
import logging
from pathlib import Path
from typing import Optional, List
from urllib.request import urlopen
from xml.dom.minidom import parseString
from xml.etree.ElementTree import fromstring as ElementTree_fromstring, ElementTree

from pathvalidate import sanitize_filename

logger = logging.getLogger(__name__)


class OaiPmhExtractor:
    """
    Extractor for OAI compliant endpoints that expose OAI-PMH metadata (https://www.openarchives.org/pmh/).
    """

    def __init__(
        self,
        *,
        endpoint_url: str,
        extracted_data_dir_path: Path,
        metadata_prefix: str,
        set_: Optional[str] = None
    ):
        self.__endpoint_url = endpoint_url
        self.__extracted_data_dir_path = extracted_data_dir_path
        self.__metadata_prefix = metadata_prefix
        self.__set = set_

    def __call__(self, *, force: bool, **kwds):
        self.__extracted_data_dir_path.mkdir(parents=True, exist_ok=True)

        def record_identifier_file_path(record_identifier: str) -> Path:
            return self.__extracted_data_dir_path / (
                str(sanitize_filename(record_identifier)) + ".xml"
            )

        record_identifiers_file_path = (
            self.__extracted_data_dir_path / "record_identifiers.json"
        )

        record_identifiers: List[str]
        record_etrees: List[ElementTree] = []
        if record_identifiers_file_path.exists():
            with open(record_identifiers_file_path) as record_identifiers_file:
                record_identifiers = list(json.load(record_identifiers_file))
                for record_identifier in record_identifiers:
                    with open(record_identifier_file_path(record_identifier)) as f:
                        record_etree = ElementTree()
                        record_etree.parse(f)
                        record_etrees.append(record_etree)
                return {"record_etrees": tuple(record_etrees)}

        base_url = self.__endpoint_url + "?verb=ListRecords"
        record_identifiers = []
        resumption_token = None
        while True:
            if resumption_token is not None:
                url = base_url + "&resumptionToken=" + resumption_token
            else:
                url = base_url + "&metadataPrefix=" + self.__metadata_prefix
                if self.__set is not None:
                    url = url + "&set=" + self.__set
            logger.debug("reading URL %s", url)
            url_f = urlopen(url)
            try:
                xml_str = url_f.read()
            finally:
                url_f.close()
            logger.debug("read XML from URL %s: \n%s", url, xml_str)
            dom = parseString(xml_str)
            ListRecords_elements = dom.documentElement.getElementsByTagName(
                "ListRecords"
            )
            if len(ListRecords_elements) == 0:
                logger.error("no ListRecords element in XML: \n%s", xml_str)
                return
            ListRecords_element = ListRecords_elements[0]
            for record_element in ListRecords_element.getElementsByTagName("record"):
                record_identifier = (
                    record_element.getElementsByTagName("header")[0]
                    .getElementsByTagName("identifier")[0]
                    .childNodes[0]
                    .data
                )
                record_identifiers.append(record_identifier)

                record_element_xml = record_element.toxml()
                with open(
                    record_identifier_file_path(record_identifier), "w+"
                ) as record_identifier_file:
                    record_identifier_file.write(record_element_xml)
                record_etrees.append(
                    ElementTree(ElementTree_fromstring(record_element_xml))
                )

                if len(record_identifiers) % 50 == 0:
                    logger.info("read %d records", len(record_identifiers))
            resumption_token = None
            for resumption_token_element in ListRecords_element.getElementsByTagName(
                "resumptionToken"
            ):
                resumption_token = resumption_token_element.childNodes[0].data
                break
            if resumption_token is None:
                break

        with open(record_identifiers_file_path, "w+") as record_identifier_file:
            json.dump(record_identifiers, record_identifier_file)

        return {"record_etrees": tuple(record_etrees)}
