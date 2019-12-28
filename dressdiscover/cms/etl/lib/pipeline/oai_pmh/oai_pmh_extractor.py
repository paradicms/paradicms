import json
from typing import Optional
from urllib.request import urlopen
from xml.dom.minidom import parseString
from xml.etree.ElementTree import ElementTree

from dressdiscover.cms.etl.lib.pipeline._extractor import _Extractor


class OaiPmhExtractor(_Extractor):
    def __init__(self, *, endpoint_url: str, metadata_prefix: str, set_: Optional[str] = None):
        _Extractor.__init__(self)
        self.__endpoint_url = endpoint_url
        self.__metadata_prefix = metadata_prefix
        self.__set = set_

    def extract(self, *, force, storage):
        record_identifiers_key = "record_identifiers.json"
        if storage.head(record_identifiers_key):
            with storage.get(record_identifiers_key) as record_identifiers_file:
                record_identifiers = tuple(json.load(record_identifiers_file))
                record_etrees = []
                for record_identifier in record_identifiers:
                    with storage.get(record_identifier + ".xml") as f:
                        record_etree = ElementTree()
                        record_etree.parse(f)
                        record_etrees.append(record_etree)
                return {"record_etrees": tuple(record_etrees)}

        base_url = self.__endpoint_url + '?verb=ListRecords'
        record_etrees = []
        record_identifiers = []
        resumption_token = None
        while True:
            if resumption_token is not None:
                url = base_url + '&resumptionToken=' + resumption_token
            else:
                url = base_url + '&metadataPrefix=' + self.__metadata_prefix
                if self.__set is not None:
                    url = url + '&set=' + self.__set
            self._logger.debug("reading URL %s", url)
            url_f = urlopen(url)
            try:
                xml_str = url_f.read()
            finally:
                url_f.close()
            self._logger.debug("read XML from URL %s: \n%s", url, xml_str)
            dom = parseString(xml_str)
            ListRecords_elements = dom.documentElement.getElementsByTagName('ListRecords')
            if len(ListRecords_elements) == 0:
                self._logger.error("no ListRecords element in XML: \n%s", xml_str)
                return
            ListRecords_element = ListRecords_elements[0]
            for record_element in ListRecords_element.getElementsByTagName('record'):
                record_identifier = \
                    record_element.getElementsByTagName('header')[0].getElementsByTagName('identifier')[0].childNodes[
                        0].data
                record_identifiers.append(record_identifier)

                record_element_xml = record_element.toxml()
                storage.put(record_identifier + ".xml", record_element_xml)
                record_etrees.append(ElementTree.fromstring(record_element_xml))

                if len(record_identifiers) % 50 == 0:
                    self._logger.info("read %d records", len(record_identifiers))
            resumption_token = None
            for resumption_token_element in ListRecords_element.getElementsByTagName('resumptionToken'):
                resumption_token = resumption_token_element.childNodes[0].data
                break
            if resumption_token is None:
                break

        storage.put("record_identifiers.json", json.dumps(record_identifiers))

        return {"record_etrees": tuple(record_etrees)}
