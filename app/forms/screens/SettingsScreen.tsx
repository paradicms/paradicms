import * as React from "react";
import {StyleSheet} from "react-native";

import {RootTabScreenProps} from "../navigation/RootTabScreenProps";
import {ThemedView} from "../components/ThemedView";
import {ThemedText} from "../components/ThemedText";

export const SettingsScreen: React.FunctionComponent<RootTabScreenProps<
  "Settings"
>> = ({navigation}) => (
  <ThemedView style={styles.container}>
    <ThemedText style={styles.title}>Settings</ThemedText>
    <ThemedView
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
    {/*<EditScreenInfo path="/screens/SettingsScreen.tsx" />*/}
  </ThemedView>
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
