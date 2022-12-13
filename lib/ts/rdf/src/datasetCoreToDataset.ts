import {Store} from "n3";
import {Dataset, DatasetCore, Quad, Stream, Term} from "@rdfjs/types";

export const datasetCoreToDataset = (datasetCore: DatasetCore): Dataset => {
  return {
    [Symbol.iterator](): Iterator<Quad> {
      return datasetCore[Symbol.iterator]();
    },
    add(quad: Quad): Dataset<Quad, Quad> {
      datasetCore.add(quad);
      return this;
    },
    contains(other: Dataset<Quad, Quad>): boolean {
      return other.every(quad => datasetCore.has(quad));
    },
    delete(quad: Quad): Dataset<Quad, Quad> {
      datasetCore.delete(quad);
      return this;
    },
    difference(other: Dataset<Quad>): Dataset<Quad, Quad> {
      throw new EvalError("not implemented: difference");
    },
    equals(other: Dataset<Quad>): boolean {
      throw new EvalError("not implemented: equals");
    },
    every(
      iteratee: (quad: Quad, dataset: Dataset<Quad, Quad>) => boolean
    ): boolean {
      for (const quad of datasetCore) {
        if (!iteratee(quad, this)) {
          return false;
        }
      }
      return true;
    },
    filter(
      iteratee: (quad: Quad, dataset: Dataset<Quad, Quad>) => boolean
    ): Dataset<Quad, Quad> {
      const filtered = new Store();
      for (const quad of datasetCore) {
        if (iteratee(quad, this)) {
          filtered.add(quad);
        }
      }
      return datasetCoreToDataset(filtered);
    },
    forEach(
      callback: (quad: Quad, dataset: Dataset<Quad, Quad>) => void
    ): void {
      for (const quad of datasetCore) {
        callback(quad, this);
      }
    },
    has(quad: Quad): boolean {
      return datasetCore.has(quad);
    },
    import(stream: Stream<Quad>): Promise<Dataset<Quad, Quad>> {
      throw new EvalError("not implemented: import");
    },
    intersection(other: Dataset<Quad>): Dataset<Quad, Quad> {
      throw new EvalError("not implemented: intersection");
    },
    map(
      iteratee: (quad: Quad, dataset: Dataset<Quad>) => Quad
    ): Dataset<Quad, Quad> {
      const mapped = new Store();
      for (const quad of datasetCore) {
        mapped.add(iteratee(quad, this));
      }
      return datasetCoreToDataset(mapped);
    },
    reduce<A>(
      callback: (accumulator: A, quad: Quad, dataset: Dataset<Quad, Quad>) => A,
      initialValue: A
    ): A {
      let accumulator = initialValue;
      for (const quad of datasetCore) {
        accumulator = callback(accumulator, quad, this);
      }
      return accumulator;
    },
    get size() {
      return datasetCore.size;
    },
    some(
      iteratee: (quad: Quad, dataset: Dataset<Quad, Quad>) => boolean
    ): boolean {
      for (const quad of datasetCore) {
        if (iteratee(quad, this)) {
          return true;
        }
      }
      return false;
    },
    toArray(): Quad[] {
      return [...datasetCore];
    },
    toStream(): Stream<Quad> {
      throw new EvalError("not implemented: toStream");
    },
    union(quads: Dataset<Quad>): Dataset<Quad, Quad> {
      throw new EvalError("not implemented: union");
    },
    deleteMatches(
      subject?: Term,
      predicate?: Term,
      object?: Term,
      graph?: Term
    ): Dataset<Quad, Quad> {
      const quadsToDelete: Quad[] = [];
      for (const quad of datasetCore.match(subject, predicate, object, graph)) {
        quadsToDelete.push(quad);
      }
      for (const quad of quadsToDelete) {
        datasetCore.delete(quad);
      }
      return this;
    },
    match(
      subject?: Term | null,
      predicate?: Term | null,
      object?: Term | null,
      graph?: Term | null
    ): Dataset<Quad, Quad> {
      return datasetCoreToDataset(
        datasetCore.match(subject, predicate, object, graph)
      );
    },
    toCanonical(): string {
      throw new EvalError("not implemented: toCanonical");
    },
    toString(): string {
      throw new EvalError("not implemented: toString");
    },
    addAll(quads: Dataset<Quad> | Quad[]): Dataset<Quad, Quad> {
      for (const quad of quads) {
        datasetCore.add(quad);
      }
      return this;
    },
  };
};
