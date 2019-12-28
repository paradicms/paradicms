import os.path
from typing import Tuple
from xml.etree.ElementTree import ElementTree

from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF, RDFS

from paradicms.etl.lib.model.collection import Collection
from paradicms.etl.lib.model.image import Image
from paradicms.etl.lib.model.institution import Institution
from paradicms.etl.lib.model.object import Object
from paradicms.etl.lib.namespace import CMS, DCMITYPE, PROV
from paradicms.etl.lib.pipeline._transformer import _Transformer


class TfcTransformer(_Transformer):
    """
    Transformer for Texas Fashion Collection (TFC) XML records.
    """

    _LICENSE_URI = "https://creativecommons.org/licenses/by-nc-nd/2.0/"
    _RIGHTS_HOLDER = "University of North Texas"
    _UNTL_NS = '{http://digital2.library.unt.edu/untl/}'
    _SQUARE_THUMBNAIL_HEIGHT_PX = 75
    _SQUARE_THUMBNAIL_WIDTH_PX = 75

    def __init__(self):
        _Transformer.__init__(self)
        agent_qualifiers = {}
        agent_qualifiers_etree = ElementTree()
        agent_qualifiers_etree.parse(os.path.join(os.path.dirname(__file__), 'agent-qualifiers.xml'))
        RDF_NS = '{http://www.w3.org/1999/02/22-rdf-syntax-ns#}'
        RDFS_NS = '{http://www.w3.org/2000/01/rdf-schema#}'
        for property_etree in agent_qualifiers_etree.iter():
            if property_etree.tag != RDF_NS + 'Property':
                continue
            agent_qualifier_code = property_etree.attrib[RDF_NS + 'about'].rsplit('#', 2)[-1]
            for label_etree in property_etree.iter(RDFS_NS + 'label'):
                agent_qualifier_label = label_etree.text
                assert len(agent_qualifier_label) > 0
                break
            agent_qualifiers[agent_qualifier_code] = agent_qualifier_label
        self.__agent_qualifiers = agent_qualifiers

    def _parse_record_metadata_collection_element(self, element, **kwds):
        assert element.text == 'TXFC', element.text

    def _parse_record_metadata_description_element(self, element, object_, **kwds):
        text = element.text.strip()
        if not text:
            return

        # description_type = None
        # qualifier = element.attrib.get('qualifier', None)
        # if qualifier is not None:
        #     if qualifier == 'content':
        #         description_type = None
        #     elif qualifier == 'physical':
        #         description_type = DescriptionType.PHYSICAL
        #     else:
        #         object_builder.logger.warn(object_builder.log_marker, "unknown description qualifier '{}'", qualifier)

        object_.resource.add(DCTERMS.description, Literal(text))

    def _parse_record_metadata_format_element(self, element, **kwds):
        # WorkType will be picked up by resourceType
        assert element.text in ('image', 'video'), element.text

    def _parse_record_metadata_identifier_element(self, element, graph, object_, record_identifier, **kwds):
        text = element.text.strip()
        if not text:
            return

        qualifier = element.attrib.get('qualifier', None)
        if qualifier in ('ARK', 'LOCAL-CONT-NO', 'OTHER'):
            pass
        elif qualifier == 'itemURL':
            # Already used to derive object_.uri
            pass
        elif qualifier == 'thumbnailURL':
            high_res_image = Image(graph=graph,
                                   uri=URIRef("http://digital.library.unt.edu/ark:" + record_identifier[len(
                                       'info:ark'):] + '/m1/1/high_res/'))
            object_.resource.add(FOAF.depiction, high_res_image.uri)
            high_res_image.resource.add(FOAF.depicts, object_.uri)

            med_res_image = Image(graph=graph, uri=URIRef("http://digital.library.unt.edu/ark:" + record_identifier[
                                                                                                  len(
                                                                                                      'info:ark'):] + '/m1/1/med_res/'))
            med_res_image.resource.add(PROV.wasDerivedFrom, high_res_image.uri)

            square_thumbnail_image = Image(graph=graph,
                                           uri=URIRef("http://digital.library.unt.edu/ark:" + record_identifier[
                                                                                              len(
                                                                                                  'info:ark'):] + '/m1/1/square/')
                                           )
            square_thumbnail_image.height = self._SQUARE_THUMBNAIL_HEIGHT_PX
            square_thumbnail_image.width = self._SQUARE_THUMBNAIL_WIDTH_PX
            square_thumbnail_image.resource.add(PROV.wasDerivedFrom, high_res_image.uri)

            thumbnail_image = Image(graph=graph, uri=URIRef(text))
            high_res_image.resource.add(FOAF.thumbnail, thumbnail_image.uri)
            thumbnail_image.resource.add(PROV.wasDerivedFrom, high_res_image.uri)

        elif qualifier is not None:
            self._logger.warn("ignoring unknown identifier qualifier '{}' on record {}", qualifier,
                              record_identifier)

    def _parse_record_metadata_institution_element(self, element, **kwds):
        assert element.text == 'UNTCVA', element.text

    def _parse_record_metadata_language_element(self, element, object_, **kwds):
        text = element.text.strip()
        if not text:
            return

        if text == "nol":
            return

        object_.resource.add(DCTERMS.language, Literal(text))

    def _parse_record_metadata_meta_element(self, element, record_identifier, **kwds):
        text = element.text.strip()
        if not text:
            return

        qualifier = element.attrib.get('qualifier', None)
        if qualifier is None:
            self._logger.warning("meta element without qualifier on record {}",
                                 record_identifier)
            return

        if qualifier in (
                'ark',
                'hidden',
                'meta-id',
                'metadataCreationDate',
                'metadataCreator',
                'metadataModifier',
                'metadataModificationDate',
                'system',
        ):
            pass
        else:
            self._logger.warning("ignoring unknown meta qualifier '{}' on record {}",
                                 qualifier, record_identifier)

    def _parse_record_metadata_note_element(self, element, object_, **kwds):
        text = element.text.strip()
        if not text:
            return

        object_.resource.add(RDFS.comment, Literal(text))

        # qualifier = element.attrib.get('qualifier', None)
        # if qualifier == 'digitalPreservation':
        #     object_builder.vra.setdefault('description', []).append(
        #         Description.builder()
        #             .setText(text)
        #             .setType(DescriptionType.HISTORY)
        #             .build()
        #     )
        # elif qualifier == 'display':
        #     object_builder.vra.setdefault('description', []).append(
        #         Description.builder()
        #             .setText(text)
        #             .setType(DescriptionType.PUBLIC)
        #             .build()
        #     )
        # elif qualifier == 'nonDisplay':
        #     pass
        # else:
        #     object_builder.vra.setdefault('description', []).append(
        #         Description.builder()
        #             .setText(text)
        #             .setType(DescriptionType.HISTORY)
        #             .build()
        #     )

    #             object_builder.logger.warn(object_builder.log_marker, "ignoring unknown note qualifier '{}' on record {}", qualifier, object_builder.record_identifier)

    def _parse_record_metadata_primarySource_element(self, element, object_, **kwds):
        text = element.text.strip()
        if not text:
            return

        value = int(text)

        if value == 1:  # Boolean
            object_.resource.add(DCTERMS.type, Literal("Primary Source"))

    def _parse_record_metadata_resourceType_element(self, element, object_, **kwds):
        text = element.text.strip()
        if not text:
            return

        dcmi_type = {
            'image_artwork': 'StillImage',
            'image_photo': 'StillImage',
            'physical-object': 'PhysicalObject',
            'video': 'MovingImage'
        }[text]

        object_.resource.add(DCTERMS.type, getattr(DCMITYPE, dcmi_type))

    def _parse_record_metadata_rights_element(self, element, object_, record_identifier, **kwds):
        text = element.text.strip()
        if not text:
            return

        qualifier = element.attrib.get('qualifier', None)
        if qualifier is None:
            self._logger.warning("rights element without qualifier on record %s", record_identifier)
            return

        if qualifier == 'access':
            assert text == 'public', text
        elif qualifier == 'license':
            if text == 'by-nc-nd':
                object_.resource.add(DCTERMS.license, URIRef(self._LICENSE_URI))
            else:
                self._logger.warn("ignoring unknown license text '%s' on record %s",
                                  text, record_identifier)

            object_.resource.add(DCTERMS.rightsHolder, Literal(self._RIGHTS_HOLDER))
        elif qualifier == 'statement':
            object_.resource.add(DCTERMS.rights, Literal(text))
        else:
            self._logger.warning("ignoring unknown rights qualifier '%s' on record %s",
                                 qualifier, record_identifier)

    def _parse_record_metadata_subject_element(self, element, object_, **kwds):
        text = element.text.strip()
        if not text:
            return

        # qualifier = element.get('qualifier', None)
        # qualifier may be e.g., "AAT" but it's not a link to a concept, it's the label
        # if qualifier is not None:
        #     if qualifier == "AAT":
        #         pass
        #     else:
        #         if qualifier not in ('named_person', 'UNTL-BS',):
        #             self._logger.warning("unknown subject vocabulary '%s'", qualifier)
        #     object_.resource.add(DCTERMS.subject, Literal(text))
        # else:
        #     object_.resource.add(DCTERMS.subject, Literal(text))
        object_.resource.add(DCTERMS.subject, Literal(text))

    def _parse_record_metadata_title_element(self, element, object_, record_identifier, **kwds):
        text = element.text.strip()
        if not text:
            return

        qualifier = element.attrib.get('qualifier', None)
        if qualifier is not None:
            predicate = {
                "addedtitle": DCTERMS.alternative,
                "alternatetitle": DCTERMS.alternative,
                "officialtitle": DCTERMS.title,
                "other": DCTERMS.alternative,
                "paralleltitle": DCTERMS.alternative,
                "seriestitle": DCTERMS.alternative,
                "sorttitle": DCTERMS.alternative,
            }.get(qualifier)
            if predicate is not None:
                object_.resource.add(predicate, Literal(text))
                return
            self._logger.warn("unknown title qualifier '%s' on record {}",
                              qualifier, record_identifier)

        object_.resource.add(DCTERMS.title, Literal(text))

    def transform(self, record_etrees: Tuple[ElementTree, ...]) -> Graph:
        graph = Graph()

        institution = Institution(graph=graph, uri=URIRef("http://www.unt.edu/"))
        institution.resource.add(FOAF.name, Literal("University of North Texas"))

        collection = Collection(graph=graph, uri=URIRef("http://tfc.unt.edu/"))
        collection.resource.add(DCTERMS.license, URIRef(self._LICENSE_URI))
        collection.resource.add(DCTERMS.rights,
                                Literal(
                                    "All Texas Fashion Collection content and images are copyrighted. The contents of Texas Fashion Collection, hosted by the University of North Texas Libraries (digital content including images, text, and sound and video recordings) are made publicly available by the collection-holding partners for use in research, teaching, and private study. For the full terms of use, see https://digital.library.unt.edu/terms-of-use/"))
        collection.resource.add(DCTERMS.rightsHolder, Literal(self._RIGHTS_HOLDER))
        collection.resource.add(DCTERMS.title, Literal("Texas Fashion Collection"))
        institution.resource.add(CMS.collection, collection.uri)

        for record_etree in record_etrees:
            record_identifier = record_etree.find('header').find('identifier').text

            metadata_etree = record_etree.find("metadata").find(self._UNTL_NS + 'metadata')

            item_url = None
            for identifier_etree in metadata_etree.iter(self._UNTL_NS + "identifier"):
                if identifier_etree.attrib["qualifier"] == "itemURL":
                    item_url = identifier_etree.text
                    break
            if item_url is None:
                self._logger.warning("record %s has no itemURL", record_identifier)
                continue

            object_ = Object(graph=graph, uri=URIRef(item_url))
            collection.resource.add(CMS.object, object_.uri)

            for etree in metadata_etree:
                assert etree.tag.startswith(self._UNTL_NS)
                tag = etree.tag[len(self._UNTL_NS):]
                method_name = '_parse_record_metadata_' + tag + '_element'
                try:
                    method = getattr(self, method_name)
                except AttributeError:
                    self._logger.warning("no such method '%s' for record %s with tex"
                                         "t '%s'", method_name,
                                         record_identifier, etree.text.strip())
                    continue
                method(
                    element=etree,
                    graph=graph,
                    object_=object_,
                    record_identifier=record_identifier
                )

        return graph
