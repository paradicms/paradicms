from typing import Optional, Tuple, Union

from rdflib import URIRef
from rdflib.namespace import DCTERMS, FOAF
from rdflib.resource import Resource

from paradicms_etl.models.property import Property
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Work(ResourceBackedNamedModel):
    """
    Model of a work such as a painting or a garment.

    This is the same concept as Work in VRA Core.
    """

    LABEL_PROPERTY = DCTERMS.title

    def __init__(self, resource: Resource):
        ResourceBackedNamedModel.__init__(self, resource)
        self.title

    @classmethod
    def from_fields(
        cls,
        *,
        # Linking up to the parent (relational style) and grandparent makes it easier to do
        # page generation and search indexing downstream.
        title: str,
        uri: URIRef,
        abstract: Union[str, Text, None] = None,
        page: Union[
            str, URIRef, None
        ] = None,  # foaf:page, linking to a human-readable page; if not specified, defaults to URI
        properties: Tuple[Property, ...] = (),
        collection_uris: Optional[Tuple[URIRef, ...]] = None,
        institution_uri: Optional[URIRef] = None,
        rights: Optional[Rights] = None,
    ) -> "Work":
        return cls(
            ResourceBuilder(uri)
            .add(DCTERMS.abstract, abstract)
            .add(CMS.collection, collection_uris)
            .add(CMS.institution, institution_uri)
            .add(FOAF.page, page)
            .add_properties(properties)
            .add_rights(rights)
            .add(DCTERMS.title, title)
            .build()
        )

    @property
    def abstract(self) -> Union[str, Text, None]:
        return self._optional_str_or_text_value(DCTERMS.abstract)

    @property
    def collection_uris(self) -> Tuple[URIRef, ...]:
        return tuple(
            resource.identifier
            for resource in self._resource.objects(CMS.collection)
            if isinstance(resource, Resource)
            and isinstance(resource.identifier, URIRef)
        )

    @property
    def institution_uri(self) -> Optional[URIRef]:
        return self._optional_uri_value(CMS.institution)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            safe_dict_update(
                ResourceBackedNamedModel.json_ld_context(),
                {
                    "abstract": {"@id": str(DCTERMS.abstract)},
                    "collection": {"@id": str(CMS.collection), "@type": "@id"},
                    "institution": {"@id": str(CMS.institution), "@type": "@id"},
                    "spatial": {"@id": str(DCTERMS.spatial), "@type": "@id"},
                    "relation": {"@id": str(DCTERMS.relation), "@type": "@id"},
                    "page": {"@id": str(FOAF.page)},
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