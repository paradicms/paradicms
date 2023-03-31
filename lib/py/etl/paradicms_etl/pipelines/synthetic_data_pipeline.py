from dataclasses import dataclass
from datetime import date, timedelta
from pathlib import Path
from typing import Optional, Tuple, Dict
from urllib.parse import quote

from rdflib import DCTERMS, Literal, URIRef

from paradicms_etl.extractors.nop_extractor import nop_extractor
from paradicms_etl.loader import Loader
from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.excel_2010_loader import Excel2010Loader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.agent import Agent
from paradicms_etl.models.anonymous_location import AnonymousLocation
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.date_time_description import DateTimeDescription
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_group import PropertyGroup
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work
from paradicms_etl.models.work_closing import WorkClosing
from paradicms_etl.models.work_creation import WorkCreation
from paradicms_etl.models.work_opening import WorkOpening
from paradicms_etl.namespaces import VRA
from paradicms_etl.pipeline import Pipeline


class SyntheticDataPipeline(Pipeline):
    ID = "synthetic_data"

    class __SyntheticDataTsLoader:
        def __init__(self, *, rdf_file_path: Path, ts_file_path: Path):
            self.__rdf_file_path = rdf_file_path
            self.__ts_file_path = ts_file_path

        def __call__(self, *args, **kwds):
            with open(self.__rdf_file_path) as rdf_file:
                rdf = rdf_file.read().rstrip()

            with open(self.__ts_file_path, "w+") as ts_file:
                ts_file.write(
                    """\
import {trigStringToDatasetCore} from "./trigStringToDatasetCore";
import {DatasetCore} from "@rdfjs/types";

export const syntheticData: DatasetCore = trigStringToDatasetCore(`
%s
`);
"""
                    % rdf
                )

    class __SyntheticDataTransformer:
        __LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae."

        @dataclass(frozen=True)
        class __Property:
            label: str
            uri: URIRef
            searchable: bool = True
            filterable: bool = True
            values: Tuple[str, ...] = ()

            @property
            def range(self) -> URIRef:
                return URIRef(
                    f"urn:paradicms_etl:pipeline:{SyntheticDataPipeline.ID}:property_range:{quote(self.label)}"
                )

        __PROPERTIES = (
            __Property(
                label="Cultural context",
                uri=VRA.culturalContext,
                values=tuple(f"Cultural context {i}" for i in range(10)),
            ),
            __Property(
                filterable=False,
                label="Description",
                uri=DCTERMS.description,
            ),
            __Property(
                label="Extent",
                uri=DCTERMS.extent,
                values=tuple(f"Extent {i}" for i in range(10)),
            ),
            __Property(
                label="Language",
                uri=DCTERMS.language,
                values=tuple(f"Language {i}" for i in range(10)),
            ),
            __Property(
                label="Material",
                uri=VRA.material,
                values=tuple(f"Material {i}" for i in range(10)),
            ),
            __Property(
                label="Medium",
                uri=DCTERMS.medium,
                values=tuple(f"Medium {i}" for i in range(10)),
            ),
            __Property(
                label="Publisher",
                uri=DCTERMS.publisher,
                values=tuple(f"Publisher {i}" for i in range(10)),
            ),
            __Property(
                label="Source",
                uri=DCTERMS.source,
                values=tuple(f"Source {i}" for i in range(10)),
            ),
            __Property(
                label="Spatial",
                uri=DCTERMS.spatial,
                values=tuple(f"Spatial {i}" for i in range(10)),
            ),
            __Property(
                label="Subject",
                uri=DCTERMS.subject,
                values=tuple(f"Subject {i}" for i in range(10)),
            ),
            __Property(
                label="Technique",
                uri=VRA.technique,
                values=tuple(f"Technique {i}" for i in range(10)),
            ),
            __Property(
                filterable=False,
                label="Title",
                uri=DCTERMS.title,
            ),
            __Property(
                label="Type",
                uri=DCTERMS.type,
                values=tuple(f"Type {i}" for i in range(10)),
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

            concepts_by_value = {}
            for model in self.__generate_concepts():
                yield model
                if isinstance(model, Concept):
                    concept = model
                    concept_str = concept.value.toPython()
                    assert isinstance(concept_str, str)
                    assert concept_str not in concepts_by_value
                    concepts_by_value[concept_str] = concept

            agents = []
            for model in self.__generate_agents():
                yield model
                if isinstance(model, Agent):
                    agents.append(model)
            agents = tuple(agents)

            yield from self.__generate_collections(
                agents=agents, concepts_by_value=concepts_by_value
            )

            yield from self.__generate_freestanding_works(
                agents=agents, concepts_by_value=concepts_by_value
            )

        def __generate_agents(self):
            agents = []
            for organization_i in range(5):
                agents.append(
                    Organization.builder(
                        name=f"Organization {organization_i}",
                        uri=URIRef(f"http://example.com/organization{organization_i}"),
                    )
                    .add_page(
                        URIRef(f"http://example.com/organization{organization_i}page"),
                    )
                    .build()
                )

            for person_i in range(5):
                person_builder = (
                    Person.builder(
                        name=f"Person {person_i}",
                        uri=URIRef(f"http://example.com/person{person_i}"),
                    )
                    .set_family_name(str(person_i))
                    .set_given_name("Person")
                    .set_sort_name(f"{person_i}, Person")
                )
                if person_i % 2 == 0:
                    person_builder.add_page(
                        URIRef(f"http://example.com/person{person_i}page")
                    )
                person_builder.add(
                    # dcterms:relation
                    # Wikidata concept for Alan Turing
                    DCTERMS.relation,
                    URIRef("http://www.wikidata.org/entity/Q7251"),
                ).add(
                    DCTERMS.relation,
                    URIRef("http://en.wikipedia.org/wiki/Alan_Turing"),
                )
                agents.append(person_builder.build())

            for agent in agents:
                yield agent

                yield Image.builder(
                    depicts_uri=agent.uri,
                    uri=URIRef(
                        f"https://place-hold.it/1000x1000?text={quote(agent.name)}"
                    ),
                ).set_exact_dimensions(
                    ImageDimensions(height=600, width=600)
                ).add_rights(
                    Rights.builder()
                    .add_creator(f"{agent.name} image creator")
                    .add_holder(f"{agent.name} image rights holder")
                    .add_license(CreativeCommonsLicenses.NC_1_0.uri)
                    .add_statement(RightsStatementsDotOrgRightsStatements.InC_EDU.uri)
                    .build()
                ).set_title(
                    f"{agent.name} image"
                ).build()

        def __generate_collection_works(
            self,
            *,
            agents: Tuple[Agent, ...],
            collection: Collection,
            concepts_by_value: Dict[str, Concept],
        ):
            for work_i in range(self.__works_per_collection):
                yield from self.__generate_work(
                    agents=agents,
                    collection_uris=(collection.uri,),
                    concepts_by_value=concepts_by_value,
                    title_prefix=collection.title + "Work",
                    uri_prefix=str(collection.uri) + "/work",
                )

        def __generate_freestanding_works(
            self,
            *,
            agents: Tuple[Agent, ...],
            concepts_by_value: Dict[str, Concept],
        ):
            for work_i in range(self.__freestanding_works):
                yield from self.__generate_work(
                    agents=agents,
                    collection_uris=(),
                    concepts_by_value=concepts_by_value,
                    title_prefix="FreestandingWork",
                    uri_prefix="http://example.com/freestandingwork",
                )

        def __generate_images(self, *, depicts_uri: URIRef, text_prefix: str):
            for image_i in range(self.__images_per_work):
                title = f"{text_prefix} image {image_i}"
                original = (
                    Image.builder(
                        depicts_uri=depicts_uri,
                        uri=URIRef(
                            f"https://place-hold.it/1000x1000?text={quote(text_prefix)}Image{image_i}"
                        ),
                    )
                    .set_exact_dimensions(ImageDimensions(height=1000, width=1000))
                    .add_rights(
                        Rights.builder()
                        .add_holder(f"{title} rights holder")
                        .add_license(CreativeCommonsLicenses.NC_1_0.uri)
                        .add_statement(
                            RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
                        )
                        .build()
                    )
                    .set_title(title)
                    .build()
                )
                yield original
                assert original.rights is not None

                for thumbnail_dimensions in (
                    ImageDimensions(75, 75),
                    ImageDimensions(600, 600),
                ):
                    yield Image.builder(
                        depicts_uri=depicts_uri,
                        uri=URIRef(
                            f"https://place-hold.it/{thumbnail_dimensions.width}x{thumbnail_dimensions.height}?text={quote(text_prefix)}Image{image_i}"
                        ),
                    ).set_exact_dimensions(thumbnail_dimensions).set_original_image_uri(
                        original.uri
                    ).add_rights(
                        original.rights
                    ).set_title(
                        f"{text_prefix} image {image_i} thumbnail {thumbnail_dimensions.width}x{thumbnail_dimensions.height}"
                    ).build()

        def __generate_collections(
            self,
            *,
            agents: Tuple[Agent, ...],
            concepts_by_value: Dict[str, Concept],
        ):
            for collection_i in range(self.__collections):
                collection_title = f"Collection{collection_i}"
                collection_builder = Collection.builder(
                    title=collection_title,
                    uri=URIRef(f"http://example.com/collection{collection_i}"),
                )
                if collection_i % 2 == 0:
                    collection_builder.set_description(
                        Text.builder(self.__LOREM_IPSUM)
                        .add_rights(
                            Rights.builder()
                            .add_holder(f"{collection_title} description rights holder")
                            .add_license(CreativeCommonsLicenses.NC_1_0.uri)
                            .add_statement(
                                RightsStatementsDotOrgRightsStatements.InC_EDU.uri
                            )
                            .build()
                        )
                        .build()
                    )
                collection = collection_builder.build()
                yield collection

                if collection_i > 0:
                    yield from self.__generate_images(
                        depicts_uri=collection.uri,
                        text_prefix=collection.title,
                    )
                # For collection 0, force the GUI to use an work image

                yield from self.__generate_collection_works(
                    agents=agents,
                    collection=collection,
                    concepts_by_value=concepts_by_value,
                )

        def __generate_concepts(self):
            concept_urn_i = 0
            for property_ in self.__PROPERTIES:
                if property_.uri == DCTERMS.creator:
                    continue
                for property_value in property_.values:
                    concept = (
                        Concept.builder(
                            uri=URIRef(
                                f"urn:paradicms_etl:pipeline:{SyntheticDataPipeline.ID}:concept:{concept_urn_i}"
                            )
                        )
                        .add_type_uri(property_.range)
                        .set_pref_label(f"Concept {concept_urn_i}")
                        .set_value(Literal(property_value))
                        .build()
                    )
                    yield concept

                    yield from self.__generate_images(
                        depicts_uri=concept.uri,
                        text_prefix=property_value,
                    )

                    concept_urn_i += 1

        def __generate_properties(self):
            property_group = PropertyGroup.builder(
                label="Synthetic data properties",
                uri=URIRef(
                    f"urn:paradicms_etl:pipeline:{SyntheticDataPipeline.ID}:property_group"
                ),
            ).build()
            yield property_group

            for property_ in self.__PROPERTIES:
                yield Property.builder(
                    label=property_.label, uri=property_.uri
                ).add_group_uri(property_group.uri).set_filterable(
                    property_.filterable
                ).set_range(
                    property_.range
                ).set_searchable(
                    property_.searchable
                ).build()

        def __generate_work(
            self,
            *,
            agents: Tuple[Agent, ...],
            collection_uris: Tuple[URIRef, ...],
            concepts_by_value: Dict[str, Concept],
            title_prefix: str,
            uri_prefix: str,
        ):
            work_i = self.__next_work_i
            self.__next_work_i += 1

            title = title_prefix + str(work_i)
            work_builder = Work.builder(
                title=title, uri=URIRef(uri_prefix + str(work_i))
            )

            for collection_uri in collection_uris:
                work_builder.add_collection_uri(collection_uri)

            include_description = work_i % 2 == 0

            # Properties that depend on the work title
            for i in range(2):
                work_builder.add(
                    DCTERMS.alternative,
                    f"{title} alternative title {i}",
                )
                work_builder.add(DCTERMS.identifier, f"{title}Id{i}")
                work_builder.add(DCTERMS.provenance, f"{title} provenance {i}")

                work_builder.add_rights(
                    Rights.builder()
                    .add_holder(f"{title} rights holder")
                    .add_license(CreativeCommonsLicenses.NC_1_0.uri)
                    .add_statement(RightsStatementsDotOrgRightsStatements.InC_EDU.uri)
                    .build()
                )

            destruction_date = date(day=1, month=1, year=2022)
            creation_date = destruction_date - timedelta(days=work_i)
            creation_date_time_description = DateTimeDescription.from_date(
                creation_date
            )

            # Faceted literal properties, which are the same across works
            for property_ in self.__PROPERTIES:
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
            contributor_uris = [
                agents[(work_i + i) % len(agents)].uri for i in range(2)
            ]
            for contributor_uri in contributor_uris:
                work_builder.add(DCTERMS.contributor, contributor_uri)

            # dcterms:creator
            creator_uris = [agents[(work_i + i) % len(agents)].uri for i in range(2, 4)]
            for creator_uri in creator_uris:
                work_builder.add(DCTERMS.creator, creator_uri)

            # dcterms:relation
            # Wikidata concept for the Pilot ACE
            work_builder.add(
                DCTERMS.relation,
                URIRef("http://www.wikidata.org/entity/Q937690"),
            )

            # Wikipedia
            work_builder.add(
                DCTERMS.relation,
                URIRef("http://en.wikipedia.org/wiki/Pilot-ACE"),
            )

            description = (
                Text.builder(
                    self.__LOREM_IPSUM,
                )
                .add_rights(
                    Rights.builder()
                    .add_holder(f"{title} description rights holder")
                    .add_license(CreativeCommonsLicenses.NC_1_0.uri)
                    .add_statement(RightsStatementsDotOrgRightsStatements.InC_EDU.uri)
                    .build()
                )
                .build()
                if include_description
                else None
            )
            if description:
                work_builder.set_description(description)

            location = (
                AnonymousLocation.builder()
                .set_lat(42.728104)
                .set_long(-73.687576)
                .build()
            )

            if work_i % 2 == 0:
                work_builder.add_page(URIRef("http://example.com/work/" + str(work_i)))

            work = work_builder.build()
            yield work

            yield from self.__generate_images(
                depicts_uri=work.uri,
                text_prefix=work.title,
            )

            yield WorkClosing.builder(
                uri=URIRef(str(work.uri) + "Closing"), work_uri=work.uri
            ).set_description(description).set_date(destruction_date).set_location(
                location
            ).set_title(
                f"{work.title} closing"
            ).build()

            work_creation_builder: WorkCreation.Builder = (
                WorkCreation.builder(
                    uri=URIRef(str(work.uri) + "Creation"), work_uri=work.uri
                )
                .set_date(creation_date_time_description)
                .set_description(description)
                .set_location(location)
                .set_title(f"{work.title} creation")
            )
            for contributor_uri in contributor_uris:
                work_creation_builder.add_contributor_uri(contributor_uri)
            for creator_uri in creator_uris:
                work_creation_builder.add_creator_uri(creator_uri)
            yield work_creation_builder.build()

            yield WorkOpening.builder(
                uri=URIRef(str(work.uri) + "Opening"), work_uri=work.uri
            ).set_description(description).set_date(creation_date).set_location(
                location
            ).set_title(
                f"{work.title} opening"
            ).build()

    def __init__(self, loader: Optional[Loader] = None):
        if loader is None:
            root_dir_path = (
                Path(__file__).absolute().parent.parent.parent.parent.parent.parent
            )
            data_dir_path = root_dir_path / "data"
            rdf_file_path = data_dir_path / "synthetic" / "synthetic_data.trig"

            loader = CompositeLoader(
                loaders=(
                    Excel2010Loader(
                        xlsx_file_path=data_dir_path
                        / "synthetic"
                        / "synthetic_data.xlsx"
                    ),
                    RdfFileLoader(
                        rdf_file_path=rdf_file_path,
                        pipeline_id=self.ID,
                    ),
                    self.__SyntheticDataTsLoader(
                        rdf_file_path=rdf_file_path,
                        ts_file_path=root_dir_path
                        / "lib"
                        / "ts"
                        / "test"
                        / "src"
                        / "syntheticData.ts",
                    ),
                )
            )

        Pipeline.__init__(
            self,
            extractor=nop_extractor,
            id=self.ID,
            loader=loader,
            transformer=self.__SyntheticDataTransformer(),
        )


if __name__ == "__main__":
    SyntheticDataPipeline.main()
