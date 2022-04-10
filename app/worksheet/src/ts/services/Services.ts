import {WorksheetConfiguration} from "~/models/WorksheetConfiguration";
import {UserSettingsCommandService} from "~/services/UserSettingsCommandService";
import {UserSettingsQueryService} from "~/services/UserSettingsQueryService";
import {WorksheetDefinitionQueryService} from "~/services/worksheet/definition/WorksheetDefinitionQueryService";
import {WorksheetStateCommandService} from "~/services/WorksheetStateCommandService";
import {WorksheetStateQueryService} from "~/services/WorksheetStateQueryService";
import {defaultWorksheetConfiguration} from "~/models/defaultWorksheetConfiguration";
import {LocalStorageUserSettingsCommandService} from "~/services/LocalStorageUserSettingsCommandService";
import {LocalStorageUserSettingsQueryService} from "~/services/LocalStorageUserSettingsQueryService";
import {BundledWorksheetDefinitionQueryService} from "~/services/worksheet/definition/BundledWorksheetDefinitionQueryService";
import {GoogleSheetsWorksheetStateCommandService} from "~/services/GoogleSheetsWorksheetStateCommandService";
import {GoogleSheetsWorksheetStateQueryService} from "~/services/GoogleSheetsWorksheetStateQueryService";
import {LocalStorageWorksheetStateCommandService} from "~/services/LocalStorageWorksheetStateCommandService";
import {LocalStorageWorksheetStateQueryService} from "~/services/LocalStorageWorksheetStateQueryService";

export class Services {
  constructor(readonly configuration: WorksheetConfiguration) {
    this.userSettingsCommandService =
      new LocalStorageUserSettingsCommandService();
    this.userSettingsQueryService = new LocalStorageUserSettingsQueryService();

    if (configuration.definition.bundled) {
      this.worksheetDefinitionQueryService =
        new BundledWorksheetDefinitionQueryService();
    } else {
      throw new RangeError();
    }

    if (configuration.state.googleSheets) {
      this.worksheetStateCommandService =
        new GoogleSheetsWorksheetStateCommandService(
          configuration.state.googleSheets,
          this.worksheetDefinitionQueryService
        );
      this.worksheetStateQueryService =
        new GoogleSheetsWorksheetStateQueryService(
          configuration.state.googleSheets
        );
    } else if (configuration.state.localStorage) {
      this.worksheetStateCommandService =
        new LocalStorageWorksheetStateCommandService();
      this.worksheetStateQueryService =
        new LocalStorageWorksheetStateQueryService();
    } else {
      throw new RangeError();
    }
  }

  static readonly default = new Services(
    defaultWorksheetConfiguration.instance
  );

  readonly userSettingsCommandService: UserSettingsCommandService;
  readonly userSettingsQueryService: UserSettingsQueryService;
  readonly worksheetDefinitionQueryService: WorksheetDefinitionQueryService;
  readonly worksheetStateCommandService: WorksheetStateCommandService;
  readonly worksheetStateQueryService: WorksheetStateQueryService;
}
