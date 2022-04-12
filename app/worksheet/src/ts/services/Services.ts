import {WorksheetConfiguration} from "~/models/WorksheetConfiguration";
import {UserSettingsCommandService} from "~/services/UserSettingsCommandService";
import {UserSettingsQueryService} from "~/services/UserSettingsQueryService";
import {WorksheetStateCommandService} from "~/services/WorksheetStateCommandService";
import {WorksheetStateQueryService} from "~/services/WorksheetStateQueryService";
import {LocalStorageUserSettingsCommandService} from "~/services/LocalStorageUserSettingsCommandService";
import {LocalStorageUserSettingsQueryService} from "~/services/LocalStorageUserSettingsQueryService";
import {GoogleSheetsWorksheetStateCommandService} from "~/services/GoogleSheetsWorksheetStateCommandService";
import {GoogleSheetsWorksheetStateQueryService} from "~/services/GoogleSheetsWorksheetStateQueryService";
import {LocalStorageWorksheetStateCommandService} from "~/services/LocalStorageWorksheetStateCommandService";
import {LocalStorageWorksheetStateQueryService} from "~/services/LocalStorageWorksheetStateQueryService";
import {WorksheetDefinition} from "~/models/WorksheetDefinition";

export class Services {
  constructor(
    readonly configuration: WorksheetConfiguration,
    worksheetDefinition: WorksheetDefinition
  ) {
    this.userSettingsCommandService =
      new LocalStorageUserSettingsCommandService();
    this.userSettingsQueryService = new LocalStorageUserSettingsQueryService();

    if (configuration.state.googleSheets) {
      this.worksheetStateCommandService =
        new GoogleSheetsWorksheetStateCommandService(
          configuration.state.googleSheets,
          worksheetDefinition
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

  readonly userSettingsCommandService: UserSettingsCommandService;
  readonly userSettingsQueryService: UserSettingsQueryService;
  readonly worksheetStateCommandService: WorksheetStateCommandService;
  readonly worksheetStateQueryService: WorksheetStateQueryService;
}
