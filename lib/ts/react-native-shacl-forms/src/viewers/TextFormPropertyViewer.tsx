import {FormProperty} from "@paradicms/shacl-forms";
import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "@rneui/themed";

export const TextFormPropertyViewer: React.FunctionComponent<{
  formProperty: FormProperty;
}> = ({formProperty}) => {
  const values = formProperty.values.filter(
    value => value.termType === "Literal"
  );
  if (values.length === 0) {
    return null;
  }

  return (
    <View>
      <View style={styles.labelContainer}></View>
      <View style={styles.valuesContainer}>
        {values.map((value, valueI) => (
          <Text key={valueI}>{value.value}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    alignItems: "flex-start",
    flex: 1,
  },
  valuesContainer: {
    alignItems: "center",
    flex: 1,
  },
});
