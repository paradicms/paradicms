import {StringWorksheetStateExporter} from "~/exporters/StringWorksheetStateExporter";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";

export class TextWorksheetStateExporter
  implements StringWorksheetStateExporter {
  export(
    worksheetDefinition: WorksheetDefinition,
    worksheetStates: WorksheetState[]
  ): string {
    const paragraphs: string[] = [];
    for (const worksheetState of worksheetStates) {
      if (worksheetState.text) {
        paragraphs.push(worksheetState.text);
      }
      for (const featureSetState of worksheetState.featureSets ?? []) {
        const featureSetDefinition = worksheetDefinition.featureSetByIriOptional(
          featureSetState.iri
        );
        if (!featureSetDefinition) {
          continue;
        }
        const clauses: string[] = [];
        for (const featureState of featureSetState.features ?? []) {
          const clause = (featureState.values ?? [])
            .filter(value => value.selected)
            .map(value => value.iri)
            .flatMap(selectedFeatureValueIri => {
              const featureValueDefinition = worksheetDefinition.featureValueByIriOptional(
                selectedFeatureValueIri
              );
              if (featureValueDefinition) {
                return [
                  featureValueDefinition.prefLabel ??
                    featureValueDefinition.value.value,
                ];
              } else {
                return [];
              }
            });
          if (clause.length > 0) {
            clauses.push(clause.join(", "));
          }
        }
        if (clauses.length > 0) {
          paragraphs.push(
            featureSetDefinition.label + ": " + clauses.join("; ")
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
