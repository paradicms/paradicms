import {Form, FormNode, FormNodeType} from "@paradicms/shacl-forms";
import {RouteProp} from "@react-navigation/native";
import {RootTabParamList} from "../navigation/RootTabParamList";
import * as React from "react";

export const resolveFormScreenRouteParams = (
  form: Form,
  route: RouteProp<RootTabParamList, "Form">
): {
  formNode?: FormNode;
  formNodeType?: FormNodeType;
} => {
  if (!route.params?.formNodeTypeId) {
    return {};
  }
  const formNodeType = form.nodeTypeById(route.params!.formNodeTypeId);
  if (!route.params?.formNodeId) {
    return {formNodeType};
  }
  const formNode = formNodeType.nodeById(route.params!.formNodeId);
  return {
    formNode,
    formNodeType,
  };
};
