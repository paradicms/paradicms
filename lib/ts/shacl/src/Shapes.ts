import {Parser, ParserOptions, Store} from "n3";

export class Shapes {
    constructor(readonly store: Store) {}

    static parse(input: string, options?: ParserOptions): Shapes {
        return new Shapes(Shapes.parseIntoStore(input, options));
    }

    protected static parseIntoStore(
        input: string,
        options?: ParserOptions
    ): Store {
        const parser = new Parser(options);
        const store = new Store();
        store.addQuads(parser.parse(input));
        return store;
    }
}
