import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {useColorScheme} from "@paradicms/react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import * as React from "react";
import {RootNavigator} from "./navigation/RootNavigator";
import {testForm} from "./data/testForm";

export default function App() {
  // const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const form = testForm;

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <RootNavigator />
      </NavigationContainer>{" "}
      <StatusBar />
    </SafeAreaProvider>
  );
}
