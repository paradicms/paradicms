import {FormData} from "@paradicms/shacl-forms";
import {useCallback, useEffect, useReducer} from "react";
import {testFormData} from "../data/testFormData";

export interface FormDataReducerAction {
  payload: FormData;
}

interface FormDataReducerState {
  formData: FormData | null;
}

const formDataReducer = (
  state: FormDataReducerState,
  action: FormDataReducerAction
): FormDataReducerState => {
  return {formData: action.payload!};
};

export const useFormData = (): {
  dispatchFormData: () => void;
  formData: FormData | null;
} => {
  const [state, dispatchFormDataToReducer] = useReducer(formDataReducer, {
    formData: null,
  });

  useEffect(() => {
    if (state.formData) {
      return;
    }

    dispatchFormDataToReducer({payload: testFormData});
  }, []);

  const dispatchFormData: () => void = useCallback(() => {
    if (state.formData) {
      dispatchFormDataToReducer({payload: state.formData});
    } else {
      console.error("called dispatchFormData when formData is not set");
    }
  }, [state, dispatchFormDataToReducer]);

  return {dispatchFormData, formData: state.formData};
};
