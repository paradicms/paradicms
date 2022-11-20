import {CompositeScreenProps} from "@react-navigation/native";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootTabParamList} from "./RootTabParamList";
import {RootStackParamList} from "./RootStackParamList";

export type RootTabScreenProps<
  Screen extends keyof RootTabParamList
> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
