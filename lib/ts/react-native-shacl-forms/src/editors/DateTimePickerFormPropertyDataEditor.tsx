import * as React from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import {fromRdf, toRdf} from "rdf-literal";
import {Literal} from "@rdfjs/types";
import {useTheme} from "@rneui/themed";
import {View} from "react-native";
import {xsd} from "@paradicms/vocabularies";
import {DataFactory} from "@paradicms/rdf";
import {FormPropertyData} from "@paradicms/shacl-forms";

export const DateTimePickerFormPropertyDataEditor: React.FunctionComponent<{
  formPropertyData: FormPropertyData;
  mode: "date" | "time";
  onChange: () => void;
}> = ({formPropertyData, mode, onChange}) => {
  const value = formPropertyData.findAndMapValue(literal => {
    if (literal.termType === "Literal") {
      const value = fromRdf(literal as Literal);
      if (value instanceof Date) {
        return value;
      }
    }
    return null;
  });

  const {theme} = useTheme();

  return (
    <View
      style={{
        alignItems: "flex-start",
        marginTop: theme.spacing.md,
      }}
    >
      <DateTimePicker
        mode={mode}
        onChange={(event: DateTimePickerEvent, date: Date | undefined) => {
          if (date) {
            formPropertyData.value = toRdf(date, {
              dataFactory: DataFactory,
              datatype: mode === "date" ? xsd.date : xsd.time,
            });
          } else {
            formPropertyData.values = [];
          }
          onChange();
        }}
        style={{
          minWidth: 128,
        }}
        value={value ?? new Date()}
      />
    </View>
  );
};
