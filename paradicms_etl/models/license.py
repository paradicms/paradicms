from dataclasses import dataclass
from typing import Optional, Tuple

from rdflib import DC, DCTERMS, Graph, Literal, SKOS, URIRef
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel


@dataclass(frozen=True)
class License(_NamedModel):
    """
    A license. Adapted from the creativecommons.org license RDF (https://github.com/creativecommons/cc.licenserdf).
    """

    identifier: str
    title: str

    @classmethod
    def from_rdf(cls, resource: Resource):
        # <cc:License rdf:about="http://creativecommons.org/licenses/BSD/">
        # <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"/>
        # <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"/>
        # <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"/>
        # <cc:legalcode rdf:resource="http://opensource.org/licenses/bsd-license.php"/>
        # <cc:requires rdf:resource="http://creativecommons.org/ns#Notice"/>
        # <cc:licenseClass rdf:resource="http://creativecommons.org/license/software"/>
        # <dc:title>BSD License</dc:title>
        # <dc:identifier>BSD</dc:identifier>
        # </cc:License>

        identifier_literal = resource.value(DCTERMS.identifier)
        if identifier_literal is None:
            identifier_literal = resource.value(DC.identifier)
        if not isinstance(identifier_literal, Literal):
            raise ValueError("license must have literal dcterms:identifier")
        identifier = identifier_literal.value

        title_literal = resource.value(DCTERMS.title)
        if title_literal is None:
            title_literal = resource.value(DC.title)
        if not isinstance(title_literal, Literal):
            raise ValueError("license must have literal dcterms:title")
        title = title_literal.value

        return cls(
            identifier=identifier,
            title=title,
            uri=resource.identifier,
        )

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _NamedModel.to_rdf(self, graph=graph)
        if self.definition is not None:
            resource.add(SKOS.definition, Literal(self.definition))
        resource.add(DCTERMS.description, Literal(self.description))
        resource.add(DCTERMS.identifier, Literal(self.identifier))
        for note in self.notes:
            resource.add(SKOS.note, Literal(note))
        resource.add(SKOS.prefLabel, Literal(self.pref_label))
        if self.scope_note is not None:
            resource.add(SKOS.scopeNote, Literal(self.scope_note))
