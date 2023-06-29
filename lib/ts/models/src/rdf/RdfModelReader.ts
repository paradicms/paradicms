import {rdf} from "@paradicms/vocabularies";
import {DatasetModelReader} from "../DatasetModelReader";
import {ModelSet} from "../ModelSet";
import {Property} from "../Property";
import {RdfProperty} from "./RdfProperty";

export class RdfModelReader extends DatasetModelReader {
  override readProperties(kwds: {modelSet: ModelSet}): readonly Property[] {
    return this.readNamedModels({
      class_: rdf.Property,
      factory: RdfProperty,
      ...kwds,
    });
  }
}
