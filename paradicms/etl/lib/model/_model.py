import logging
from abc import ABC
from typing import Optional

from rdflib import Graph, Literal, RDF, URIRef
from rdflib.resource import Resource

from paradicms.etl.lib.namespace import CMS


class _Model(ABC):
    def __init__(self, *, graph: Optional[Graph] = None, resource: Optional[Resource] = None,
                 rdf_type: Optional[URIRef] = None, uri: Optional[URIRef] = None):
        """
        Construct a model from a resource xor a (graph, URI) pair
        """
        if resource is not None:
            assert graph is None
            assert uri is None
        else:
            assert graph is not None
            assert uri is not None
            assert isinstance(uri, URIRef)
            resource = graph.resource(uri)
        self._logger = logging.getLogger(self.__class__.__name__)
        self.__resource = resource
        if rdf_type is None:
            rdf_type = getattr(CMS, self.__class__.__name__)
        self.__resource.add(RDF.type, rdf_type)

    def _get_single_literal(self, predicate) -> Optional[Literal]:
        """
        Get a single literal object for the given predicate, or None if absent.
        This model's resource must only have a single statement with that predicate
         and the statement's object must be a Literal.
        """
        object_ = self._get_single_object(predicate)
        if isinstance(object_, Literal):
            return object_
        else:
            self._logger.warning("%s has non-Literal single object", predicate)
            return None

    def _get_single_object(self, predicate) -> Optional[Literal]:
        """
        Get a single object for the given predicate, or None if absent.
        This model's resource must only have a single statement with that predicate.
        """
        objects = tuple(self.resource.objects(predicate))
        if not objects:
            return None
        if len(objects) > 1:
            self._logger.warning("%s has more than one object", predicate)
        return objects[0]

    def _get_single_typed_literal(self, predicate, literal_datatype) -> Optional[Literal]:
        literal = self._get_single_literal(predicate)
        if literal is None:
            return None
        if literal.datatype != literal_datatype:
            raise ValueError("%s literal has wrong datatype: expected=%s, actual=%s" % (
                predicate, literal_datatype, literal.datatype))
        return literal

    def _get_single_value(self, predicate, value_type):
        """
        Get a single Python value (int, string, etc.) for the given predicate, or None if absent.
        This model's resource must only have a single statement with that predicate
        and the statement's object must be a Literal.
        """
        literal = self._get_single_literal(predicate)
        if literal is None:
            return None
        value = literal.toPython()
        if not isinstance(value, value_type):
            raise ValueError("%s has unexpected type: expected=%s, actual=%s" % (
                predicate, value_type, value.__class__.__name__))
        return value

    @property
    def resource(self) -> Resource:
        return self.__resource

    def _set_single_object(self, predicate, object_):
        """
        Set a single object for the given predicate.
        Checks to see whether a value has already been set. If so, removes it.
        """
        self.resource.remove(predicate)
        self.resource.add(predicate, object_)

    def _set_single_value(self, predicate, value):
        """
        Set a single Python value (int, string, etc.) for the given predicate.
        Checks to see whether a value has already been set. If so, removes it.
        """
        self._set_single_object(predicate, Literal(value))

    @property
    def uri(self) -> URIRef:
        return self.resource.identifier

    def validate(self):
        """
        Validate this model.
        """
        pass
