import {StatusBar} from "expo-status-bar";
import * as React from "react";
import {Platform, StyleSheet} from "react-native";

import {ThemedText} from "../components/ThemedText";
import {ThemedView} from "../components/ThemedView";
import {RootStackScreenProps} from "../navigation/RootStackScreenProps";

export const ModalScreen: React.FunctionComponent<RootStackScreenProps<
  "Modal"
>> = () => (
  <ThemedView style={styles.container}>
    <ThemedText style={styles.title}>Modal</ThemedText>
    <ThemedView
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
    {/*<EditScreenInfo path="/screens/ModalScreen.tsx" />*/}

    {/* Use a light status bar on iOS to account for the black space above the modal */}
    <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
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
