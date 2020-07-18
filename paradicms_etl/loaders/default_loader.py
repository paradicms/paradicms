from paradicms_etl._loader import _Loader
from paradicms_etl.loaders.fuseki_loader import FusekiLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader


class DefaultLoader(_Loader):
    def __init__(self, **kwds):
        _Loader.__init__(self, **kwds)
        self.__file_loader = RdfFileLoader(**kwds)
        self.__fuseki_loader = FusekiLoader(**kwds)

    def load(self, **kwds):
        self.__file_loader.load(**kwds)
        self.__fuseki_loader.load(**kwds)
