import {ModelSet, ModelSetFactory} from "@paradicms/models";
import {useEffect, useState} from "react";
import {JsonLd} from "jsonld/jsonld-spec";

export const ModelSetJsonLdParser: React.FunctionComponent<{
  modelSetJsonLd: JsonLd;
  render: (modelSet: ModelSet) => React.ReactElement;
}> = ({modelSetJsonLd, render}) => {
  const [modelSet, setModelSet] = useState<ModelSet | null>(null);
  useEffect(() => {
    if (modelSet) {
      return;
    }
    ModelSetFactory.fromJsonLd(modelSetJsonLd).then(setModelSet);
  }, [modelSetJsonLd]);

  if (modelSet) {
    return render(modelSet);
  } else {
    return null;
  }
};
