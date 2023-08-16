import logging
from typing import Dict, Iterable, List, Set, Tuple
from urllib.parse import quote, unquote

import spacy
from paradicms_etl.model import Model
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.text import Text
from rdflib import URIRef

__import__("spacy_wordnet.wordnet_annotator")


class TextEnricher:
    def __init__(self):
        self.__logger = logging.getLogger(__name__)
        self.__nlp = spacy.load("en_core_web_md")
        self.__nlp.add_pipe("spacy_wordnet", after="tagger")

    def __call__(self, models: Iterable[Model]) -> Iterable[Model]:
        text_works: List[Tuple[SchemaCreativeWork, str]] = []
        wordnet_concept_uris_by_synset: Dict[str, URIRef] = {}

        for model in models:
            if isinstance(model, Concept):
                if model.uri.startswith("urn:wordnet:"):
                    wordnet_concept_uris_by_synset[
                        unquote(str(model.uri)[len("urn:wordnet:") :])
                    ] = model.uri
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
        ignored_wordnet_synsets: Set[str] = set()

        for work, text in text_works:
            doc = self.__nlp(text)

            work_replacer = work.replacer()
            modified_work = False

            # Reference concepts corresponding to WordNet synsets
            for token in doc:
                if token.pos_ != "NOUN":
                    continue
                for wordnet_synset in token._.wordnet.synsets():
                    concept_uri = wordnet_concept_uris_by_synset.get(
                        str(wordnet_synset)
                    )
                    if concept_uri is not None:
                        work_replacer.add_about(concept_uri)
                        modified_work = True
                    elif str(wordnet_synset) not in ignored_wordnet_synsets:
                        self.__logger.info(
                            "%s: no concept for noun %s synset %s",
                            work.uri,
                            token,
                            wordnet_synset,
                        )
                        ignored_wordnet_synsets.add(str(wordnet_synset))

            # Reference named entities
            ent_uris: Dict[str, Dict[str, URIRef]] = {}
            for ent in doc.ents:
                ent_uri = ent_uris.get(ent.label_, {}).get(ent.text.lower())
                if ent_uri is not None:
                    work_replacer.add_about(ent_uri)
                    modified_work = True
                    continue

                ent_uri = URIRef(f"urn:ner:{quote(ent.text)}")
                if ent.label_ == "ORG":
                    model = SchemaOrganization.builder(
                        name=ent.text, uri=ent_uri
                    ).build()
                elif ent.label_ == "PERSON":
                    model = SchemaPerson.builder(name=ent.text, uri=ent_uri).build()
                else:
                    if ent.label_ not in ignored_ent_labels:
                        self.__logger.info(
                            "%s: unrecognized named entity label %s: %s",
                            work.uri,
                            ent.label_,
                            ent.text,
                        )
                        ignored_ent_labels.add(ent.label_.lower())
                    continue

                yield model

                work_replacer.add_about(model.uri)
                modified_work = True

                ent_uris.setdefault(ent.label_, {})[ent.text.lower()] = ent_uri

            yield work_replacer.build() if modified_work else work
