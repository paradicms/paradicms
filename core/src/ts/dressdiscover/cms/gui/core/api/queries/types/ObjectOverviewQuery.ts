/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ObjectOverviewQuery
// ====================================================

export interface ObjectOverviewQuery_collectionByUri_rights {
  __typename: "Rights";
  holder: string | null;
  license: string | null;
  text: string;
}

export interface ObjectOverviewQuery_collectionByUri {
  __typename: "Collection";
  name: string;
  rights: ObjectOverviewQuery_collectionByUri_rights | null;
}

export interface ObjectOverviewQuery_institutionByUri_rights {
  __typename: "Rights";
  holder: string | null;
  license: string | null;
  text: string;
}

export interface ObjectOverviewQuery_institutionByUri {
  __typename: "Institution";
  name: string;
  rights: ObjectOverviewQuery_institutionByUri_rights | null;
}

export interface ObjectOverviewQuery_objectByUri_images_original {
  __typename: "Image";
  height: number | null;
  url: string;
  width: number | null;
}

export interface ObjectOverviewQuery_objectByUri_images_thumbnail {
  __typename: "Image";
  height: number | null;
  url: string;
  width: number | null;
}

export interface ObjectOverviewQuery_objectByUri_images {
  __typename: "DerivedImageSet";
  original: ObjectOverviewQuery_objectByUri_images_original;
  thumbnail: ObjectOverviewQuery_objectByUri_images_thumbnail | null;
}

export interface ObjectOverviewQuery_objectByUri_rights {
  __typename: "Rights";
  holder: string | null;
  license: string | null;
  text: string;
}

export interface ObjectOverviewQuery_objectByUri {
  __typename: "Object";
  alternativeTitles: string[];
  creators: string[];
  dates: string[];
  descriptions: string[];
  extents: string[];
  identifiers: string[];
  images: ObjectOverviewQuery_objectByUri_images[];
  languages: string[];
  media: string[];
  provenances: string[];
  publishers: string[];
  rights: ObjectOverviewQuery_objectByUri_rights | null;
  sources: string[];
  spatialCoverages: string[];
  subjects: string[];
  title: string;
  titles: string[];
}

export interface ObjectOverviewQuery {
  collectionByUri: ObjectOverviewQuery_collectionByUri;
  institutionByUri: ObjectOverviewQuery_institutionByUri;
  objectByUri: ObjectOverviewQuery_objectByUri;
}

export interface ObjectOverviewQueryVariables {
  collectionUri: string;
  institutionUri: string;
  objectUri: string;
}
