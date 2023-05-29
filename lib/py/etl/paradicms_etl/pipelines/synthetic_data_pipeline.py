from dataclasses import dataclass
from datetime import date, timedelta
from pathlib import Path
from typing import Optional, Tuple, Dict
from urllib.parse import quote

from rdflib import DCTERMS, Literal, URIRef

from paradicms_etl.enrichers.ambient_reference_enricher import (
    ambient_reference_enricher,
)
from paradicms_etl.enrichers.wikidata_enricher import WikidataEnricher
from paradicms_etl.enrichers.wikimedia_commons_enricher import WikimediaCommonsEnricher
from paradicms_etl.extractors.nop_extractor import nop_extractor
from paradicms_etl.loader import Loader
from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.excel_2010_loader import Excel2010Loader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.cms.cms_agent import CmsAgent
from paradicms_etl.models.cms.cms_collection import CmsCollection
from paradicms_etl.models.cms.cms_concept import CmsConcept
from paradicms_etl.models.cms.cms_date_time_description import CmsDateTimeDescription
from paradicms_etl.models.cms.cms_image import CmsImage
from paradicms_etl.models.cms.cms_location import CmsLocation
from paradicms_etl.models.cms.cms_organization import CmsOrganization
from paradicms_etl.models.cms.cms_person import CmsPerson
from paradicms_etl.models.cms.cms_property import CmsProperty
from paradicms_etl.models.cms.cms_property_group import CmsPropertyGroup
from paradicms_etl.models.cms.cms_text import CmsText
from paradicms_etl.models.cms.cms_work import CmsWork
from paradicms_etl.models.cms.cms_work_closing import CmsWorkClosing
from paradicms_etl.models.cms.cms_work_creation import CmsWorkCreation
from paradicms_etl.models.cms.cms_work_opening import CmsWorkOpening
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.namespaces import VRA
from paradicms_etl.pipeline import Pipeline


