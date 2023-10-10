from paradicms_etl.models.location import Location
from paradicms_etl.models.wikidata.wikidata_model import WikidataModel


class WikidataLocation(WikidataModel, Location):
    pass
