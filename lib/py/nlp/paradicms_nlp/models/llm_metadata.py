from dataclasses import dataclass


@dataclass(frozen=True)
class LlmMetadata:
    spacy_name: str
    tiktoken_name: str
    token_limit: int


GPT_3_5 = LlmMetadata(
    spacy_name="spacy.GPT-3-5.v1",
    tiktoken_name="gpt-3.5-turbo",
    token_limit=3500,  # Actually 4097, leave room for the prompt
)
