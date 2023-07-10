import {dcmitype, dcterms, skos} from "@paradicms/vocabularies";
import {DatasetModelReader} from "../DatasetModelReader";
import {License} from "../License";
import {ModelSet} from "../ModelSet";
import {RightsStatement} from "../RightsStatement";
import {DcLicenseDocument} from "./DcLicenseDocument";
import {getRdfInstanceQuads} from "@paradicms/rdf";
import {NamedNode} from "@rdfjs/types";
import {ModelGraphIdentifier} from "../ModelGraphIdentifier";
import {
    RightsStatementsDotOrgRightsStatement
} from "../rights-statements-dot-org/RightsStatementsDotOrgRightsStatement";
import {DcRightsStatement} from "./DcRightsStatement";
import {Collection} from "../Collection";
import {DcCollection} from "./DcCollection";
import {Image} from "../Image";
import {DcImage} from "./DcImage";
import {Work} from "../Work";
import {DcPhysicalObject} from "./DcPhysicalObject";

export class DcModelReader extends DatasetModelReader {
    override readCollections(kwds: { modelSet: ModelSet }): readonly Collection[] {
        return this.readNamedModels({
            class_: dcmitype.Collection,
            factory: DcCollection,
            ...kwds,
        });
    }

    override readImages(kwds: { modelSet: ModelSet }): readonly Image[] {
        return this.readNamedModels({
            class_: dcmitype.Image,
            factory: DcImage,
            ...kwds,
        });
    }

    override readNamedLicenses(kwds: { modelSet: ModelSet }): readonly License[] {
        return this.readNamedModels({
            class_: dcterms.LicenseDocument,
            factory: DcLicenseDocument,
            ...kwds,
        });
    }

    override readNamedRightsStatements(kwds: {
        modelSet: ModelSet;
    }): readonly RightsStatement[] {
        // RightsStatementsDotOrgRightsStatement also has rdf:type dcterms:RightsStatement, but also has skos: statements.
        // Distinguish RightsStatement.org rights statements from standard dcterms:RightsStatement's.
        const rightsStatements: RightsStatement[] = [];
        for (const rdfInstanceQuad of getRdfInstanceQuads({
            class_: dcterms.RightsStatement,
            dataset: this.dataset,
            includeSubclasses: false
        }).values()) {
            if (rdfInstanceQuad.subject.termType !== "NamedNode") {
                continue;
            }

            this.checkModelGraph({
                modelGraph: rdfInstanceQuad.graph as ModelGraphIdentifier,
                modelIdentifier: rdfInstanceQuad.subject,
            });

            if (rdfInstanceQuad.subject.value.startsWith("http://rightsstatements.org/vocab/") || rdfInstanceQuad.subject.value.startsWith("https://rightsstatements.org/vocab/")) {
                if (this.dataset.match(rdfInstanceQuad.subject, skos.prefLabel).size > 0) {
                    rightsStatements.push(
                        new RightsStatementsDotOrgRightsStatement({
                            dataset: this.dataset,
                            graph: rdfInstanceQuad.graph as ModelGraphIdentifier,
                            identifier: rdfInstanceQuad.subject as NamedNode,
                            modelSet: kwds.modelSet,
                        })
                    );
                    continue;
                }
            }

            rightsStatements.push(
                new DcRightsStatement({
                    dataset: this.dataset,
                    graph: rdfInstanceQuad.graph as ModelGraphIdentifier,
                    identifier: rdfInstanceQuad.subject as NamedNode,
                    modelSet: kwds.modelSet,
                })
            );
        }

        return rightsStatements;
    }

    override readWorks(kwds: { modelSet: ModelSet }): readonly Work[] {
        return this.readNamedModels({
            class_: dcmitype.PhysicalObject,
            factory: DcPhysicalObject,
            ...kwds,
        });
    }
}
