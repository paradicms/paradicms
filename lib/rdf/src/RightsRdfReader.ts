import {ModelRdfReader} from "./ModelRdfReader";
import {Rights} from "@paradicms/models";
import {DCTERMS} from "./vocabularies";
import {ModelNode} from "ModelNode";
import {Quad, Store} from "n3";

export class RightsRdfReader extends ModelRdfReader<Rights | null> {
  constructor(node: ModelNode, store: Store, nodeStatements?: readonly Quad[]) {
    super(node, store);
  }

  read(): Rights | null {
    const creator = this.readPropertyValue(DCTERMS.creator);
    const holder = this.readPropertyValue(DCTERMS.rightsHolder);
    const license = this.readPropertyValue(DCTERMS.license);
    const statement = this.readPropertyValue(DCTERMS.rights);

    if (creator || holder || license || statement) {
      return {
        creator,
        holder,
        license,
        statement,
      };
    } else {
      return null;
    }
  }
}
