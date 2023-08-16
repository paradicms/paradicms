import logging
from pathlib import Path
from typing import Dict, Iterable, List, Set, Tuple
from urllib.parse import quote, unquote

from paradicms_etl.model import Model
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.schema.schema_place import SchemaPlace
from paradicms_etl.models.text import Text
from rdflib import URIRef

from paradicms_nlp.models.word_net_synset import WordNetSynset
from paradicms_nlp.utils.word_net_annotator import WordNetAnnotator

__import__("spacy_wordnet.wordnet_annotator")


class TextEnricher:
    __IGNORE_ENT_LABELs = {"CARDINAL", "MONEY", "WORK_OF_ART"}

    def __init__(self, *, cache_dir_path: Path):
        self.__logger = logging.getLogger(__name__)
        self.__word_net_annotator = WordNetAnnotator()

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        text_works: List[Tuple[SchemaCreativeWork, str]] = []
        word_net_concept_uris: Set[URIRef] = set()

        for model in models:
            if isinstance(model, Concept):
                if model.uri.startswith(WordNetSynset.URI_PREFIX):
                    word_net_concept_uris.add(model.uri)
            elif isinstance(model, SchemaCreativeWork) and model.text:
                if isinstance(model.text, Text):
                    text = model.text.value
                else:
                    assert isinstance(model.text, str)
                    text = model.text
                text_works.append((model, text))
                continue
            yield model

        ignored_ent_labels: Set[str] = set()
        ignored_word_net_synset_names: Set[str] = set()

        for work, text in text_works:
            work_replacer = work.replacer()
            modified_work = False

            # Reference concepts corresponding to WordNet synsets
            for word_net_annotation in self.__word_net_annotator.annotate(text):
                for word_net_synset in word_net_annotation.synsets:
                    if word_net_synset.uri in word_net_concept_uris:
                        work_replacer.add_about(word_net_synset.uri)
                        modified_work = True
                    elif word_net_synset.name not in ignored_word_net_synset_names:
                        self.__logger.info(
                            "%s: no concept for %s synset %s",
                            work.uri,
                            word_net_annotation.text,
                            word_net_synset.name,
                        )
                        ignored_word_net_synset_names.add(word_net_synset.name)

            # # Reference named entities
            # ent_uris: Dict[str, Dict[str, URIRef]] = {}
            # for ent in doc.ents:
            #     if ent.label_ in self.__IGNORE_ENT_LABELs:
            #         self.__logger.debug(
            #             "%s: ignoring named entity label %s: %s",
            #             work.uri,
            #             ent.label_,
            #             ent.text,
            #         )
            #         continue

            #     ent_uri = ent_uris.get(ent.label_, {}).get(ent.text.lower())
            #     if ent_uri is not None:
            #         work_replacer.add_about(ent_uri)
            #         modified_work = True
            #         continue

            #     ent_uri = URIRef(f"urn:ner:{quote(ent.text.lower())}")
            #     if ent.label_ == "GPE":
            #         model_builder = SchemaPlace.builder(uri=ent_uri)
            #         model_builder.set_name(ent.text)
            #         model = model_builder.build()
            #     elif ent.label_ == "ORG":
            #         model = SchemaOrganization.builder(
            #             name=ent.text, uri=ent_uri
            #         ).build()
            #     elif ent.label_ == "PERSON":
            #         model = SchemaPerson.builder(name=ent.text, uri=ent_uri).build()
            #     else:
            #         if ent.label_ not in ignored_ent_labels:
            #             self.__logger.info(
            #                 "%s: unrecognized named entity label %s: %s",
            #                 work.uri,
            #                 ent.label_,
            #                 ent.text,
            #             )
            #             ignored_ent_labels.add(ent.label_.lower())
            #         continue

            #     yield model

            #     work_replacer.add_about(model.uri)
            #     modified_work = True

            #     ent_uris.setdefault(ent.label_, {})[ent.text.lower()] = ent_uri

            yield work_replacer.build() if modified_work else work
