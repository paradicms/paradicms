from paradicms_etl._extractor import _Extractor


class BookCollectorExtractor(_Extractor):
    def __init__(self, export_xml_file_path: str):
        _Extractor.__init__(self)
        self.__export_xml_file_path = export_xml_file_path

    def extract(self, **kwds):
        return {"export_xml_file_path": self.__export_xml_file_path}
