import json
import logging
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable, Dict, Tuple, List, Optional
from urllib.parse import urlparse

from dataclasses_json import dataclass_json
from rdflib import URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.creative_commons.creative_commons_licenses import (
    CreativeCommonsLicenses,
)
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_defined_term import SchemaDefinedTerm
from paradicms_etl.models.schema.schema_image_object import SchemaImageObject
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.schema.schema_postal_address import SchemaPostalAddress
from paradicms_etl.models.stub.stub_model import StubModel
from paradicms_etl.utils.file_cache import FileCache
from paradicms_etl.utils.match_url import match_url
from paradicms_etl.utils.uuid_urn import uuid_urn


class MetmuseumEnricher:
    @dataclass_json
    @dataclass(frozen=True)
    class _CollectionApiObject:
        """
        Data transfer model for objects from the Met's Collection API (https://metmuseum.github.io/#object)
        """

        @dataclass(frozen=True)
        class _CollectionApiObjectConstituent:
            """
            The constituents associated with an object, with the constituent's role, name, ULAN URL, Wikidata URL, and gender, when available (currently contains female designations only).
            """

            constituentID: int
            constituentULAN_URL: str
            constituentWikidata_URL: str
            gender: str
            name: str
            role: str

        @dataclass(frozen=True)
        class _CollectionApiObjectDimensionParsed:
            dimension: float
            dimensionType: str
            element: str

        @dataclass(frozen=True)
        class _CollectionApiObjectMeasurements:
            class _CollectionApiObjectMeasurementsElementMeasurements:
                Height: Optional[float] = None
                Length: Optional[float] = None
                Width: Optional[float] = None

            elementDescription: str
            elementMeasurements: _CollectionApiObjectMeasurementsElementMeasurements
            elementName: str

        @dataclass(frozen=True)
        class _CollectionApiObjectTag:
            AAT_URL: str
            term: str
            Wikidata_URL: str

        # Required fields

        """
        Type: string
        Notes: Gallery number, where available
        Example: "131"
        """
        GalleryNumber: str

        """
        Type: string
        Notes: Identifying number for each artwork (not always unique)
        Example: "67.241"
        """
        accessionNumber: str

        """
        Type: string
        Notes: Year the artwork was acquired.
        Example: "1921"
        """
        accessionYear: str

        """
        Type: array
        Notes: An array containing URLs to the additional images of an object in JPEG format
        Example: ["https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-004.jpg", "https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg", "https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-002.jpg", "https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-001.jpg"]
          
        """
        additionalImages: List[str]

        """
        Type: string
        Notes: Used to sort artist names alphabetically. Last Name, First Name, Middle Name, Suffix, and Honorific fields, in that order.
        Example: "Gogh, Vincent van"
        """
        artistAlphaSort: str

        """
        Type: string
        Notes: Year the artist was born
        Example: "1840"
        """
        artistBeginDate: str

        """
        Type: string
        Notes: Nationality and life dates of an artist, also includes birth and death city when known.
        Example: "Dutch, Zundert 1853–1890 Auvers-sur-Oise"
        """
        artistDisplayBio: str

        """
        Type: string
        Notes: Artist name in the correct order for display
        Example: "Vincent van Gogh"
        """
        artistDisplayName: str

        """
        Type: string
        Notes: Year the artist died
        Example: "1926"
        """
        artistEndDate: str

        """
        Type: string
        Notes: Gender of the artist (currently contains female designations only)
        Example: "female"
        """
        artistGender: str

        """
        Type: string
        Notes: National, geopolitical, cultural, or ethnic origins or affiliation of the creator or institution that made the artwork
        Example: "Spanish"; "Dutch"; "French, born Romania"
        """
        artistNationality: str

        """
        Type: string
        Notes: Describes the extent of creation or describes an attribution qualifier to the information given in the artistRole field
        Example: "In the Style of", "Possibly by", "Written in French by"
        """
        artistPrefix: str

        """
        Type: string
        Notes: Role of the artist related to the type of artwork or object that was created
        Example: "Artist for Painting", "Designer for Dress"
        """
        artistRole: str

        """
        Type: string
        Notes: Used to record complex information that qualifies the role of a constituent, e.g. extent of participation by the Constituent (verso only, and followers)
        Example: "verso only"
        """
        artistSuffix: str

        """
        Type: string
        Notes: ULAN URL for the artist
        Example: "https://vocab.getty.edu/page/ulan/500003169"
        """
        artistULAN_URL: str

        """
        Type: string
        Notes: Wikidata URL for the artist
        Example: "https://www.wikidata.org/wiki/Q694774"
        """
        artistWikidata_URL: str

        """
        Type: string
        Notes: City where the artwork was created
        Example: "New York", "Paris", "Tokyo"
        """
        city: str

        """
        Type: string
        Notes: General term describing the artwork type.
        Example: "Basketry", "Ceramics", "Paintings"
        """
        classification: str

        """
        Type: array
        Notes: An array containing the constituents associated with an object, with the constituent's role, name, ULAN URL, Wikidata URL, and gender, when available (currently contains female designations only).
        Example: [{"constituentID": 161708,"role": "Artist","name": "Louise Bourgeois","constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500057350","constituentWikidata_URL": "https://www.wikidata.org/wiki/Q159409","gender": "Female"}]
        """
        constituents: List[_CollectionApiObjectConstituent]

        """
        Type: string
        Notes: Country where the artwork was created or found
        Example: "China", "France", "India"
        """
        country: str

        """
        Type: string
        Notes: County where the artwork was created, may sometimes overlap with State
        Example: "Orange County", "Staffordshire", "Brooklyn"
        """
        county: str

        """
        Type: string
        Notes: Text acknowledging the source or origin of the artwork and the year the object was acquired by the museum.
        Example: "Robert Lehman Collection, 1975"
        """
        creditLine: str

        """
        Type: string
        Notes: Information about the culture, or people from which an object was created
        Example: "Afghan", "British", "North African"
        """
        culture: str

        """
        Type: string
        Notes: Indicates The Met's curatorial department responsible for the artwork
        Example: "Egyptian Art"
        """
        department: str

        """
        Type: string
        Notes: Size of the artwork or object
        Example: "16 x 20 in. (40.6 x 50.8 cm)"
        """
        dimensions: str

        """
        Type: string
        Notes: Dynasty (a succession of rulers of the same line or family) under which an object was created
        Example: "Kingdom of Benin", "Dynasty 12"
        """
        dynasty: str

        """
        Type: string
        Notes: The name of an excavation. The excavation field usually includes dates of excavation.
        Example: "MMA excavations, 1923–24"; "Khashaba excavations, 1910–11"; "Carnarvon excavations, 1912"
        """
        excavation: str

        """
        Type: string
        Notes: Qualifying information that describes the relationship of the place catalogued in the geography fields to the object that is being catalogued
        Example: "Made in", "From", "Attributed to"
        """
        geographyType: str

        """
        Type: boolean
        Notes: When "true" indicates a popular and important artwork in the collection
        Example: Vincent van Gogh's "Wheat Field with Cypresses"
        """
        isHighlight: bool

        """
        Type: boolean
        Notes: When "true" indicates an artwork in the Public Domain
        Example: Vincent van Gogh's "Wheat Field with Cypresses"
        """
        isPublicDomain: bool

        """
        Type: boolean
        Notes: Whether the object is on the Timeline of Art History website
        Example: true
        """
        isTimelineWork: bool

        """
        Type: string
        Notes: URL to object's page on metmuseum.org
        Example: "https://www.metmuseum.org/art/collection/search/547802"
        """
        linkResource: str

        """
        Type: string
        Notes: Geographic location more specific than subregion, but more specific than locus, where the artwork was found (frequently null)
        Example: "Tomb of Perneb", "Temple of Hatshepsut", "Palace of Ramesses II"
        """
        locale: str

        """
        Type: string
        Notes: Geographic location that is less specific than locale, but more specific than excavation, where the artwork was found (frequently null)
        Example: "1st chamber W. wall"; "Burial C 2, In coffin"; "Pit 477"
        """
        locus: str

        """
        Type: array
        Notes: Array of elements, each with a name, description, and set of measurements.  Spatial measurements are in centimeters; weights are in kg. 
        Example: 
            [
                {
                "elementName": "Overall",
                "elementDescription": "Temple proper",
                "elementMeasurements": {
                    "Height": 640.0813,
                    "Length": 1249.6825,
                    "Width": 640.0813
                }
              }
            ]
         
        """
        measurements: List[_CollectionApiObjectMeasurements]

        """
        Type: string
        Notes: Refers to the materials that were used to create the artwork
        Example: "Oil on canvas", "Watercolor", "Gold"
        """
        medium: str

        """
        Type: datetime
        Notes: Date metadata was last updated
        Example: 2018-10-17T10:24:43.197Z
        """
        metadataDate: str

        """
        Type: int
        Notes: Machine readable date indicating the year the artwork was started to be created
        Example: 1867, 1100, -900
        """
        objectBeginDate: int

        """
        Type: string
        Notes: Year, a span of years, or a phrase that describes the specific or approximate date when an artwork was designed or created
        Example: "1865–67", "19th century", "ca. 1796"
        """
        objectDate: str

        """
        Type: int
        Notes: Machine readable date indicating the year the artwork was completed (may be the same year or different year than the objectBeginDate)
        Example: 1888, 1100, -850
        """
        objectEndDate: int

        """
        Type: int
        Notes: Identifying number for each artwork (unique, can be used as key field)
        Example: 437133
        """
        objectID: int

        """
        Type: string
        Notes: Describes the physical type of the object
        Example: "Dress", "Painting", "Photograph", or "Vase"
        """
        objectName: str

        """
        Type: string
        Notes: URL to object's page on metmuseum.org
        Example: "https://www.metmuseum.org/art/collection/search/547802"
        """
        objectURL: str

        """
        Type: string
        Notes: Wikidata URL for the object
        Example: "https://www.wikidata.org/wiki/Q432253"
        """
        objectWikidata_URL: str

        """
        Type: string
        Notes: Time or time period when an object was created
        Example: "Ming dynasty (1368-1644)", "Middle Bronze Age"
        """
        period: str

        """
        Type: string
        Notes: A set of works created as a group or published as a series.
        Example: "Birds of America", "The Hudson River Portfolio", "Speculum Romanae Magnificentiae"
        """
        portfolio: str

        """
        Type: string
        Notes: URL to the primary image of an object in JPEG format
        Example: "https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg"
        """
        primaryImage: str

        """
        Type: string
        Notes: URL to the lower-res primary image of an object in JPEG format
        Example: "https://images.metmuseum.org/CRDImages/ep/web-large/DT1567.jpg"
        """
        primaryImageSmall: str

        """
        Type: string
        Notes: Geographic location more specific than country, but more specific than subregion, where the artwork was created or found (frequently null)
        Example: "Bohemia", "Midwest", "Southern"
        """
        region: str

        """
        Type: string
        Notes: Reign of a monarch or ruler under which an object was created
        Example: "Amenhotep III", "Darius I", "Louis XVI"
        """
        reign: str

        """
        Type: string
        Notes: 
        Example: "Metropolitan Museum of Art, New York, NY"
        """
        repository: str

        """
        Type: string
        Notes: Credit line for artworks still under copyright.
        Example: "© 2018 Estate of Pablo Picasso / Artists Rights Society (ARS), New York"
        """
        rightsAndReproduction: str

        """
        Type: string
        Notes: River is a natural watercourse, usually freshwater, flowing toward an ocean, a lake, a sea or another river related to the origins of an artwork (frequently null)
        Example: "Mississippi River", "Nile River", "River Thames"
        """
        river: str

        """
        Type: string
        Notes: State or province where the artwork was created, may sometimes overlap with County
        Example: "Alamance", "Derbyshire", "Brooklyn"
        """
        state: str

        """
        Type: string
        Notes: Geographic location more specific than Region, but less specific than Locale, where the artwork was created or found (frequently null)
        Example: "Malqata", "Deir el-Bahri", "Valley of the Kings"
        """
        subregion: str

        """
        Type: array
        Notes: An array of subject keyword tags associated with the object and their respective AAT URL
        Example: [{"term": "Abstraction","AAT_URL": "http://vocab.getty.edu/page/aat/300056508","Wikidata_URL": "https://www.wikidata.org/wiki/Q162150"}]
        """
        tags: List[_CollectionApiObjectTag]

        """
        Type: string
        Notes: Title, identifying phrase, or name given to a work of art
        Example: "Wheat Field with Cypresses"
        """
        title: str

        # Optional fields

        """
        Type: float
        Notes: Size of the artwork or object in centimeters, parsed
        Example: [{"element":"Sheet","dimensionType":"Height","dimension":51},{"element":"Plate","dimensionType":"Height","dimension":47.5},{"element":"Sheet","dimensionType":"Width","dimension":72.8},{"element":"Plate","dimensionType":"Width","dimension":62.5}]
        """
        dimensionsParsed: Optional[List[_CollectionApiObjectDimensionParsed]] = None

    def __init__(self, *, cache_dir_path: Path):
        self.__file_cache = FileCache(cache_dir_path=cache_dir_path)
        self.__logger = logging.getLogger(__name__)

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        for model in models:
            referenced_met_object_uris = self.__get_model_met_object_references(
                model=model
            )
            if not referenced_met_object_uris:
                yield model
                continue

            for (
                work_uri,
                metmuseum_collection_api_url,
            ) in referenced_met_object_uris.items():
                yield from self.__get_met_object(
                    metmuseum_collection_api_url=metmuseum_collection_api_url,
                    work_uri=work_uri,
                )

            if not isinstance(model, StubModel):
                # A StubModel is "replaced" by the Wikidata entity model
                yield model

    def __get_met_object(
        self, *, metmuseum_collection_api_url: URIRef, work_uri: URIRef
    ) -> Iterable[Model]:
        """
        Get the Met object as a Work, as well as
        :param metmuseum_collection_api_url: metmuseum.org collection API URL, like https://collectionapi.metmuseum.org/public/collection/v1/objects/436535
        :param work_uri: URI of the Work to return, may or may not be the same as the collection API URL
        :return:
        """

        with open(
            self.__file_cache.get_file(metmuseum_collection_api_url)
        ) as metmuseum_collection_api_json_file:
            collection_api_object: MetmuseumEnricher._CollectionApiObject = (
                self._CollectionApiObject.from_dict(  # type: ignore
                    json.load(metmuseum_collection_api_json_file)
                )
            )

        assert collection_api_object.title
        work_builder = SchemaCreativeWork.builder(
            name=collection_api_object.title, uri=metmuseum_collection_api_url
        )

        if collection_api_object.artistDisplayName:
            artist_builder = SchemaPerson.builder(
                name=collection_api_object.artistDisplayName,
                uri=URIRef(collection_api_object.artistULAN_URL)
                if collection_api_object.artistULAN_URL
                else uuid_urn(),
            )
        else:
            artist_builder = None

        postal_address_builder: Optional[SchemaPostalAddress.Builder] = None

        # Ignore accessionNumber

        # Ignore accessionYear

        # additionalImages
        for additional_image_url in collection_api_object.additionalImages:
            additional_image = SchemaImageObject.builder(
                uri=URIRef(additional_image_url)
            ).build()
            yield additional_image
            work_builder.add_image(additional_image.uri)

        # Ignore artistAlphaSort

        # artistBeginDate
        if artist_builder is not None and collection_api_object.artistBeginDate:
            artist_builder.set_birth_date(collection_api_object.artistBeginDate)

        # artistDisplayBio
        if artist_builder is not None and collection_api_object.artistDisplayBio:
            artist_builder.set_description(collection_api_object.artistDisplayBio)

        # Handled artistDisplayName above

        # artistEndDate
        if artist_builder is not None and collection_api_object.artistEndDate:
            artist_builder.set_death_date(collection_api_object.artistEndDate)

        # Ignore artistGender

        # artistNationality
        if artist_builder is not None and collection_api_object.artistNationality:
            artist_builder.set_nationality(
                collection_api_object.artistNationality
            )  # Should be a schema:Country, not str

        # Ignore artistPrefix

        # Ignore artistRole

        # Ignore artistSuffix

        # Used artistULAN_URL as the artist URI if available

        # artistWikidata_URL
        if artist_builder is not None and collection_api_object.artistWikidata_URL:
            artist_builder.add_same_as(URIRef(collection_api_object.artistWikidata_URL))

        # city
        if collection_api_object.city:
            if postal_address_builder is None:
                postal_address_builder = SchemaPostalAddress.builder()
            postal_address_builder.set_address_locality(collection_api_object.city)

        # Ignore classification

        # constituents
        for constituent in collection_api_object.constituents:
            if constituent.role == "Artist":
                continue
            raise NotImplementedError(constituent.role)

        # country
        if collection_api_object.country:
            if postal_address_builder is None:
                postal_address_builder = SchemaPostalAddress.builder()
            postal_address_builder.set_address_country(collection_api_object.country)

        # county and state
        if collection_api_object.state:
            if postal_address_builder is None:
                postal_address_builder = SchemaPostalAddress.builder()
            postal_address_builder.set_address_region(collection_api_object.state)
        elif collection_api_object.county:
            if postal_address_builder is None:
                postal_address_builder = SchemaPostalAddress.builder()
            postal_address_builder.set_address_region(collection_api_object.county)

        # creditLine
        if collection_api_object.creditLine:
            self.text = work_builder.add_credit_text(collection_api_object.creditLine)

        # Ignore culture

        # Ignore department

        # dimensions and dimensionsParsed
        if collection_api_object.dimensionsParsed:
            self.__logger.warning(
                "dimensionsParsed handling not implemented: %s",
                collection_api_object.dimensionsParsed,
            )
        elif collection_api_object.dimensions:
            work_builder.set_size(collection_api_object.dimensions)

        # Ignore dynasty

        # Ignore excavation

        # Ignore GalleryNumber

        # Ignore geographyType

        # Ignore isHighlight

        # isPublicDomain
        if collection_api_object.isPublicDomain:
            work_builder.add_license(CreativeCommonsLicenses.MARK_1_0.uri)

        # Ignore isTimelineWork

        # linkResource
        if collection_api_object.linkResource:
            work_builder.add_url(URIRef(collection_api_object.linkResource))

        # Ignore locale

        # Ignore locus

        # Ignore measurements

        # medium
        if collection_api_object.medium:
            work_builder.add_material(collection_api_object.medium)

        # metadataDate?

        # Ignore objectBeginDate

        # objectDate
        if collection_api_object.objectDate:
            work_builder.set_date_created(collection_api_object.objectDate)

        # Ignore objectEndDate

        # Ignore objectID

        # Ignore objectName

        # Ignore objectURL

        if collection_api_object.objectWikidata_URL:
            work_builder.add_same_as(URIRef(collection_api_object.objectWikidata_URL))

        # Ignore period

        # Ignore portfolio

        # primaryImage
        assert collection_api_object.primaryImage
        primary_image = SchemaImageObject.builder(
            uri=URIRef(collection_api_object.primaryImage)
        ).build()
        yield primary_image
        work_builder.add_image(primary_image.uri)
        # Ignore primaryImageSmall

        # Ignore region

        # Ignore reign

        # Ignore repository

        # rightsAndReproduction
        if collection_api_object.rightsAndReproduction:
            work_builder.add_rights_holder(collection_api_object.rightsAndReproduction)

        # Ignore river

        # state handled above

        # Ignore subregion

        # tags
        for tag in collection_api_object.tags:
            if not tag.term:
                continue
            defined_term_builder = SchemaDefinedTerm.builder(
                name=tag.term,
                uri=URIRef(tag.AAT_URL) if tag.AAT_URL else uuid_urn(),
            )
            if tag.Wikidata_URL:
                defined_term_builder.add_same_as(URIRef(tag.Wikidata_URL))
            defined_term = defined_term_builder.build()
            yield defined_term
            work_builder.add_about(defined_term.uri)

        # title handled above

        yield work_builder.build()

    @staticmethod
    def __get_model_met_object_references(*, model: Model) -> Dict[URIRef, URIRef]:
        """
        Get a mapping of referenced object URI -> API object URI.

        References can be to API URIs (https://collectionapi.metmuseum.org/public/collection/v1/objects/436535)
          or their human-readable collection pages (https://www.metmuseum.org/art/collection/search/436535).
        """

        same_as_uris: Tuple[URIRef, ...]
        if isinstance(model, StubModel):
            same_as_uris = (model.uri,)
        else:
            same_as_uris = model.same_as_uris

        result: Dict[URIRef, URIRef] = {}
        for same_as_uri in same_as_uris:
            if match_url(
                same_as_uri,
                match_netloc="collectionapi.metmuseum.org",
                match_path_prefix="/public/collection/v1/objects/",
            ):
                result[same_as_uri] = same_as_uri
            elif match_url(
                same_as_uri,
                match_netloc="www.metmuseum.org",
                match_path_prefix="/art/collection/search/",
            ):
                parsed_url = urlparse(same_as_uri.lower())
                result[same_as_uri] = URIRef(
                    f"https://collectionapi.metmuseum.org/public/collection/v1/objects/{parsed_url.path[len('/art/collection/search/'):]}"
                )
        return result
