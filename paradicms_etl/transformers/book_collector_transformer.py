from datetime import datetime
from typing import Dict, Optional
from urllib.parse import quote_plus
from xml.etree import ElementTree

from paradicms_etl.transformer import Transformer
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, RDF

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.date_time_description import DateTimeDescription
from paradicms_etl.models.institution import Institution
from paradicms_etl.models.person import Person
from paradicms_etl.models.work import Work
from paradicms_etl.namespaces import CMS, SCHEMA


class BookCollectorTransformer(Transformer):
    def __init__(self, pipeline_uri: URIRef, owner: Optional[URIRef]):
        self.__owner = owner
        self.__pipeline_uri = pipeline_uri

    def transform(self, export_xml_file_path: str):
        collections_by_hash = {}
        etree = ElementTree.parse(export_xml_file_path).getroot()
        graph = self._new_graph

        institution = Institution(graph=graph, uri=CMS.bookCollectorInstitution)
        institution.name = "Book Collector"
        institution.owner = CMS.public

        book_uris = set()
        for data_etree in etree.iter("data"):
            for bookinfo_etree in data_etree.iter("bookinfo"):
                for booklist_etree in data_etree.iter("booklist"):
                    for book_etree in booklist_etree.iter("book"):
                        transformed_book = self.__transform_book(
                            collections_by_hash=collections_by_hash,
                            etree=book_etree,
                            graph=graph,
                        )
                        if not transformed_book:
                            continue
                        assert str(transformed_book.uri) not in book_uris
                        book_uris.add(str(transformed_book.uri))

        for collection in collections_by_hash.values():
            institution.add_collection(collection)

        return graph

    def __transform_book(
        self,
        collections_by_hash: Dict[str, Collection],
        etree: ElementTree,
        graph: Graph,
    ) -> Optional[Work]:
        # print(ElementTree.tostring(etree))
        # clzbookid = etree.findtext("clzbookid")
        # assert clzbookid
        # assert clzbookid != "0"
        hash_ = etree.findtext("hash")
        assert hash_
        hash_ = hash_.lstrip("{").rstrip("}")
        work_ = Work.from_fields(graph=graph, uri=URIRef("urn:clzbook:" + hash_))
        work_.owner = CMS.inherit
        work_.resource.add(RDF.type, SCHEMA.Book)

        for mainsection_etree in etree.iter("mainsection"):
            title = mainsection_etree.findtext("title")
            if not title:
                return None
            work_.title = title
            # work_.resource.add(SCHEMA.headline, Literal(title))

            pagecount = mainsection_etree.findtext("pagecount")
            if pagecount:
                work_.resource.add(SCHEMA.numberOfPages, Literal(int(pagecount)))

            plot = mainsection_etree.findtext("plot")
            if plot:
                plot = Literal(plot)
                work_.resource.add(DCTERMS.description, plot)
                # work_.resource.add(SCHEMA.abstract, plot)

        for credits_etree in mainsection_etree.iter("credits"):
            for credit_etree in credits_etree.iter("credit"):
                self.__transform_book_credit(
                    credit_etree=credit_etree, graph=graph, work_=work_
                )

        for publisher_etree in etree.iter("publisher"):
            displayname = publisher_etree.findtext("displayname")
            if not displayname:
                continue
            work_.resource.add(DCTERMS.publisher, Literal(displayname))

        for format_etree in etree.iter("format"):
            displayname = format_etree.findtext("displayname")
            if not displayname:
                continue
            work_.resource.add(DCTERMS["format"], Literal(displayname))

        for key in ("genre", "subject"):
            for subjects_etree in etree.iter(key + "s"):
                for subject_etree in subjects_etree.iter(key):
                    displayname = subject_etree.findtext("displayname")
                    if not displayname:
                        continue
                    work_.resource.add(DCTERMS.subject, Literal(displayname))

        isbn = etree.findtext("isbn")
        if isbn:
            isbn = Literal(isbn)
            work_.resource.add(SCHEMA.isbn, isbn)
            work_.resource.add(DCTERMS.identifier, isbn)

        publicationdate_etree = etree.find("publicationdate")
        if publicationdate_etree:
            publicationdate = self.__transform_date_time_description(
                publicationdate_etree
            )
            if publicationdate:
                work_.resource.add(DCTERMS.date, publicationdate)

        # Ignore dewey
        # Ignore lccn

        collections = []
        for collection_etree in etree.iter("collection"):
            collections.append(
                self.__transform_book_collection(
                    collection_etree=collection_etree,
                    collections_by_hash=collections_by_hash,
                    graph=graph,
                )
            )

        for (date_tag, date_property) in (
            ("addeddate", DCTERMS.created),
            ("modifieddate", DCTERMS.modified),
        ):
            date_etree = etree.find(date_tag)
            if date_etree:
                date_literal = self.__transform_timestamp(date_etree)
                if date_literal:
                    work_.resource.add(date_property, date_literal)

        for collection in collections:
            collection.add_work(work_)

        return work_

    def __transform_book_collection(
        self,
        *,
        collection_etree: ElementTree,
        collections_by_hash: Dict[str, Collection],
        graph: Graph
    ) -> Collection:
        displayname = collection_etree.findtext("displayname")
        assert displayname
        hash_ = collection_etree.findtext("hash")
        assert hash_

        collection = collections_by_hash.get(hash_)
        if collection is not None:
            return collection
        collection = Collection.from_fields(
            graph=graph,
            uri=URIRef(str(self.__pipeline_uri) + ":clzcollection:" + hash_),
        )
        collection.title = displayname
        collection.owner = self.__owner if self.__owner else CMS.public
        collections_by_hash[hash_] = collection
        return collection

    def __transform_book_credit(
        self, credit_etree: ElementTree, graph: Graph, work_: Work
    ) -> None:
        roleid = credit_etree.findtext("roleid")
        if not roleid:
            return

        person = None
        for child_etree in credit_etree:
            if child_etree.tag == "role" or child_etree.tag == "roleid":
                continue

            if child_etree.tag == "person":
                person_etree = child_etree
                displayname = person_etree.findtext("displayname")
                if not displayname:
                    continue

                person = Person(
                    graph=graph, uri=URIRef("urn:clzperson:" + quote_plus(displayname))
                )

                for person_attr_etree in person_etree.iter():
                    if not person_attr_etree.text:
                        continue
                    if person_attr_etree.tag == "displayname":
                        person.name = person_attr_etree.text
                    elif person_attr_etree.tag == "firstname":
                        person.given_name = person_attr_etree.text
                    elif person_attr_etree.tag == "lastname":
                        person.family_name = person_attr_etree.text
                    elif person_attr_etree.tag == "sortname":
                        person.sort_name = person_attr_etree.text
                    else:
                        raise NotImplementedError(person_attr_etree.tag)

                person.validate()
            else:
                raise NotImplementedError(child_etree.tag)

        if roleid == "dfAuthor":
            if person is not None:
                work_.resource.add(DCTERMS.creator, person.uri)
            else:
                raise NotImplementedError
        else:
            raise NotImplementedError(roleid)

    def __transform_date_time_description(
        self, etree: ElementTree
    ) -> Optional[DateTimeDescription]:
        year_etree = etree.find("year")
        if not year_etree:
            return None
        year = etree.findtext("displayname")
        if not year:
            return None
        year = int(year)

        result = DateTimeDescription()
        result.year = year

        month = etree.findtext("month")
        if month:
            result.month = int(month)

        day = etree.findtext("day")
        if day:
            result.day = int(day)

    def __transform_timestamp(self, etree: ElementTree) -> Optional[Literal]:
        timestamp = etree.findtext("timestamp")
        if not timestamp:
            return None
        timestamp = int(timestamp)
        timestamp = datetime.utcfromtimestamp(timestamp)
        return Literal(timestamp)
