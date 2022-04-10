import {UserIdentityProvider} from "~/models/UserIdentityProvider";
import {currentUserJsonSchema} from "~/models/jsonSchemas/currentUserJsonSchema";
import {UserSettings} from "~/models/UserSettings";
import {User} from "~/models/User";
import {CurrentUserSession} from "~/models/CurrentUserSession";
import {InferType} from "yup";

type CurrentUserJson = InferType<typeof currentUserJsonSchema>;

export class CurrentUser {
  constructor(kwds: {
    session: CurrentUserSession;
    settings: UserSettings | null;
    user: User;
  }) {
    // this.services = new Services(
    //   kwds.settings && kwds.settings.worksheetConfiguration
    //     ? kwds.settings.worksheetConfiguration
    //     : DefaultWorksheetConfiguration.instance
    // );
    this.session = kwds.session;
    this.settings = kwds.settings;
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
    return this.user.id;
  }

  get identityProvider(): UserIdentityProvider {
    return this.user.identityProvider;
  }

  get name() {
    return this.user.name ? this.user.name : this.user.emailAddress;
  }

  replaceSettings(newSettings: UserSettings | null) {
    return new CurrentUser({
      session: this.session,
      settings: newSettings,
      user: this.user,
    });
  }

  toJsonObject(): CurrentUserJson {
    return {
      session: this.session.toJsonObject(),
      settings: this.settings,
      user: this.user,
    };
  }

  private readonly user: User;
  // readonly services: Services;
  readonly session: CurrentUserSession;
  readonly settings: UserSettings | null;
}
