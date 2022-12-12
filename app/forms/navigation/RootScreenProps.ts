import {DrawerScreenProps} from "@react-navigation/drawer";
import {RootParamList} from "./RootParamList";

export type RootScreenProps<
  Screen extends keyof RootParamList
> = DrawerScreenProps<RootParamList, Screen>;
