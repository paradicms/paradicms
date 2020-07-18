import requests
from rdflib import Graph

from paradicms_etl._loader import _Loader


class FusekiLoader(_Loader):
    def __init__(self, *, fuseki_data_url: str, **kwds):
        _Loader.__init__(self, **kwds)
        self.__fuseki_data_url = fuseki_data_url

    def load(self, *, graph: Graph, **kwds):
        url = self.__fuseki_data_url + "?graph=" + str(self._pipeline_uri)

        requests.delete(url)

        ttl = graph.serialize(format="ttl")

        # Post to a named graph, since the Fuseki default graph is the union of all named graphs
        # https://www.w3.org/TR/2013/REC-sparql11-http-rdf-update-20130321/#http-post
        response = \
            requests.post(
                url,
                data=ttl,
                headers={
                    "Content-Type": "text/turtle;charset=utf-8"
                }
            )
        assert response.status_code // 100 == 2
