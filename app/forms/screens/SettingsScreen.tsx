import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "@rneui/themed";

import {RootTabScreenProps} from "../navigation/RootTabScreenProps";

export const SettingsScreen: React.FunctionComponent<RootTabScreenProps<
  "Settings"
>> = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Settings</Text>
    <View style={styles.separator} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
