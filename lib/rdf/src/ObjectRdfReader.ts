import {ModelRdfReader} from "./ModelRdfReader";
import {Object, PrimitiveValue, Property} from "@paradicms/models";
import {DCTERMS, FOAF, PARADICMS} from "./vocabularies";
import {RightsRdfReader} from "./RightsRdfReader";
import {ModelNode} from "./ModelNode";
import {LiteralWrapper} from "./LiteralWrapper";
import {Literal, Store} from "n3";

export class ObjectRdfReader extends ModelRdfReader<Object> {
  constructor(node: ModelNode, store: Store) {
    super(node, store);
  }

  read(): Object {
    const properties: Property[] = [];
    // The number of properties per object is likely less than the number of property definitions available,
    // so loop on available properties (i.e., statements) rather than making a query per property definition.
    const nodeStatements = this.store.getQuads(this.node, null, null, null);
    for (const nodeStatement of nodeStatements) {
      if (nodeStatement.predicate.termType !== "NamedNode") {
        continue;
      }
      const propertyUri = nodeStatement.predicate.value;
      if (nodeStatement.object.termType !== "Literal") {
        continue;
      }
      const literal = new LiteralWrapper(nodeStatement.object as Literal);
      let value: PrimitiveValue;
      if (literal.isBoolean()) {
        value = literal.toBoolean();
      } else if (literal.isInteger()) {
        value = literal.toInteger();
      } else if (literal.isString()) {
        value = literal.toString();
      } else {
        console.warn(
          "unknown literal datatype",
          literal.literal.datatype,
          "for property",
          propertyUri
        );
        continue;
      }

      properties.push({
        uri: propertyUri,
        value,
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
