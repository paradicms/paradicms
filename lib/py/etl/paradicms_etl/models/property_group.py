from typing import Union, Text

from rdflib import URIRef, RDFS

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class PropertyGroup(ResourceBackedNamedModel):
    class Builder(ResourceBackedNamedModel.Builder):
        def __init__(self, *, label: str, uri: URIRef):
            ResourceBackedNamedModel.Builder.__init__(self, uri=uri)
            self.add(RDFS.label, label)

        def build(self) -> "Property":
            return PropertyGroup(self._resource)

        def set_comment(
            self, comment: Union[str, Text]
        ) -> "ResourceBackedNamedModel.Builder":
            self.set(RDFS.comment, comment)
            return self

    def __init__(self, *args, **kwds):
        ResourceBackedNamedModel.__init__(self, *args, **kwds)
        self.label

    @classmethod
    def builder(cls, *, label: str, uri: URIRef):
        return cls.Builder(label=label, uri=uri)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            {"comment": {"@id": str(RDFS.comment)}},
            {"label": {"@id": str(RDFS.label)}},
        )

    @property
    def label(self) -> str:
        return self._required_str_value(RDFS.label)
