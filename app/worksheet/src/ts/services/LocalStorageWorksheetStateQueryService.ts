import {WorksheetState} from "~/models/WorksheetState";
import {NoSuchWorksheetStateException} from "~/services/NoSuchWorksheetStateException";
import {WorksheetStateQueryService} from "~/services/WorksheetStateQueryService";

export class LocalStorageWorksheetStateQueryService
  implements WorksheetStateQueryService
{
  getWorksheetState(kwds: {id: string}): Promise<WorksheetState> {
    return new Promise((resolve, reject) => {
      const jsonString = localStorage.getItem(
        LocalStorageWorksheetStateQueryService.getWorksheetStateItemKey(kwds.id)
      );
      if (jsonString == null) {
        reject(new NoSuchWorksheetStateException(kwds.id));
        return;
      }
      resolve(JSON.parse(jsonString));
    });
  }

  getWorksheetStateIds(): Promise<string[]> {
    let result: string[] = [];
    for (var keyI = 0; ; keyI++) {
      const key = localStorage.key(keyI);
      if (key == null) {
        break;
      }
      if (
        !key.match(
          "^" +
            LocalStorageWorksheetStateQueryService._WORKSHEET_ITEM_KEY_PREFIX
        )
      ) {
        continue;
      } else if (
        key.length ==
        LocalStorageWorksheetStateQueryService._WORKSHEET_ITEM_KEY_PREFIX.length
      ) {
        continue;
      }
      result.push(
        key.substr(
          LocalStorageWorksheetStateQueryService._WORKSHEET_ITEM_KEY_PREFIX
            .length
        )
      );
    }
    return new Promise((resolve, reject) => resolve(result));
  }

  static getWorksheetStateItemKey(id: string): string {
    return (
      LocalStorageWorksheetStateQueryService._WORKSHEET_ITEM_KEY_PREFIX +
      id.toString()
    );
  }

  private static readonly _WORKSHEET_ITEM_KEY_PREFIX = "worksheet/state/";
}
