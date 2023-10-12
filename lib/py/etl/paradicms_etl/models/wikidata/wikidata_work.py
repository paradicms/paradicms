from paradicms_etl.models.wikidata.wikidata_model import WikidataModel
from paradicms_etl.models.work import Work


class WikidataWork(WikidataModel, Work):
    class Builder(WikidataModel.Builder, Work.Builder):
        pass

    @property
    def label(self) -> str:
        return self._required_label

    def replacer(self) -> Builder:
        raise NotImplementedError
