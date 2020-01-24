from abc import ABC

from configargparse import ArgParser
from rdflib import URIRef

from paradicms.etl.lib.pipeline._extractor import _Extractor
from paradicms.etl.lib.pipeline._transformer import _Transformer


class _Pipeline(ABC):
    def __init__(self, *, extractor: _Extractor, id: str, transformer: _Transformer, **kwds):
        """
        Construct an extract-transform pipeline.
        :param extractor: extractor implementation
        :param id: unique identifier for this pipeline instance, may be adapted from arguments
        :param transformer: transformer implementation
        """
        self.__extractor = extractor
        self.__id = id
        self.__transformer = transformer

    @classmethod
    def add_arguments(cls, arg_parser: ArgParser) -> None:
        """
        Add pipeline-specific arguments. The parsed arguments are passed to the constructor as keywords.
        """

    @classmethod
    def _add_institution_arguments(cls, arg_parser: ArgParser) -> None:
        arg_parser.add_argument("--institution-name", required=True)
        arg_parser.add_argument("--institution-owner",
                                help="URI of the user that owns this institution, defaults to public")
        arg_parser.add_argument("--institution-rights", required=True)
        arg_parser.add_argument("--institution-uri", required=True)

    @property
    def extractor(self):
        return self.__extractor

    @property
    def id(self):
        return self.__id

    @staticmethod
    def _id_to_uri(id_: str) -> URIRef:
        return URIRef("urn:pipeline:" + id_)

    @property
    def transformer(self):
        return self.__transformer

    @property
    def uri(self) -> URIRef:
        return self._id_to_uri(self.id)
