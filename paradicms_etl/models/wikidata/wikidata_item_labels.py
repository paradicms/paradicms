from dataclasses import dataclass
from typing import Optional, Tuple

from rdflib import Literal, RDFS
from rdflib.namespace import SKOS
from rdflib.resource import Resource

from paradicms_etl.namespace import CMS


@dataclass(frozen=True)
class WikidataItemLabels:
    pref_label: str
    acronym: Optional[str] = None
    alt_labels: Optional[Tuple[str, ...]] = None

    def to_rdf(self, *, add_to_resource: Resource) -> None:
        labels = self
        if labels.acronym is not None:
            add_to_resource.add(CMS.acronym, Literal(labels.acronym))
        if labels.alt_labels is not None:
            for alt_label in labels.alt_labels:
                add_to_resource.add(SKOS.altLabel, Literal(alt_label))
        add_to_resource.add(RDFS.label, Literal(labels.pref_label))
        add_to_resource.add(SKOS.prefLabel, Literal(labels.pref_label))
