from rdflib import URIRef

from paradicms_etl.models.wikidata.wikidata_model import WikidataModel
from paradicms_etl.models.work import Work
from paradicms_etl.namespaces.cms import CMS


class WikidataWork(WikidataModel, Work):
    class Builder(WikidataModel.Builder, Work.Builder):
        pass

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CMS.WikidataWork

    def replacer(self) -> Builder:
        raise NotImplementedError
