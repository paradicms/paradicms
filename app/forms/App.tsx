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
import useCachedResources from "./hooks/useCachedResources";

export default function App() {
  const loadedCachedResources = useCachedResources();

  const colorScheme = useColorScheme();

  if (!loadedCachedResources) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <RootNavigator />
      </NavigationContainer>
      <StatusBar />
    </SafeAreaProvider>
  );
}
