import * as React from "react";
import {useEffect, useReducer} from "react";
import {testForm} from "../data/testForm";
import {Form} from "@paradicms/shacl-forms";

export interface FormReducerAction {
  payload: Form;
}

interface FormReducerState {
  form: Form | null;
}

const formReducer = (
  state: FormReducerState,
  action: FormReducerAction
): FormReducerState => {
  return {form: action.payload!};
};

export const useForm = (): {
  dispatchForm: React.Dispatch<FormReducerAction>;
  form: Form | null;
} => {
  const [state, dispatchForm] = useReducer(formReducer, {
    form: null,
  });

  useEffect(() => {
    if (state.form) {
      return;
    }

    dispatchForm({payload: testForm});
  }, []);

  return {dispatchForm, form: state.form};
};
