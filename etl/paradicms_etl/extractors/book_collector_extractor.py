from paradicms_etl.extractor import Extractor


class BookCollectorExtractor(Extractor):
    """
    Extractor for a CLZ Book Collector (https://www.collectorz.com/book) XML export.
    """

    def __init__(self, export_xml_file_path: str):
        Extractor.__init__(self)
        self.__export_xml_file_path = export_xml_file_path

    def extract(self, **kwds):
        return {"export_xml_file_path": self.__export_xml_file_path}
