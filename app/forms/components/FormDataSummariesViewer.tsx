import {Button, ListItem} from "@rneui/themed";
import * as React from "react";
import {CenteredView} from "./CenteredView";
import {FormDataSummary} from "@paradicms/shacl-forms";

export const FormDataSummariesViewer: React.FunctionComponent<{
  formDataSummaries: readonly FormDataSummary[];
  onSelectFormDataSummary: (formDataSummary: FormDataSummary) => void;
}> = ({formDataSummaries, onSelectFormDataSummary}) => (
  <CenteredView>
    {formDataSummaries.map(formDataSummary => (
      <ListItem key={formDataSummary.id}>
        <Button
          onPress={() => onSelectFormDataSummary(formDataSummary)}
          title={formDataSummary.label}
        />
      </ListItem>
    ))}
  </CenteredView>
);
