import {FontAwesome} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import * as React from "react";

import {FormScreen} from "../screens/FormScreen";
import {SettingsScreen} from "../screens/SettingsScreen";
import {RootTabParamList} from "./RootTabParamList";
import {RootTabScreenProps} from "./RootTabScreenProps";
import {useTheme} from "@rneui/themed";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function RootTabNavigator() {
  const theme = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Form"
      screenOptions={{
        tabBarActiveTintColor: theme.theme.colors.primary,
      }}
    >
      <BottomTab.Screen
        name="Form"
        component={FormScreen}
        options={({navigation}: RootTabScreenProps<"Form">) => ({
          title: "Form",
          tabBarIcon: ({color}) => <TabBarIcon name="list-alt" color={color} />,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate("Modal")}
          //     style={({pressed}) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}
          //   >
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{marginRight: 15}}
          //     />
          //   </Pressable>
          // ),
        })}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({color}) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
