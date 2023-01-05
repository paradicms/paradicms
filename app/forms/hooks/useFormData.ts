import {useCallback, useEffect, useState} from "react";
import {useFormDataApi} from "./useFormDataApi";
import {FormData} from "@paradicms/shacl-forms";

export const useFormData = (
  formDataId: string
): {
  error: any | null;
  formData: FormData | null;
  saveFormData: () => void;
} => {
  const [error, setError] = useState<any>(null);
  const {formDataApi} = useFormDataApi();
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    if (formDataApi && !formData && !error) {
      formDataApi.getFormData(formDataId).then(setFormData, setError);
    }
  }, [formDataApi]);

  const saveFormData = useCallback(() => {
    formDataApi!.putFormData(formData!).catch(setError);
  }, [formData, formDataApi]);

  return {formData, error, saveFormData};
};
