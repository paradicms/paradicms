import lunr, {Index} from "lunr";
import {PropertyDefinition} from "@paradicms/models";
import {IndexedObject} from "./IndexedObject";

const basex = require("base-x");
const base58 = basex(
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
);

const encodeFieldName = (value: string): string =>
  base58.encode(Buffer.from(value, "utf-8"));

export class ObjectIndex {
  private readonly index: Index;
  private readonly objectsByUri: {[index: string]: IndexedObject};

  constructor(
    objects: readonly IndexedObject[],
    propertyDefinitions: readonly PropertyDefinition[],
  ) {
    const fieldsByPropertyDefinitionUri = propertyDefinitions.reduce(
      (fieldsByPropertyDefinitionUri, propertyDefinition) => {
        if (propertyDefinition.fullTextSearchable) {
          fieldsByPropertyDefinitionUri[propertyDefinition.uri] = {
            propertyDefinition,
            name: encodeFieldName(propertyDefinition.uri),
          };
        }
        return fieldsByPropertyDefinitionUri;
      },
      {} as {
        [index: string]: {
          name: string;
          propertyDefinition: PropertyDefinition;
        };
      }
    );

    const objectsByUri: {[index: string]: IndexedObject} = {};
    this.objectsByUri = objectsByUri;

    this.index = lunr(function() {
      this.field("abstract");
      this.field("title");
      for (const field of Object.values(fieldsByPropertyDefinitionUri)) {
        this.field(field.name);
      }
      this.ref("uri");

      for (const object of objects) {
        const doc: any = {title: object.title, uri: object.uri};
        if (object.abstract) {
          doc.abstract = object.abstract;
        }
        if (object.properties && object.properties.length > 0) {
          for (const objectProperty of object.properties) {
            const field = fieldsByPropertyDefinitionUri[objectProperty.uri];
            if (!field) {
              continue;
            }
            doc[field.name] = objectProperty.value;
          }
        }
        this.add(doc);
        objectsByUri[object.uri] = object;
      }
    });
  }

  search(query: string): readonly IndexedObject[] {
    return this.index.search(query).map(({ref}) => this.objectsByUri[ref]);
  }
}
