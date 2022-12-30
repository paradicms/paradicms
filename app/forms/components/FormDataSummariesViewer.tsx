import {AppFormDataSummary} from "../models/AppFormDataSummary";
import {StyleSheet, View} from "react-native";
import {Button, ListItem} from "@rneui/themed";
import * as React from "react";

export const FormDataSummariesViewer: React.FunctionComponent<{
  formDataSummaries: readonly AppFormDataSummary[];
  onSelectFormDataSummary: (formDataSummary: AppFormDataSummary) => void;
}> = ({formDataSummaries, onSelectFormDataSummary}) => (
  <View style={styles.container}>
    {formDataSummaries.map(formDataSummary => (
      <ListItem key={formDataSummary.id}>
        <Button
          onPress={() => onSelectFormDataSummary(formDataSummary)}
          title={formDataSummary.label}
        />
      </ListItem>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
