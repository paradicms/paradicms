import {dcterms} from "@paradicms/vocabularies";
import {DatasetModelReader} from "../DatasetModelReader";
import {ModelSet} from "../ModelSet";
import {RightsStatement} from "../RightsStatement";
import {RightsStatementsDotOrgRightsStatement} from "./RightsStatementsDotOrgRightsStatement";

export class RightsStatementsDotOrgModelReader extends DatasetModelReader {
    override readNamedRightsStatements(kwds: { modelSet: ModelSet }): readonly RightsStatement[] {
        return this.readNamedModels<RightsStatement>({class_: dcterms.RightsStatement, factory: RightsStatementsDotOrgRightsStatement, modelSet: kwds.modelSet});
    }
}
