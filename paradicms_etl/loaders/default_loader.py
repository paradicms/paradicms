from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.fuseki_loader import FusekiLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader


class DefaultLoader(CompositeLoader):
    def __init__(self, **kwds):
        CompositeLoader.__init__(self, loaders=(RdfFileLoader(**kwds), FusekiLoader(**kwds)), **kwds)
