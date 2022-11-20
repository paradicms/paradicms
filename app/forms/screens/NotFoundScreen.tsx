import * as React from "react";
import {StyleSheet, TouchableOpacity} from "react-native";

import {RootStackScreenProps} from "../navigation/RootStackScreenProps";
import {ThemedView} from "../components/ThemedView";
import {ThemedText} from "../components/ThemedText";

export const NotFoundScreen: React.FunctionComponent<RootStackScreenProps<
  "NotFound"
>> = ({navigation}) => (
  <ThemedView style={styles.container}>
    <ThemedText style={styles.title}>This screen doesn't exist.</ThemedText>
    <TouchableOpacity
      onPress={() => navigation.replace("Root")}
      style={styles.link}
    >
      <ThemedText style={styles.linkText}>Go to home screen!</ThemedText>
    </TouchableOpacity>
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
