import * as React from "react";
import {CenteredView} from "./CenteredView";
import {FormDataSummary} from "@paradicms/shacl-forms";
import {FormModelSummariesViewer} from "@paradicms/react-native-shacl-forms";

export const FormDataSummariesViewer: React.FunctionComponent<{
  formDataSummaries: readonly FormDataSummary[];
  onSelectFormDataSummary: (formDataSummary: FormDataSummary) => void;
}> = ({formDataSummaries, onSelectFormDataSummary}) => (
  <CenteredView>
    <FormModelSummariesViewer
      formModelSummaries={formDataSummaries}
      onSelect={onSelectFormDataSummary}
    />
  </CenteredView>
);
