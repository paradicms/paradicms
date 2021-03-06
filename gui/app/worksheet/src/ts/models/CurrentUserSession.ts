import {currentUserSessionJsonSchema} from "~/models/jsonSchemas/currentUserSessionJsonSchema";
import {InferType} from "yup";

type CurrentUserSessionJson = InferType<typeof currentUserSessionJsonSchema>;

export class CurrentUserSession {
  readonly accessToken: string;
  readonly expiresAt: Date;

  constructor(kwds: {accessToken: string; expiresAt: Date}) {
    this.accessToken = kwds.accessToken;
    this.expiresAt = kwds.expiresAt;
  }

  static fromJsonObject(json: any): CurrentUserSession {
    return new CurrentUserSession(
      currentUserSessionJsonSchema.validateSync(json)
    );
  }

  isValid() {
    const currentDate = new Date();
    return currentDate.getTime() < this.expiresAt.getTime();
  }

  toJsonObject(): CurrentUserSessionJson {
    return {
      accessToken: this.accessToken,
      expiresAt: this.expiresAt,
    };
  }
}
