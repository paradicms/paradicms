import {DatasetModelReader} from "../DatasetModelReader";
import {Work} from "../Work";
import {ModelSet} from "../ModelSet";
import {crm} from "@paradicms/vocabularies";
import {LinkedArtHumanMadeObject} from "./LinkedArtHumanMadeObject";

export class LinkedArtModelReader extends DatasetModelReader {
    override readWorks(kwds: { modelSet: ModelSet }): readonly Work[] {
        return this.readNamedModels({
            class_: crm.E22_Human_Made_Object,
            factory: LinkedArtHumanMadeObject,
            ...kwds,
        });
    }
}