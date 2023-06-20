import {cc} from "@paradicms/vocabularies";
import {DatasetModelReader} from "../DatasetModelReader";
import {ModelSet} from "../ModelSet";
import {License} from "../License";
import {CreativeCommonsLicense} from "./CreativeCommonsLicense";

export class CreativeCommonsModelReader extends DatasetModelReader {
    override readNamedLicenses(kwds: { modelSet: ModelSet }): readonly License[] {
        return this.readNamedModels<License>({
            class_: cc.License,
            factory: CreativeCommonsLicense,
            modelSet: kwds.modelSet
        });
    }
}
