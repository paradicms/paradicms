import {Configuration} from "./Configuration";
import {configuration} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";

export class PropertyConfiguration extends Configuration {
  get filterable(): boolean {
    return (
      this.findAndMapObject(configuration.filterable, this.mapBooleanObject) ??
      false
    );
  }

  // get hidden(): boolean {
  //   return (
  //     this.findAndMapObject(configuration.hidden, this.mapBooleanObject) ??
  //     false
  //   );
  // }

  get label(): string {
    return requireNonNull(
      this.findAndMapObject(configuration.label, this.mapStringObject)
    );
  }

  get searchable(): boolean {
    return (
      this.findAndMapObject(configuration.searchable, this.mapBooleanObject) ??
      false
    );
  }

  get uri(): string {
    return requireNonNull(
      this.findAndMapObject(configuration.predicate, this.mapUriObject)
    );
  }
}
