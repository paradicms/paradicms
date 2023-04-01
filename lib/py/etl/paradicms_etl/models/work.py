from typing import Optional, Tuple, Union

from rdflib import Graph, URIRef
from rdflib.namespace import DCTERMS, FOAF
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Work(ResourceBackedNamedModel):
    """
    Model of a work such as a painting or a garment.

    This is the same concept as Work in VRA Core.
    """

    LABEL_PROPERTY = DCTERMS.title

    class Builder(ResourceBackedNamedModel.Builder):
        def __init__(self, *, title: str, uri: URIRef):
            ResourceBackedNamedModel.Builder.__init__(self, uri=uri)
            self.set(DCTERMS.title, title)

        def add_collection_uri(self, collection_uri: URIRef) -> "Work.Builder":
            self.add(CMS.collection, collection_uri)
            return self

        def add_page(self, page: Union[str, URIRef]) -> "Work.Builder":
            self.add(FOAF.page, page)
            return self

        def add_rights(self, rights: Rights) -> "Work.Builder":
            for p, o in rights.to_rdf(graph=Graph()).predicate_objects():
                self._resource.add(p.identifier, o)
            return self

        def build(self) -> "Work":
            return Work(self._resource)

        def set_description(self, description: Union[str, Text]) -> "Work.Builder":
            self.set(DCTERMS.description, description)
            return self

    def __init__(self, resource: Resource):
        ResourceBackedNamedModel.__init__(self, resource)
        self.title

    @classmethod
    def builder(cls, *, title: str, uri: URIRef) -> Builder:
        return cls.Builder(title=title, uri=uri)

    @property
    def description(self) -> Union[str, Text, None]:
        return self._optional_str_or_text_value(DCTERMS.description)

    @property
    def collection_uris(self) -> Tuple[URIRef, ...]:
        return tuple(
            resource.identifier
            for resource in self._resource.objects(CMS.collection)
            if isinstance(resource, Resource)
            and isinstance(resource.identifier, URIRef)
        )

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            safe_dict_update(
                ResourceBackedNamedModel.json_ld_context(),
                {
                    "description": {"@id": str(DCTERMS.description)},
                    "collection": {"@id": str(CMS.collection), "@type": "@id"},
                    "page": {"@id": str(FOAF.page)},
                    "relation": {"@id": str(DCTERMS.relation), "@type": "@id"},
                    "spatial": {"@id": str(DCTERMS.spatial), "@type": "@id"},
                    "title": {"@id": str(DCTERMS.title)},
                    "type": {"@id": str(DCTERMS.type), "@type": "@id"},
                },
            ),
            Rights.json_ld_context(),
        )

    @property
    def label(self) -> str:
        return self.title

    @property
    def rights(self) -> Optional[Rights]:
        return Rights.from_rdf(resource=self._resource)

    @property
    def title(self) -> str:
        return self._required_str_value(DCTERMS.title)
