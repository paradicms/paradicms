import {RestApiServer} from "@paradicms/next";

let _restApiServer: RestApiServer | undefined;

export const getRestApiServer = async (): Promise<RestApiServer> => {
  if (!_restApiServer) {
    _restApiServer = await RestApiServer.create();
  }
  return _restApiServer!;
};
