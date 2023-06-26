import {DatasetModelReader} from "../DatasetModelReader";
import {Collection} from "../Collection";
import {ModelSet} from "../ModelSet";
import {schema} from "@paradicms/vocabularies";
import {SchemaCollection} from "./SchemaCollection";
import {Work} from "../Work";
import {SchemaCreativeWork} from "./SchemaCreativeWork";
import {Property} from "../Property";
import {SchemaProperty} from "./SchemaProperty";
import {Image} from "../Image";
import {SchemaImageObject} from "./SchemaImageObject";

export class SchemaModelReader extends DatasetModelReader {
    override readCollections(kwds: { modelSet: ModelSet }): readonly Collection[] {
        return this.readNamedModels<Collection>({class_: schema.Collection, factory: SchemaCollection, modelSet: kwds.modelSet})
    }

    override readImages(kwds: { modelSet: ModelSet }): readonly Image[] {
        return this.readNamedModels<Image>({class_: schema.ImageObject, factory: SchemaImageObject, modelSet: kwds.modelSet})
    }

    override readProperties(kwds: { modelSet: ModelSet }): readonly Property[] {
        return this.readNamedModels<Property>({class_: schema.Property, factory: SchemaProperty, modelSet: kwds.modelSet})
    }

    override readWorks(kwds: { modelSet: ModelSet }): readonly Work[] {
        return this.readNamedModels<Work>({class_: schema.CreativeWork, factory: SchemaCreativeWork, modelSet: kwds.modelSet})
    }
}
