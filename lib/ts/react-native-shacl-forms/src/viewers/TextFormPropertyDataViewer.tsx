import {FormPropertyData} from "@paradicms/shacl-forms";
import * as React from "react";
import {Text, View} from "react-native";
import {ListItem} from "@rneui/themed";

export const TextFormPropertyDataViewer: React.FunctionComponent<{
  formPropertyData: FormPropertyData;
}> = ({formPropertyData}) => {
  const values = formPropertyData.values.filter(
    value => value.termType === "Literal"
  );
  if (values.length === 0) {
    console.info(`form property ${formPropertyData.id} has no values`);
    return null;
  }

  return (
    <View>
      {values.length > 0 ? (
        values.map((value, valueI) => (
          <ListItem key={valueI}>
            <ListItem.Content>
              <Text>{value.value}</Text>
            </ListItem.Content>
          </ListItem>
        ))
      ) : (
        <Text>{values[0].value}</Text>
      )}
    </View>
  );
};
