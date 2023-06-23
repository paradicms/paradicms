from rdflib import URIRef
from rdflib.term import Node, Literal

_SDO_HTTP_PREFIX = "http://schema.org/"
_SDO_HTTPS_PREFIX = "https://schema.org/"


def normalize_sdo_node(sdo_node: Node) -> Node:
    """
    Normalize a schema.org URI or Literal datatype from http:// to https://
    """

    if isinstance(sdo_node, URIRef) and str(sdo_node).startswith(_SDO_HTTP_PREFIX):
        return URIRef(_SDO_HTTPS_PREFIX + str(sdo_node)[len(_SDO_HTTP_PREFIX) :])
    elif (
        isinstance(sdo_node, Literal)
        and sdo_node.datatype is not None
        and str(sdo_node.datatype).startswith(_SDO_HTTP_PREFIX)
    ):
        return Literal(
            lang=sdo_node.language,
            lexical_or_value=sdo_node.value,
            datatype=URIRef(
                _SDO_HTTPS_PREFIX + str(sdo_node.datatype)[len(_SDO_HTTP_PREFIX) :]
            ),
        )
    else:
        return sdo_node
