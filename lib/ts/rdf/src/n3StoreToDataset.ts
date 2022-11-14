import {DataFactory, Store, Term as N3Term} from "n3";
import {Dataset, Literal, Quad, Stream, Term} from "@rdfjs/types";

export const n3StoreToDataset = (n3Store: Store): Dataset => {
  return {
    [Symbol.iterator](): Iterator<Quad> {
      return n3Store[Symbol.iterator]();
    },
    add(quad: Quad): Dataset<Quad, Quad> {
      n3Store.add(quad);
      return this;
    },
    contains(other: Dataset<Quad, Quad>): boolean {
      return other.every(quad => n3Store.has(quad));
    },
    delete(quad: Quad): Dataset<Quad, Quad> {
      const countBefore = n3Store.countQuads(null, null, null, null);
      n3Store.delete(quad);
      const countAfter = n3Store.countQuads(null, null, null, null);
      console.log(countBefore, countAfter);
      return this;
    },
    difference(other: Dataset<Quad>): Dataset<Quad, Quad> {
      throw new EvalError("not implemented");
    },
    equals(other: Dataset<Quad>): boolean {
      throw new EvalError("not implemented");
    },
    every(
      iteratee: (quad: Quad, dataset: Dataset<Quad, Quad>) => boolean
    ): boolean {
      return n3Store.every(
        quad => iteratee(quad, this),
        null,
        null,
        null,
        null
      );
    },
    filter(
      iteratee: (quad: Quad, dataset: Dataset<Quad, Quad>) => boolean
    ): Dataset<Quad, Quad> {
      const filteredStore = new Store();
      n3Store.forEach(
        quad => {
          if (iteratee(quad, this)) {
            filteredStore.add(quad);
          }
        },
        null,
        null,
        null,
        null
      );
      return n3StoreToDataset(filteredStore);
    },
    forEach(
      callback: (quad: Quad, dataset: Dataset<Quad, Quad>) => void
    ): void {
      n3Store.forEach(quad => callback(quad, this), null, null, null, null);
    },
    has(quad: Quad): boolean {
      return n3Store.has(quad);
    },
    import(stream: Stream<Quad>): Promise<Dataset<Quad, Quad>> {
      throw new EvalError("not implemented");
    },
    intersection(other: Dataset<Quad>): Dataset<Quad, Quad> {
      throw new EvalError("not implemented");
    },
    map(
      iteratee: (quad: Quad, dataset: Dataset<Quad>) => Quad
    ): Dataset<Quad, Quad> {
      const mappedStore = new Store();
      n3Store.forEach(
        quad => mappedStore.add(iteratee(quad, this)),
        null,
        null,
        null,
        null
      );
      return n3StoreToDataset(mappedStore);
    },
    reduce<A>(
      callback: (accumulator: A, quad: Quad, dataset: Dataset<Quad, Quad>) => A,
      initialValue: A
    ): A {
      let accumulator = initialValue;
      n3Store.forEach(
        quad => {
          accumulator = callback(accumulator, quad, this);
        },
        null,
        null,
        null,
        null
      );
      return accumulator;
    },
    get size() {
      return n3Store.size;
    },
    some(
      iteratee: (quad: Quad, dataset: Dataset<Quad, Quad>) => boolean
    ): boolean {
      return n3Store.some(quad => iteratee(quad, this), null, null, null, null);
    },
    toArray(): Quad[] {
      return n3Store.getQuads(null, null, null, null);
    },
    toStream(): Stream<Quad> {
      throw new EvalError("not implemented");
    },
    union(quads: Dataset<Quad>): Dataset<Quad, Quad> {
      throw new EvalError("not implemented");
    },
    deleteMatches(
      subject?: Term,
      predicate?: Term,
      object?: Term,
      graph?: Term
    ): Dataset<Quad, Quad> {
      throw new EvalError("not implemented");
    },
    match(
      subject?: Term | null,
      predicate?: Term | null,
      object?: Term | null,
      graph?: Term | null
    ): Dataset<Quad, Quad> {
      const termToN3Term = (term: Term | null | undefined): N3Term | null => {
        if (!term) {
          return null;
        }
        switch (term.termType) {
          case "BlankNode":
            return DataFactory.blankNode(term.value);
          case "DefaultGraph":
            return DataFactory.defaultGraph();
          case "Literal":
            const literal: Literal = term;
            return DataFactory.literal(
              literal.value,
              literal.language ?? literal.datatype
            );
          case "NamedNode":
            return DataFactory.namedNode(term.value);
          case "Quad":
            throw new EvalError("not implemented");
          case "Variable":
            return DataFactory.variable(term.value);
        }
      };

      const matchedStore = new Store();
      for (const quad of n3Store.match(
        termToN3Term(subject),
        termToN3Term(predicate),
        termToN3Term(object),
        termToN3Term(graph)
      )) {
        matchedStore.add(quad);
      }
      return n3StoreToDataset(matchedStore);
    },
    toCanonical(): string {
      throw new EvalError("not implemented");
    },
    toString(): string {
      throw new EvalError("not implemented");
    },
    addAll(quads: Dataset<Quad> | Quad[]): Dataset<Quad, Quad> {
      for (const quad of quads) {
        n3Store.add(quad);
      }
      return this;
    },
  };
};
