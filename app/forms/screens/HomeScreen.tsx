import * as React from "react";
import {StyleSheet} from "react-native";
import {ThemedView} from "../components/ThemedView";
import {ThemedText} from "../components/ThemedText";
import {RootTabScreenProps} from "../navigation/RootTabScreenProps";
import {useForm} from "../hooks/useForm";

export const HomeScreen: React.FunctionComponent<RootTabScreenProps<
  "Home"
>> = ({navigation}) => {
  const {form, dispatchForm} = useForm();
  if (!form) {
    return null;
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Home</ThemedText>
      <ThemedView
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ThemedText>Contents of the home screen</ThemedText>
    </ThemedView>
  );
};

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
