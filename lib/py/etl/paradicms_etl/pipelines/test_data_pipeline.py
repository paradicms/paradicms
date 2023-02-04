from datetime import date, timedelta
from pathlib import Path
from typing import Optional, Tuple, Dict, List
from urllib.parse import quote

from rdflib import DCTERMS, Literal, URIRef

from paradicms_etl.extractors.nop_extractor import NopExtractor
from paradicms_etl.loader import Loader
from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.agent import Agent
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.date_time_description import DateTimeDescription
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.location import Location
from paradicms_etl.models.named_value import NamedValue
from paradicms_etl.models.organization import Organization
from paradicms_etl.models.person import Person
from paradicms_etl.models.property import Property
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work
from paradicms_etl.models.work_creation import WorkCreation
from paradicms_etl.namespaces import VRA
from paradicms_etl.pipeline import Pipeline
from paradicms_etl.transformer import Transformer


class TestDataPipeline(Pipeline):
    ID = "test_data"

    class __TestDataTransformer(Transformer):
        __FACETED_PROPERTY_VALUES = (
            (
                VRA.culturalContext,
                tuple(f"Cultural context {i}" for i in range(10)),
            ),
            (
                DCTERMS.extent,
                tuple(f"Extent {i}" for i in range(10)),
            ),
            (
                DCTERMS.language,
                tuple(f"Language {i}" for i in range(10)),
            ),
            (
                VRA.material,
                tuple(f"Material {i}" for i in range(10)),
            ),
            (
                DCTERMS.medium,
                tuple(f"Medium {i}" for i in range(10)),
            ),
            (
                DCTERMS.publisher,
                tuple(f"Publisher {i}" for i in range(10)),
            ),
            (
                DCTERMS.source,
                tuple(f"Source {i}" for i in range(10)),
            ),
            (
                DCTERMS.spatial,
                tuple(f"Spatial {i}" for i in range(10)),
            ),
            (
                DCTERMS.subject,
                tuple(f"Subject {i}" for i in range(10)),
            ),
            (
                VRA.technique,
                tuple(f"Technique {i}" for i in range(10)),
            ),
            (DCTERMS.type, tuple(f"Type {i}" for i in range(10))),
        )

        __LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper interdum sem nec porta. Cras id bibendum nisl. Proin ipsum erat, pellentesque sed urna quis, maximus suscipit neque. Curabitur magna felis, scelerisque eu libero ac, pretium sagittis nunc. Praesent pharetra faucibus leo, et hendrerit turpis mollis eu. Nam aliquet commodo feugiat. Aliquam a porta ligula. Vivamus dolor magna, fermentum quis magna a, interdum efficitur eros. Sed porta sapien eros, ac porttitor quam porttitor vitae."

        def __init__(
            self,
            *,
            collections_per_institution=1,
            images_per_work=2,
            institutions=2,
            works_per_institution=4,  # Works per page is 20
            **kwds,
        ):
            Transformer.__init__(self, **kwds)
            self.__institutions = institutions
            self.__collections_per_institution = collections_per_institution
            self.__images_per_work = images_per_work
            self.__next_work_i = 0
            self.__works_per_institution = works_per_institution

        def transform(self):
            yield from CreativeCommonsLicenses.as_tuple()
            yield RightsStatementsDotOrgRightsStatements.InC_EDU

            named_values_by_value = {}
            for model in self.__generate_named_values():
                yield model
                if isinstance(model, NamedValue):
                    named_value = model
                    named_value_str = named_value.value.toPython()
                    assert isinstance(named_value_str, str)
                    assert named_value_str not in named_values_by_value
                    named_values_by_value[named_value_str] = named_value

            agents = []
            for model in self.__generate_agents():
                yield model
                if isinstance(model, Agent):
                    agents.append(model)
            agents = tuple(agents)

            yield from self.__generate_institutions(
                agents=agents, named_values_by_value=named_values_by_value
            )

        def __generate_agents(self):
            agents = []
            for organization_i in range(5):
                agents.append(
                    Organization.from_fields(
                        name=f"Organization {organization_i}",
                        page=URIRef(
                            f"http://example.com/organization{organization_i}page"
                        ),
                        uri=URIRef(f"http://example.com/organization{organization_i}"),
                    )
                )

            for person_i in range(5):
                agents.append(
                    Person.from_fields(
                        family_name=str(person_i),
                        given_name="Person",
                        name=f"Person {person_i}",
                        page=URIRef(f"http://example.com/person{person_i}page")
                        if person_i % 2 == 0
                        else None,
                        properties=(
                            # dcterms:relation
                            # Wikidata concept for Alan Turing
                            Property(
                                DCTERMS.relation,
                                URIRef("http://www.wikidata.org/entity/Q7251"),
                            ),
                            # Wikipedia
                            Property(
                                DCTERMS.relation,
                                URIRef("http://en.wikipedia.org/wiki/Alan_Turing"),
                            ),
                        ),
                        sort_name=f"{person_i}, Person",
                        uri=URIRef(f"http://example.com/person{person_i}"),
                    )
                )

            for agent in agents:
                yield agent

                yield Image.from_fields(
                    depicts_uri=agent.uri,
                    exact_dimensions=ImageDimensions(height=600, width=600),
                    rights=Rights.from_fields(
                        creator=f"{agent.name} image creator",
                        holder=f"{agent.name} image rights holder",
                        license=CreativeCommonsLicenses.NC_1_0.uri,
                        statement=RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
                    ),
                    title=f"{agent.name} image",
                    uri=URIRef(
                        f"https://place-hold.it/1000x1000?text={quote(agent.name)}"
                    ),
                )

        def __generate_collection_works(
            self,
            *,
            agents: Tuple[Agent, ...],
            collection: Collection,
            institution: Institution,
            named_values_by_value: Dict[str, NamedValue],
        ):
            for work_i in range(self.__works_per_institution):
                yield from self.__generate_work(
                    agents=agents,
                    collection_uris=(collection.uri,),
                    institution=institution,
                    named_values_by_value=named_values_by_value,
                    title_prefix=collection.title + "Work",
                    uri_prefix=str(collection.uri) + "/work",
                )

        def __generate_images(
            self, *, depicts_uri: URIRef, rights: Optional[Rights], text_prefix: str
        ):
            for image_i in range(self.__images_per_work):
                original = Image.from_fields(
                    depicts_uri=depicts_uri,
                    exact_dimensions=ImageDimensions(height=1000, width=1000),
                    rights=rights,
                    title=f"{text_prefix} image {image_i}",
                    uri=URIRef(
                        f"https://place-hold.it/1000x1000?text={quote(text_prefix)}Image{image_i}"
                    ),
                )
                yield original

                for thumbnail_dimensions in (
                    ImageDimensions(75, 75),
                    ImageDimensions(600, 600),
                ):
                    yield Image.from_fields(
                        depicts_uri=depicts_uri,
                        exact_dimensions=thumbnail_dimensions,
                        original_image_uri=original.uri,
                        rights=rights,
                        title=f"{text_prefix} image {image_i} thumbnail {thumbnail_dimensions.width}x{thumbnail_dimensions.height}",
                        uri=URIRef(
                            f"https://place-hold.it/{thumbnail_dimensions.width}x{thumbnail_dimensions.height}?text={quote(text_prefix)}Image{image_i}"
                        ),
                    )

        def __generate_institution_collections(
            self,
            *,
            agents: Tuple[Agent, ...],
            institution: Institution,
            named_values_by_value: Dict[str, NamedValue],
        ):
            for collection_i in range(self.__collections_per_institution):
                collection_title = f"{institution.name}Collection{collection_i}"
                collection = Collection.from_fields(
                    abstract=Text.from_fields(
                        self.__LOREM_IPSUM,
                        rights=Rights.from_fields(
                            holder=f"{collection_title} abstract rights holder",
                            license=CreativeCommonsLicenses.NC_1_0.uri,
                            statement=RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
                        ),
                    )
                    if collection_i % 2 == 0
                    else None,
                    institution_uri=institution.uri,
                    title=collection_title,
                    uri=URIRef(f"{institution.uri}/collection{collection_i}"),
                )
                yield collection

                if collection_i > 0:
                    yield from self.__generate_images(
                        depicts_uri=collection.uri,
                        rights=institution.rights,
                        text_prefix=collection.title,
                    )
                # For collection 0, force the GUI to use an work image

                yield from self.__generate_collection_works(
                    agents=agents,
                    collection=collection,
                    institution=institution,
                    named_values_by_value=named_values_by_value,
                )

        def __generate_institutions(
            self,
            agents: Tuple[Agent, ...],
            named_values_by_value: Dict[str, NamedValue],
        ):
            for institution_i in range(self.__institutions):
                institution_name = f"Institution{institution_i}"
                institution = Institution.from_fields(
                    name=institution_name,
                    rights=Rights.from_fields(
                        holder=f"{institution_name} rights holder",
                        license=CreativeCommonsLicenses.NC_1_0.uri,
                        statement=RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
                    ),
                    uri=URIRef(f"http://example.com/institution{institution_i}"),
                )
                yield institution

                yield from self.__generate_images(
                    depicts_uri=institution.uri,
                    rights=institution.rights,
                    text_prefix=institution.name,
                )

                collections = []
                for model in self.__generate_institution_collections(
                    agents=agents,
                    institution=institution,
                    named_values_by_value=named_values_by_value,
                ):
                    if isinstance(model, Collection):
                        collections.append(model)
                    yield model

                yield from self.__generate_shared_works(
                    agents=agents,
                    collections=tuple(collections),
                    institution=institution,
                    named_values_by_value=named_values_by_value,
                )

        def __generate_named_values(self):
            rights = Rights.from_fields(
                holder="Property definition rights holder",
                license=CreativeCommonsLicenses.NC_1_0.uri,
                statement=RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
            )

            named_value_urn_i = 0
            for (
                property_uri,
                property_values,
            ) in self.__FACETED_PROPERTY_VALUES:
                if property_uri == DCTERMS.creator:
                    continue
                for property_value in property_values:
                    named_value = NamedValue.from_fields(
                        property_uris=(property_uri,),
                        title=f"Named value {named_value_urn_i}",
                        uri=URIRef(
                            f"urn:paradicms_etl:pipeline:test_data:named_value:{named_value_urn_i}"
                        ),
                        value=Literal(property_value),
                    )
                    yield named_value

                    yield from self.__generate_images(
                        depicts_uri=named_value.uri,
                        rights=rights,
                        text_prefix=property_value,
                    )

                    named_value_urn_i += 1

        def __generate_work(
            self,
            *,
            agents: Tuple[Agent, ...],
            collection_uris: Tuple[URIRef, ...],
            institution: Institution,
            named_values_by_value: Dict[str, NamedValue],
            title_prefix: str,
            uri_prefix: str,
        ):
            properties: List[Property] = []

            work_i = self.__next_work_i
            self.__next_work_i += 1

            title = title_prefix + str(work_i)
            uri = URIRef(uri_prefix + str(work_i))

            include_abstract_and_description = work_i % 2 == 0

            # Properties that depend on the work title
            properties.extend(
                Property(
                    DCTERMS.alternative,
                    f"{title} alternative title {i}",
                )
                for i in range(2)
            )
            if include_abstract_and_description:
                properties.append(
                    Property(
                        DCTERMS.description,
                        self.__LOREM_IPSUM,
                    )
                )
                properties.extend(
                    Property(
                        DCTERMS.description,
                        f"{title} description {i}",
                    )
                    for i in range(2)
                )
            properties.extend(
                Property(DCTERMS.identifier, f"{title}Id{i}") for i in range(2)
            )
            properties.extend(
                Property(DCTERMS.provenance, f"{title} provenance {i}")
                for i in range(2)
            )

            # Properties that depend on the date
            # dcterms:created
            creation_date_time_description = DateTimeDescription.from_date(
                date(day=1, month=1, year=2022) + timedelta(days=work_i)
            )
            properties.append(Property(DCTERMS.created, creation_date_time_description))
            # dcterms:date
            properties.extend(
                Property(
                    DCTERMS.date,
                    (
                        date(year=2020, month=8, day=9)
                        - timedelta(minutes=(60 * 24 * (work_i + date_i)))
                    ).isoformat(),
                )
                for date_i in range(2)
            )

            # Faceted literal properties, which are the same across works
            for (
                property_uri,
                property_values,
            ) in self.__FACETED_PROPERTY_VALUES:
                properties.extend(
                    Property(
                        property_uri,
                        named_values_by_value[
                            property_values[(work_i + i) % len(property_values)]
                        ].uri,
                    )
                    for i in range(2)
                )

            # dcterms:contributor
            contributor_uris = [
                agents[(work_i + i) % len(agents)].uri for i in range(2)
            ]
            properties.extend(
                Property(DCTERMS.contributor, contributor_uri)
                for contributor_uri in contributor_uris
            )

            # dcterms:creator
            creator_uris = [agents[(work_i + i) % len(agents)].uri for i in range(2, 4)]
            properties.extend(
                Property(DCTERMS.creator, creator_uri) for creator_uri in creator_uris
            )

            # dcterms:relation
            # Wikidata concept for the Pilot ACE
            properties.append(
                Property(
                    DCTERMS.relation,
                    URIRef("http://www.wikidata.org/entity/Q937690"),
                )
            )
            # Wikipedia
            properties.append(
                Property(
                    DCTERMS.relation,
                    URIRef("http://en.wikipedia.org/wiki/Pilot-ACE"),
                )
            )

            abstract = (
                Text.from_fields(
                    self.__LOREM_IPSUM,
                    rights=Rights.from_fields(
                        holder=f"{title} abstract rights holder",
                        license=CreativeCommonsLicenses.NC_1_0.uri,
                        statement=RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
                    ),
                )
                if include_abstract_and_description
                else None
            )

            work = Work.from_fields(
                abstract=abstract,
                collection_uris=collection_uris,
                institution_uri=institution.uri,
                page=URIRef("http://example.com/work/" + str(work_i))
                if work_i % 2 == 0
                else None,
                properties=tuple(properties),
                rights=Rights.from_fields(
                    holder=f"{title} rights holder",
                    license=CreativeCommonsLicenses.NC_1_0.uri,
                    statement=RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
                ),
                title=title,
                uri=uri,
            )
            yield work

            yield from self.__generate_images(
                depicts_uri=work.uri,
                rights=work.rights,
                text_prefix=work.title,
            )

            yield WorkCreation.from_fields(
                abstract=abstract,
                contributor_uri=tuple(contributor_uris),
                creator_uri=tuple(creator_uris),
                date=creation_date_time_description,
                location=Location.from_fields(lat=42.728104, long=-73.687576),
                title=f"{work.title} creation",
                work_uri=work.uri,
                uri=URIRef(str(uri) + "Creation"),
            )

        def __generate_shared_works(
            self,
            *,
            agents: Tuple[Agent, ...],
            collections: Tuple[Collection, ...],
            institution: Institution,
            named_values_by_value: Dict[str, NamedValue],
        ):
            for work_i in range(self.__works_per_institution):  # Per institution
                yield from self.__generate_work(
                    agents=agents,
                    collection_uris=tuple(
                        map(lambda collection: collection.uri, collections)
                    ),
                    institution=institution,
                    named_values_by_value=named_values_by_value,
                    title_prefix=f"{institution.name}SharedWork",
                    uri_prefix=f"{institution.uri}/shared/work",
                )

    def __init__(self, loader: Optional[Loader] = None, **kwds):
        root_dir_path = Path(__file__).absolute().parent.parent.parent.parent.parent.parent
        if loader is None:
            loader = CompositeLoader(
                loaders=(
                    # RdfFileLoader(
                    #     file_path=root_dir_path
                    #     / "gui"
                    #     / "integration"
                    #     / "material-ui-union"
                    #     / "cypress"
                    #     / "fixtures"
                    #     / "data.ttl",
                    #     pipeline_id=self.ID,
                    # ),
                    RdfFileLoader(
                        file_path=root_dir_path
                        / "data"
                        / "test_data"
                        / "loaded"
                        / "data.trig",
                        pipeline_id=self.ID,
                    ),
                ),
                pipeline_id=self.ID,
            )

        Pipeline.__init__(
            self,
            extractor=NopExtractor(pipeline_id=self.ID),
            id=self.ID,
            loader=loader,
            transformer=self.__TestDataTransformer(pipeline_id=self.ID, **kwds),
            **kwds,
        )


if __name__ == "__main__":
    TestDataPipeline.main()
