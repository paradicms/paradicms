import {ModelRdfReader} from "./ModelRdfReader";
import {Object, Property} from "@paradicms/models";
import {DCTERMS, FOAF, PARADICMS} from "./vocabularies";
import {RightsRdfReader} from "./RightsRdfReader";
import {ModelNode} from "./ModelNode";
import {Store} from "n3";

export class ObjectRdfReader extends ModelRdfReader<Object> {
  constructor(node: ModelNode, store: Store) {
    super(node, store);
  }

  read(): Object {
    const properties: Property[] = [];
    const nodeStatements = this.store.getQuads(this.node, null, null, null);
    for (const nodeStatement of nodeStatements) {
      if (nodeStatement.predicate.termType !== "NamedNode") {
        continue;
      }
      const propertyUri = nodeStatement.predicate.value;
      const propertyValue = this.toPropertyValue(nodeStatement.object);
      if (!propertyValue) {
        continue;
      }
      properties.push({
        uri: propertyUri,
        value: propertyValue,
      });
    }

    let page: string | null = null;
    for (const pageObject of this.store.getObjects(
      this.node,
      FOAF.page,
      null
    )) {
      if (
        pageObject.termType === "Literal" ||
        pageObject.termType === "NamedNode"
      ) {
        page = pageObject.value;
        break;
      }
    }

    return {
      abstract: this.readOptionalLiteral(DCTERMS.abstract)?.toString() ?? null,
      collectionUris: this.readAllParentNamedNodes(PARADICMS.collection).map(
        node => node.value
      ),
      institutionUri: this.readRequiredParentNamedNode(PARADICMS.institution)
        .value,
      page,
      properties,
      rights: new RightsRdfReader(this.node, this.store, nodeStatements).read(),
      title: this.readRequiredLiteral(DCTERMS.title).toString(),
      uri: this.nodeUri,
    };
  }

  static readAll(store: Store): Object[] {
    const objects: Object[] = [];
    ObjectRdfReader.readEach(store, object => objects.push(object));
    return objects;
  }

  static readEach(store: Store, callback: (object: Object) => void): void {
    return ModelRdfReader._readEach<Object>(
      callback,
      node => new ObjectRdfReader(node, store),
      store,
      PARADICMS.Object
    );
  }
}
