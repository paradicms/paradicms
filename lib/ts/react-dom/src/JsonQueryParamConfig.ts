import {QueryParamConfig} from "use-query-params";
import {SafeParseReturnType} from "zod";

export class JsonQueryParamConfig<T>
  implements QueryParamConfig<T | undefined> {
  constructor(
    private readonly objectSchema: {
      safeParse: (data: any) => SafeParseReturnType<any, T>;
    }
  ) {}

  encode(value: T | undefined) {
    return value ? JSON.stringify(value) : undefined;
  }

  decode(value: string | (string | null)[] | null | undefined): T | undefined {
    if (!value) {
      return undefined;
    }
    const parseResult = this.objectSchema.safeParse(
      JSON.parse(value as string)
    );
    if (parseResult.success) {
      return parseResult.data;
    } else {
      return undefined;
    }
  }

  equals(left: T | undefined, right: T | undefined) {
    return JSON.stringify(left) === JSON.stringify(right);
  }
}
