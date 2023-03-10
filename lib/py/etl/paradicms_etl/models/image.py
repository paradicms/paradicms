from datetime import datetime
from typing import Optional, Union

from rdflib import Literal, URIRef, Graph, XSD
from rdflib.namespace import DCTERMS, FOAF
from rdflib.resource import Resource

from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespaces import CMS, EXIF
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Image(ResourceBackedNamedModel):
    LABEL_PROPERTY = DCTERMS.title

    def __init__(self, resource: Resource):
        ResourceBackedNamedModel.__init__(self, resource)
        self.depicts_uri

    @classmethod
    def from_fields(
        cls,
        *,
        depicts_uri: URIRef,
        uri: URIRef,
        # Can this image be copied from its source (for GUI building), or does it have to be hot linked in order to use it?
        copyable: bool = True,
        created: Optional[datetime] = None,
        exact_dimensions: Optional[ImageDimensions] = None,
        format: Optional[str] = None,
        max_dimensions: Optional[ImageDimensions] = None,
        modified: Optional[datetime] = None,
        original_image_uri: Optional[URIRef] = None,
        rights: Optional[Rights] = None,
        src: Union[
            Literal, str, URIRef, None
        ] = None,  # src that can be used in an <img> tag; if not specified, defaults to URI
        title: Optional[str] = None,
    ) -> "Image":
        resource_builder = (
            ResourceBuilder(uri)
            .add(CMS.imageCopyable, copyable)
            .add(DCTERMS.created, created)
            .add(FOAF.depicts, depicts_uri)
            .add(DCTERMS["format"], format)
            .add(DCTERMS.modified, modified)
            .add(DCTERMS.title, title)
            .add_rights(rights)
            .add(CMS.imageSrc, src)
        )

        if exact_dimensions is not None:
            resource_builder.add(EXIF.height, exact_dimensions.height)
            resource_builder.add(EXIF.width, exact_dimensions.width)
        elif max_dimensions is not None:
            resource_builder.add(CMS.imageMaxHeight, max_dimensions.height)
            resource_builder.add(CMS.imageMaxWidth, max_dimensions.width)

        resource = resource_builder.build()

        if original_image_uri is not None:
            # (original, foaf:thumbnail, derived)
            resource.graph.add((original_image_uri, FOAF.thumbnail, uri))
            # (derived, cms:thumbnailOf, original)
            # These quads are faster to query than the foaf:thumbnail ones.
            resource_builder.add(CMS.thumbnailOf, original_image_uri)

        return cls(resource)

    @property
    def copyable(self) -> bool:
        copyable = self._optional_bool_value(CMS.imageCopyable)
        return copyable if copyable is not None else True

    @property
    def depicts_uri(self) -> URIRef:
        return self._required_uri_value(FOAF.depicts)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            safe_dict_update(
                ResourceBackedNamedModel.json_ld_context(),
                {
                    "copyable": {
                        "@id": str(CMS.imageCopyable),
                        "@type": str(XSD.boolean),
                    },
                    "created": {
                        "@id": str(DCTERMS.created),
                        "@type": str(XSD.dateTime),
                    },
                    "depicts": {"@id": str(FOAF.depicts), "@type": "@id"},
                    "format": {"@id": str(DCTERMS.format)},
                    "height": {"@id": str(EXIF.height), "@type": str(XSD.integer)},
                    "maxHeight": {
                        "@id": str(CMS.imageMaxHeight),
                        "@type": str(XSD.integer),
                    },
                    "maxWidth": {
                        "@id": str(CMS.imageMaxWidth),
                        "@type": str(XSD.integer),
                    },
                    "modified": {
                        "@id": str(DCTERMS.modified),
                        "@type": str(XSD.dateTime),
                    },
                    "src": {"@id": str(CMS.imageSrc)},
                    "thumbnail": {"@id": str(FOAF.thumbnail), "@type": "@id"},
                    "thumbnailOf": {"@id": str(CMS.thumbnailOf), "@type": "@id"},
                    "title": {"@id": str(DCTERMS.title), "@type": "@id"},
                    "width": {"@id": str(EXIF.width), "@type": str(XSD.integer)},
                },
            ),
            Rights.json_ld_context(),
        )

    @property
    def original_image_uri(self) -> Optional[URIRef]:
        graph = self._resource.graph
        original_image_uri = graph.value(
            None, FOAF.thumbnail, self._resource.identifier
        )
        if original_image_uri is not None and not isinstance(
            original_image_uri, URIRef
        ):
            raise TypeError("expected original image URI to be a URIRef")
        return original_image_uri

    def replace(self, *, copyable: Optional[bool] = None, src: Optional[str] = None):
        graph = Graph()
        graph += self._resource.graph
        resource = graph.resource(self._resource.identifier)
        if copyable is not None:
            resource.remove(CMS.imageCopyable)
            resource.add(CMS.imageCopyable, Literal(copyable))
        if src is not None:
            resource.remove(CMS.imageSrc)
            resource.add(CMS.imageSrc, Literal(src))
        return self.__class__(resource)

    @property
    def rights(self) -> Optional[Rights]:
        return Rights.from_rdf(resource=self._resource)

    @property
    def src(self) -> Union[ImageData, str, None]:
        for o in self._resource.objects(CMS.imageSrc):
            if isinstance(o, Literal):
                o_python = o.toPython()
                if isinstance(o_python, str):
                    return o_python
                else:
                    raise TypeError(
                        f"expected {CMS.imageSrc} literal to be a bytes or string, not a {type(o_python)}"
                    )
            elif isinstance(o, Resource):
                return ImageData(o)
            else:
                continue
        return None

    @property
    def title(self):
        return self._optional_str_value(DCTERMS.title)
