import * as React from "react";
import {FormNode} from "@paradicms/shacl-forms";
import {StyleSheet, View} from "react-native";
import {createFormPropertyViewer} from "./createFormPropertyViewer";

export const FormNodeViewer: React.FunctionComponent<{
  formNode: FormNode;
}> = ({formNode}) => (
  <View>
    {formNode.properties.map(formProperty => (
      <View key={formProperty.id} style={styles.formPropertyViewerContainer}>
        {createFormPropertyViewer({formProperty})}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  formPropertyViewerContainer: {
    marginBottom: 25,
  },
});
