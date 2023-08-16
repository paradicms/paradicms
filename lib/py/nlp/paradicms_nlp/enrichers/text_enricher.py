import logging
from pathlib import Path
from typing import Iterable, List, Set, Tuple

from paradicms_etl.model import Model
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.schema.schema_creative_work import SchemaCreativeWork
from paradicms_etl.models.schema.schema_organization import SchemaOrganization
from paradicms_etl.models.schema.schema_person import SchemaPerson
from paradicms_etl.models.schema.schema_place import SchemaPlace
from paradicms_etl.models.text import Text
from rdflib import URIRef

from paradicms_nlp.models.named_entity import NamedEntity
from paradicms_nlp.models.named_entity_type import NamedEntityType
from paradicms_nlp.models.word_net_synset import WordNetSynset
from paradicms_nlp.utils.named_entity_recognizer import NamedEntityRecognizer
from paradicms_nlp.utils.word_net_annotator import WordNetAnnotator


class TextEnricher:
    def __init__(self, *, cache_dir_path: Path):
        self.__logger = logging.getLogger(__name__)
        self.__named_entity_recognizer = NamedEntityRecognizer()
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
            yielded_named_entity_uris: Set[URIRef] = set()
            for named_entity in self.__named_entity_recognizer.recognize(text):
                if named_entity.uri in yielded_named_entity_uris:
                    work_replacer.add_about(named_entity.uri)
                    modified_work = True
                    continue

                if named_entity.type_ == NamedEntityType.LOCATION:
                    model_builder = SchemaPlace.builder(uri=named_entity.uri)
                    model_builder.set_name(named_entity.text)
                    model = model_builder.build()
                elif named_entity.type_ == NamedEntityType.ORGANIZATION:
                    model = SchemaOrganization.builder(
                        name=named_entity.text, uri=named_entity.uri
                    ).build()
                elif named_entity.type_ == NamedEntityType.PERSON:
                    model = SchemaPerson.builder(
                        name=named_entity.text, uri=named_entity.uri
                    ).build()
                else:
                    continue

                yield model
                yielded_named_entity_uris.add(model.uri)

                work_replacer.add_about(model.uri)
                modified_work = True

            yield work_replacer.build() if modified_work else work
