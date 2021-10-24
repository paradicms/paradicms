from datetime import date, timedelta
from pathlib import Path
from typing import Optional, Tuple
from urllib.parse import quote

from rdflib import DCTERMS, Literal, URIRef

from paradicms_etl._loader import _Loader
from paradicms_etl._pipeline import _Pipeline
from paradicms_etl._transformer import _Transformer
from paradicms_etl.extractors.nop_extractor import NopExtractor
from paradicms_etl.loaders.composite_loader import CompositeLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.creative_commons_licenses import CreativeCommonsLicenses
from paradicms_etl.models.dublin_core_property_definitions import (
    DublinCorePropertyDefinitions,
)
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.person import Person
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_value_definition import PropertyValueDefinition
from paradicms_etl.models.rights import Rights
from paradicms_etl.models.rights_statements_dot_org_rights_statements import (
    RightsStatementsDotOrgRightsStatements,
)
from paradicms_etl.models.vra_core_property_definitions import (
    VraCorePropertyDefinitions,
)
from paradicms_etl.models.work import Work


class TestDataPipeline(_Pipeline):
    ID = "test_data"

    class __TestDataTransformer(_Transformer):
        __FACETED_PROPERTY_DEFINITIONS = (
            (
                VraCorePropertyDefinitions.CULTURAL_CONTEXT,
                tuple(f"Cultural context {i}" for i in range(10)),
            ),
            (
                DublinCorePropertyDefinitions.EXTENT,
                tuple(f"Extent {i}" for i in range(10)),
            ),
            (
                DublinCorePropertyDefinitions.LANGUAGE,
                tuple(f"Language {i}" for i in range(10)),
            ),
            (
                VraCorePropertyDefinitions.MATERIAL,
                tuple(f"Material {i}" for i in range(10)),
            ),
            (
                DublinCorePropertyDefinitions.MEDIUM,
                tuple(f"Medium {i}" for i in range(10)),
            ),
            (
                DublinCorePropertyDefinitions.PUBLISHER,
                tuple(f"Publisher {i}" for i in range(10)),
            ),
            (
                DublinCorePropertyDefinitions.SOURCE,
                tuple(f"Source {i}" for i in range(10)),
            ),
            (
                DublinCorePropertyDefinitions.SPATIAL,
                tuple(f"Spatial {i}" for i in range(10)),
            ),
            (
                DublinCorePropertyDefinitions.SUBJECT,
                tuple(f"Subject {i}" for i in range(10)),
            ),
            (
                VraCorePropertyDefinitions.TECHNIQUE,
                tuple(f"Technique {i}" for i in range(10)),
            ),
            (
                DublinCorePropertyDefinitions.TEMPORAL,
                tuple(f"Temporal {i}" for i in range(10)),
            ),
            (DublinCorePropertyDefinitions.TYPE, tuple(f"Type {i}" for i in range(10))),
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
            _Transformer.__init__(self, **kwds)
            self.__institutions = institutions
            self.__collections_per_institution = collections_per_institution
            self.__images_per_work = images_per_work
            self.__works_per_institution = works_per_institution

        def transform(self):
            yield from CreativeCommonsLicenses.as_tuple()
            yield from DublinCorePropertyDefinitions.as_tuple()
            yield RightsStatementsDotOrgRightsStatements.InC_EDU
            yield from VraCorePropertyDefinitions.as_tuple()

            yield from self.__generate_property_definitions()

            people = tuple(self.__generate_people())
            yield from people

            yield from self.__generate_institutions(people=people)

        def __generate_collection_works(
            self,
            *,
            collection: Collection,
            institution: Institution,
            people: Tuple[Person, ...],
        ):
            for work_i in range(self.__works_per_institution):
                yield from self.__generate_work(
                    collection_uris=(collection.uri,),
                    institution=institution,
                    people=people,
                    work_i=work_i,
                    title=f"{collection.title}Work{work_i}",
                    uri=URIRef(f"{collection.uri}/work{work_i}"),
                )

        def __generate_images(
            self, *, depicts_uri: URIRef, rights: Rights, text_prefix: str
        ):
            for image_i in range(self.__images_per_work):
                original = Image.from_fields(
                    depicts_uri=depicts_uri,
                    exact_dimensions=ImageDimensions(height=1000, width=1000),
                    rights=rights,
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
                        uri=URIRef(
                            f"https://place-hold.it/{thumbnail_dimensions.width}x{thumbnail_dimensions.height}?text={quote(text_prefix)}Image{image_i}"
                        ),
                    )

        def __generate_institution_collections(
            self, *, institution: Institution, people: Tuple[Person, ...]
        ):
            for collection_i in range(self.__collections_per_institution):
                collection_title = f"{institution.name}Collection{collection_i}"
                collection = Collection.from_fields(
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
                    collection=collection, institution=institution, people=people
                )

        def __generate_institutions(self, people: Tuple[Person, ...]):
            for institution_i in range(self.__institutions):
                institution_name = f"Institution{institution_i}"
                institution = Institution.from_fields(
                    name=institution_name,
                    rights=Rights(
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
                    institution=institution, people=people
                ):
                    if isinstance(model, Collection):
                        collections.append(model)
                    yield model

                yield from self.__generate_shared_works(
                    collections=tuple(collections),
                    institution=institution,
                    people=people,
                )

        def __generate_people(self):
            for person_i in range(10):
                yield Person.from_fields(
                    family_name=str(person_i),
                    given_name="Person",
                    name=f"Person {person_i}",
                    sort_name=f"{person_i}, Person",
                    uri=URIRef(f"http://example.com/person{person_i}"),
                )

        def __generate_work(
            self,
            *,
            collection_uris: Tuple[URIRef, ...],
            institution: Institution,
            people: Tuple[Person, ...],
            work_i: int,
            title: str,
            uri: URIRef,
        ):
            properties = []

            # Properties that depend on the work title
            properties.extend(
                Property(
                    DublinCorePropertyDefinitions.ALTERNATIVE_TITLE,
                    f"{title} alternative title {i}",
                )
                for i in range(2)
            )
            properties.append(
                Property(
                    DublinCorePropertyDefinitions.DESCRIPTION,
                    self.__LOREM_IPSUM,
                )
            )
            properties.extend(
                Property(
                    DublinCorePropertyDefinitions.DESCRIPTION,
                    f"{title} description {i}",
                )
                for i in range(2)
            )
            properties.extend(
                Property(DublinCorePropertyDefinitions.IDENTIFIER, f"{title}Id{i}")
                for i in range(2)
            )
            properties.extend(
                Property(
                    DublinCorePropertyDefinitions.PROVENANCE, f"{title} provenance {i}"
                )
                for i in range(2)
            )

            # Properties that depend on the date
            properties.extend(
                Property(
                    DublinCorePropertyDefinitions.DATE,
                    (
                        date(year=2020, month=8, day=9)
                        - timedelta(minutes=(60 * 24 * (work_i + date_i)))
                    ).isoformat(),
                )
                for date_i in range(2)
            )

            # Faceted literal properties, which are the same across works
            for (
                property_definition,
                property_values,
            ) in self.__FACETED_PROPERTY_DEFINITIONS:
                properties.extend(
                    Property(
                        property_definition,
                        property_values[(work_i + i) % len(property_values)],
                    )
                    for i in range(2)
                )

            # dcterms:creator
            properties.extend(
                Property(
                    DublinCorePropertyDefinitions.CREATOR,
                    people[(work_i + i) % len(people)].uri,
                )
                for i in range(2)
            )

            page = "http://example.com/work/" + str(work_i)
            if work_i % 2 == 0:
                page = URIRef(page)

            work_ = Work.from_fields(
                abstract=self.__LOREM_IPSUM,
                collection_uris=collection_uris,
                institution_uri=institution.uri,
                page=page,
                properties=tuple(properties),
                rights=Rights(
                    holder=f"{title} rights holder",
                    license=CreativeCommonsLicenses.NC_1_0.uri,
                    statement=RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
                ),
                title=title,
                uri=uri,
            )
            yield work_

            yield from self.__generate_images(
                depicts_uri=work_.uri,
                rights=work_.rights,
                text_prefix=work_.title,
            )

        def __generate_property_definitions(self):
            rights = Rights(
                holder=f"Property definition rights holder",
                license=CreativeCommonsLicenses.NC_1_0.uri,
                statement=RightsStatementsDotOrgRightsStatements.InC_EDU.uri,
            )

            property_value_urn_i = 0
            for (
                property_definition,
                property_values,
            ) in self.__FACETED_PROPERTY_DEFINITIONS:
                if property_definition.uri == DCTERMS.creator:
                    continue
                for property_value in property_values:
                    property_value_definition = PropertyValueDefinition.from_fields(
                        # label=property_value,
                        property_uris=(property_definition.uri,),
                        uri=URIRef(
                            f"urn:paradicms_etl:pipeline:test_data:property_value:{property_value_urn_i}"
                        ),
                        value=Literal(property_value),
                    )
                    yield property_value_definition

                    yield from self.__generate_images(
                        depicts_uri=property_value_definition.uri,
                        rights=rights,
                        text_prefix=property_value,
                    )

                    property_value_urn_i += 1

        def __generate_shared_works(
            self,
            *,
            collections: Tuple[Collection, ...],
            institution: Institution,
            people: Tuple[Person, ...],
        ):
            for work_i in range(self.__works_per_institution):  # Per institution
                yield from self.__generate_work(
                    collection_uris=tuple(
                        map(lambda collection: collection.uri, collections)
                    ),
                    institution=institution,
                    people=people,
                    work_i=work_i,
                    title=f"{institution.name}SharedWork{work_i}",
                    uri=URIRef(f"{institution.uri}/shared/work{work_i}"),
                )

    def __init__(self, loader: Optional[_Loader] = None, **kwds):
        root_dir_path = Path(__file__).absolute().parent.parent.parent
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
                        / "data.ttl",
                        pipeline_id=self.ID,
                    ),
                ),
                pipeline_id=self.ID,
            )

        _Pipeline.__init__(
            self,
            extractor=NopExtractor(pipeline_id=self.ID),
            id=self.ID,
            loader=loader,
            transformer=self.__TestDataTransformer(pipeline_id=self.ID, **kwds),
            **kwds,
        )


if __name__ == "__main__":
    TestDataPipeline.main()
