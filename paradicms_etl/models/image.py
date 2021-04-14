from dataclasses import dataclass
from datetime import datetime
from typing import Optional

from rdflib import Graph, URIRef
from rdflib.namespace import FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl.models._image import _Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS


@dataclass(frozen=True)
class Image(_Image):
    depicts_uri: URIRef  # Collection, institution, or object
    institution_uri: URIRef  # So images can be grouped by institution
    copyable: bool = True  # Can this image be copied from its source (for GUI building), or does it have to be hot linked in order to use it?
    rights: Optional[Rights] = None

    @classmethod
    def create(
        cls,
        *,
        depicts_uri: URIRef,
        institution_uri: URIRef,
        uri: URIRef,
        copyable: bool = True,
        created: Optional[datetime] = None,
        exact_dimensions: Optional[ImageDimensions] = None,
        format: Optional[str] = None,
        max_dimensions: Optional[ImageDimensions] = None,
        modified: Optional[datetime] = None,
        original_image_uri: Optional[URIRef] = None,
        rights: Optional[Rights] = None
    ):
        """
        Factory method to supply default values for optional fields in _Image.
        The _Image field declarations can't have default values, since this class inherits _Image
        and then adds required fields.
        Optional fields with default values aren't allowed before required fields in MRO.
        """
        return cls(
            copyable=copyable,
            created=created,
            depicts_uri=depicts_uri,
            exact_dimensions=exact_dimensions,
            format=format,
            institution_uri=institution_uri,
            max_dimensions=max_dimensions,
            modified=modified,
            original_image_uri=original_image_uri,
            rights=rights,
            uri=uri,
        )

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Image.to_rdf(self, graph=graph)
        resource.add(FOAF.depicts, self.depicts_uri)
        resource.add(CMS.institution, self.institution_uri)
        return resource
