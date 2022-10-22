import {UserIdentityProvider} from "~/models/UserIdentityProvider";
import {currentUserJsonSchema} from "~/models/jsonSchemas/currentUserJsonSchema";
import {User} from "~/models/User";
import {CurrentUserSession} from "~/models/CurrentUserSession";
import {InferType} from "yup";

type CurrentUserJson = InferType<typeof currentUserJsonSchema>;

export class CurrentUser {
  constructor(kwds: {session: CurrentUserSession; user: User}) {
    this.session = kwds.session;
    this.user = kwds.user;
  }

  static fromJsonObject(json: any) {
    const {session, ...otherProps} = currentUserJsonSchema.validateSync(json);
    return new CurrentUser({
      session: CurrentUserSession.fromJsonObject(session),
      ...otherProps,
    });
  }

  get id(): string {
    return this.user.identityProviderId;
  }

  get identityProvider(): UserIdentityProvider {
    return this.user.identityProvider;
  }

  get name() {
    return this.user.name ? this.user.name : this.user.emailAddress;
  }

  toJsonObject(): CurrentUserJson {
    return {
      session: this.session.toJsonObject(),
      user: this.user,
    };
  }

  private readonly user: User;
  readonly session: CurrentUserSession;
}
