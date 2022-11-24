import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {ThemeProvider} from "@rneui/themed";
import {NavigationContainer} from "@react-navigation/native";
import * as React from "react";
import {RootNavigator} from "./navigation/RootNavigator";
import useCachedResources from "./hooks/useCachedResources";

export default function App() {
  const loadedCachedResources = useCachedResources();
  if (!loadedCachedResources) {
    return null;
  }

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
