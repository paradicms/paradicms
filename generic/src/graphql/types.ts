export type Maybe<T> = T | null;
export type Exact<T extends {[key: string]: any}> = {[K in keyof T]: T[K]};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>;
  ne?: Maybe<Scalars["Boolean"]>;
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>;
};

export type CollectionJson = Node & {
  __typename?: "CollectionJson";
  institutionUri: Scalars["String"];
  title: Scalars["String"];
  uri: Scalars["String"];
  rights?: Maybe<CollectionJsonRights>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type CollectionJsonConnection = {
  __typename?: "CollectionJsonConnection";
  totalCount: Scalars["Int"];
  edges: Array<CollectionJsonEdge>;
  nodes: Array<CollectionJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<CollectionJsonGroupConnection>;
};

export type CollectionJsonConnectionDistinctArgs = {
  field: CollectionJsonFieldsEnum;
};

export type CollectionJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: CollectionJsonFieldsEnum;
};

export type CollectionJsonEdge = {
  __typename?: "CollectionJsonEdge";
  next?: Maybe<CollectionJson>;
  node: CollectionJson;
  previous?: Maybe<CollectionJson>;
};

export enum CollectionJsonFieldsEnum {
  institutionUri = "institutionUri",
  title = "title",
  uri = "uri",
  rights___holder = "rights___holder",
  rights___statements = "rights___statements",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type CollectionJsonFilterInput = {
  institutionUri?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  rights?: Maybe<CollectionJsonRightsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type CollectionJsonFilterListInput = {
  elemMatch?: Maybe<CollectionJsonFilterInput>;
};

export type CollectionJsonGroupConnection = {
  __typename?: "CollectionJsonGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<CollectionJsonEdge>;
  nodes: Array<CollectionJson>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type CollectionJsonRights = {
  __typename?: "CollectionJsonRights";
  holder: Scalars["String"];
  statements: Array<Scalars["String"]>;
};

export type CollectionJsonRightsFilterInput = {
  holder?: Maybe<StringQueryOperatorInput>;
  statements?: Maybe<StringQueryOperatorInput>;
};

export type CollectionJsonSortInput = {
  fields?: Maybe<Array<Maybe<CollectionJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>;
  ne?: Maybe<Scalars["Date"]>;
  gt?: Maybe<Scalars["Date"]>;
  gte?: Maybe<Scalars["Date"]>;
  lt?: Maybe<Scalars["Date"]>;
  lte?: Maybe<Scalars["Date"]>;
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>;
};

export type Directory = Node & {
  __typename?: "Directory";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type DirectoryConnection = {
  __typename?: "DirectoryConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: "DirectoryEdge";
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  ino = "ino",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  __typename?: "File";
  sourceInstanceName: Scalars["String"];
  absolutePath: Scalars["String"];
  relativePath: Scalars["String"];
  extension: Scalars["String"];
  size: Scalars["Int"];
  prettySize: Scalars["String"];
  modifiedTime: Scalars["Date"];
  accessTime: Scalars["Date"];
  changeTime: Scalars["Date"];
  birthTime: Scalars["Date"];
  root: Scalars["String"];
  dir: Scalars["String"];
  base: Scalars["String"];
  ext: Scalars["String"];
  name: Scalars["String"];
  relativeDirectory: Scalars["String"];
  dev: Scalars["Int"];
  mode: Scalars["Int"];
  nlink: Scalars["Int"];
  uid: Scalars["Int"];
  gid: Scalars["Int"];
  rdev: Scalars["Int"];
  ino: Scalars["Float"];
  atimeMs: Scalars["Float"];
  mtimeMs: Scalars["Float"];
  ctimeMs: Scalars["Float"];
  atime: Scalars["Date"];
  mtime: Scalars["Date"];
  ctime: Scalars["Date"];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childrenCollectionJson?: Maybe<Array<Maybe<CollectionJson>>>;
  childrenInstitutionJson?: Maybe<Array<Maybe<InstitutionJson>>>;
  childrenObjectJson?: Maybe<Array<Maybe<ObjectJson>>>;
  childrenImageJson?: Maybe<Array<Maybe<ImageJson>>>;
  childrenPropertyDefinitionJson?: Maybe<Array<Maybe<PropertyDefinitionJson>>>;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type FileConnection = {
  __typename?: "FileConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: "FileEdge";
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  ino = "ino",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  publicURL = "publicURL",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  childrenCollectionJson = "childrenCollectionJson",
  childrenCollectionJson___institutionUri = "childrenCollectionJson___institutionUri",
  childrenCollectionJson___title = "childrenCollectionJson___title",
  childrenCollectionJson___uri = "childrenCollectionJson___uri",
  childrenCollectionJson___rights___holder = "childrenCollectionJson___rights___holder",
  childrenCollectionJson___rights___statements = "childrenCollectionJson___rights___statements",
  childrenCollectionJson___id = "childrenCollectionJson___id",
  childrenCollectionJson___parent___id = "childrenCollectionJson___parent___id",
  childrenCollectionJson___parent___parent___id = "childrenCollectionJson___parent___parent___id",
  childrenCollectionJson___parent___parent___children = "childrenCollectionJson___parent___parent___children",
  childrenCollectionJson___parent___children = "childrenCollectionJson___parent___children",
  childrenCollectionJson___parent___children___id = "childrenCollectionJson___parent___children___id",
  childrenCollectionJson___parent___children___children = "childrenCollectionJson___parent___children___children",
  childrenCollectionJson___parent___internal___content = "childrenCollectionJson___parent___internal___content",
  childrenCollectionJson___parent___internal___contentDigest = "childrenCollectionJson___parent___internal___contentDigest",
  childrenCollectionJson___parent___internal___description = "childrenCollectionJson___parent___internal___description",
  childrenCollectionJson___parent___internal___fieldOwners = "childrenCollectionJson___parent___internal___fieldOwners",
  childrenCollectionJson___parent___internal___ignoreType = "childrenCollectionJson___parent___internal___ignoreType",
  childrenCollectionJson___parent___internal___mediaType = "childrenCollectionJson___parent___internal___mediaType",
  childrenCollectionJson___parent___internal___owner = "childrenCollectionJson___parent___internal___owner",
  childrenCollectionJson___parent___internal___type = "childrenCollectionJson___parent___internal___type",
  childrenCollectionJson___children = "childrenCollectionJson___children",
  childrenCollectionJson___children___id = "childrenCollectionJson___children___id",
  childrenCollectionJson___children___parent___id = "childrenCollectionJson___children___parent___id",
  childrenCollectionJson___children___parent___children = "childrenCollectionJson___children___parent___children",
  childrenCollectionJson___children___children = "childrenCollectionJson___children___children",
  childrenCollectionJson___children___children___id = "childrenCollectionJson___children___children___id",
  childrenCollectionJson___children___children___children = "childrenCollectionJson___children___children___children",
  childrenCollectionJson___children___internal___content = "childrenCollectionJson___children___internal___content",
  childrenCollectionJson___children___internal___contentDigest = "childrenCollectionJson___children___internal___contentDigest",
  childrenCollectionJson___children___internal___description = "childrenCollectionJson___children___internal___description",
  childrenCollectionJson___children___internal___fieldOwners = "childrenCollectionJson___children___internal___fieldOwners",
  childrenCollectionJson___children___internal___ignoreType = "childrenCollectionJson___children___internal___ignoreType",
  childrenCollectionJson___children___internal___mediaType = "childrenCollectionJson___children___internal___mediaType",
  childrenCollectionJson___children___internal___owner = "childrenCollectionJson___children___internal___owner",
  childrenCollectionJson___children___internal___type = "childrenCollectionJson___children___internal___type",
  childrenCollectionJson___internal___content = "childrenCollectionJson___internal___content",
  childrenCollectionJson___internal___contentDigest = "childrenCollectionJson___internal___contentDigest",
  childrenCollectionJson___internal___description = "childrenCollectionJson___internal___description",
  childrenCollectionJson___internal___fieldOwners = "childrenCollectionJson___internal___fieldOwners",
  childrenCollectionJson___internal___ignoreType = "childrenCollectionJson___internal___ignoreType",
  childrenCollectionJson___internal___mediaType = "childrenCollectionJson___internal___mediaType",
  childrenCollectionJson___internal___owner = "childrenCollectionJson___internal___owner",
  childrenCollectionJson___internal___type = "childrenCollectionJson___internal___type",
  childrenInstitutionJson = "childrenInstitutionJson",
  childrenInstitutionJson___name = "childrenInstitutionJson___name",
  childrenInstitutionJson___uri = "childrenInstitutionJson___uri",
  childrenInstitutionJson___rights___holder = "childrenInstitutionJson___rights___holder",
  childrenInstitutionJson___rights___statements = "childrenInstitutionJson___rights___statements",
  childrenInstitutionJson___id = "childrenInstitutionJson___id",
  childrenInstitutionJson___parent___id = "childrenInstitutionJson___parent___id",
  childrenInstitutionJson___parent___parent___id = "childrenInstitutionJson___parent___parent___id",
  childrenInstitutionJson___parent___parent___children = "childrenInstitutionJson___parent___parent___children",
  childrenInstitutionJson___parent___children = "childrenInstitutionJson___parent___children",
  childrenInstitutionJson___parent___children___id = "childrenInstitutionJson___parent___children___id",
  childrenInstitutionJson___parent___children___children = "childrenInstitutionJson___parent___children___children",
  childrenInstitutionJson___parent___internal___content = "childrenInstitutionJson___parent___internal___content",
  childrenInstitutionJson___parent___internal___contentDigest = "childrenInstitutionJson___parent___internal___contentDigest",
  childrenInstitutionJson___parent___internal___description = "childrenInstitutionJson___parent___internal___description",
  childrenInstitutionJson___parent___internal___fieldOwners = "childrenInstitutionJson___parent___internal___fieldOwners",
  childrenInstitutionJson___parent___internal___ignoreType = "childrenInstitutionJson___parent___internal___ignoreType",
  childrenInstitutionJson___parent___internal___mediaType = "childrenInstitutionJson___parent___internal___mediaType",
  childrenInstitutionJson___parent___internal___owner = "childrenInstitutionJson___parent___internal___owner",
  childrenInstitutionJson___parent___internal___type = "childrenInstitutionJson___parent___internal___type",
  childrenInstitutionJson___children = "childrenInstitutionJson___children",
  childrenInstitutionJson___children___id = "childrenInstitutionJson___children___id",
  childrenInstitutionJson___children___parent___id = "childrenInstitutionJson___children___parent___id",
  childrenInstitutionJson___children___parent___children = "childrenInstitutionJson___children___parent___children",
  childrenInstitutionJson___children___children = "childrenInstitutionJson___children___children",
  childrenInstitutionJson___children___children___id = "childrenInstitutionJson___children___children___id",
  childrenInstitutionJson___children___children___children = "childrenInstitutionJson___children___children___children",
  childrenInstitutionJson___children___internal___content = "childrenInstitutionJson___children___internal___content",
  childrenInstitutionJson___children___internal___contentDigest = "childrenInstitutionJson___children___internal___contentDigest",
  childrenInstitutionJson___children___internal___description = "childrenInstitutionJson___children___internal___description",
  childrenInstitutionJson___children___internal___fieldOwners = "childrenInstitutionJson___children___internal___fieldOwners",
  childrenInstitutionJson___children___internal___ignoreType = "childrenInstitutionJson___children___internal___ignoreType",
  childrenInstitutionJson___children___internal___mediaType = "childrenInstitutionJson___children___internal___mediaType",
  childrenInstitutionJson___children___internal___owner = "childrenInstitutionJson___children___internal___owner",
  childrenInstitutionJson___children___internal___type = "childrenInstitutionJson___children___internal___type",
  childrenInstitutionJson___internal___content = "childrenInstitutionJson___internal___content",
  childrenInstitutionJson___internal___contentDigest = "childrenInstitutionJson___internal___contentDigest",
  childrenInstitutionJson___internal___description = "childrenInstitutionJson___internal___description",
  childrenInstitutionJson___internal___fieldOwners = "childrenInstitutionJson___internal___fieldOwners",
  childrenInstitutionJson___internal___ignoreType = "childrenInstitutionJson___internal___ignoreType",
  childrenInstitutionJson___internal___mediaType = "childrenInstitutionJson___internal___mediaType",
  childrenInstitutionJson___internal___owner = "childrenInstitutionJson___internal___owner",
  childrenInstitutionJson___internal___type = "childrenInstitutionJson___internal___type",
  childrenObjectJson = "childrenObjectJson",
  childrenObjectJson___collectionUris = "childrenObjectJson___collectionUris",
  childrenObjectJson___institutionUri = "childrenObjectJson___institutionUri",
  childrenObjectJson___properties = "childrenObjectJson___properties",
  childrenObjectJson___properties___key = "childrenObjectJson___properties___key",
  childrenObjectJson___properties___value = "childrenObjectJson___properties___value",
  childrenObjectJson___rights___holder = "childrenObjectJson___rights___holder",
  childrenObjectJson___rights___statements = "childrenObjectJson___rights___statements",
  childrenObjectJson___title = "childrenObjectJson___title",
  childrenObjectJson___uri = "childrenObjectJson___uri",
  childrenObjectJson___id = "childrenObjectJson___id",
  childrenObjectJson___parent___id = "childrenObjectJson___parent___id",
  childrenObjectJson___parent___parent___id = "childrenObjectJson___parent___parent___id",
  childrenObjectJson___parent___parent___children = "childrenObjectJson___parent___parent___children",
  childrenObjectJson___parent___children = "childrenObjectJson___parent___children",
  childrenObjectJson___parent___children___id = "childrenObjectJson___parent___children___id",
  childrenObjectJson___parent___children___children = "childrenObjectJson___parent___children___children",
  childrenObjectJson___parent___internal___content = "childrenObjectJson___parent___internal___content",
  childrenObjectJson___parent___internal___contentDigest = "childrenObjectJson___parent___internal___contentDigest",
  childrenObjectJson___parent___internal___description = "childrenObjectJson___parent___internal___description",
  childrenObjectJson___parent___internal___fieldOwners = "childrenObjectJson___parent___internal___fieldOwners",
  childrenObjectJson___parent___internal___ignoreType = "childrenObjectJson___parent___internal___ignoreType",
  childrenObjectJson___parent___internal___mediaType = "childrenObjectJson___parent___internal___mediaType",
  childrenObjectJson___parent___internal___owner = "childrenObjectJson___parent___internal___owner",
  childrenObjectJson___parent___internal___type = "childrenObjectJson___parent___internal___type",
  childrenObjectJson___children = "childrenObjectJson___children",
  childrenObjectJson___children___id = "childrenObjectJson___children___id",
  childrenObjectJson___children___parent___id = "childrenObjectJson___children___parent___id",
  childrenObjectJson___children___parent___children = "childrenObjectJson___children___parent___children",
  childrenObjectJson___children___children = "childrenObjectJson___children___children",
  childrenObjectJson___children___children___id = "childrenObjectJson___children___children___id",
  childrenObjectJson___children___children___children = "childrenObjectJson___children___children___children",
  childrenObjectJson___children___internal___content = "childrenObjectJson___children___internal___content",
  childrenObjectJson___children___internal___contentDigest = "childrenObjectJson___children___internal___contentDigest",
  childrenObjectJson___children___internal___description = "childrenObjectJson___children___internal___description",
  childrenObjectJson___children___internal___fieldOwners = "childrenObjectJson___children___internal___fieldOwners",
  childrenObjectJson___children___internal___ignoreType = "childrenObjectJson___children___internal___ignoreType",
  childrenObjectJson___children___internal___mediaType = "childrenObjectJson___children___internal___mediaType",
  childrenObjectJson___children___internal___owner = "childrenObjectJson___children___internal___owner",
  childrenObjectJson___children___internal___type = "childrenObjectJson___children___internal___type",
  childrenObjectJson___internal___content = "childrenObjectJson___internal___content",
  childrenObjectJson___internal___contentDigest = "childrenObjectJson___internal___contentDigest",
  childrenObjectJson___internal___description = "childrenObjectJson___internal___description",
  childrenObjectJson___internal___fieldOwners = "childrenObjectJson___internal___fieldOwners",
  childrenObjectJson___internal___ignoreType = "childrenObjectJson___internal___ignoreType",
  childrenObjectJson___internal___mediaType = "childrenObjectJson___internal___mediaType",
  childrenObjectJson___internal___owner = "childrenObjectJson___internal___owner",
  childrenObjectJson___internal___type = "childrenObjectJson___internal___type",
  childrenImageJson = "childrenImageJson",
  childrenImageJson___exactDimensions___height = "childrenImageJson___exactDimensions___height",
  childrenImageJson___exactDimensions___width = "childrenImageJson___exactDimensions___width",
  childrenImageJson___institutionUri = "childrenImageJson___institutionUri",
  childrenImageJson___objectUri = "childrenImageJson___objectUri",
  childrenImageJson___originalImageUri = "childrenImageJson___originalImageUri",
  childrenImageJson___maxDimensions___height = "childrenImageJson___maxDimensions___height",
  childrenImageJson___maxDimensions___width = "childrenImageJson___maxDimensions___width",
  childrenImageJson___uri = "childrenImageJson___uri",
  childrenImageJson___id = "childrenImageJson___id",
  childrenImageJson___parent___id = "childrenImageJson___parent___id",
  childrenImageJson___parent___parent___id = "childrenImageJson___parent___parent___id",
  childrenImageJson___parent___parent___children = "childrenImageJson___parent___parent___children",
  childrenImageJson___parent___children = "childrenImageJson___parent___children",
  childrenImageJson___parent___children___id = "childrenImageJson___parent___children___id",
  childrenImageJson___parent___children___children = "childrenImageJson___parent___children___children",
  childrenImageJson___parent___internal___content = "childrenImageJson___parent___internal___content",
  childrenImageJson___parent___internal___contentDigest = "childrenImageJson___parent___internal___contentDigest",
  childrenImageJson___parent___internal___description = "childrenImageJson___parent___internal___description",
  childrenImageJson___parent___internal___fieldOwners = "childrenImageJson___parent___internal___fieldOwners",
  childrenImageJson___parent___internal___ignoreType = "childrenImageJson___parent___internal___ignoreType",
  childrenImageJson___parent___internal___mediaType = "childrenImageJson___parent___internal___mediaType",
  childrenImageJson___parent___internal___owner = "childrenImageJson___parent___internal___owner",
  childrenImageJson___parent___internal___type = "childrenImageJson___parent___internal___type",
  childrenImageJson___children = "childrenImageJson___children",
  childrenImageJson___children___id = "childrenImageJson___children___id",
  childrenImageJson___children___parent___id = "childrenImageJson___children___parent___id",
  childrenImageJson___children___parent___children = "childrenImageJson___children___parent___children",
  childrenImageJson___children___children = "childrenImageJson___children___children",
  childrenImageJson___children___children___id = "childrenImageJson___children___children___id",
  childrenImageJson___children___children___children = "childrenImageJson___children___children___children",
  childrenImageJson___children___internal___content = "childrenImageJson___children___internal___content",
  childrenImageJson___children___internal___contentDigest = "childrenImageJson___children___internal___contentDigest",
  childrenImageJson___children___internal___description = "childrenImageJson___children___internal___description",
  childrenImageJson___children___internal___fieldOwners = "childrenImageJson___children___internal___fieldOwners",
  childrenImageJson___children___internal___ignoreType = "childrenImageJson___children___internal___ignoreType",
  childrenImageJson___children___internal___mediaType = "childrenImageJson___children___internal___mediaType",
  childrenImageJson___children___internal___owner = "childrenImageJson___children___internal___owner",
  childrenImageJson___children___internal___type = "childrenImageJson___children___internal___type",
  childrenImageJson___internal___content = "childrenImageJson___internal___content",
  childrenImageJson___internal___contentDigest = "childrenImageJson___internal___contentDigest",
  childrenImageJson___internal___description = "childrenImageJson___internal___description",
  childrenImageJson___internal___fieldOwners = "childrenImageJson___internal___fieldOwners",
  childrenImageJson___internal___ignoreType = "childrenImageJson___internal___ignoreType",
  childrenImageJson___internal___mediaType = "childrenImageJson___internal___mediaType",
  childrenImageJson___internal___owner = "childrenImageJson___internal___owner",
  childrenImageJson___internal___type = "childrenImageJson___internal___type",
  childrenPropertyDefinitionJson = "childrenPropertyDefinitionJson",
  childrenPropertyDefinitionJson___key = "childrenPropertyDefinitionJson___key",
  childrenPropertyDefinitionJson___labelPlural = "childrenPropertyDefinitionJson___labelPlural",
  childrenPropertyDefinitionJson___labelSingular = "childrenPropertyDefinitionJson___labelSingular",
  childrenPropertyDefinitionJson___uri = "childrenPropertyDefinitionJson___uri",
  childrenPropertyDefinitionJson___faceted = "childrenPropertyDefinitionJson___faceted",
  childrenPropertyDefinitionJson___id = "childrenPropertyDefinitionJson___id",
  childrenPropertyDefinitionJson___parent___id = "childrenPropertyDefinitionJson___parent___id",
  childrenPropertyDefinitionJson___parent___parent___id = "childrenPropertyDefinitionJson___parent___parent___id",
  childrenPropertyDefinitionJson___parent___parent___children = "childrenPropertyDefinitionJson___parent___parent___children",
  childrenPropertyDefinitionJson___parent___children = "childrenPropertyDefinitionJson___parent___children",
  childrenPropertyDefinitionJson___parent___children___id = "childrenPropertyDefinitionJson___parent___children___id",
  childrenPropertyDefinitionJson___parent___children___children = "childrenPropertyDefinitionJson___parent___children___children",
  childrenPropertyDefinitionJson___parent___internal___content = "childrenPropertyDefinitionJson___parent___internal___content",
  childrenPropertyDefinitionJson___parent___internal___contentDigest = "childrenPropertyDefinitionJson___parent___internal___contentDigest",
  childrenPropertyDefinitionJson___parent___internal___description = "childrenPropertyDefinitionJson___parent___internal___description",
  childrenPropertyDefinitionJson___parent___internal___fieldOwners = "childrenPropertyDefinitionJson___parent___internal___fieldOwners",
  childrenPropertyDefinitionJson___parent___internal___ignoreType = "childrenPropertyDefinitionJson___parent___internal___ignoreType",
  childrenPropertyDefinitionJson___parent___internal___mediaType = "childrenPropertyDefinitionJson___parent___internal___mediaType",
  childrenPropertyDefinitionJson___parent___internal___owner = "childrenPropertyDefinitionJson___parent___internal___owner",
  childrenPropertyDefinitionJson___parent___internal___type = "childrenPropertyDefinitionJson___parent___internal___type",
  childrenPropertyDefinitionJson___children = "childrenPropertyDefinitionJson___children",
  childrenPropertyDefinitionJson___children___id = "childrenPropertyDefinitionJson___children___id",
  childrenPropertyDefinitionJson___children___parent___id = "childrenPropertyDefinitionJson___children___parent___id",
  childrenPropertyDefinitionJson___children___parent___children = "childrenPropertyDefinitionJson___children___parent___children",
  childrenPropertyDefinitionJson___children___children = "childrenPropertyDefinitionJson___children___children",
  childrenPropertyDefinitionJson___children___children___id = "childrenPropertyDefinitionJson___children___children___id",
  childrenPropertyDefinitionJson___children___children___children = "childrenPropertyDefinitionJson___children___children___children",
  childrenPropertyDefinitionJson___children___internal___content = "childrenPropertyDefinitionJson___children___internal___content",
  childrenPropertyDefinitionJson___children___internal___contentDigest = "childrenPropertyDefinitionJson___children___internal___contentDigest",
  childrenPropertyDefinitionJson___children___internal___description = "childrenPropertyDefinitionJson___children___internal___description",
  childrenPropertyDefinitionJson___children___internal___fieldOwners = "childrenPropertyDefinitionJson___children___internal___fieldOwners",
  childrenPropertyDefinitionJson___children___internal___ignoreType = "childrenPropertyDefinitionJson___children___internal___ignoreType",
  childrenPropertyDefinitionJson___children___internal___mediaType = "childrenPropertyDefinitionJson___children___internal___mediaType",
  childrenPropertyDefinitionJson___children___internal___owner = "childrenPropertyDefinitionJson___children___internal___owner",
  childrenPropertyDefinitionJson___children___internal___type = "childrenPropertyDefinitionJson___children___internal___type",
  childrenPropertyDefinitionJson___internal___content = "childrenPropertyDefinitionJson___internal___content",
  childrenPropertyDefinitionJson___internal___contentDigest = "childrenPropertyDefinitionJson___internal___contentDigest",
  childrenPropertyDefinitionJson___internal___description = "childrenPropertyDefinitionJson___internal___description",
  childrenPropertyDefinitionJson___internal___fieldOwners = "childrenPropertyDefinitionJson___internal___fieldOwners",
  childrenPropertyDefinitionJson___internal___ignoreType = "childrenPropertyDefinitionJson___internal___ignoreType",
  childrenPropertyDefinitionJson___internal___mediaType = "childrenPropertyDefinitionJson___internal___mediaType",
  childrenPropertyDefinitionJson___internal___owner = "childrenPropertyDefinitionJson___internal___owner",
  childrenPropertyDefinitionJson___internal___type = "childrenPropertyDefinitionJson___internal___type",
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childrenCollectionJson?: Maybe<CollectionJsonFilterListInput>;
  childrenInstitutionJson?: Maybe<InstitutionJsonFilterListInput>;
  childrenObjectJson?: Maybe<ObjectJsonFilterListInput>;
  childrenImageJson?: Maybe<ImageJsonFilterListInput>;
  childrenPropertyDefinitionJson?: Maybe<PropertyDefinitionJsonFilterListInput>;
};

export type FileGroupConnection = {
  __typename?: "FileGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>;
  ne?: Maybe<Scalars["Float"]>;
  gt?: Maybe<Scalars["Float"]>;
  gte?: Maybe<Scalars["Float"]>;
  lt?: Maybe<Scalars["Float"]>;
  lte?: Maybe<Scalars["Float"]>;
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>;
};

export type ImageJson = Node & {
  __typename?: "ImageJson";
  exactDimensions?: Maybe<ImageJsonExactDimensions>;
  institutionUri: Scalars["String"];
  objectUri: Scalars["String"];
  originalImageUri?: Maybe<Scalars["String"]>;
  maxDimensions?: Maybe<ImageJsonMaxDimensions>;
  uri: Scalars["String"];
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageJsonConnection = {
  __typename?: "ImageJsonConnection";
  totalCount: Scalars["Int"];
  edges: Array<ImageJsonEdge>;
  nodes: Array<ImageJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ImageJsonGroupConnection>;
};

export type ImageJsonConnectionDistinctArgs = {
  field: ImageJsonFieldsEnum;
};

export type ImageJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ImageJsonFieldsEnum;
};

export type ImageJsonEdge = {
  __typename?: "ImageJsonEdge";
  next?: Maybe<ImageJson>;
  node: ImageJson;
  previous?: Maybe<ImageJson>;
};

export type ImageJsonExactDimensions = {
  __typename?: "ImageJsonExactDimensions";
  height: Scalars["Int"];
  width: Scalars["Int"];
};

export type ImageJsonExactDimensionsFilterInput = {
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export enum ImageJsonFieldsEnum {
  exactDimensions___height = "exactDimensions___height",
  exactDimensions___width = "exactDimensions___width",
  institutionUri = "institutionUri",
  objectUri = "objectUri",
  originalImageUri = "originalImageUri",
  maxDimensions___height = "maxDimensions___height",
  maxDimensions___width = "maxDimensions___width",
  uri = "uri",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type ImageJsonFilterInput = {
  exactDimensions?: Maybe<ImageJsonExactDimensionsFilterInput>;
  institutionUri?: Maybe<StringQueryOperatorInput>;
  objectUri?: Maybe<StringQueryOperatorInput>;
  originalImageUri?: Maybe<StringQueryOperatorInput>;
  maxDimensions?: Maybe<ImageJsonMaxDimensionsFilterInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageJsonFilterListInput = {
  elemMatch?: Maybe<ImageJsonFilterInput>;
};

export type ImageJsonGroupConnection = {
  __typename?: "ImageJsonGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ImageJsonEdge>;
  nodes: Array<ImageJson>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ImageJsonMaxDimensions = {
  __typename?: "ImageJsonMaxDimensions";
  height: Scalars["Int"];
  width: Scalars["Int"];
};

export type ImageJsonMaxDimensionsFilterInput = {
  height?: Maybe<IntQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type ImageJsonSortInput = {
  fields?: Maybe<Array<Maybe<ImageJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type InstitutionJson = Node & {
  __typename?: "InstitutionJson";
  name: Scalars["String"];
  uri: Scalars["String"];
  rights?: Maybe<InstitutionJsonRights>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type InstitutionJsonConnection = {
  __typename?: "InstitutionJsonConnection";
  totalCount: Scalars["Int"];
  edges: Array<InstitutionJsonEdge>;
  nodes: Array<InstitutionJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<InstitutionJsonGroupConnection>;
};

export type InstitutionJsonConnectionDistinctArgs = {
  field: InstitutionJsonFieldsEnum;
};

export type InstitutionJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: InstitutionJsonFieldsEnum;
};

export type InstitutionJsonEdge = {
  __typename?: "InstitutionJsonEdge";
  next?: Maybe<InstitutionJson>;
  node: InstitutionJson;
  previous?: Maybe<InstitutionJson>;
};

export enum InstitutionJsonFieldsEnum {
  name = "name",
  uri = "uri",
  rights___holder = "rights___holder",
  rights___statements = "rights___statements",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type InstitutionJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  rights?: Maybe<InstitutionJsonRightsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type InstitutionJsonFilterListInput = {
  elemMatch?: Maybe<InstitutionJsonFilterInput>;
};

export type InstitutionJsonGroupConnection = {
  __typename?: "InstitutionJsonGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<InstitutionJsonEdge>;
  nodes: Array<InstitutionJson>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type InstitutionJsonRights = {
  __typename?: "InstitutionJsonRights";
  holder: Scalars["String"];
  statements: Array<Scalars["String"]>;
};

export type InstitutionJsonRightsFilterInput = {
  holder?: Maybe<StringQueryOperatorInput>;
  statements?: Maybe<StringQueryOperatorInput>;
};

export type InstitutionJsonSortInput = {
  fields?: Maybe<Array<Maybe<InstitutionJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: "Internal";
  content?: Maybe<Scalars["String"]>;
  contentDigest: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ignoreType?: Maybe<Scalars["Boolean"]>;
  mediaType?: Maybe<Scalars["String"]>;
  owner: Scalars["String"];
  type: Scalars["String"];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>;
  ne?: Maybe<Scalars["Int"]>;
  gt?: Maybe<Scalars["Int"]>;
  gte?: Maybe<Scalars["Int"]>;
  lt?: Maybe<Scalars["Int"]>;
  lte?: Maybe<Scalars["Int"]>;
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type ObjectJson = Node & {
  __typename?: "ObjectJson";
  collectionUris: Array<Scalars["String"]>;
  institutionUri: Scalars["String"];
  properties?: Maybe<Array<ObjectJsonProperties>>;
  rights?: Maybe<ObjectJsonRights>;
  title: Scalars["String"];
  uri: Scalars["String"];
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ObjectJsonConnection = {
  __typename?: "ObjectJsonConnection";
  totalCount: Scalars["Int"];
  edges: Array<ObjectJsonEdge>;
  nodes: Array<ObjectJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<ObjectJsonGroupConnection>;
};

export type ObjectJsonConnectionDistinctArgs = {
  field: ObjectJsonFieldsEnum;
};

export type ObjectJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: ObjectJsonFieldsEnum;
};

export type ObjectJsonEdge = {
  __typename?: "ObjectJsonEdge";
  next?: Maybe<ObjectJson>;
  node: ObjectJson;
  previous?: Maybe<ObjectJson>;
};

export enum ObjectJsonFieldsEnum {
  collectionUris = "collectionUris",
  institutionUri = "institutionUri",
  properties = "properties",
  properties___key = "properties___key",
  properties___value = "properties___value",
  rights___holder = "rights___holder",
  rights___statements = "rights___statements",
  title = "title",
  uri = "uri",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type ObjectJsonFilterInput = {
  collectionUris?: Maybe<StringQueryOperatorInput>;
  institutionUri?: Maybe<StringQueryOperatorInput>;
  properties?: Maybe<ObjectJsonPropertiesFilterListInput>;
  rights?: Maybe<ObjectJsonRightsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ObjectJsonFilterListInput = {
  elemMatch?: Maybe<ObjectJsonFilterInput>;
};

export type ObjectJsonGroupConnection = {
  __typename?: "ObjectJsonGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<ObjectJsonEdge>;
  nodes: Array<ObjectJson>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type ObjectJsonProperties = {
  __typename?: "ObjectJsonProperties";
  key: Scalars["String"];
  value: Scalars["String"];
};

export type ObjectJsonPropertiesFilterInput = {
  key?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ObjectJsonPropertiesFilterListInput = {
  elemMatch?: Maybe<ObjectJsonPropertiesFilterInput>;
};

export type ObjectJsonRights = {
  __typename?: "ObjectJsonRights";
  holder: Scalars["String"];
  statements: Array<Scalars["String"]>;
};

export type ObjectJsonRightsFilterInput = {
  holder?: Maybe<StringQueryOperatorInput>;
  statements?: Maybe<StringQueryOperatorInput>;
};

export type ObjectJsonSortInput = {
  fields?: Maybe<Array<Maybe<ObjectJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PageInfo = {
  __typename?: "PageInfo";
  currentPage: Scalars["Int"];
  hasPreviousPage: Scalars["Boolean"];
  hasNextPage: Scalars["Boolean"];
  itemCount: Scalars["Int"];
  pageCount: Scalars["Int"];
  perPage?: Maybe<Scalars["Int"]>;
  totalCount: Scalars["Int"];
};

export type PropertyDefinitionJson = Node & {
  __typename?: "PropertyDefinitionJson";
  key: Scalars["String"];
  labelPlural: Scalars["String"];
  labelSingular: Scalars["String"];
  uri: Scalars["String"];
  faceted?: Maybe<Scalars["Boolean"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PropertyDefinitionJsonConnection = {
  __typename?: "PropertyDefinitionJsonConnection";
  totalCount: Scalars["Int"];
  edges: Array<PropertyDefinitionJsonEdge>;
  nodes: Array<PropertyDefinitionJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<PropertyDefinitionJsonGroupConnection>;
};

export type PropertyDefinitionJsonConnectionDistinctArgs = {
  field: PropertyDefinitionJsonFieldsEnum;
};

export type PropertyDefinitionJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: PropertyDefinitionJsonFieldsEnum;
};

export type PropertyDefinitionJsonEdge = {
  __typename?: "PropertyDefinitionJsonEdge";
  next?: Maybe<PropertyDefinitionJson>;
  node: PropertyDefinitionJson;
  previous?: Maybe<PropertyDefinitionJson>;
};

export enum PropertyDefinitionJsonFieldsEnum {
  key = "key",
  labelPlural = "labelPlural",
  labelSingular = "labelSingular",
  uri = "uri",
  faceted = "faceted",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type PropertyDefinitionJsonFilterInput = {
  key?: Maybe<StringQueryOperatorInput>;
  labelPlural?: Maybe<StringQueryOperatorInput>;
  labelSingular?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  faceted?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PropertyDefinitionJsonFilterListInput = {
  elemMatch?: Maybe<PropertyDefinitionJsonFilterInput>;
};

export type PropertyDefinitionJsonGroupConnection = {
  __typename?: "PropertyDefinitionJsonGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<PropertyDefinitionJsonEdge>;
  nodes: Array<PropertyDefinitionJson>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type PropertyDefinitionJsonSortInput = {
  fields?: Maybe<Array<Maybe<PropertyDefinitionJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Query = {
  __typename?: "Query";
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  collectionJson?: Maybe<CollectionJson>;
  allCollectionJson: CollectionJsonConnection;
  imageJson?: Maybe<ImageJson>;
  allImageJson: ImageJsonConnection;
  institutionJson?: Maybe<InstitutionJson>;
  allInstitutionJson: InstitutionJsonConnection;
  objectJson?: Maybe<ObjectJson>;
  allObjectJson: ObjectJsonConnection;
  propertyDefinitionJson?: Maybe<PropertyDefinitionJson>;
  allPropertyDefinitionJson: PropertyDefinitionJsonConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childrenCollectionJson?: Maybe<CollectionJsonFilterListInput>;
  childrenInstitutionJson?: Maybe<InstitutionJsonFilterListInput>;
  childrenObjectJson?: Maybe<ObjectJsonFilterListInput>;
  childrenImageJson?: Maybe<ImageJsonFilterListInput>;
  childrenPropertyDefinitionJson?: Maybe<PropertyDefinitionJsonFilterListInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryCollectionJsonArgs = {
  institutionUri?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  rights?: Maybe<CollectionJsonRightsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllCollectionJsonArgs = {
  filter?: Maybe<CollectionJsonFilterInput>;
  sort?: Maybe<CollectionJsonSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryImageJsonArgs = {
  exactDimensions?: Maybe<ImageJsonExactDimensionsFilterInput>;
  institutionUri?: Maybe<StringQueryOperatorInput>;
  objectUri?: Maybe<StringQueryOperatorInput>;
  originalImageUri?: Maybe<StringQueryOperatorInput>;
  maxDimensions?: Maybe<ImageJsonMaxDimensionsFilterInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageJsonArgs = {
  filter?: Maybe<ImageJsonFilterInput>;
  sort?: Maybe<ImageJsonSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryInstitutionJsonArgs = {
  name?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  rights?: Maybe<InstitutionJsonRightsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllInstitutionJsonArgs = {
  filter?: Maybe<InstitutionJsonFilterInput>;
  sort?: Maybe<InstitutionJsonSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryObjectJsonArgs = {
  collectionUris?: Maybe<StringQueryOperatorInput>;
  institutionUri?: Maybe<StringQueryOperatorInput>;
  properties?: Maybe<ObjectJsonPropertiesFilterListInput>;
  rights?: Maybe<ObjectJsonRightsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllObjectJsonArgs = {
  filter?: Maybe<ObjectJsonFilterInput>;
  sort?: Maybe<ObjectJsonSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QueryPropertyDefinitionJsonArgs = {
  key?: Maybe<StringQueryOperatorInput>;
  labelPlural?: Maybe<StringQueryOperatorInput>;
  labelSingular?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
  faceted?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPropertyDefinitionJsonArgs = {
  filter?: Maybe<PropertyDefinitionJsonFilterInput>;
  sort?: Maybe<PropertyDefinitionJsonSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
};

export type Site = Node & {
  __typename?: "Site";
  buildTime?: Maybe<Scalars["Date"]>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars["Int"]>;
  host?: Maybe<Scalars["String"]>;
  polyfill?: Maybe<Scalars["Boolean"]>;
  pathPrefix?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars["Date"]>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>;
  fromNow?: Maybe<Scalars["Boolean"]>;
  difference?: Maybe<Scalars["String"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge";
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  buildTime = "buildTime",
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: "SiteConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: "SiteEdge";
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = "buildTime",
  siteMetadata___author___name = "siteMetadata___author___name",
  siteMetadata___author___url = "siteMetadata___author___url",
  siteMetadata___author___email = "siteMetadata___author___email",
  siteMetadata___description = "siteMetadata___description",
  siteMetadata___gitHubUrl = "siteMetadata___gitHubUrl",
  siteMetadata___keywords = "siteMetadata___keywords",
  siteMetadata___title = "siteMetadata___title",
  port = "port",
  host = "host",
  polyfill = "polyfill",
  pathPrefix = "pathPrefix",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePage = Node & {
  __typename?: "SitePage";
  path: Scalars["String"];
  component: Scalars["String"];
  internalComponentName: Scalars["String"];
  componentChunkName: Scalars["String"];
  matchPath?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars["String"]>;
  componentPath?: Maybe<Scalars["String"]>;
};

export type SitePageConnection = {
  __typename?: "SitePageConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: "SitePageContext";
  institution?: Maybe<SitePageContextInstitution>;
  institutionUri?: Maybe<Scalars["String"]>;
  collection?: Maybe<SitePageContextCollection>;
  collectionUri?: Maybe<Scalars["String"]>;
  object?: Maybe<SitePageContextObject>;
  objectUri?: Maybe<Scalars["String"]>;
};

export type SitePageContextCollection = {
  __typename?: "SitePageContextCollection";
  institutionUri?: Maybe<Scalars["String"]>;
  rights?: Maybe<SitePageContextCollectionRights>;
  title?: Maybe<Scalars["String"]>;
  uri?: Maybe<Scalars["String"]>;
};

export type SitePageContextCollectionFilterInput = {
  institutionUri?: Maybe<StringQueryOperatorInput>;
  rights?: Maybe<SitePageContextCollectionRightsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextCollectionRights = {
  __typename?: "SitePageContextCollectionRights";
  holder?: Maybe<Scalars["String"]>;
  statements?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePageContextCollectionRightsFilterInput = {
  holder?: Maybe<StringQueryOperatorInput>;
  statements?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextFilterInput = {
  institution?: Maybe<SitePageContextInstitutionFilterInput>;
  institutionUri?: Maybe<StringQueryOperatorInput>;
  collection?: Maybe<SitePageContextCollectionFilterInput>;
  collectionUri?: Maybe<StringQueryOperatorInput>;
  object?: Maybe<SitePageContextObjectFilterInput>;
  objectUri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextInstitution = {
  __typename?: "SitePageContextInstitution";
  name?: Maybe<Scalars["String"]>;
  rights?: Maybe<SitePageContextInstitutionRights>;
  uri?: Maybe<Scalars["String"]>;
};

export type SitePageContextInstitutionFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  rights?: Maybe<SitePageContextInstitutionRightsFilterInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextInstitutionRights = {
  __typename?: "SitePageContextInstitutionRights";
  holder?: Maybe<Scalars["String"]>;
  statements?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePageContextInstitutionRightsFilterInput = {
  holder?: Maybe<StringQueryOperatorInput>;
  statements?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextObject = {
  __typename?: "SitePageContextObject";
  collectionUris?: Maybe<Array<Maybe<Scalars["String"]>>>;
  institutionUri?: Maybe<Scalars["String"]>;
  rights?: Maybe<SitePageContextObjectRights>;
  properties?: Maybe<Array<Maybe<SitePageContextObjectProperties>>>;
  title?: Maybe<Scalars["String"]>;
  uri?: Maybe<Scalars["String"]>;
};

export type SitePageContextObjectFilterInput = {
  collectionUris?: Maybe<StringQueryOperatorInput>;
  institutionUri?: Maybe<StringQueryOperatorInput>;
  rights?: Maybe<SitePageContextObjectRightsFilterInput>;
  properties?: Maybe<SitePageContextObjectPropertiesFilterListInput>;
  title?: Maybe<StringQueryOperatorInput>;
  uri?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextObjectProperties = {
  __typename?: "SitePageContextObjectProperties";
  key?: Maybe<Scalars["String"]>;
  value?: Maybe<Scalars["String"]>;
};

export type SitePageContextObjectPropertiesFilterInput = {
  key?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextObjectPropertiesFilterListInput = {
  elemMatch?: Maybe<SitePageContextObjectPropertiesFilterInput>;
};

export type SitePageContextObjectRights = {
  __typename?: "SitePageContextObjectRights";
  holder?: Maybe<Scalars["String"]>;
  statements?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePageContextObjectRightsFilterInput = {
  holder?: Maybe<StringQueryOperatorInput>;
  statements?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: "SitePageEdge";
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = "path",
  component = "component",
  internalComponentName = "internalComponentName",
  componentChunkName = "componentChunkName",
  matchPath = "matchPath",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  isCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  context___institution___name = "context___institution___name",
  context___institution___rights___holder = "context___institution___rights___holder",
  context___institution___rights___statements = "context___institution___rights___statements",
  context___institution___uri = "context___institution___uri",
  context___institutionUri = "context___institutionUri",
  context___collection___institutionUri = "context___collection___institutionUri",
  context___collection___rights___holder = "context___collection___rights___holder",
  context___collection___rights___statements = "context___collection___rights___statements",
  context___collection___title = "context___collection___title",
  context___collection___uri = "context___collection___uri",
  context___collectionUri = "context___collectionUri",
  context___object___collectionUris = "context___object___collectionUris",
  context___object___institutionUri = "context___object___institutionUri",
  context___object___rights___holder = "context___object___rights___holder",
  context___object___rights___statements = "context___object___rights___statements",
  context___object___properties = "context___object___properties",
  context___object___properties___key = "context___object___properties___key",
  context___object___properties___value = "context___object___properties___value",
  context___object___title = "context___object___title",
  context___object___uri = "context___object___uri",
  context___objectUri = "context___objectUri",
  pluginCreator___id = "pluginCreator___id",
  pluginCreator___parent___id = "pluginCreator___parent___id",
  pluginCreator___parent___parent___id = "pluginCreator___parent___parent___id",
  pluginCreator___parent___parent___children = "pluginCreator___parent___parent___children",
  pluginCreator___parent___children = "pluginCreator___parent___children",
  pluginCreator___parent___children___id = "pluginCreator___parent___children___id",
  pluginCreator___parent___children___children = "pluginCreator___parent___children___children",
  pluginCreator___parent___internal___content = "pluginCreator___parent___internal___content",
  pluginCreator___parent___internal___contentDigest = "pluginCreator___parent___internal___contentDigest",
  pluginCreator___parent___internal___description = "pluginCreator___parent___internal___description",
  pluginCreator___parent___internal___fieldOwners = "pluginCreator___parent___internal___fieldOwners",
  pluginCreator___parent___internal___ignoreType = "pluginCreator___parent___internal___ignoreType",
  pluginCreator___parent___internal___mediaType = "pluginCreator___parent___internal___mediaType",
  pluginCreator___parent___internal___owner = "pluginCreator___parent___internal___owner",
  pluginCreator___parent___internal___type = "pluginCreator___parent___internal___type",
  pluginCreator___children = "pluginCreator___children",
  pluginCreator___children___id = "pluginCreator___children___id",
  pluginCreator___children___parent___id = "pluginCreator___children___parent___id",
  pluginCreator___children___parent___children = "pluginCreator___children___parent___children",
  pluginCreator___children___children = "pluginCreator___children___children",
  pluginCreator___children___children___id = "pluginCreator___children___children___id",
  pluginCreator___children___children___children = "pluginCreator___children___children___children",
  pluginCreator___children___internal___content = "pluginCreator___children___internal___content",
  pluginCreator___children___internal___contentDigest = "pluginCreator___children___internal___contentDigest",
  pluginCreator___children___internal___description = "pluginCreator___children___internal___description",
  pluginCreator___children___internal___fieldOwners = "pluginCreator___children___internal___fieldOwners",
  pluginCreator___children___internal___ignoreType = "pluginCreator___children___internal___ignoreType",
  pluginCreator___children___internal___mediaType = "pluginCreator___children___internal___mediaType",
  pluginCreator___children___internal___owner = "pluginCreator___children___internal___owner",
  pluginCreator___children___internal___type = "pluginCreator___children___internal___type",
  pluginCreator___internal___content = "pluginCreator___internal___content",
  pluginCreator___internal___contentDigest = "pluginCreator___internal___contentDigest",
  pluginCreator___internal___description = "pluginCreator___internal___description",
  pluginCreator___internal___fieldOwners = "pluginCreator___internal___fieldOwners",
  pluginCreator___internal___ignoreType = "pluginCreator___internal___ignoreType",
  pluginCreator___internal___mediaType = "pluginCreator___internal___mediaType",
  pluginCreator___internal___owner = "pluginCreator___internal___owner",
  pluginCreator___internal___type = "pluginCreator___internal___type",
  pluginCreator___resolve = "pluginCreator___resolve",
  pluginCreator___name = "pluginCreator___name",
  pluginCreator___version = "pluginCreator___version",
  pluginCreator___pluginOptions___fonts = "pluginCreator___pluginOptions___fonts",
  pluginCreator___pluginOptions___fonts___family = "pluginCreator___pluginOptions___fonts___family",
  pluginCreator___pluginOptions___fonts___variants = "pluginCreator___pluginOptions___fonts___variants",
  pluginCreator___pluginOptions___codegen = "pluginCreator___pluginOptions___codegen",
  pluginCreator___pluginOptions___name = "pluginCreator___pluginOptions___name",
  pluginCreator___pluginOptions___path = "pluginCreator___pluginOptions___path",
  pluginCreator___pluginOptions___projectRoot = "pluginCreator___pluginOptions___projectRoot",
  pluginCreator___pluginOptions___configDir = "pluginCreator___pluginOptions___configDir",
  pluginCreator___pluginOptions___pathCheck = "pluginCreator___pluginOptions___pathCheck",
  pluginCreator___nodeAPIs = "pluginCreator___nodeAPIs",
  pluginCreator___browserAPIs = "pluginCreator___browserAPIs",
  pluginCreator___ssrAPIs = "pluginCreator___ssrAPIs",
  pluginCreator___pluginFilepath = "pluginCreator___pluginFilepath",
  pluginCreator___packageJson___name = "pluginCreator___packageJson___name",
  pluginCreator___packageJson___description = "pluginCreator___packageJson___description",
  pluginCreator___packageJson___version = "pluginCreator___packageJson___version",
  pluginCreator___packageJson___main = "pluginCreator___packageJson___main",
  pluginCreator___packageJson___license = "pluginCreator___packageJson___license",
  pluginCreator___packageJson___dependencies = "pluginCreator___packageJson___dependencies",
  pluginCreator___packageJson___dependencies___name = "pluginCreator___packageJson___dependencies___name",
  pluginCreator___packageJson___dependencies___version = "pluginCreator___packageJson___dependencies___version",
  pluginCreator___packageJson___devDependencies = "pluginCreator___packageJson___devDependencies",
  pluginCreator___packageJson___devDependencies___name = "pluginCreator___packageJson___devDependencies___name",
  pluginCreator___packageJson___devDependencies___version = "pluginCreator___packageJson___devDependencies___version",
  pluginCreator___packageJson___peerDependencies = "pluginCreator___packageJson___peerDependencies",
  pluginCreator___packageJson___peerDependencies___name = "pluginCreator___packageJson___peerDependencies___name",
  pluginCreator___packageJson___peerDependencies___version = "pluginCreator___packageJson___peerDependencies___version",
  pluginCreator___packageJson___keywords = "pluginCreator___packageJson___keywords",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: "SitePlugin";
  id: Scalars["ID"];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>;
  pluginFilepath?: Maybe<Scalars["String"]>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: "SitePluginConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars["String"]>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: "SitePluginEdge";
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  resolve = "resolve",
  name = "name",
  version = "version",
  pluginOptions___fonts = "pluginOptions___fonts",
  pluginOptions___fonts___family = "pluginOptions___fonts___family",
  pluginOptions___fonts___variants = "pluginOptions___fonts___variants",
  pluginOptions___codegen = "pluginOptions___codegen",
  pluginOptions___name = "pluginOptions___name",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___projectRoot = "pluginOptions___projectRoot",
  pluginOptions___configDir = "pluginOptions___configDir",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  nodeAPIs = "nodeAPIs",
  browserAPIs = "browserAPIs",
  ssrAPIs = "ssrAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___dependencies___name = "packageJson___dependencies___name",
  packageJson___dependencies___version = "packageJson___dependencies___version",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___devDependencies___name = "packageJson___devDependencies___name",
  packageJson___devDependencies___version = "packageJson___devDependencies___version",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___peerDependencies___name = "packageJson___peerDependencies___name",
  packageJson___peerDependencies___version = "packageJson___peerDependencies___version",
  packageJson___keywords = "packageJson___keywords",
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection";
  totalCount: Scalars["Int"];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars["String"];
  fieldValue?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson";
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
  main?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<
    SitePluginPackageJsonPeerDependenciesFilterListInput
  >;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies";
  name?: Maybe<Scalars["String"]>;
  version?: Maybe<Scalars["String"]>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions";
  fonts?: Maybe<Array<Maybe<SitePluginPluginOptionsFonts>>>;
  codegen?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  path?: Maybe<Scalars["String"]>;
  projectRoot?: Maybe<Scalars["String"]>;
  configDir?: Maybe<Scalars["String"]>;
  pathCheck?: Maybe<Scalars["Boolean"]>;
};

export type SitePluginPluginOptionsFilterInput = {
  fonts?: Maybe<SitePluginPluginOptionsFontsFilterListInput>;
  codegen?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  projectRoot?: Maybe<StringQueryOperatorInput>;
  configDir?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsFonts = {
  __typename?: "SitePluginPluginOptionsFonts";
  family?: Maybe<Scalars["String"]>;
  variants?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type SitePluginPluginOptionsFontsFilterInput = {
  family?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFontsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFontsFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata";
  author: SiteSiteMetadataAuthor;
  description: Scalars["String"];
  gitHubUrl: Scalars["String"];
  keywords: Scalars["String"];
  title: Scalars["String"];
};

export type SiteSiteMetadataAuthor = {
  __typename?: "SiteSiteMetadataAuthor";
  name: Scalars["String"];
  url: Scalars["String"];
  email: Scalars["String"];
};

export type SiteSiteMetadataAuthorFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFilterInput = {
  author?: Maybe<SiteSiteMetadataAuthorFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  gitHubUrl?: Maybe<StringQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>;
  ne?: Maybe<Scalars["String"]>;
  in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>;
  regex?: Maybe<Scalars["String"]>;
  glob?: Maybe<Scalars["String"]>;
};

export type FooterQueryVariables = Exact<{[key: string]: never}>;

export type FooterQuery = {__typename?: "Query"} & {
  site?: Maybe<
    {__typename?: "Site"} & {
      siteMetadata?: Maybe<
        {__typename?: "SiteSiteMetadata"} & Pick<
          SiteSiteMetadata,
          "gitHubUrl"
        > & {
            author: {__typename?: "SiteSiteMetadataAuthor"} & Pick<
              SiteSiteMetadataAuthor,
              "email" | "name" | "url"
            >;
          }
      >;
    }
  >;
};

export type LayoutQueryVariables = Exact<{[key: string]: never}>;

export type LayoutQuery = {__typename?: "Query"} & {
  site?: Maybe<
    {__typename?: "Site"} & {
      siteMetadata?: Maybe<
        {__typename?: "SiteSiteMetadata"} & Pick<
          SiteSiteMetadata,
          "description" | "keywords" | "title"
        >
      >;
    }
  >;
};

export type ImageFragmentFragment = {__typename?: "ImageJson"} & Pick<
  ImageJson,
  "institutionUri" | "objectUri" | "originalImageUri" | "uri"
> & {
    exactDimensions?: Maybe<
      {__typename?: "ImageJsonExactDimensions"} & Pick<
        ImageJsonExactDimensions,
        "height" | "width"
      >
    >;
    maxDimensions?: Maybe<
      {__typename?: "ImageJsonMaxDimensions"} & Pick<
        ImageJsonMaxDimensions,
        "height" | "width"
      >
    >;
  };

export type ObjectFragmentFragment = {__typename?: "ObjectJson"} & Pick<
  ObjectJson,
  "collectionUris" | "institutionUri" | "title" | "uri"
> & {
    properties?: Maybe<
      Array<
        {__typename?: "ObjectJsonProperties"} & Pick<
          ObjectJsonProperties,
          "key" | "value"
        >
      >
    >;
    rights?: Maybe<
      {__typename?: "ObjectJsonRights"} & Pick<
        ObjectJsonRights,
        "holder" | "statements"
      >
    >;
  };

export type PropertyDefinitionFragmentFragment = {
  __typename?: "PropertyDefinitionJson";
} & Pick<
  PropertyDefinitionJson,
  "faceted" | "key" | "labelPlural" | "labelSingular"
>;

export type IndexPageQueryVariables = Exact<{[key: string]: never}>;

export type IndexPageQuery = {__typename?: "Query"} & {
  allInstitutionJson: {__typename?: "InstitutionJsonConnection"} & {
    nodes: Array<
      {__typename?: "InstitutionJson"} & Pick<InstitutionJson, "name" | "uri">
    >;
  };
};

export type CollectionPageQueryVariables = Exact<{
  collectionUri: Scalars["String"];
  institutionUri: Scalars["String"];
}>;

export type CollectionPageQuery = {__typename?: "Query"} & {
  allImageJson: {__typename?: "ImageJsonConnection"} & {
    nodes: Array<{__typename?: "ImageJson"} & ImageFragmentFragment>;
  };
  allPropertyDefinitionJson: {
    __typename?: "PropertyDefinitionJsonConnection";
  } & {
    nodes: Array<
      {
        __typename?: "PropertyDefinitionJson";
      } & PropertyDefinitionFragmentFragment
    >;
  };
  allObjectJson: {__typename?: "ObjectJsonConnection"} & {
    nodes: Array<{__typename?: "ObjectJson"} & ObjectFragmentFragment>;
  };
};

export type InstitutionPageQueryVariables = Exact<{
  institutionUri: Scalars["String"];
}>;

export type InstitutionPageQuery = {__typename?: "Query"} & {
  allCollectionJson: {__typename?: "CollectionJsonConnection"} & {
    nodes: Array<
      {__typename?: "CollectionJson"} & Pick<CollectionJson, "title" | "uri">
    >;
  };
};

export type ObjectPageQueryVariables = Exact<{
  objectUri: Scalars["String"];
}>;

export type ObjectPageQuery = {__typename?: "Query"} & {
  allImageJson: {__typename?: "ImageJsonConnection"} & {
    nodes: Array<{__typename?: "ImageJson"} & ImageFragmentFragment>;
  };
  allPropertyDefinitionJson: {
    __typename?: "PropertyDefinitionJsonConnection";
  } & {
    nodes: Array<
      {
        __typename?: "PropertyDefinitionJson";
      } & PropertyDefinitionFragmentFragment
    >;
  };
};
