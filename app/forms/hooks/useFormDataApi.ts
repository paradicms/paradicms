import {FormDataApi} from "../api/FormDataApi";
import {useEffect, useReducer} from "react";
import {AsyncStorageFormDataApi} from "../api/AsyncStorageFormDataApi";
import {useFormShapeApi} from "./useFormShapeApi";
import {testFormDataFactory} from "../data/testFormDataFactory";

export interface ReducerAction {
  payload: FormDataApi;
}

interface ReducerState {
  formDataApi: FormDataApi | null;
}

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  return {formDataApi: action.payload!};
};

export const useFormDataApi = (): {formDataApi: FormDataApi | null} => {
  const {formShapeApi} = useFormShapeApi();

  const [state, dispatch] = useReducer(reducer, {
    formDataApi: null,
  });

  useEffect(() => {
    if (!formShapeApi) {
      return;
    }

    if (state.formDataApi) {
      return;
    }

    // Prepopulate
    const formDataApi = new AsyncStorageFormDataApi(formShapeApi);
    formDataApi
      .putFormData(testFormDataFactory())
      .then(() => dispatch({payload: formDataApi}));
  }, [formShapeApi]);

  return {formDataApi: state.formDataApi};
};
