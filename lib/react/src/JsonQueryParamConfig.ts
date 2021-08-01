import {QueryParamConfig} from "use-query-params";

export class JsonQueryParamConfig<T>
  implements QueryParamConfig<T | undefined> {
  encode(value: T | undefined) {
    return value ? JSON.stringify(value) : undefined;
  }

  decode(value: string | (string | null)[] | null | undefined) {
    return value ? JSON.parse(value as string) : undefined;
  }

  equals(left: T | undefined, right: T | undefined) {
    return JSON.stringify(left) === JSON.stringify(right);
  }
}
