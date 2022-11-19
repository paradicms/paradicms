import * as React from "react";
import {StyleSheet, TextInput} from "react-native";
import {FormProperty} from "@paradicms/shacl-forms";
import {DataFactory} from "@paradicms/rdf";
import {xsd} from "@paradicms/vocabularies";

export const TextFieldEditor: React.FunctionComponent<{
  formProperty: FormProperty;
}> = ({formProperty}) => {
  const value = formProperty.findAndMapValue(value =>
    value.termType === "Literal" && value.datatype.equals(xsd.string)
      ? value.value
      : null
  );

  return (
    <TextInput
      onChangeText={text =>
        (formProperty.value = DataFactory.literal(text, xsd.string))
      }
      placeholder={formProperty.name ?? undefined}
      style={styles.input}
      value={value ?? ""}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
