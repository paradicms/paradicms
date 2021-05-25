import {JoinedValue, Value} from "@paradicms/models";

export const joinValue = (kwds: {
  textsByUri: {[index: string]: string};
  value: Value;
}): JoinedValue => {
  const {textsByUri, value} = kwds;
  switch (value.type) {
    case "text":
      return {text: value.value, uri: null};
    case "uri":
      const uri = value.value;
      const text = textsByUri[uri];
      if (text) {
        return {text, uri};
      } else {
        return {text: uri, uri};
      }
  }
};
