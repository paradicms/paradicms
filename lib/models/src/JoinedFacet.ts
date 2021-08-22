import {JoinedDataset} from "./JoinedDataset";

export abstract class JoinedFacet {
  protected constructor(protected readonly joinedDataset: JoinedDataset) {}
}
