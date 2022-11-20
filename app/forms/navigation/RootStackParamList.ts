import {NavigatorScreenParams} from "@react-navigation/native";
import {RootTabParamList} from "./RootTabParamList";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};
