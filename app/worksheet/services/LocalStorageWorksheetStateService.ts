import {WorksheetState} from "~/models/WorksheetState";
import {DuplicateWorksheetStateException} from "~/services/DuplicateWorksheetStateException";
import {NoSuchWorksheetStateException} from "~/services/NoSuchWorksheetStateException";
import {WorksheetStateService} from "~/services/WorksheetStateService";

export class LocalStorageWorksheetStateService
  implements WorksheetStateService {
  deleteWorksheetState(id: string): Promise<void> {
    localStorage.removeItem(
      LocalStorageWorksheetStateService.getWorksheetStateItemKey(id)
    );
    log.debug("deleted worksheet state", id, "from local storage");
    return new Promise(resolve => resolve());
  }

  getWorksheetState(id: string): Promise<WorksheetState> {
    return new Promise((resolve, reject) => {
      const jsonString = localStorage.getItem(
        LocalStorageWorksheetStateService.getWorksheetStateItemKey(id)
      );
      if (jsonString == null) {
        log.debug("worksheet state", id, "does not exist in local storage");
        reject(new NoSuchWorksheetStateException(id));
        return;
      }
      log.debug("worksheet state", id, "from local storage:", jsonString);
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
    log.debug("worksheet state id's in local storage:", JSON.stringify(result));
    return new Promise(resolve => resolve(result));
  }

  private static getWorksheetStateItemKey(id: string): string {
    return LocalStorageWorksheetStateService._WORKSHEET_ITEM_KEY_PREFIX + id;
  }

  private static readonly _WORKSHEET_ITEM_KEY_PREFIX = "worksheet/state/";

  putWorksheetState(state: WorksheetState): Promise<void> {
    localStorage.setItem(
      LocalStorageWorksheetStateService.getWorksheetStateItemKey(state.id),
      JSON.stringify(state)
    );
    log.debug("put worksheet state", JSON.stringify(state), "to local storage");
    return new Promise(resolve => resolve());
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
      log.debug(
        "renamed worksheet state from",
        oldKey,
        "to",
        newKey,
        "in local storage"
      );
      resolve();
    });
  }
}
