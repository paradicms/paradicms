import { requireNonNull } from "@paradicms/utilities";
import { Literal } from "@rdfjs/types";
import { Agent } from "../Agent";
import { License } from "../License";
import { ModelSet } from "../ModelSet";
import { RightsStatement } from "../RightsStatement";
import { LiteralText } from "../literal/LiteralText";

export class WikidataText extends LiteralText {
    private readonly modelSet: ModelSet;

    constructor(kwds: { literal: Literal, modelSet: ModelSet }) {
        super({literal: kwds.literal});
        this.modelSet = kwds.modelSet;
    }

    override get licenses(): readonly License[] {
        // All structured data from the main, Property, Lexeme, and EntitySchema namespaces is available under the Creative Commons CC0 License; text in the other namespaces is available under the Creative Commons Attribution-ShareAlike License; additional terms may apply.
        return [
            requireNonNull(
                this.modelSet.licenseByIri(
                    "http://creativecommons.org/licenses/by-sa/3.0/"
                )
            ),
        ];
    }

    override get requiresAttribution(): boolean {
        return true;
    }

    override get rightsHolders(): readonly Agent[] {
        return [];
    }

    override get rightsStatements(): readonly RightsStatement[] {
        return [
            requireNonNull(
                this.modelSet.rightsStatementByIri(
                    "http://rightsstatements.org/vocab/InC/1.0/"
                )
            ),
        ];
    }
}
