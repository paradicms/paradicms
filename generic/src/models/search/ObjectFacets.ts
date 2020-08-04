import {Object} from "~/models/object/Object";

export class ObjectFacets {
  constructor(objects: readonly Object[]) {
    this.culturalContexts = [];
    this.materials = [];
    this.spatials = [];
    this.subjects = [];
    this.techniques = [];
    this.temporals = [];
    this.types = [];
  }

  culturalContexts: readonly string[];
  materials: readonly string[];
  spatials: readonly string[];
  subjects: readonly string[];
  techniques: readonly string[];
  temporals: readonly string[];
  types: readonly string[];
}
