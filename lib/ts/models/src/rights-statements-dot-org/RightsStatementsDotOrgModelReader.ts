import {dcterms, skos} from "@paradicms/vocabularies";
import {DatasetModelReader} from "../DatasetModelReader";
import {ModelSet} from "../ModelSet";
import {RightsStatement} from "../RightsStatement";
import {RightsStatementsDotOrgRightsStatement} from "./RightsStatementsDotOrgRightsStatement";
import {getRdfInstanceQuads} from "@paradicms/rdf";
import {ModelGraphIdentifier} from "../ModelGraphIdentifier";
import {NamedNode} from "@rdfjs/types";

export class RightsStatementsDotOrgModelReader extends DatasetModelReader {
    override readNamedRightsStatements(kwds: { modelSet: ModelSet }): readonly RightsStatement[] {
        // DcRightsStatement also has rdf:type dcterms:RightsStatement, but is pure dcterms: with no skos: like RightsStatements.org rights statements.
        const rightsStatements: RightsStatementsDotOrgRightsStatement[] = [];
        for (const rdfInstanceQuad of getRdfInstanceQuads({
            class_: dcterms.RightsStatement,
            dataset: this.dataset,
            includeSubclasses: false
        }).values()) {
            if (rdfInstanceQuad.subject.termType !== "NamedNode") {
                continue;
            }
            if (!rdfInstanceQuad.subject.value.startsWith("http://rightsstatements.org/vocab/")) {
                continue;
            }
            for (const _ of this.dataset.match(rdfInstanceQuad.subject, skos.prefLabel)) {
                // Presence of a skos:prefLabel indicates it's a RightsStatements.org RightsStatement and not a
                // standard dcterms:RightsStatement.

                this.checkModelGraph({
                    modelGraph: rdfInstanceQuad.graph as ModelGraphIdentifier,
                    modelIdentifier: rdfInstanceQuad.subject,
                });

                rightsStatements.push(
                    new RightsStatementsDotOrgRightsStatement({
                        dataset: this.dataset,
                        graph: rdfInstanceQuad.graph as ModelGraphIdentifier,
                        identifier: rdfInstanceQuad.subject as NamedNode,
                        modelSet: kwds.modelSet,
                    })
                );

                break;
            }
        }
        return rightsStatements;
    }
}
