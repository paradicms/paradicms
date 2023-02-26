import {ModelParameters, ModelSet} from "@paradicms/models";
import {WorksheetFeatureSetDefinition} from "~/models/WorksheetFeatureSetDefinition";
import {WorksheetFeatureDefinition} from "~/models/WorksheetFeatureDefinition";
import {strict as worksheet} from "~/vocabularies/worksheet";
import {Dataset, DatasetCore} from "@rdfjs/types";
import {datasetCoreToDataset} from "@paradicms/rdf";

export class WorksheetDefinitionModelSet extends ModelSet {
  private _worksheetFeatureDefinitions?: readonly WorksheetFeatureDefinition[];
  private _worksheetFeatureDefinitionsByUriIndex?: {
    [index: string]: WorksheetFeatureDefinition;
  };
  private _worksheetFeatureSetDefinitions?: readonly WorksheetFeatureSetDefinition[];
  private _worksheetFeatureSetDefinitionsByUriIndex?: {
    [index: string]: WorksheetFeatureSetDefinition;
  };

  private constructor(dataset: Dataset) {
    super(dataset);
  }

  static override fromDataset(dataset: Dataset): WorksheetDefinitionModelSet {
    return new WorksheetDefinitionModelSet(dataset);
  }

  static override fromDatasetCore(datasetCore: DatasetCore): WorksheetDefinitionModelSet {
    return new WorksheetDefinitionModelSet(datasetCoreToDataset(datasetCore));
  }

  private readWorksheetFeatureDefinition(
    kwds: ModelParameters
  ): WorksheetFeatureDefinition {
    return new WorksheetFeatureDefinition(kwds);
  }

  private readWorksheetFeatureDefinitions(): void {
    const worksheetFeatureDefinitions: WorksheetFeatureDefinition[] = [];
    this._worksheetFeatureDefinitionsByUriIndex = {};
    this.getModels(kwds => {
      const worksheetFeatureDefinition = this.readWorksheetFeatureDefinition(
        kwds
      );
      worksheetFeatureDefinitions.push(worksheetFeatureDefinition);
      this._worksheetFeatureDefinitionsByUriIndex![
        worksheetFeatureDefinition.uri
      ] = worksheetFeatureDefinition;
    }, worksheet.Feature);
    this._worksheetFeatureDefinitions = worksheetFeatureDefinitions;
  }

  private readWorksheetFeatureSetDefinition(
    kwds: ModelParameters
  ): WorksheetFeatureSetDefinition {
    return new WorksheetFeatureSetDefinition(kwds);
  }

  private readWorksheetFeatureSetDefinitions(): void {
    const worksheetFeatureSetDefinitions: WorksheetFeatureSetDefinition[] = [];
    this._worksheetFeatureSetDefinitionsByUriIndex = {};
    this.getModels(kwds => {
      const worksheetFeatureSetDefinition = this.readWorksheetFeatureSetDefinition(
        kwds
      );
      worksheetFeatureSetDefinitions.push(worksheetFeatureSetDefinition);
      this._worksheetFeatureSetDefinitionsByUriIndex![
        worksheetFeatureSetDefinition.uri
      ] = worksheetFeatureSetDefinition;
    }, worksheet.FeatureSet);
    this._worksheetFeatureSetDefinitions = worksheetFeatureSetDefinitions;
  }

  get worksheetFeatureDefinitions(): readonly WorksheetFeatureDefinition[] {
    if (!this._worksheetFeatureDefinitions) {
      this.readWorksheetFeatureDefinitions();
    }
    return this._worksheetFeatureDefinitions!;
  }

  worksheetFeatureDefinitionByUri(uri: string): WorksheetFeatureDefinition {
    const worksheetFeatureDefinition = this
      .worksheetFeatureDefinitionsByUriIndex[uri];
    if (!worksheetFeatureDefinition) {
      throw new RangeError("no such worksheet feature definition " + uri);
    }
    return worksheetFeatureDefinition;
  }

  worksheetFeatureDefinitionByUriOptional(
    uri: string
  ): WorksheetFeatureDefinition | null {
    return this.worksheetFeatureDefinitionsByUriIndex[uri] ?? null;
  }

  private get worksheetFeatureDefinitionsByUriIndex(): {
    [index: string]: WorksheetFeatureDefinition;
  } {
    if (!this._worksheetFeatureDefinitionsByUriIndex) {
      this.readWorksheetFeatureDefinitions();
    }
    return this._worksheetFeatureDefinitionsByUriIndex!;
  }

  get worksheetFeatureSetDefinitions(): readonly WorksheetFeatureSetDefinition[] {
    if (!this._worksheetFeatureSetDefinitions) {
      this.readWorksheetFeatureSetDefinitions();
    }
    return this._worksheetFeatureSetDefinitions!;
  }

  worksheetFeatureSetDefinitionByUriOptional(
    uri: string
  ): WorksheetFeatureSetDefinition | null {
    return this.worksheetFeatureSetDefinitionsByUriIndex[uri] ?? null;
  }

  private get worksheetFeatureSetDefinitionsByUriIndex(): {
    [index: string]: WorksheetFeatureSetDefinition;
  } {
    if (!this._worksheetFeatureSetDefinitionsByUriIndex) {
      this.readWorksheetFeatureSetDefinitions();
    }
    return this._worksheetFeatureSetDefinitionsByUriIndex!;
  }
}
