import {Button, ListItem} from "@rneui/themed";
import * as React from "react";
import {CenteredView} from "./CenteredView";
import {FormShapeSummary} from "@paradicms/shacl-forms";

export const FormShapeSummariesViewer: React.FunctionComponent<{
  formShapeSummaries: readonly FormShapeSummary[];
  onSelectFormShapeSummary: (formShapeSummary: FormShapeSummary) => void;
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
