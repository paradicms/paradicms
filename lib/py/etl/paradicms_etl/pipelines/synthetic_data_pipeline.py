from dataclasses import dataclass
from datetime import date, timedelta
from pathlib import Path
from typing import Optional, Tuple, Dict, List, Iterable, Union
from urllib.parse import quote

from rdflib import DCTERMS, Literal, URIRef, SDO

from paradicms_etl.enricher import Enricher
from paradicms_etl.enrichers.ncsu_enricher import NcsuEnricher
from paradicms_etl.enrichers.wikidata_enricher import WikidataEnricher
from paradicms_etl.enrichers.wikimedia_commons_enricher import WikimediaCommonsEnricher
from paradicms_etl.extractors.nop_extractor import nop_extractor
from paradicms_etl.loader import Loader
from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.excel_2010_loader import Excel2010Loader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.agent import Agent
from paradicms_etl.models.cms.cms_collection import CmsCollection
from paradicms_etl.models.cms.cms_location import CmsLocation
from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.cms.cms_work import CmsWork
from paradicms_etl.models.cms.cms_work_closing import CmsWorkClosing
from paradicms_etl.models.cms.cms_work_creation import CmsWorkCreation
from paradicms_etl.models.cms.cms_work_opening import CmsWorkOpening
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.dc.dc_image import DcImage
from paradicms_etl.models.dc.dc_text import DcText
from paradicms_etl.models.foaf.foaf_organization import FoafOrganization
from paradicms_etl.models.foaf.foaf_person import FoafPerson
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.location import Location
from paradicms_etl.models.owl_time.owl_time_date_time_description import (
    OwlTimeDateTimeDescription,
)
from paradicms_etl.models.rdf.rdf_property import RdfProperty
from paradicms_etl.models.rights_statements_dot_org.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.schema.schema_collection import SchemaCollection
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.schema.schema_place import SchemaPlace
from paradicms_etl.models.schema.schema_property import SchemaProperty
from paradicms_etl.models.schema.schema_text_object import SchemaTextObject
from paradicms_etl.models.skos.skos_concept import SkosConcept
from paradicms_etl.models.work import Work
from paradicms_etl.models.work_event import WorkEvent
from paradicms_etl.pipeline import Pipeline


