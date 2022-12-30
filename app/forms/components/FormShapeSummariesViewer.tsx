import {AppFormShapeSummary} from "../models/AppFormShapeSummary";
import {Button, ListItem} from "@rneui/themed";
import * as React from "react";
import {CenteredView} from "./CenteredView";

export const FormShapeSummariesViewer: React.FunctionComponent<{
  formShapeSummaries: readonly AppFormShapeSummary[];
  onSelectFormShapeSummary: (formShapeSummary: AppFormShapeSummary) => void;
}> = ({formShapeSummaries, onSelectFormShapeSummary}) => (
  <CenteredView>
    {formShapeSummaries.map(formShapeSummary => (
      <ListItem key={formShapeSummary.id}>
        <Button
          onPress={() => onSelectFormShapeSummary(formShapeSummary)}
          title={formShapeSummary.label}
        />
      </ListItem>
    ))}
  </CenteredView>
);
