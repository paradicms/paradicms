import {NamedModel} from "../NamedModel";
import {SameAsModel} from "./SameAsModel";
import {NamedNode} from "@rdfjs/types";

export class SameAsNamedModel<ModelT extends NamedModel> extends SameAsModel<
  ModelT
> implements NamedModel {
    override get identifiers(): readonly NamedNode[] {
        return super.identifiers as readonly NamedNode[];
    }
}
