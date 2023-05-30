import {NamedModel} from "../NamedModel";
import {SameAsModel} from "./SameAsModel";
import {NamedNode} from "@rdfjs/types";

export class SameAsNamedModel<ModelT extends NamedModel> extends SameAsModel<
  ModelT
> implements NamedModel {
    override get identifier(): NamedNode {
        return super.identifier as NamedNode;
    }

    override get uri(): string {
        return this.identifier.value;
    }
}
