import {NamedNode} from "rdf-js";
import {Concept} from "../Concept";
import {WikidataModel} from "./WikidataModel";

export class WikidataConcept extends WikidataModel implements Concept {
  get value(): NamedNode {
    return this._identifier;
  }
}
