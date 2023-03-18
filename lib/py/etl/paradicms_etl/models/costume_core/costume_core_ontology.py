from rdflib import Literal, OWL, URIRef
from rdflib.namespace import DCTERMS, RDF, RDFS

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import COCO
from paradicms_etl.utils.resource_builder import ResourceBuilder


class CostumeCoreOntology(ResourceBackedNamedModel):
    @classmethod
    def from_fields(cls, *, version: str) -> "CostumeCoreOntology":
        resource_builder = ResourceBuilder(URIRef(str(COCO)[:-1]))

        resource_builder.add(RDF.type, OWL.Ontology)
        resource_builder.add(OWL.versionIRI, COCO[version])
        resource_builder.add(OWL.versionInfo, Literal(version))
        resource_builder.add(DCTERMS.title, Literal("Costume Core Ontology"))
        resource_builder.add(DCTERMS.creator, Literal("Arden Kirkland"))
        resource_builder.add(DCTERMS.contributor, Literal("Minor Gordon"))
        resource_builder.add(
            DCTERMS.rights,
            Literal(
                "This ontology is distributed under a Creative Commons BY SA 4.0 license  - https://creativecommons.org/licenses/by-sa/4.0/"
            ),
        )
        resource_builder.add(
            RDFS.comment,
            Literal(
                "The Costume Core ontology is for describing artifacts of historic clothing, and is meant to build upon VRA Core and Dublin Core. Work to develop this ontology was part of the Costume Core Toolkit project, funded by a Visual Resources Association Foundation Project Grant in 2019-2020. More information is at http://ardenkirkland.com/costumecore"
            ),
        )

        resource = resource_builder.build()

        # Annotation properties
        for annotation_property_local in (
            "creator",
            "description",
            "identifier",
            "license",
            "rights",
            "source",
        ):
            resource.graph.add(
                (DCTERMS[annotation_property_local], RDF.type, OWL.AnnotationProperty)
            )

        return cls(resource)
