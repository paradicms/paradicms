from abc import abstractmethod

from paradicms_etl.model import Model
from paradicms_etl.models.rights_mixin import RightsMixin


class Text(Model, RightsMixin):
    """
    Model of a string with associated metadata, such as rights.

    The model has its own RDF resource, a blank node. It is used in lieu of a string literal
    in situations where:

    <other model URI> dcterms:description "Description with associated metadata" .

    does not capture the metadata. Instead:

    <other model URI> dcterms:description <text bnode> .
    <text bnode> rdf:value "Description with associated metadata" .
    <text bnode> dcterms:license <license URI> .
    """

    @property
    @abstractmethod
    def value(self) -> str:
        pass
