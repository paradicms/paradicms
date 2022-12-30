import {AppFormDataSummary} from "../models/AppFormDataSummary";
import {Button, ListItem} from "@rneui/themed";
import * as React from "react";
import {CenteredView} from "./CenteredView";

export const FormDataSummariesViewer: React.FunctionComponent<{
  formDataSummaries: readonly AppFormDataSummary[];
  onSelectFormDataSummary: (formDataSummary: AppFormDataSummary) => void;
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
