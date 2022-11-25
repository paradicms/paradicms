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
    console.warn(`form property ${formProperty.id} has no values`);
    return null;
  }
  // console.info(
  //   `form property ${formProperty.id} has ${values.length} value(s)`
  // );

  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{formProperty.label}</Text>
      </View>
      <View style={styles.valuesContainer}>
        {values.map((value, valueI) => (
          <Text key={valueI} style={styles.value}>
            {value.value}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },
  labelContainer: {
    alignItems: "center",
  },
  value: {},
  valuesContainer: {
    marginTop: 5,
  },
});
