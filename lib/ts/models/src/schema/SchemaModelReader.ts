import {DatasetModelReader} from "../DatasetModelReader";
import {Collection} from "../Collection";
import {ModelSet} from "../ModelSet";
import {schema} from "@paradicms/vocabularies";
import {SchemaCollection} from "./SchemaCollection";
import {Work} from "../Work";
import {SchemaCreativeWork} from "./SchemaCreativeWork";
import {Property} from "../Property";
import {SchemaProperty} from "./SchemaProperty";

export class SchemaModelReader extends DatasetModelReader {
    override readCollections(kwds: { modelSet: ModelSet }): readonly Collection[] {
        return this.readNamedModels<Collection>({class_: schema.Collection, factory: SchemaCollection, modelSet: kwds.modelSet})
    }

    override readProperties(kwds: { modelSet: ModelSet }): readonly Property[] {
        return this.readNamedModels<Property>({class_: schema.Property, factory: SchemaProperty, modelSet: kwds.modelSet})
    }

    override readWorks(kwds: { modelSet: ModelSet }): readonly Work[] {
        return this.readNamedModels<Work>({class_: schema.CreativeWork, factory: SchemaCreativeWork, modelSet: kwds.modelSet})
    }
}
