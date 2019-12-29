declare var DEVELOPMENT: boolean;
declare var PRODUCTION: boolean;

export class Environment {
    static get development() {
        return DEVELOPMENT;
    }

    static get production() {
        return PRODUCTION;
    }
}
