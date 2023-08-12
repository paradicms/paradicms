import {QueryParamConfig} from "use-query-params";

export class JsonQueryParamConfig<T>
  implements QueryParamConfig<T | undefined> {
  constructor(
    private readonly objectSchema: {
      check: (data: any) => T;
    }
  ) {}

  encode(value: T | undefined) {
    return value ? JSON.stringify(value) : undefined;
  }

  decode(value: string | (string | null)[] | null | undefined): T | undefined {
    if (!value) {
      return undefined;
    }
    try {
      return this.objectSchema.check(JSON.parse(value as string));
    } catch {
      return undefined;
    }
  }

  equals(left: T | undefined, right: T | undefined) {
    return JSON.stringify(left) === JSON.stringify(right);
  }
}
