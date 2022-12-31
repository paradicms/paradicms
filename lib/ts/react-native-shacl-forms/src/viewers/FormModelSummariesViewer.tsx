import * as React from "react";
import {FormModelSummary} from "@paradicms/shacl-forms";
import {View} from "react-native";
import {Button, ListItem} from "@rneui/themed";

interface FormModelSummariesViewerProps<
  FormModelSummaryT extends FormModelSummary
> {
  formModelSummaries: readonly FormModelSummaryT[];
  onSelect: (
    formModelSummary: FormModelSummaryT,
    formModelSummaryIndex: number
  ) => void;
}

export const FormModelSummariesViewer = <
  FormModelSummaryT extends FormModelSummary
>(
  props: FormModelSummariesViewerProps<FormModelSummaryT>
) => {
  const {formModelSummaries, onSelect} = props;
  return (
    <View>
      {formModelSummaries.map((formModelSummary, formModelSummaryIndex) => (
        <ListItem key={formModelSummary.id}>
          <Button
            onPress={() => onSelect(formModelSummary, formModelSummaryIndex)}
            title={formModelSummary.label}
          />
        </ListItem>
      ))}
    </View>
  );
};
