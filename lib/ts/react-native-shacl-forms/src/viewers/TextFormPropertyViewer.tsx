import {FormProperty} from "@paradicms/shacl-forms";
import * as React from "react";
import {StyleSheet, View} from "react-native";
import {ListItem, Text} from "@rneui/themed";

export const TextFormPropertyViewer: React.FunctionComponent<{
  formProperty: FormProperty;
}> = ({formProperty}) => {
  const values = formProperty.values.filter(
    value => value.termType === "Literal"
  );
  if (values.length === 0) {
    console.info(`form property ${formProperty.id} has no values`);
    return null;
  }

  return (
    <View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{formProperty.label}</Text>
      </View>
      <View style={styles.valuesContainer}>
        {values.map((value, valueI) => (
          <ListItem key={valueI}>
            <ListItem.Content>
              <Text style={styles.value}>{value.value}</Text>
            </ListItem.Content>
          </ListItem>
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
