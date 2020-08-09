import {Object} from "~/models/object/Object";

export class ObjectFacets {
  constructor(objects: readonly Object[]) {
    const creators: Set<string> = new Set();
    const culturalContexts: Set<string> = new Set();
    const extents: Set<string> = new Set();
    const languages: Set<string> = new Set();
    const materials: Set<string> = new Set();
    const media: Set<string> = new Set();
    const publishers: Set<string> = new Set();
    const spatials: Set<string> = new Set();
    const subjects: Set<string> = new Set();
    const techniques: Set<string> = new Set();
    const temporals: Set<string> = new Set();
    const types: Set<string> = new Set();
    for (const object of objects) {
      object.creators?.forEach(creator => creators.add(creator));
      object.culturalContexts?.forEach(culturalContext =>
        culturalContexts.add(culturalContext)
      );
      object.extents?.forEach(extent => extents.add(extent));
      object.languages?.forEach(language => languages.add(language));
      object.materials?.forEach(material => materials.add(material));
      object.media?.forEach(medium => media.add(medium));
      object.publishers?.forEach(publisher => publishers.add(publisher));
      object.spatials?.forEach(spatial => spatials.add(spatial));
      object.subjects?.forEach(subject => subjects.add(subject));
      object.techniques?.forEach(technique => techniques.add(technique));
      object.temporals?.forEach(temporal => temporals.add(temporal));
      object.types?.forEach(type => types.add(type));
    }
    this.creators = [...creators];
    this.culturalContexts = [...culturalContexts];
    this.extents = [...extents];
    this.languages = [...languages];
    this.materials = [...materials];
    this.media = [...media];
    this.publishers = [...publishers];
    this.spatials = [...spatials];
    this.subjects = [...subjects];
    this.techniques = [...techniques];
    this.temporals = [...temporals];
    this.types = [...types];
  }

  readonly creators: readonly string[];
  readonly culturalContexts: readonly string[];
  readonly extents: readonly string[];
  readonly languages: readonly string[];
  readonly materials: readonly string[];
  readonly media: readonly string[];
  readonly publishers: readonly string[];
  readonly spatials: readonly string[];
  readonly subjects: readonly string[];
  readonly techniques: readonly string[];
  readonly temporals: readonly string[];
  readonly types: readonly string[];
}
