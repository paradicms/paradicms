import {Secrets} from "~/Secrets";
import {convertGapiErrorToException} from "~/services/GapiException";

export const loadGapiClient = (): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    gapi.load("client", () => {
      gapi.client.load("drive", "v3", () => {
        gapi.client.load("oauth2", "v2", () => {
          gapi.client.load("sheets", "v4", () => {
            gapi.client
              .init({
                apiKey: Secrets.GOOGLE_API_KEY,
              })
              .then(resolve, (reason: any) =>
                reject(convertGapiErrorToException(reason))
              );
          });
        });
      });
    });
  });
};
