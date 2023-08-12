import {MemModelSet} from "./MemModelSet";
import {DatasetCore} from "@rdfjs/types";
import {ModelReader} from "./ModelReader";

export class DatasetBackedModelSet extends MemModelSet {
    constructor(private readonly dataset: DatasetCore, modelReader: ModelReader) {
        super(modelReader);
    }

    override toRdf(): DatasetCore {
        return this.dataset;
    }
}
