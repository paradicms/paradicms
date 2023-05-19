import {CurrentUser} from "~/models/CurrentUser";

export interface CurrentUserService {
  deleteCurrentUser(): void;
  getCurrentUser(): CurrentUser | null;
  putCurrentUser(currentUser: CurrentUser): void;
}
