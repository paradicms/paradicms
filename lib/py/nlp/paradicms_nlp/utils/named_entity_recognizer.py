import json
import logging
import re
import unicodedata
from copy import copy
from hashlib import sha256
from pathlib import Path
from typing import Dict, Iterable, List, Optional, Sequence, Set, Tuple

import spacy
import tiktoken
from nltk import word_tokenize  # type: ignore
from nltk.corpus import stopwords  # type: ignore
from nltk.tokenize.treebank import TreebankWordDetokenizer  # type: ignore

from paradicms_nlp.models.llm_metadata import LlmMetadata
from paradicms_nlp.models.named_entity import NamedEntity
from paradicms_nlp.models.named_entity_type import NamedEntityType


class NamedEntityRecognizer:
    __SPACY_MODEL_NAME = "en_core_web_trf"
    __STOPWORDS: Set[str] = set(stopwords.words("english"))
    __WHITESPACE_RE = re.compile(r"\s+")

    def __init__(self, *, cache_dir_path: Path, llm: Optional[LlmMetadata] = None):
        self.__detokenizer = TreebankWordDetokenizer()
        self.__llm = llm
        self.__logger = logging.getLogger(__name__)
        if llm is not None:
            self.__cache_dir_path = cache_dir_path / llm.spacy_name
            self.__ent_labels_to_types = {
                str(named_entity_type): named_entity_type
                for named_entity_type in NamedEntityType
            }
            self.__nlp = spacy.blank("en")
            self.__nlp.add_pipe(
                "llm",
                config={
                    "task": {
                        "@llm_tasks": "spacy.NER.v2",
                        "labels": list(self.__ent_labels_to_types),
                        "single_match": True,
                    },
                    "model": {
                        "@llm_models": llm.spacy_name,
                    },
                },
            )
            self.__tiktoken_encoding = tiktoken.encoding_for_model(llm.tiktoken_name)
        else:
            self.__cache_dir_path = None
            self.__ent_labels_to_types = {
                "GPE": NamedEntityType.LOCATION,
                "ORG": NamedEntityType.ORGANIZATION,
                "PERSON": NamedEntityType.PERSON,
            }
            self.__nlp = spacy.load(self.__SPACY_MODEL_NAME)
            self.__tiktoken_encoding = None

    def __cache_named_entities(
        self,
        *,
        named_entities: Tuple[NamedEntity, ...],
        text: str,
        text_hash_hexdigest: str,
    ) -> None:
        if self.__cache_dir_path is None:
            return

        cache_dir_path = self.__cache_dir_path / text_hash_hexdigest
        cache_dir_path.mkdir(exist_ok=True, parents=True)

        with open(cache_dir_path / "text.txt", "w+") as text_file:
            text_file.write(text)

        with open(cache_dir_path / "named_entities.json", "w+") as json_file:
            json.dump(
                [json.loads(named_entity.to_json()) for named_entity in named_entities],  # type: ignore
                json_file,
                indent=4,
            )

    def __chunk_text(self, text: str) -> Iterable[str]:
        if self.__llm is None:
            yield text
            return

        text_split = text.split("\n")
        text_split.reverse()

        def join_text_chunks(text_chunks_seq: Sequence[str]) -> str:
            return "\n".join(text_chunks_seq)

        assert self.__tiktoken_encoding is not None
        text_chunks: List[str] = []
        yielded_text_len_sum = 0
        while text_split:
            text_chunk = text_split.pop()
            text_chunks.append(text_chunk)
            text_chunks_joined = join_text_chunks(text_chunks)
            text_chunks_token_count = len(
                self.__tiktoken_encoding.encode(text_chunks_joined)
            )

            if text_chunks_token_count > self.__llm.token_limit:
                text_chunks.pop()
                assert text_chunks, "single text chunk is larger than the token limit"

                text_chunks_joined = join_text_chunks(text_chunks)
                self.__logger.info(
                    "text chunk len=%d tokens=%d",
                    len(text_chunks_joined),
                    len(self.__tiktoken_encoding.encode(text_chunks_joined)),
                )
                yield text_chunks_joined
                yielded_text_len_sum += len(text_chunks_joined)

                text_chunks = [text_chunk]

        if text_chunks:
            text_chunks_joined = join_text_chunks(text_chunks)
            text_chunks_token_count = len(
                self.__tiktoken_encoding.encode(text_chunks_joined)
            )
            assert text_chunks_token_count <= self.__llm.token_limit
            self.__logger.info(
                "text chunk len=%d tokens=%d",
                len(text_chunks_joined),
                text_chunks_token_count,
            )
            yield text_chunks_joined
            yielded_text_len_sum += len(text_chunks_joined)

        # assert yielded_text_len_sum == len(
        #     text
        # ), f"{yielded_text_len_sum} vs. {len(text)}"

    def __get_cached_named_entities(
        self, *, text_hash_hexdigest: str
    ) -> Optional[Tuple[NamedEntity, ...]]:
        if self.__cache_dir_path is None:
            return None

        cache_dir_path = self.__cache_dir_path / text_hash_hexdigest
        if not cache_dir_path.is_dir():
            self.__logger.debug(
                "named entities cache directory %s does not exist", cache_dir_path
            )
            return None

        with open(cache_dir_path / "named_entities.json") as json_file:
            return tuple(
                NamedEntity(**named_entity_json_object)
                for named_entity_json_object in json.load(json_file)
            )

    def recognize(self, text: str) -> Iterable[NamedEntity]:
        text_hash_hexdigest = sha256(text.encode("utf-8")).hexdigest()

        named_entities = self.__get_cached_named_entities(
            text_hash_hexdigest=text_hash_hexdigest
        )
        if named_entities is not None:
            self.__logger.debug(
                "read %d named entities from cache for text %s",
                len(named_entities),
                text_hash_hexdigest,
            )
            return named_entities

        ignored_ent_labels: Set[str] = set()
        named_entities_dict: Dict[NamedEntityType, Dict[str, NamedEntity]] = {}

        for text_chunk in self.__chunk_text(text):
            doc = self.__nlp(text_chunk)

            for ent in doc.ents:
                clean_ent_text = self.__WHITESPACE_RE.sub(" ", ent.text).strip()
                clean_ent_text = unicodedata.normalize("NFC", clean_ent_text)
                clean_ent_text = clean_ent_text.replace("\u2010", "-")
                clean_ent_text_tokens: List[str] = word_tokenize(clean_ent_text)
                clean_ent_text_tokens_without_stopwords: List[str] = copy(
                    clean_ent_text_tokens
                )
                while (
                    clean_ent_text_tokens_without_stopwords
                    and clean_ent_text_tokens_without_stopwords[0].lower()
                    in self.__STOPWORDS
                ):
                    clean_ent_text_tokens_without_stopwords.pop(0)
                if clean_ent_text_tokens_without_stopwords and len(
                    clean_ent_text_tokens_without_stopwords
                ) < len(clean_ent_text_tokens):
                    clean_ent_text = self.__detokenizer.detokenize(  # type: ignore
                        clean_ent_text_tokens_without_stopwords
                    )

                named_entity_type = self.__ent_labels_to_types.get(ent.label_)
                if named_entity_type is None:
                    if ent.label_ not in ignored_ent_labels:
                        self.__logger.info(
                            "unrecognized named entity label %s: %s",
                            ent.label_,
                            clean_ent_text,
                        )
                        ignored_ent_labels.add(ent.label_.lower())
                    continue

                existing_named_entity = named_entities_dict.get(
                    named_entity_type, {}
                ).get(clean_ent_text.lower())
                if existing_named_entity is not None:
                    if (
                        not existing_named_entity.text.islower()
                        and not existing_named_entity.text.isupper()
                    ):
                        # The existing named entity is mixed-case
                        self.__logger.debug(
                            "ignoring duplicate named entity %s: %s",
                            named_entity_type,
                            clean_ent_text,
                        )
                        continue
                    # else drop down to replace it with a mixed-case one

                named_entities_dict.setdefault(named_entity_type, {})[
                    clean_ent_text.lower()
                ] = NamedEntity(text=clean_ent_text, type_=named_entity_type)

        named_entities = tuple(
            named_entity
            for named_entities_by_text in named_entities_dict.values()
            for named_entity in named_entities_by_text.values()
        )

        self.__cache_named_entities(
            named_entities=named_entities,
            text=text,
            text_hash_hexdigest=text_hash_hexdigest,
        )

        return named_entities
