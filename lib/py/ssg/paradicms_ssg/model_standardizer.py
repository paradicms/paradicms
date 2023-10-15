from collections.abc import Iterable

from paradicms_etl.model import Model
from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.dc.dc_license_document import DcLicenseDocument
from paradicms_etl.models.dc.dc_rights_statement import DcRightsStatement
from paradicms_etl.models.event import Event
from paradicms_etl.models.image import Image
from paradicms_etl.models.license import License
from paradicms_etl.models.location import Location
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_group import PropertyGroup
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.rights_statement import RightsStatement
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm
from paradicms_etl.models.schema.schema_event import SchemaEvent
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.schema.schema_place import SchemaPlace
from paradicms_etl.models.schema.schema_property import SchemaProperty
from paradicms_etl.models.wikibase.wikibase_property import WikibaseProperty
from paradicms_etl.models.work import Work
from rdflib import BNode, Graph, Literal, URIRef

from paradicms_ssg.models.app_configuration import AppConfiguration
from paradicms_ssg.models.cms.cms_app_configuration import CmsAppConfiguration


def __copy_connected_subgraph(
    *, from_subject: BNode | URIRef, source_graph: Graph, target_graph: Graph
) -> None:
    """
    Starting from_subject, copy all connected triples.
    """

    for p, o in source_graph.predicate_objects(subject=from_subject):
        target_graph.add((from_subject, p, o))
        if isinstance(o, BNode | URIRef):
            __copy_connected_subgraph(
                from_subject=o, source_graph=source_graph, target_graph=target_graph
            )
        elif not isinstance(o, Literal):
            raise TypeError(type(o))


def model_standardizer(  # noqa: C901, PLR0912, PLR0915
    models: Iterable[Model],
) -> Iterable[ResourceBackedModel]:
    """
    Transform all models to canonical representations expected by the static site generator,
    and resolve sameAs connections.

    For example, all non-SchemaCreativeWork Work's are transformed to SchemaCreativeWork.
    """

    original_models_by_uri: dict[URIRef, Model] = {}
    property_uris: set[URIRef] = set()
    transformed_models_by_uri: dict[URIRef, ResourceBackedModel] = {}
    for original_model in models:
        transformed_model: Model
        if isinstance(original_model, AppConfiguration):
            if not isinstance(original_model, CmsAppConfiguration):
                raise TypeError(type(original_model))
            transformed_model = original_model
        elif isinstance(original_model, Collection):
            transformed_model = SchemaCollection.from_collection(original_model)
        elif isinstance(original_model, Concept):
            transformed_model = SchemaDefinedTerm.from_concept(original_model)
        elif isinstance(original_model, Event):
            if not isinstance(original_model, SchemaEvent):
                raise TypeError(type(original_model))
            transformed_model = original_model
        elif isinstance(original_model, Image):
            transformed_model = SchemaImageObject.from_image(original_model)
        elif isinstance(original_model, License):
            transformed_model = DcLicenseDocument.from_license(original_model)
        elif isinstance(original_model, Location):
            transformed_model = SchemaPlace.from_location(original_model)
        elif isinstance(original_model, Organization):
            transformed_model = SchemaOrganization.from_organization(original_model)
        elif isinstance(original_model, Person):
            transformed_model = SchemaPerson.from_person(original_model)
        elif isinstance(original_model, Property):
            transformed_model = SchemaProperty.from_property(original_model)
            property_uris.add(transformed_model.uri)
        elif isinstance(original_model, PropertyGroup):
            if not isinstance(original_model, CmsPropertyGroup):
                raise TypeError(type(original_model))
            transformed_model = original_model
        elif isinstance(original_model, RightsStatement):
            transformed_model = DcRightsStatement.from_rights_statement(original_model)
        elif isinstance(original_model, WikibaseProperty):
            continue
        elif isinstance(original_model, Work):
            transformed_model = SchemaCreativeWork.from_work(original_model)
        else:
            raise TypeError(type(original_model))

        assert transformed_model.label == original_model.label
        assert transformed_model.uri == original_model.uri

        original_models_by_uri[original_model.uri] = original_model
        transformed_models_by_uri[transformed_model.uri] = transformed_model

    if property_uris:
        for model_uri, original_model in original_models_by_uri.items():
            if not isinstance(original_model, ResourceBackedModel):
                continue
            if not isinstance(original_model, Work):
                continue
            transformed_model = transformed_models_by_uri[model_uri]

            for property_uri in property_uris:
                for original_object in original_model.resource.graph.objects(
                    subject=model_uri, predicate=property_uri
                ):
                    transformed_model.resource.graph.add(
                        (model_uri, property_uri, original_object)
                    )
                    if isinstance(original_object, BNode | URIRef):
                        __copy_connected_subgraph(
                            from_subject=original_object,
                            source_graph=original_model.resource.graph,
                            target_graph=transformed_model.resource.graph,
                        )
                    elif not isinstance(original_object, Literal):
                        raise TypeError(type(original_object))

    yield from transformed_models_by_uri.values()
