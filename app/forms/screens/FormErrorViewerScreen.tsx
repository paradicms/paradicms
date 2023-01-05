import * as React from "react";
import {FormStackScreenProps} from "../navigation/FormStackScreenProps";
import {View} from "react-native";
import {Text} from "@rneui/themed";

export const FormErrorViewerScreen: React.FunctionComponent<FormStackScreenProps<
  "FormErrorViewerScreen"
>> = ({route}) => {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>{route.params.error.toString()}</Text>
    </View>
  );
};
