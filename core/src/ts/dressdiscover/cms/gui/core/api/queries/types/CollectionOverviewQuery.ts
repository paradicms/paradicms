/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CollectionOverviewQuery
// ====================================================

export interface CollectionOverviewQuery_collectionByUri_objects_thumbnail {
  __typename: "Image";
  url: string;
}

export interface CollectionOverviewQuery_collectionByUri_objects {
  __typename: "Object";
  description: string | null;
  title: string;
  thumbnail: CollectionOverviewQuery_collectionByUri_objects_thumbnail | null;
  uri: string;
}

export interface CollectionOverviewQuery_collectionByUri_rights {
  __typename: "Rights";
  holder: string | null;
  license: string | null;
  text: string;
}

export interface CollectionOverviewQuery_collectionByUri {
  __typename: "Collection";
  description: string | null;
  name: string;
  objects: CollectionOverviewQuery_collectionByUri_objects[];
  objectsCount: number;
  rights: CollectionOverviewQuery_collectionByUri_rights | null;
}

export interface CollectionOverviewQuery_institutionByUri_rights {
  __typename: "Rights";
  holder: string | null;
  license: string | null;
  text: string;
}

export interface CollectionOverviewQuery_institutionByUri {
  __typename: "Institution";
  name: string;
  rights: CollectionOverviewQuery_institutionByUri_rights | null;
}

export interface CollectionOverviewQuery {
  collectionByUri: CollectionOverviewQuery_collectionByUri;
  institutionByUri: CollectionOverviewQuery_institutionByUri;
}

export interface CollectionOverviewQueryVariables {
  collectionUri: string;
  institutionUri: string;
}
