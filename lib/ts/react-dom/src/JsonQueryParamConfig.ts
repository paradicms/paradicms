import {QueryParamConfig} from "use-query-params";

export class JsonQueryParamConfig<T>
  implements QueryParamConfig<T | undefined> {
  constructor(private readonly objectSchema: any) {}

  encode(value: T | undefined) {
    return value ? JSON.stringify(value) : undefined;
  }

  decode(value: string | (string | null)[] | null | undefined): T | undefined {
    if (!value) {
      return undefined;
    }
    const {success, data} = this.objectSchema.safeParse(
      JSON.parse(value as string)
    );
    if (success) {
      return data as T;
    } else {
      return undefined;
    }
  }

  equals(left: T | undefined, right: T | undefined) {
    return JSON.stringify(left) === JSON.stringify(right);
  }
}
