import {Object} from "~/models/object/Object";

export class ObjectFacets {
  constructor(objects: readonly Object[]) {
    const culturalContexts: Set<string> = new Set();
    const materials: Set<string> = new Set();
    const spatials: Set<string> = new Set();
    const subjects: Set<string> = new Set();
    const techniques: Set<string> = new Set();
    const temporals: Set<string> = new Set();
    const types: Set<string> = new Set();
    for (const object of objects) {
      object.subjects?.forEach(subject => subjects.add(subject));
    }
    this.culturalContexts = [...culturalContexts];
    this.materials = [...materials];
    this.spatials = [...spatials];
    this.subjects = [...subjects];
    this.techniques = [...techniques];
    this.temporals = [...temporals];
    this.types = [...types];
  }

  culturalContexts: readonly string[];
  materials: readonly string[];
  spatials: readonly string[];
  subjects: readonly string[];
  techniques: readonly string[];
  temporals: readonly string[];
  types: readonly string[];
}
