import {CurrentUserService} from "~/services/CurrentUserService";
import {CurrentUser} from "~/models/CurrentUser";

export class LocalStorageCurrentUserService implements CurrentUserService {
  // Cache the CurrentUser objects to prevent re-renders
  private cachedCurrentUsersByJsonString: {[index: string]: CurrentUser} = {};
  private static readonly CURRENT_USER_ITEM_KEY = "currentUser";

  deleteCurrentUser() {
    localStorage.removeItem(
      LocalStorageCurrentUserService.CURRENT_USER_ITEM_KEY
    );
  }

  getCurrentUser(): CurrentUser | null {
    if (typeof window === "undefined") {
      return null;
    }

    const currentUserJsonString = localStorage.getItem("currentUser");
    if (!currentUserJsonString) {
      return null;
    }
    let currentUser = this.cachedCurrentUsersByJsonString[
      currentUserJsonString
    ];
    if (currentUser) {
      return currentUser;
    }
    currentUser = CurrentUser.fromJsonObject(JSON.parse(currentUserJsonString));
    this.cachedCurrentUsersByJsonString[currentUserJsonString] = currentUser;
    return currentUser;
  }

  putCurrentUser(currentUser: CurrentUser) {
    localStorage.setItem(
      LocalStorageCurrentUserService.CURRENT_USER_ITEM_KEY,
      JSON.stringify(currentUser.toJsonObject())
    );
  }
}
