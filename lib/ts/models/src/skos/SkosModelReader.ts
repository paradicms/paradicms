import {skos} from "@paradicms/vocabularies";
import {DatasetModelReader} from "../DatasetModelReader";
import {ModelSet} from "../ModelSet";
import {Concept} from "../Concept";
import {SkosConcept} from "./SkosConcept";

export class SkosModelReader extends DatasetModelReader {
    override readConcepts(kwds: { modelSet: ModelSet }): readonly Concept[] {
        return this.readNamedModels<Concept>({
            class_: skos.Concept,
            factory: SkosConcept,
            modelSet: kwds.modelSet
        });
    }
}