class SyntheticDataPipeline(Pipeline):
    ID = "synthetic_data"

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
                if isinstance(model, CmsConcept):
                    concept = model
                    concept_str = concept.value.toPython()
                    assert isinstance(concept_str, str)
                    assert concept_str not in concepts_by_value
                    concepts_by_value[concept_str] = concept

            agents = []
            for model in self.__generate_agents():
                yield model
                if isinstance(model, CmsAgent):
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
                    CmsOrganization.builder(
                        name=f"CmsOrganization {organization_i}",
                        uri=URIRef(f"http://example.com/organization{organization_i}"),
                    )
                    .add_page(
                        URIRef(f"http://example.com/organization{organization_i}page"),
                    )
                    .build()
                )

            for person_i in range(5):
                person_builder = (
                    CmsPerson.builder(
                        name=f"CmsPerson {person_i}",
                        uri=URIRef(f"http://example.com/person{person_i}"),
                    )
                    .set_family_name(str(person_i))
                    .set_given_name("CmsPerson")
                    .set_sort_name(f"{person_i}, CmsPerson")
                )
                if person_i % 2 == 0:
                    person_builder.add_page(
                        URIRef(f"http://example.com/person{person_i}page")
                    )
                person_builder.add_same_as(
                    # Wikidata concept for Alan Turing
                    URIRef("http://www.wikidata.org/entity/Q7251"),
                )
                agents.append(person_builder.build())

            for agent in agents:
                yield agent

                yield from self.__generate_images(
                    depicts_uri=agent.uri, text_prefix=agent.name
                )

        def __generate_collection_works(
            self,
            *,
            agents: Tuple[CmsAgent, ...],
            collection: CmsCollection,
            concepts_by_value: Dict[str, CmsConcept],
        ):
            for work_i in range(self.__works_per_collection):
                yield from self.__generate_work(
                    agents=agents,
                    collection_uris=(collection.uri,),
                    concepts_by_value=concepts_by_value,
                    title_prefix=collection.title + "CmsWork",
                    uri_prefix=str(collection.uri) + "/work",
                )

        def __generate_freestanding_works(
            self,
            *,
            agents: Tuple[CmsAgent, ...],
            concepts_by_value: Dict[str, CmsConcept],
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
                original_image_builder = (
                    CmsImage.builder(
                        depicts_uri=depicts_uri,
                        uri=URIRef(str(depicts_uri) + f":CmsImage{image_i}"),
                    )
                    .set_exact_dimensions(ImageDimensions(height=1000, width=1000))
                    .set_src("https://paradicms.org/img/placeholder/1000x1000.png")
                    .set_title(title)
                )
                original_image_builder.add_rights_holder(
                    f"{title} rights holder"
                ).add_license(CreativeCommonsLicenses.NC_1_0.uri).add_rights_statement(
                    RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
                )
                original_image = original_image_builder.build()
                yield original_image

                for thumbnail_dimensions in (
                    ImageDimensions(200, 200),
                    ImageDimensions(400, 400),
                    ImageDimensions(600, 600),
                    ImageDimensions(800, 800),
                ):
                    yield (
                        CmsImage.builder(
                            depicts_uri=depicts_uri,
                            uri=URIRef(
                                str(original_image.uri)
                                + f":Thumbnail{thumbnail_dimensions.width}x{thumbnail_dimensions.height}"
                            ),
                        )
                        .copy_rights(original_image)
                        .set_exact_dimensions(thumbnail_dimensions)
                        .set_original_image_uri(original_image.uri)
                        .set_src(
                            f"https://paradicms.org/img/placeholder/{thumbnail_dimensions.width}x{thumbnail_dimensions.height}.png"
                        )
                        .set_title(
                            f"{text_prefix} image {image_i} thumbnail {thumbnail_dimensions.width}x{thumbnail_dimensions.height}"
                        )
                        .build()
                    )

        def __generate_collections(
            self,
            *,
            agents: Tuple[CmsAgent, ...],
            concepts_by_value: Dict[str, CmsConcept],
        ):
            for collection_i in range(self.__collections):
                collection_title = f"CmsCollection{collection_i}"
                collection_builder = CmsCollection.builder(
                    title=collection_title,
                    uri=URIRef(f"http://example.com/collection{collection_i}"),
                )
                if collection_i % 2 == 0:
                    description_builder = CmsText.builder(self.__LOREM_IPSUM)
                    description_builder.add_rights_holder(
                        f"{collection_title} description rights holder"
                    ).add_license(
                        CreativeCommonsLicenses.NC_1_0.uri
                    ).add_rights_statement(
                        RightsStatementsDotOrgRightsStatements.InC_EDU.uri
                    )
                    collection_builder.set_description(description_builder.build())
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
                        CmsConcept.builder(
                            uri=URIRef(
                                f"urn:paradicms_etl:pipeline:{SyntheticDataPipeline.ID}:concept:{concept_urn_i}"
                            )
                        )
                        .add_type_uri(property_.range)
                        .set_pref_label(f"CmsConcept {concept_urn_i}")
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
            property_group = CmsPropertyGroup.builder(
                label="Synthetic data properties",
                uri=URIRef(
                    f"urn:paradicms_etl:pipeline:{SyntheticDataPipeline.ID}:property_group"
                ),
            ).build()
            yield property_group
            yield from self.__generate_images(
                depicts_uri=property_group.uri, text_prefix=property_group.label
            )

            for property_ in self.__PROPERTIES:
                yield CmsProperty.builder(
                    label=property_.label, uri=property_.uri
                ).add_group_uri(property_group.uri).set_filterable(
                    property_.filterable
                ).set_range(
                    property_.range
                ).set_searchable(
                    property_.searchable
                ).build()
                yield from self.__generate_images(
                    depicts_uri=property_.uri, text_prefix=property_.label
                )

        def __generate_work(
            self,
            *,
            agents: Tuple[CmsAgent, ...],
            collection_uris: Tuple[URIRef, ...],
            concepts_by_value: Dict[str, CmsConcept],
            title_prefix: str,
            uri_prefix: str,
        ):
            work_i = self.__next_work_i
            self.__next_work_i += 1

            work_uri = URIRef(uri_prefix + str(work_i))

            title = title_prefix + str(work_i)
            work_builder = CmsWork.builder(title=title, uri=work_uri)

            for collection_uri in collection_uris:
                work_builder.add_collection_uri(collection_uri)

            include_description = work_i % 2 == 0

            # Properties that depend on the work title
            for i in range(2):
                work_builder.add_alternative_title(
                    f"{title} alternative title {i}",
                )
                work_builder.add_identifier(f"{title}Id{i}")
                work_builder.add_provenance(f"{title} provenance {i}")

                work_builder.add_rights_holder(f"{title} rights holder").add_license(
                    CreativeCommonsLicenses.NC_1_0.uri
                ).add_rights_statement(
                    RightsStatementsDotOrgRightsStatements.InC_EDU.uri
                )

            destruction_date = date(day=1, month=1, year=2022)
            creation_date = destruction_date - timedelta(days=work_i)
            creation_date_time_description = CmsDateTimeDescription.from_date(
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
            contributors = [
                CmsPerson.builder(name=f"{title} contributor {contributor_i}").build()
                for contributor_i in range(2)
            ]
            for contributor in contributors:
                work_builder.add_contributor(contributor)

            # dcterms:creator
            creator_uris = [agents[(work_i + i) % len(agents)].uri for i in range(2, 4)]
            for creator_uri in creator_uris:
                work_builder.add_creator(creator_uri)

            # Wikidata concept for the Pilot ACE
            work_builder.add_same_as(
                URIRef("http://www.wikidata.org/entity/Q937690"),
            )

            if include_description:
                description_builder = CmsText.builder(
                    self.__LOREM_IPSUM,
                )
                description_builder.add_rights_holder(
                    f"{title} description rights holder"
                ).add_license(CreativeCommonsLicenses.NC_1_0.uri).add_rights_statement(
                    RightsStatementsDotOrgRightsStatements.InC_EDU.uri
                )
                description = description_builder.build()

                work_builder.set_description(description)
            else:
                description = None

            anonymous_location = (
                CmsLocation.builder().set_lat(42.728104).set_long(-73.687576).build()
            )
            named_location = (
                CmsLocation.builder(uri=URIRef(str(work_uri) + "Location"))
                .set_lat(42.728104)
                .set_long(-73.687576)
                .build()
            )
            yield named_location
            work_builder.set_location(named_location)

            if work_i % 2 == 0:
                work_builder.add_page(URIRef("http://example.com/work/" + str(work_i)))

            work = work_builder.build()
            yield work

            yield from self.__generate_images(
                depicts_uri=work.uri,
                text_prefix=work.title,
            )

            # Anonymous event
            yield CmsWorkClosing.builder(work_uri=work.uri).set_description(
                description
            ).set_date(destruction_date).set_location(anonymous_location).set_title(
                f"{work.title} closing"
            ).build()

            work_creation_builder: CmsWorkCreation.Builder = (
                CmsWorkCreation.builder(
                    uri=URIRef(str(work.uri) + "Creation"), work_uri=work.uri
                )
                .set_date(creation_date_time_description)
                .set_description(description)
                .set_location(named_location)
                .set_title(f"{work.title} creation")
            )
            # for contributor in contributor_uris:
            #     work_creation_builder.add_contributor_uri(contributor_uri)
            for creator_uri in creator_uris:
                work_creation_builder.add_creator(creator_uri)
            yield work_creation_builder.build()

            yield CmsWorkOpening.builder(
                uri=URIRef(str(work.uri) + "Opening"), work_uri=work.uri
            ).set_description(description).set_date(creation_date).set_location(
                anonymous_location
            ).set_title(
                f"{work.title} opening"
            ).build()

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

        Pipeline.__init__(
            self,
            enrichers=(
                WikidataEnricher(cache_dir_path=cache_dir_path / "wikidata"),
                WikimediaCommonsEnricher(
                    cache_dir_path=cache_dir_path / "wikimedia_commons"
                ),
                ambient_reference_enricher,  # Should be last
            ),
            extractor=nop_extractor,
            id=self.ID,
            loader=loader,
            transformer=self.__SyntheticDataTransformer(),
        )


if __name__ == "__main__":
    SyntheticDataPipeline.main()
