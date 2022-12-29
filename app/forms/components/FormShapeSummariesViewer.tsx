import {AppFormShapeSummary} from "../models/AppFormShapeSummary";
import {StyleSheet, View} from "react-native";
import {Button, ListItem} from "@rneui/themed";
import * as React from "react";

export const FormShapeSummariesViewer: React.FunctionComponent<{
  formShapeSummaries: readonly AppFormShapeSummary[];
  onSelectFormShapeSummary: (formShapeSummary: AppFormShapeSummary) => void;
}> = ({formShapeSummaries, onSelectFormShapeSummary}) => (
  <View style={styles.container}>
    {formShapeSummaries.map(formShapeSummary => (
      <ListItem key={formShapeSummary.id}>
        <Button
          onPress={() => onSelectFormShapeSummary(formShapeSummary)}
          title={formShapeSummary.label}
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
