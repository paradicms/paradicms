import {DataFactory, NamedNode} from "n3";
import namedNode = DataFactory.namedNode;

/**
 * Replacement for rdflib.js Namespace, which doesn't exist in N3.js
 */
export function Namespace(
  namespaceUri: string
): (localName: string) => NamedNode {
  return function (localName: string): NamedNode {
    return namedNode(namespaceUri + (localName || ""));
  };
}
