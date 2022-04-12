import {useCurrentUser} from "~/hooks/useCurrentUser";
import {Services} from "~/services/Services";
import {useWorksheetDefinition} from "~/hooks/useWorksheetDefinition";
import {defaultWorksheetConfiguration} from "~/models/defaultWorksheetConfiguration";

export const useServices = () => {
  const currentUser = useCurrentUser();
  const worksheetDefinition = useWorksheetDefinition();
  if (currentUser?.settings?.worksheetConfiguration) {
    return new Services(
      currentUser.settings.worksheetConfiguration,
      worksheetDefinition
    );
  } else {
    return new Services(defaultWorksheetConfiguration, worksheetDefinition);
  }
};
