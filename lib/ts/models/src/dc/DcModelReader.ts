import {dcterms, rdf} from "@paradicms/vocabularies";
import {DatasetModelReader} from "../DatasetModelReader";
import {License} from "../License";
import {ModelSet} from "../ModelSet";
import {RightsStatement} from "../RightsStatement";
import {DcLicenseDocument} from "./DcLicenseDocument";
import {DcRightsStatement} from "./DcRightsStatement";
import {getRdfInstanceQuads} from "@paradicms/rdf";
import {NamedNode} from "@rdfjs/types";
import {ModelGraphIdentifier} from "../ModelGraphIdentifier";
import {ModelIdentifier} from "../ModelIdentifier";

export class DcModelReader extends DatasetModelReader {
  override readNamedLicenses(kwds: {modelSet: ModelSet}): readonly License[] {
    return this.readNamedModels({
      class_: dcterms.LicenseDocument,
      factory: DcLicenseDocument,
      ...kwds,
    });
  }

  override readNamedRightsStatements(kwds: {
    modelSet: ModelSet;
  }): readonly RightsStatement[] {
    const hasOnlyDcStatements = (subject: ModelIdentifier, graph: ModelGraphIdentifier): boolean => {
      for (const quad of this.dataset.match(subject, null, null, graph)) {
        if (quad.predicate.equals(rdf.type)) {
          continue;
        }
        if (!quad.predicate.value.startsWith(dcterms[""].value)) {
          return false;
        }
      }
      return true;
    }

    // RightsStatementsDotOrgRightsStatement also has rdf:type dcterms:RightsStatement, but also has skos: statements.
    // Filter out anything here with non-dcterms: predicates
    const rightsStatements: DcRightsStatement[] = [];
    for (const rdfInstanceQuad of getRdfInstanceQuads({
      class_: dcterms.RightsStatement,
      dataset: this.dataset,
      includeSubclasses: false
    }).values()) {
      if (rdfInstanceQuad.subject.termType !== "NamedNode") {
        continue;
      }
      if (!hasOnlyDcStatements(rdfInstanceQuad.subject, rdfInstanceQuad.graph as ModelGraphIdentifier)) {
        continue;
      }

      this.checkModelGraph({
        modelGraph: rdfInstanceQuad.graph as ModelGraphIdentifier,
        modelIdentifier: rdfInstanceQuad.subject,
      });

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

}
