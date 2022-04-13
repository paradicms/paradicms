import {CurrentUser} from "~/models/CurrentUser";
import {useCurrentUserService} from "~/hooks/useCurrentUserService";

export const useCurrentUser = (): CurrentUser | null =>
  useCurrentUserService().getCurrentUser();
