import * as React from "react";
import {CenteredView} from "./CenteredView";
import {FormShapeSummary} from "@paradicms/shacl-forms";
import {FormModelSummariesViewer} from "@paradicms/react-native-shacl-forms";

export const FormShapeSummariesViewer: React.FunctionComponent<{
  formShapeSummaries: readonly FormShapeSummary[];
  onSelectFormShapeSummary: (formShapeSummary: FormShapeSummary) => void;
}> = ({formShapeSummaries, onSelectFormShapeSummary}) => (
  <CenteredView>
    <FormModelSummariesViewer
      formModelSummaries={formShapeSummaries}
      onSelect={onSelectFormShapeSummary}
    />
  </CenteredView>
);
