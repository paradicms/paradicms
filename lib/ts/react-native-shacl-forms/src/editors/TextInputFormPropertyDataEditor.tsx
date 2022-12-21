import * as React from "react";
import {FormPropertyData} from "@paradicms/shacl-forms";
import {DataFactory} from "@paradicms/rdf";
import {xsd} from "@paradicms/vocabularies";
import {Input} from "@rneui/themed";

export const TextInputFormPropertyDataEditor: React.FunctionComponent<{
  formPropertyData: FormPropertyData;
  onChange: () => void;
}> = ({formPropertyData, onChange}) => {
  const value = formPropertyData.findAndMapValue(value =>
    value.termType === "Literal" && value.datatype.equals(xsd.string)
      ? value.value
      : null
  );

  return (
    <Input
      // @ts-ignore
      onChangeText={(text: string) => {
        formPropertyData.value = DataFactory.literal(text, xsd.string);
        onChange();
      }}
      placeholder={formPropertyData.label}
      value={value ?? ""}
    />
  );
};
