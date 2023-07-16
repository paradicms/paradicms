import {LinkedArtModel} from "./LinkedArtModel";
import {LinkedArtHasSymbolicContentMixin} from "./LinkedArtHasSymbolicContentMixin";
import {Mixin} from "ts-mixer";

export class LinkedArtLinguisticAppellation extends Mixin(
  LinkedArtModel,
  LinkedArtHasSymbolicContentMixin
) {}
