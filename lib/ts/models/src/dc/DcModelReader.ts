import { dcterms } from "@paradicms/vocabularies";
import { DatasetModelReader } from "../DatasetModelReader";
import { License } from "../License";
import { ModelSet } from "../ModelSet";
import { RightsStatement } from "../RightsStatement";
import { DcLicenseDocument } from "./DcLicenseDocument";
import { DcRightsStatement } from "./DcRightsStatement";

export class DcModelReader extends DatasetModelReader {
    override readLicenses(kwds: { modelSet: ModelSet }): readonly License[] {
        return this.readModels({
            class_: dcterms.LicenseDocument,
            factory: DcLicenseDocument,
            ...kwds,
        });
    }

    override readRightsStatements(kwds: {
        modelSet: ModelSet;
    }): readonly RightsStatement[] {
        return this.readModels({
            class_: dcterms.RightsStatement,
            factory: DcRightsStatement,
            ...kwds,
        });
    }
}
