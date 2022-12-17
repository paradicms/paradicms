import * as React from "react";
import {useState} from "react";
import {FormProperty} from "@paradicms/shacl-forms";
import {BlankNode, Literal, NamedNode} from "@rdfjs/types";
import {getRdfNodeLabel} from "@paradicms/rdf";
import DropDownPicker from "react-native-dropdown-picker";

export const DropDownPickerFormPropertyEditor: React.FunctionComponent<{
  formProperty: FormProperty;
  onChange: () => void;
}> = ({formProperty, onChange}) => {
  const [open, setOpen] = useState<boolean>(false);

  const items: {
    label: string;
    value: string;
    valueTerm: BlankNode | Literal | NamedNode;
  }[] = [];
  for (const valueTerm of formProperty.shape.in_ ?? []) {
    switch (valueTerm.termType) {
      case "BlankNode":
      case "NamedNode":
        items.push({
          label:
            getRdfNodeLabel({
              dataset: formProperty.dataGraph,
              node: valueTerm,
            }) ?? valueTerm.value,
          value: valueTerm.value,
          valueTerm,
        });
        break;
      case "Literal":
        items.push({
          label: valueTerm.value,
          value: valueTerm.value,
          valueTerm,
        });
      default:
        break;
    }
  }

  const value = formProperty.findAndMapValue(term =>
    items.some(option => option.valueTerm.equals(term)) ? term.value : null
  );

  return (
    <DropDownPicker
      items={items}
      open={open}
      setOpen={setOpen}
      setValue={() => (value: string) => {
        for (const item of items) {
          if (value === item.value) {
            formProperty.value = item.valueTerm;
          }
        }
      }}
      value={value}
    />
  );
};
