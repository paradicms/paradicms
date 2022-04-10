import {WorksheetState} from "~/models/WorksheetState";
import {DuplicateWorksheetStateException} from "~/services/DuplicateWorksheetStateException";
import {NoSuchWorksheetStateException} from "~/services/NoSuchWorksheetStateException";
import {WorksheetStateCommandService} from "~/services/WorksheetStateCommandService";
import {LocalStorageWorksheetStateQueryService} from "~/services/LocalStorageWorksheetStateQueryService";

export class LocalStorageWorksheetStateCommandService
  implements WorksheetStateCommandService
{
  deleteWorksheetState(kwds: {id: string}): Promise<void> {
    localStorage.removeItem(
      LocalStorageWorksheetStateQueryService.getWorksheetStateItemKey(kwds.id)
    );
    return new Promise((resolve, reject) => resolve());
  }

  putWorksheetState(kwds: {state: WorksheetState}): Promise<void> {
    localStorage.setItem(
      LocalStorageWorksheetStateQueryService.getWorksheetStateItemKey(
        kwds.state.id
      ),
      JSON.stringify(kwds.state)
    );
    return new Promise((resolve, reject) => resolve());
  }

  renameWorksheetState(kwds: {newId: string; oldId: string}): Promise<void> {
    return new Promise((resolve, reject) => {
      const newKey =
        LocalStorageWorksheetStateQueryService.getWorksheetStateItemKey(
          kwds.newId
        );
      const oldKey =
        LocalStorageWorksheetStateQueryService.getWorksheetStateItemKey(
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
