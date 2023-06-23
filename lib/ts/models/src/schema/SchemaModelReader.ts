import {DatasetModelReader} from "../DatasetModelReader";
import {Collection} from "../Collection";
import {ModelSet} from "../ModelSet";
import {schema} from "@paradicms/vocabularies";
import {SchemaCollection} from "./SchemaCollection";

export class SchemaModelReader extends DatasetModelReader {
    override readCollections(kwds: { modelSet: ModelSet }): readonly Collection[] {
        return this.readNamedModels<Collection>({class_: schema.Collection, factory: SchemaCollection, modelSet: kwds.modelSet})
    }
}
