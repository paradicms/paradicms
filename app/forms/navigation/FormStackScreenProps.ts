import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {FormStackParamList} from "./FormStackParamList";

export type FormStackScreenProps<
  Screen extends keyof FormStackParamList
> = NativeStackScreenProps<FormStackParamList, Screen>;
