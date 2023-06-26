import {Location} from "../Location";
import {LiteralModel} from "./LiteralModel";

export class LiteralLocation extends LiteralModel implements Location {
  latitude: number = 0;
  longitude: number = 0;
}
