import {Location} from "../Location";
import {LiteralModel} from "./LiteralModel";

export class LiteralLocation extends LiteralModel implements Location {
  lat: number = 0;
  long: number = 0;
}
