import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";
import {StringWorksheetStateExporter} from "~/exporters/StringWorksheetStateExporter";
import {WorksheetDefinitionWrapper} from "~/models/WorksheetDefinitionWrapper";

export class TextWorksheetStateExporter
  implements StringWorksheetStateExporter
{
  export(
    worksheetDefinition: WorksheetDefinition,
    worksheetStates: WorksheetState[]
  ): string {
    const worksheetDefinitionWrapper = new WorksheetDefinitionWrapper(
      worksheetDefinition
    );

    const paragraphs: string[] = [];
    for (const worksheetState of worksheetStates) {
      if (worksheetState.text) {
        paragraphs.push(worksheetState.text);
      }
      for (const featureSetState of worksheetState.featureSets) {
        const featureSetDefinition = worksheetDefinitionWrapper.featureSetById(
          featureSetState.id
        );
        const clauses: string[] = [];
        for (const featureState of featureSetState.features) {
          if (!featureState.selectedValueIds) {
            continue;
          }
          const clause = featureState.selectedValueIds.map(
            (featureValueId) =>
              worksheetDefinitionWrapper.featureValueById(featureValueId)
                .displayName
          );
          if (clause.length > 0) {
            clauses.push(clause.join(", "));
          }
        }
        if (clauses.length > 0) {
          paragraphs.push(
            featureSetDefinition.displayName + ": " + clauses.join("; ")
          );
        }
      }
    }
    return paragraphs.join("\n\n");
  }

  get displayName() {
    return "Text";
  }

  get fileExtension() {
    return "txt";
  }

  get mimeType() {
    return "text/plain";
  }
}
