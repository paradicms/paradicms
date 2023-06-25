import {DatasetModelReader} from "../DatasetModelReader";
import {Collection} from "../Collection";
import {ModelSet} from "../ModelSet";
import {schema} from "@paradicms/vocabularies";
import {SchemaCollection} from "./SchemaCollection";
import {Work} from "../Work";
import {SchemaCreativeWork} from "./SchemaCreativeWork";

export class SchemaModelReader extends DatasetModelReader {
    override readCollections(kwds: { modelSet: ModelSet }): readonly Collection[] {
        return this.readNamedModels<Collection>({class_: schema.Collection, factory: SchemaCollection, modelSet: kwds.modelSet})
    }

    override readWorks(kwds: { modelSet: ModelSet }): readonly Work[] {
        return this.readNamedModels<Work>({class_: schema.CreativeWork, factory: SchemaCreativeWork, modelSet: kwds.modelSet})
    }
}
