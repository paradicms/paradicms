import * as N3 from "n3";
// @ts-ignore
import vcccTtl from "../../data/vccc/loaded/vccc.ttl";
import {N3StoreObjectQueryService} from "~/services/N3StoreObjectQueryService";
import {Configuration} from "~/models/Configuration";

export class VcccRdfObjectQueryService extends N3StoreObjectQueryService {
  constructor(configuration: Configuration) {
    super(configuration, VcccRdfObjectQueryService.createStore());
  }

  private static createStore(): N3.Store {
    const parser = new N3.Parser({format: "text/turtle"});
    const store = new N3.Store();
    store.addQuads(parser.parse(vcccTtl));
    return store;
  }
}
