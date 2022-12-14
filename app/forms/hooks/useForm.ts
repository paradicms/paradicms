import {useCallback, useEffect, useReducer} from "react";
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
  dispatchForm: () => void;
  form: Form | null;
} => {
  const [state, dispatchFormToReducer] = useReducer(formReducer, {
    form: null,
  });

  useEffect(() => {
    if (state.form) {
      return;
    }

    dispatchFormToReducer({payload: testForm});
  }, []);

  const dispatchForm: () => void = useCallback(() => {
    if (state.form) {
      dispatchFormToReducer({payload: state.form});
    } else {
      console.error("called dispatchForm when form is not set");
    }
  }, [state, dispatchFormToReducer]);

  return {dispatchForm, form: state.form};
};
