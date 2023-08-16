from urllib.parse import quote

from nltk.corpus.reader.wordnet import Synset  # type: ignore
from rdflib import URIRef


class WordNetSynset:
    URI_PREFIX = "urn:wordnet:"

    def __init__(self, synset: Synset):
        self.__synset = synset

    @property
    def name(self) -> str:
        return self.__synset.name()  # type: ignore

    @property
    def uri(self) -> URIRef:
        return URIRef(self.URI_PREFIX + quote(self.name))
