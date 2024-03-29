import {DatasetCore} from "@rdfjs/types";
import {Store} from "n3";
import rdfParser, {ParseOptions} from "rdf-parse";
import {Readable} from "stream";

class StreamifyString extends Readable {
  constructor(private str: string) {
    super();
  }

  override _read(size: number) {
    const chunk = this.str.slice(0, size);

    if (chunk) {
      this.str = this.str.slice(size);
      this.push(chunk);
    } else {
      this.push(null);
    }
  }
}

export const anyRdfStringToDataset = async (
  input: string,
  options: ParseOptions
): Promise<DatasetCore> => {
  return new Promise<DatasetCore>((resolve, reject) => {
    const inputStream = new StreamifyString(input);
    const store = new Store();
    rdfParser
        .parse(
            inputStream,
            options
        )
        .on("data", quad => store.addQuad(quad))
        .on("error", error => reject(error))
        .on("end", () => resolve(store));
  });
};
