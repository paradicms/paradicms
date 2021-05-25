import {QueryParamConfig} from "use-query-params";
import * as _ from "lodash";

export class JsonQueryParamConfig<T>
  implements QueryParamConfig<T | undefined> {
  encode(value: T | undefined) {
    return !_.isEmpty(value) ? JSON.stringify(value) : undefined;
  }

  decode(value: string | (string | null)[] | null | undefined) {
    return value ? JSON.parse(value as string) : undefined;
  }

  equals(left: T | undefined, right: T | undefined) {
    return JSON.stringify(left) === JSON.stringify(right);
  }
}
