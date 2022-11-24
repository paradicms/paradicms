import * as React from "react";
import {FormProperty} from "@paradicms/shacl-forms";
import {DataFactory} from "@paradicms/rdf";
import {xsd} from "@paradicms/vocabularies";
import {Input} from "@rneui/themed";

export const TextInputFormPropertyEditor: React.FunctionComponent<{
  formProperty: FormProperty;
  onChange: () => void;
}> = ({formProperty, onChange}) => {
  const value = formProperty.findAndMapValue(value =>
    value.termType === "Literal" && value.datatype.equals(xsd.string)
      ? value.value
      : null
  );

  return (
    <Input
      // @ts-ignore
      onChangeText={(text: string) => {
        formProperty.value = DataFactory.literal(text, xsd.string);
        onChange();
      }}
      placeholder={formProperty.label}
      style={{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }}
      value={value ?? ""}
    />
  );
};
