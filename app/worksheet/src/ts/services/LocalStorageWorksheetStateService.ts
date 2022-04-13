import {WorksheetState} from "~/models/WorksheetState";
import {DuplicateWorksheetStateException} from "~/services/DuplicateWorksheetStateException";
import {NoSuchWorksheetStateException} from "~/services/NoSuchWorksheetStateException";
import {WorksheetStateService} from "~/services/WorksheetStateService";

export class LocalStorageWorksheetStateService
  implements WorksheetStateService
{
  deleteWorksheetState(kwds: {id: string}): Promise<void> {
    localStorage.removeItem(
      LocalStorageWorksheetStateService.getWorksheetStateItemKey(kwds.id)
    );
    return new Promise((resolve, reject) => resolve());
  }

  getWorksheetState(kwds: {id: string}): Promise<WorksheetState> {
    return new Promise((resolve, reject) => {
      const jsonString = localStorage.getItem(
        LocalStorageWorksheetStateService.getWorksheetStateItemKey(kwds.id)
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
          "^" + LocalStorageWorksheetStateService._WORKSHEET_ITEM_KEY_PREFIX
        )
      ) {
        continue;
      } else if (
        key.length ==
        LocalStorageWorksheetStateService._WORKSHEET_ITEM_KEY_PREFIX.length
      ) {
        continue;
      }
      result.push(
        key.substr(
          LocalStorageWorksheetStateService._WORKSHEET_ITEM_KEY_PREFIX.length
        )
      );
    }
    return new Promise((resolve, reject) => resolve(result));
  }

  private static getWorksheetStateItemKey(id: string): string {
    return (
      LocalStorageWorksheetStateService._WORKSHEET_ITEM_KEY_PREFIX +
      id.toString()
    );
  }

  private static readonly _WORKSHEET_ITEM_KEY_PREFIX = "worksheet/state/";

  putWorksheetState(kwds: {state: WorksheetState}): Promise<void> {
    localStorage.setItem(
      LocalStorageWorksheetStateService.getWorksheetStateItemKey(kwds.state.id),
      JSON.stringify(kwds.state)
    );
    return new Promise((resolve, reject) => resolve());
  }

  renameWorksheetState(kwds: {newId: string; oldId: string}): Promise<void> {
    return new Promise((resolve, reject) => {
      const newKey = LocalStorageWorksheetStateService.getWorksheetStateItemKey(
        kwds.newId
      );
      const oldKey = LocalStorageWorksheetStateService.getWorksheetStateItemKey(
        kwds.oldId
      );

      if (localStorage.getItem(newKey)) {
        reject(new DuplicateWorksheetStateException(kwds.newId));
        return;
      }

      const oldJsonString = localStorage.getItem(oldKey);
      if (!oldJsonString) {
        reject(new NoSuchWorksheetStateException(kwds.oldId));
        return;
      }

      // Change the id in the value, too
      let value: WorksheetState = JSON.parse(oldJsonString);
      value = {...value, id: kwds.newId};

      localStorage.removeItem(oldKey);
      localStorage.setItem(newKey, JSON.stringify(value));
      resolve();
    });
  }
}