class SyntheticDataPipeline(Pipeline):
    ID = "synthetic_data"

    class __SyntheticDataTransformer:
        __LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae."

        @dataclass(frozen=True)
        class __Property:
            label: str
            uri: URIRef
            searchable: bool = False
            filterable: bool = False
            values: Tuple[str, ...] = ()

            @property
            def range(self) -> URIRef:
                return URIRef(
                    f"urn:paradicms_etl:pipeline:{SyntheticDataPipeline.ID}:property_range:{quote(self.label)}"
                )

        __PROPERTIES = (
            # __Property(
            #     label="Cultural context",
            #     uri=VRA.culturalContext,
            #     values=tuple(f"Cultural context {i}" for i in range(10)),
            # ),
            __Property(
                label="DC Description",
                searchable=True,
                uri=DCTERMS.description,
            ),
            __Property(
                filterable=True,
                label="DC Extent",
                uri=DCTERMS.extent,
                values=tuple(f"Extent {i}" for i in range(10)),
            ),
            __Property(
                filterable=True,
                label="DC Language",
                uri=DCTERMS.language,
                values=tuple(f"Language {i}" for i in range(10)),
            ),
            # __Property(
            #     label="Material",
            #     uri=VRA.material,
            #     values=tuple(f"Material {i}" for i in range(10)),
            # ),
            __Property(
                filterable=True,
                label="DC Medium",
                uri=DCTERMS.medium,
                values=tuple(f"Medium {i}" for i in range(10)),
            ),
            __Property(
                filterable=True,
                label="DC Publisher",
                uri=DCTERMS.publisher,
                values=tuple(f"Publisher {i}" for i in range(10)),
            ),
            __Property(
                filterable=True,
                label="Source",
                uri=DCTERMS.source,
                values=tuple(f"Source {i}" for i in range(10)),
            ),
            __Property(
                filterable=True,
                label="DC Spatial",
                uri=DCTERMS.spatial,
                values=tuple(f"DC Spatial {i}" for i in range(10)),
            ),
            __Property(
                filterable=True,
                label="DC Subject",
                uri=DCTERMS.subject,
                values=tuple(f"Subject {i}" for i in range(10)),
            ),
            # __Property(
            #     label="Technique",
            #     uri=VRA.technique,
            #     values=tuple(f"Technique {i}" for i in range(10)),
            # ),
            __Property(
                label="DC Title",
                searchable=True,
                uri=DCTERMS.title,
            ),
            __Property(
                filterable=True,
                label="DC Type",
                uri=DCTERMS.type,
                values=tuple(f"Type {i}" for i in range(10)),
            ),
            __Property(
                label="Schema Description",
                searchable=True,
                uri=SDO.description,
            ),
            __Property(label="Schema Name", searchable=True, uri=SDO.name),
            __Property(
                filterable=True,
                label="Schema Spatial",
                uri=SDO.spatial,
                values=tuple(f"Schema Spatial {i}" for i in range(10)),
            ),
        )

        def __init__(
            self,
            *,
            collections=2,
            freestanding_works=4,
            images_per_work=2,
            works_per_collection=4,  # Works per page is 20
        ):
            self.__collections = collections
            self.__images_per_work = images_per_work
            self.__next_work_i = 0
            self.__freestanding_works = freestanding_works
            self.__works_per_collection = works_per_collection

        def __call__(self):
            yield from self.__generate_properties()

            concepts_by_value: Dict[str, Concept] = {}
            for model in self.__generate_concepts():
                yield model
                if isinstance(model, Concept):
                    concept = model
                    concept_str = concept.value.toPython()
                    assert isinstance(concept_str, str), concept_str
                    assert concept_str not in concepts_by_value
                    concepts_by_value[concept_str] = concept

            agents_list: List[Agent] = []
            for model in self.__generate_agents():
                yield model
                if isinstance(model, Agent):
                    agents_list.append(model)
            agents = tuple(agents_list)

            yield from self.__generate_collections(
                agents=agents, concepts_by_value=concepts_by_value
            )

            assert self.__freestanding_works >= 2
            for work_i in range(self.__freestanding_works):
                yield from self.__generate_work(
                    agents=agents,
                    concepts_by_value=concepts_by_value,
                    title_prefix="FreestandingWork",
                    uri_prefix="http://example.com/freestandingwork",
                )

        def __generate_agents(self) -> Iterable[Union[Agent, Image]]:
            for organization_i in range(6):
                organization_name = f"Organization {organization_i}"
                organization_homepage = URIRef(
                    f"http://example.com/organization{organization_i}homepage"
                )
                organization_uri = URIRef(
                    f"http://example.com/organization{organization_i}"
                )

                organization_builder: Union[
                    FoafOrganization.Builder, SchemaOrganization.Builder
                ]
                if organization_i % 2 == 0:
                    organization_builder = FoafOrganization.builder(
                        name=organization_name, uri=organization_uri
                    )
                    organization_builder.add_homepage(organization_homepage)
                else:
                    organization_builder = SchemaOrganization.builder(
                        name=organization_name, uri=organization_uri
                    )
                    organization_builder.add_url(organization_homepage)

                for image in self.__generate_images(
                    base_uri=organization_builder.uri, text_prefix="Organization"
                ):
                    organization_builder.add_image(image)
                    yield image
                yield organization_builder.build()

            for person_i in range(6):
                person_family_name = str(person_i)
                person_given_name = "Person"
                person_name = f"Person {person_i}"
                person_homepage = URIRef(f"http://example.com/person{person_i}homepage")
                person_uri = URIRef(f"http://example.com/person{person_i}")

                person_builder: Union[FoafPerson.Builder, SchemaPerson.Builder]
                if person_i % 2 == 0:
                    person_builder = (
                        FoafPerson.builder(
                            name=person_name,
                            uri=person_uri,
                        )
                        .set_family_name(person_family_name)
                        .set_given_name(person_given_name)
                    )
                    person_builder.add_homepage(person_homepage)
                else:
                    person_builder = (
                        SchemaPerson.builder(name=person_name, uri=person_uri)
                        .set_family_name(person_family_name)
                        .set_given_name(person_given_name)
                    )
                    person_builder.add_url(person_homepage)

                if person_i == 0:
                    person_builder.add_same_as(
                        # Wikidata concept for Alan Turing
                        URIRef("http://www.wikidata.org/entity/Q7251"),
                    )

                for image in self.__generate_images(
                    base_uri=person_builder.uri, text_prefix="Person"
                ):
                    yield image
                    person_builder.add_image(image)

                yield person_builder.build()

        def __generate_images(
            self, *, base_uri: URIRef, text_prefix: str
        ) -> Iterable[Image]:
            assert self.__images_per_work >= 2
            for image_i in range(self.__images_per_work):
                original_image_title = f"{text_prefix} image {image_i}"
                original_image_exact_dimensions = ImageDimensions(
                    height=1000, width=1000
                )
                original_image_license = CreativeCommonsLicenses.NC_1_0.uri
                original_image_rights_holder = f"{original_image_title} rights holder"
                original_image_rights_statement = (
                    RightsStatementsDotOrgRightsStatements.InC_EDU.uri
                )
                original_image_src = (
                    "https://paradicms.org/img/placeholder/1000x1000.png"
                )
                original_image_uri = URIRef(str(base_uri) + f":Image{image_i}")

                original_image_builder: Union[
                    DcImage.Builder, SchemaImageObject.Builder
                ]
                if image_i % 2 == 0:
                    original_image_builder = (
                        DcImage.builder(
                            uri=original_image_uri,
                        )
                        .set_exact_dimensions(original_image_exact_dimensions)
                        .set_src(original_image_src)
                        .set_title(original_image_title)
                    )
                    original_image_builder.add_rights_holder(
                        original_image_rights_holder
                    ).add_license(original_image_license).add_rights_statement(
                        original_image_rights_statement
                    )
                else:
                    original_image_builder = (
                        SchemaImageObject.builder(
                            uri=original_image_uri,
                        )
                        .set_exact_dimensions(original_image_exact_dimensions)
                        .set_src(original_image_src)
                        .set_title(original_image_title)
                    )
                    original_image_builder.add_rights_holder(
                        original_image_rights_holder
                    ).add_license(original_image_license).add_rights_statement(
                        original_image_rights_statement
                    )

                for thumbnail_dimensions in (
                    ImageDimensions(200, 200),
                    ImageDimensions(400, 400),
                    ImageDimensions(600, 600),
                    ImageDimensions(800, 800),
                ):
                    thumbnail = (
                        DcImage.builder(
                            uri=URIRef(
                                str(original_image_builder.uri)
                                + f":Thumbnail{thumbnail_dimensions.width}x{thumbnail_dimensions.height}"
                            ),
                        )
                        .copy_rights(original_image_builder.build())
                        .set_exact_dimensions(thumbnail_dimensions)
                        .set_src(
                            f"https://paradicms.org/img/placeholder/{thumbnail_dimensions.width}x{thumbnail_dimensions.height}.png"
                        )
                        .set_title(
                            f"{text_prefix} image {image_i} thumbnail {thumbnail_dimensions.width}x{thumbnail_dimensions.height}"
                        )
                        .build()
                    )
                    yield thumbnail
                    original_image_builder.add_thumbnail(thumbnail)

                yield original_image_builder.build()

        def __generate_collections(
            self,
            *,
            agents: Tuple[Agent, ...],
            concepts_by_value: Dict[str, Concept],
        ) -> Iterable[Union[Collection, Image, Location, Work, WorkEvent]]:
            assert self.__collections >= 2
            for collection_i in range(self.__collections):
                collection_name = f"Collection{collection_i}"
                collection_uri = URIRef(f"http://example.com/collection{collection_i}")
                collection_builder: Union[
                    CmsCollection.Builder, SchemaCollection.Builder
                ]
                if collection_i % 2 == 0:
                    collection_builder = CmsCollection.builder(
                        title=collection_name, uri=collection_uri
                    )
                else:
                    collection_builder = SchemaCollection.builder(
                        name=collection_name,
                        uri=collection_uri,
                    )

                description_builder = DcText.builder(self.__LOREM_IPSUM)
                description_builder.add_rights_holder(
                    f"{collection_name} description rights holder"
                ).add_license(CreativeCommonsLicenses.NC_1_0.uri).add_rights_statement(
                    RightsStatementsDotOrgRightsStatements.InC_EDU.uri
                )
                collection_builder.set_description(description_builder.build())

                if collection_i > 0:
                    for image in self.__generate_images(
                        base_uri=collection_builder.uri,
                        text_prefix=collection_name,
                    ):
                        yield image
                        collection_builder.add_image(image)

                # For collection 0, force the GUI to use a work image

                assert self.__works_per_collection >= 2
                for work_i in range(self.__works_per_collection):
                    for model in self.__generate_work(
                        agents=agents,
                        concepts_by_value=concepts_by_value,
                        title_prefix=collection_name + "Work",
                        uri_prefix=str(collection_builder.uri) + "/work",
                    ):
                        yield model
                        if isinstance(model, Work):
                            collection_builder.add_work(model)

                yield collection_builder.build()

        def __generate_concepts(self) -> Iterable[Union[Concept, Image]]:
            concept_urn_i = 0
            for property_ in self.__PROPERTIES:
                if property_.uri == DCTERMS.creator:
                    continue
                for property_value in property_.values:
                    concept_pref_label = f"Concept {concept_urn_i}"
                    concept_uri = URIRef(
                        f"urn:paradicms_etl:pipeline:{SyntheticDataPipeline.ID}:concept:{concept_urn_i}"
                    )

                    concept_builder: Union[
                        SkosConcept.Builder, SchemaDefinedTerm.Builder
                    ]
                    if str(property_.uri).startswith(str(DCTERMS)):
                        concept_builder = (
                            SkosConcept.builder(
                                pref_label=concept_pref_label,
                                uri=concept_uri,
                            )
                            .add_type_uri(property_.range)
                            .set_value(Literal(property_value))
                        )
                    elif str(property_.uri).startswith(str(SDO)):
                        concept_builder = (
                            SchemaDefinedTerm.builder(
                                name=concept_pref_label,
                                uri=concept_uri,
                            )
                            .add_type_uri(property_.range)
                            .set_value(Literal(property_value))
                        )
                    else:
                        raise NotImplementedError(str(property_.uri))

                    for image in self.__generate_images(
                        base_uri=concept_builder.uri,
                        text_prefix=property_value,
                    ):
                        yield image
                        concept_builder.add_image(image)

                    yield concept_builder.build()

                    concept_urn_i += 1

        def __generate_properties(self):
            property_group_builder = CmsPropertyGroup.builder(
                label="Synthetic data properties",
                uri=URIRef(
                    f"urn:paradicms_etl:pipeline:{SyntheticDataPipeline.ID}:property_group"
                ),
            )
            for image in self.__generate_images(
                base_uri=property_group_builder.uri,
                text_prefix="Synthetic data properties",
            ):
                yield image
                property_group_builder.add_image(image)

            for property_ in self.__PROPERTIES:
                property_model_builder: Union[
                    RdfProperty.Builder, SchemaProperty.Builder
                ]
                if str(property_.uri).startswith(str(DCTERMS)):
                    property_model_builder = RdfProperty.builder(
                        label=property_.label, uri=property_.uri
                    )
                elif str(property_.uri).startswith(str(SDO)):
                    property_model_builder = SchemaProperty.builder(
                        name=property_.label, uri=property_.uri
                    )
                else:
                    raise NotImplementedError(str(property_.uri))

                property_model_builder.set_filterable(property_.filterable).set_range(
                    property_.range
                ).set_searchable(property_.searchable)

                for image in self.__generate_images(
                    base_uri=property_model_builder.uri, text_prefix=property_.label
                ):
                    yield image
                    property_model_builder.add_image(image)

                property_model = property_model_builder.build()
                yield property_model
                property_group_builder.add_property(property_model)

            yield property_group_builder.build()

        def __generate_work(
            self,
            *,
            agents: Tuple[Agent, ...],
            concepts_by_value: Dict[str, Concept],
            title_prefix: str,
            uri_prefix: str,
        ) -> Iterable[Union[Image, Location, Work, WorkEvent]]:
            work_i = self.__next_work_i
            self.__next_work_i += 1

            work_destruction_date = date(day=1, month=1, year=2022)
            work_creation_date = work_destruction_date - timedelta(days=work_i)
            work_creation_date_time_description = OwlTimeDateTimeDescription.from_date(
                work_creation_date
            )
            work_title = title_prefix + str(work_i)
            work_alternative_titles = [
                f"{work_title} alternative title {i}" for i in range(2)
            ]
            work_identifiers = [f"{work_title}Id{i}" for i in range(2)]
            work_license = CreativeCommonsLicenses.NC_1_0.uri
            work_page = URIRef("http://example.com/work/" + str(work_i))
            work_provenance = f"{work_title} provenance"
            work_rights_holder = f"{work_title} rights holder"
            work_rights_statement = RightsStatementsDotOrgRightsStatements.InC_EDU.uri
            work_uri = URIRef(uri_prefix + str(work_i))

            work_builder: Union[CmsWork.Builder, SchemaCreativeWork.Builder]
            if work_i % 2 == 0:
                work_builder = CmsWork.builder(title=work_title, uri=work_uri)
                for work_alternative_title in work_alternative_titles:
                    work_builder.add_alternative_title(work_alternative_title)
                for work_identifier in work_identifiers:
                    work_builder.add_identifier(work_identifier)
                # work_builder.set_date_created(work_creation_date)
                work_builder.add_license(work_license)
                work_builder.add_provenance(work_provenance)
                work_builder.add_rights_holder(work_rights_holder)
                work_builder.add_rights_statement(work_rights_statement)
            else:
                work_builder = SchemaCreativeWork.builder(name=work_title, uri=work_uri)
                for work_alternative_title in work_alternative_titles:
                    work_builder.add_alternate_name(work_alternative_title)
                # for work_identifier in work_identifiers:
                #     work_builder.add_identifier(work_identifier)
                work_builder.add_license(work_license)
                # work_builder.add_provenance(work_provenance)
                work_builder.set_date_created(work_creation_date)
                work_builder.add_rights_holder(work_rights_holder)
                work_builder.add_rights_statement(work_rights_statement)
                work_builder.add_url(work_page)

            # Faceted literal properties, which are the same across works
            if isinstance(work_builder, CmsWork.Builder):
                properties = tuple(
                    property_
                    for property_ in self.__PROPERTIES
                    if str(property_.uri).startswith(str(DCTERMS))
                )
            elif isinstance(work_builder, SchemaCreativeWork.Builder):
                properties = tuple(
                    property_
                    for property_ in self.__PROPERTIES
                    if str(property_.uri).startswith(str(SDO))
                )
            else:
                raise NotImplementedError

            for property_ in properties:
                if not property_.values:
                    continue
                for i in range(2):
                    work_builder.add(
                        property_.uri,
                        concepts_by_value[
                            property_.values[(work_i + i) % len(property_.values)]
                        ].uri,
                    )

            # dcterms:contributor
            contributors = [
                FoafPerson.builder(
                    name=f"{work_title} contributor {contributor_i}"
                ).build()
                for contributor_i in range(2)
            ]
            for contributor in contributors:
                work_builder.add_contributor(contributor)

            # dcterms:creator
            creator_uris = [agents[(work_i + i) % len(agents)].uri for i in range(2, 4)]
            for creator_uri in creator_uris:
                work_builder.add_creator(creator_uri)

            # Wikidata concept for the Pilot ACE
            if work_i == 0:
                work_builder.add_same_as(
                    URIRef("http://www.wikidata.org/entity/Q937690"),
                )
            elif work_i == 1:
                work_builder.add_same_as(
                    URIRef("https://d.lib.ncsu.edu/collections/catalog/0002030")
                )

            description_builder: Union[DcText.Builder, SchemaTextObject.Builder]
            if isinstance(work_builder, CmsWork.Builder):
                description_builder = DcText.builder(
                    self.__LOREM_IPSUM,
                )
            elif isinstance(work_builder, SchemaCreativeWork.Builder):
                description_builder = SchemaTextObject.builder(self.__LOREM_IPSUM)
            else:
                raise NotImplementedError

            description_builder.add_rights_holder(
                f"{work_title} description rights holder"
            ).add_license(CreativeCommonsLicenses.NC_1_0.uri).add_rights_statement(
                RightsStatementsDotOrgRightsStatements.InC_EDU.uri
            )
            description = description_builder.build()

            work_builder.set_description(description)

            if work_i % 2 == 0:
                anonymous_location = (
                    CmsLocation.builder()
                    .set_lat(42.728104)
                    .set_long(-73.687576)
                    .build()
                )
                named_location = (
                    CmsLocation.builder(uri=URIRef(str(work_uri) + "Location"))
                    .set_lat(42.728104)
                    .set_long(-73.687576)
                    .build()
                )
            else:
                anonymous_location = (
                    SchemaPlace.builder()
                    .set_latitude(42.728104)
                    .set_longitude(-73.687576)
                    .build()
                )
                named_location = (
                    SchemaPlace.builder(uri=URIRef(str(work_uri) + "Location"))
                    .set_latitude(42.728104)
                    .set_longitude(-73.687576)
                    .build()
                )

            yield named_location
            if isinstance(work_builder, CmsWork.Builder):
                work_builder.set_location(named_location)
            else:
                work_builder.add_spatial(named_location)

            for image in self.__generate_images(
                base_uri=work_uri,
                text_prefix=work_title,
            ):
                yield image
                work_builder.add_image(image)

            # Anonymous event
            work_builder.add_event(
                CmsWorkClosing.builder()
                .set_description(description)
                .set_date(work_destruction_date)
                .set_location(anonymous_location)
                .set_title(f"{work_title} closing")
                .build()
            )

            work_creation_builder: CmsWorkCreation.Builder = (
                CmsWorkCreation.builder(uri=URIRef(str(work_uri) + "Creation"))
                .set_date(work_creation_date_time_description)
                .set_description(description)
                .set_location(named_location)
                .set_title(f"{work_title} creation")
            )
            # for contributor in contributor_uris:
            #     work_creation_builder.add_contributor_uri(contributor_uri)
            for creator_uri in creator_uris:
                work_creation_builder.add_creator(creator_uri)
            work_creation = work_creation_builder.build()
            yield work_creation
            work_builder.add_event(work_creation)

            work_opening = (
                CmsWorkOpening.builder(uri=URIRef(str(work_uri) + "Opening"))
                .set_description(description)
                .set_date(work_creation_date)
                .set_location(anonymous_location)
                .set_title(f"{work_title} opening")
                .build()
            )
            yield work_opening
            work_builder.add_event(work_opening)

            yield work_builder.build()

    def __init__(self, loader: Optional[Loader] = None):
        root_dir_path = (
            Path(__file__).absolute().parent.parent.parent.parent.parent.parent
        )
        data_dir_path = root_dir_path / "data" / "synthetic"
        cache_dir_path = data_dir_path / ".cache"

        if loader is None:
            rdf_file_path = data_dir_path / "synthetic_data.trig"

            loader = CompositeLoader(
                loaders=(
                    Excel2010Loader(
                        xlsx_file_path=data_dir_path / "synthetic_data.xlsx"
                    ),
                    RdfFileLoader(
                        rdf_file_path=rdf_file_path,
                    ),
                )
            )

        # Help mypy out
        enrichers: List[Enricher] = [
            NcsuEnricher(cache_dir_path=cache_dir_path / "ncsu"),
            WikidataEnricher(cache_dir_path=cache_dir_path / "wikidata"),
            WikimediaCommonsEnricher(
                cache_dir_path=cache_dir_path / "wikimedia_commons"
            ),
        ]
        enrichers.extend(Pipeline.ENRICHERS_DEFAULT)

        Pipeline.__init__(
            self,
            enrichers=tuple(enrichers),
            extractor=nop_extractor,
            id=self.ID,
            loader=loader,
            transformer=self.__SyntheticDataTransformer(),
        )


if __name__ == "__main__":
    SyntheticDataPipeline.main()
