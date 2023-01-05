import * as React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "@rneui/themed";
import {RootScreenProps} from "../navigation/RootScreenProps";

export const SettingsScreen: React.FunctionComponent<RootScreenProps<
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
