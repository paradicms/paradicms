import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./RootStackParamList";

export type RootStackScreenProps<
  Screen extends keyof RootStackParamList
> = NativeStackScreenProps<RootStackParamList, Screen>;
