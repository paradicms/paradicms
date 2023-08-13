import {MemApiConfiguration} from "./MemApiConfiguration";
import {RestApiClientConfiguration} from "./RestApiClientConfiguration";

/**
 * Union of API implementation configurations.
 */
export type ApiConfiguration = MemApiConfiguration | RestApiClientConfiguration;
