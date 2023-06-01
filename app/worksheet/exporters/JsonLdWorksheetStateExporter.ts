import {WorksheetDefinition} from "~/models/WorksheetDefinition";
import {WorksheetState} from "~/models/WorksheetState";
import {WorksheetStateExporter} from "~/exporters/WorksheetStateExporter";
import {Hrefs} from "~/Hrefs";
import {WorksheetMode} from "~/models/WorksheetMode";

export class JsonLdWorksheetStateExporter
  implements WorksheetStateExporter<any> {
  export(
    worksheetDefinition: WorksheetDefinition,
    worksheetStates: WorksheetState[]
  ): any {
    switch (worksheetStates.length) {
      case 0:
        return [];
      case 1:
        return this._export(worksheetDefinition, worksheetStates[0]);
      default:
        worksheetStates.map(worksheetState =>
          this._export(worksheetDefinition, worksheetState)
        );
    }
  }

  private _export(
    worksheetDefinition: WorksheetDefinition,
    worksheetState: WorksheetState
  ): any {
    const json: any = {};
    const context: any = {};
    context.cc = "https://w3id.org/costumeCore/ontology/";
    json["@context"] = context;
    let href = Hrefs.worksheetMark({
      featureSetIri: null,
      featureIri: null,
      mode: WorksheetMode.BEGINNER,
      review: false,
      worksheetStateId: worksheetState.id,
    });
    if (href.endsWith("/edit")) {
      href = href.substring(0, href.length - 4);
    }
    json["@id"] = "https://dressdiscover.org" + href;
    for (const featureSetState of worksheetState.featureSets ?? []) {
      for (const featureState of featureSetState.features ?? []) {
        const selectedFeatureValueIris = (featureState.values ?? [])
          .filter(value => value.selected)
          .map(value => value.iri);

        if (selectedFeatureValueIris.length === 0) {
          continue;
        }
        const featureStateKey = featureState.iri;
        context[featureStateKey] = {"@type": "@id"};
        json[featureStateKey] = selectedFeatureValueIris;
      }
    }
    return json;
  }
}
