from rdflib import Literal, OWL, URIRef
from rdflib.namespace import DCTERMS, RDF, RDFS

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import COCO


class CostumeCoreOntology(ResourceBackedNamedModel):
    class Builder(ResourceBackedNamedModel.Builder):
        def __init__(self, *, version: str):
            ResourceBackedNamedModel.Builder.__init__(self, uri=URIRef(str(COCO)[:-1]))
            self.add(RDF.type, OWL.Ontology)
            self.add(OWL.versionIRI, COCO[version])
            self.add(OWL.versionInfo, Literal(version))
            self.add(DCTERMS.title, Literal("Costume Core Ontology"))
            self.add(DCTERMS.creator, Literal("Arden Kirkland"))
            self.add(DCTERMS.contributor, Literal("Minor Gordon"))
            self.add(
                DCTERMS.rights,
                Literal(
                    "This ontology is distributed under a Creative Commons BY SA 4.0 license  - https://creativecommons.org/licenses/by-sa/4.0/"
                ),
            )
            self.add(
                RDFS.comment,
                Literal(
                    "The Costume Core ontology is for describing artifacts of historic clothing, and is meant to build upon VRA Core and Dublin Core. Work to develop this ontology was part of the Costume Core Toolkit project, funded by a Visual Resources Association Foundation Project Grant in 2019-2020. More information is at http://ardenkirkland.com/costumecore"
                ),
            )

            # Annotation properties
            for annotation_property_local in (
                "creator",
                "description",
                "identifier",
                "license",
                "rights",
                "source",
            ):
                self._resource.graph.add(
                    (
                        DCTERMS[annotation_property_local],
                        RDF.type,
                        OWL.AnnotationProperty,
                    )
                )

        def build(self) -> "CostumeCoreOntology":
            return CostumeCoreOntology(self._resource)

    @classmethod
    def builder(cls, *, version: str):
        return cls.Builder(version=version)
