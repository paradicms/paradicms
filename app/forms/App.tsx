// import {StatusBar} from "expo-status-bar";
// import {SafeAreaProvider} from "react-native-safe-area-context";
//
// import useCachedResources from "./hooks/useCachedResources";
// import Navigation from "./navigation";
// import {useColorScheme} from "@paradicms/react-native";
import {NodeViewer} from "@paradicms/react-native-shacl-forms";

export default function App() {
  return <NodeViewer />;

  // const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();
  //
  // if (!isLoadingComplete) {
  //   return null;
  // } else {
  //   return (
  //     <SafeAreaProvider>
  //       <Navigation colorScheme={colorScheme} />
  //       <StatusBar />
  //     </SafeAreaProvider>
  //   );
  // }
}
