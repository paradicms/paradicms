/* eslint-disable */

declare namespace GatsbyTypes {
  type Maybe<T> = T | undefined;
  type Exact<T extends {[key: string]: any}> = {[K in keyof T]: T[K]};
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: string;
    JSON: never;
  };

  type BooleanQueryOperatorInput = {
    readonly eq: Maybe<Scalars["Boolean"]>;
    readonly ne: Maybe<Scalars["Boolean"]>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars["Boolean"]>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["Boolean"]>>>;
  };

  type CollectionJson = Node & {
    readonly institution_uri: Scalars["String"];
    readonly title: Scalars["String"];
    readonly uri: Scalars["String"];
    readonly rights: Maybe<CollectionJsonRights>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type CollectionJsonConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<CollectionJsonEdge>;
    readonly nodes: ReadonlyArray<CollectionJson>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly group: ReadonlyArray<CollectionJsonGroupConnection>;
  };

  type CollectionJsonConnection_distinctArgs = {
    field: CollectionJsonFieldsEnum;
  };

  type CollectionJsonConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: CollectionJsonFieldsEnum;
  };

  type CollectionJsonEdge = {
    readonly next: Maybe<CollectionJson>;
    readonly node: CollectionJson;
    readonly previous: Maybe<CollectionJson>;
  };

  enum CollectionJsonFieldsEnum {
    institution_uri = "institution_uri",
    title = "title",
    uri = "uri",
    rights___holder = "rights.holder",
    rights___statements = "rights.statements",
    id = "id",
    parent___id = "parent.id",
    parent___parent___id = "parent.parent.id",
    parent___parent___parent___id = "parent.parent.parent.id",
    parent___parent___parent___children = "parent.parent.parent.children",
    parent___parent___children = "parent.parent.children",
    parent___parent___children___id = "parent.parent.children.id",
    parent___parent___children___children = "parent.parent.children.children",
    parent___parent___internal___content = "parent.parent.internal.content",
    parent___parent___internal___contentDigest = "parent.parent.internal.contentDigest",
    parent___parent___internal___description = "parent.parent.internal.description",
    parent___parent___internal___fieldOwners = "parent.parent.internal.fieldOwners",
    parent___parent___internal___ignoreType = "parent.parent.internal.ignoreType",
    parent___parent___internal___mediaType = "parent.parent.internal.mediaType",
    parent___parent___internal___owner = "parent.parent.internal.owner",
    parent___parent___internal___type = "parent.parent.internal.type",
    parent___children = "parent.children",
    parent___children___id = "parent.children.id",
    parent___children___parent___id = "parent.children.parent.id",
    parent___children___parent___children = "parent.children.parent.children",
    parent___children___children = "parent.children.children",
    parent___children___children___id = "parent.children.children.id",
    parent___children___children___children = "parent.children.children.children",
    parent___children___internal___content = "parent.children.internal.content",
    parent___children___internal___contentDigest = "parent.children.internal.contentDigest",
    parent___children___internal___description = "parent.children.internal.description",
    parent___children___internal___fieldOwners = "parent.children.internal.fieldOwners",
    parent___children___internal___ignoreType = "parent.children.internal.ignoreType",
    parent___children___internal___mediaType = "parent.children.internal.mediaType",
    parent___children___internal___owner = "parent.children.internal.owner",
    parent___children___internal___type = "parent.children.internal.type",
    parent___internal___content = "parent.internal.content",
    parent___internal___contentDigest = "parent.internal.contentDigest",
    parent___internal___description = "parent.internal.description",
    parent___internal___fieldOwners = "parent.internal.fieldOwners",
    parent___internal___ignoreType = "parent.internal.ignoreType",
    parent___internal___mediaType = "parent.internal.mediaType",
    parent___internal___owner = "parent.internal.owner",
    parent___internal___type = "parent.internal.type",
    children = "children",
    children___id = "children.id",
    children___parent___id = "children.parent.id",
    children___parent___parent___id = "children.parent.parent.id",
    children___parent___parent___children = "children.parent.parent.children",
    children___parent___children = "children.parent.children",
    children___parent___children___id = "children.parent.children.id",
    children___parent___children___children = "children.parent.children.children",
    children___parent___internal___content = "children.parent.internal.content",
    children___parent___internal___contentDigest = "children.parent.internal.contentDigest",
    children___parent___internal___description = "children.parent.internal.description",
    children___parent___internal___fieldOwners = "children.parent.internal.fieldOwners",
    children___parent___internal___ignoreType = "children.parent.internal.ignoreType",
    children___parent___internal___mediaType = "children.parent.internal.mediaType",
    children___parent___internal___owner = "children.parent.internal.owner",
    children___parent___internal___type = "children.parent.internal.type",
    children___children = "children.children",
    children___children___id = "children.children.id",
    children___children___parent___id = "children.children.parent.id",
    children___children___parent___children = "children.children.parent.children",
    children___children___children = "children.children.children",
    children___children___children___id = "children.children.children.id",
    children___children___children___children = "children.children.children.children",
    children___children___internal___content = "children.children.internal.content",
    children___children___internal___contentDigest = "children.children.internal.contentDigest",
    children___children___internal___description = "children.children.internal.description",
    children___children___internal___fieldOwners = "children.children.internal.fieldOwners",
    children___children___internal___ignoreType = "children.children.internal.ignoreType",
    children___children___internal___mediaType = "children.children.internal.mediaType",
    children___children___internal___owner = "children.children.internal.owner",
    children___children___internal___type = "children.children.internal.type",
    children___internal___content = "children.internal.content",
    children___internal___contentDigest = "children.internal.contentDigest",
    children___internal___description = "children.internal.description",
    children___internal___fieldOwners = "children.internal.fieldOwners",
    children___internal___ignoreType = "children.internal.ignoreType",
    children___internal___mediaType = "children.internal.mediaType",
    children___internal___owner = "children.internal.owner",
    children___internal___type = "children.internal.type",
    internal___content = "internal.content",
    internal___contentDigest = "internal.contentDigest",
    internal___description = "internal.description",
    internal___fieldOwners = "internal.fieldOwners",
    internal___ignoreType = "internal.ignoreType",
    internal___mediaType = "internal.mediaType",
    internal___owner = "internal.owner",
    internal___type = "internal.type",
  }

  type CollectionJsonFilterInput = {
    readonly institution_uri: Maybe<StringQueryOperatorInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly uri: Maybe<StringQueryOperatorInput>;
    readonly rights: Maybe<CollectionJsonRightsFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type CollectionJsonGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<CollectionJsonEdge>;
    readonly nodes: ReadonlyArray<CollectionJson>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type CollectionJsonRights = {
    readonly holder: Scalars["String"];
    readonly statements: ReadonlyArray<Scalars["String"]>;
  };

  type CollectionJsonRightsFilterInput = {
    readonly holder: Maybe<StringQueryOperatorInput>;
    readonly statements: Maybe<StringQueryOperatorInput>;
  };

  type CollectionJsonSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<CollectionJsonFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type DateQueryOperatorInput = {
    readonly eq: Maybe<Scalars["Date"]>;
    readonly ne: Maybe<Scalars["Date"]>;
    readonly gt: Maybe<Scalars["Date"]>;
    readonly gte: Maybe<Scalars["Date"]>;
    readonly lt: Maybe<Scalars["Date"]>;
    readonly lte: Maybe<Scalars["Date"]>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars["Date"]>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["Date"]>>>;
  };

  type Directory = Node & {
    readonly sourceInstanceName: Scalars["String"];
    readonly absolutePath: Scalars["String"];
    readonly relativePath: Scalars["String"];
    readonly extension: Scalars["String"];
    readonly size: Scalars["Int"];
    readonly prettySize: Scalars["String"];
    readonly modifiedTime: Scalars["Date"];
    readonly accessTime: Scalars["Date"];
    readonly changeTime: Scalars["Date"];
    readonly birthTime: Scalars["Date"];
    readonly root: Scalars["String"];
    readonly dir: Scalars["String"];
    readonly base: Scalars["String"];
    readonly ext: Scalars["String"];
    readonly name: Scalars["String"];
    readonly relativeDirectory: Scalars["String"];
    readonly dev: Scalars["Int"];
    readonly mode: Scalars["Int"];
    readonly nlink: Scalars["Int"];
    readonly uid: Scalars["Int"];
    readonly gid: Scalars["Int"];
    readonly rdev: Scalars["Int"];
    readonly ino: Scalars["Float"];
    readonly atimeMs: Scalars["Float"];
    readonly mtimeMs: Scalars["Float"];
    readonly ctimeMs: Scalars["Float"];
    readonly atime: Scalars["Date"];
    readonly mtime: Scalars["Date"];
    readonly ctime: Scalars["Date"];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars["Date"]>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars["Float"]>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Directory_modifiedTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Directory_accessTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Directory_changeTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Directory_birthTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Directory_atimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Directory_mtimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type Directory_ctimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type DirectoryConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly group: ReadonlyArray<DirectoryGroupConnection>;
  };

  type DirectoryConnection_distinctArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: DirectoryFieldsEnum;
  };

  type DirectoryEdge = {
    readonly next: Maybe<Directory>;
    readonly node: Directory;
    readonly previous: Maybe<Directory>;
  };

  enum DirectoryFieldsEnum {
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
    parent___id = "parent.id",
    parent___parent___id = "parent.parent.id",
    parent___parent___parent___id = "parent.parent.parent.id",
    parent___parent___parent___children = "parent.parent.parent.children",
    parent___parent___children = "parent.parent.children",
    parent___parent___children___id = "parent.parent.children.id",
    parent___parent___children___children = "parent.parent.children.children",
    parent___parent___internal___content = "parent.parent.internal.content",
    parent___parent___internal___contentDigest = "parent.parent.internal.contentDigest",
    parent___parent___internal___description = "parent.parent.internal.description",
    parent___parent___internal___fieldOwners = "parent.parent.internal.fieldOwners",
    parent___parent___internal___ignoreType = "parent.parent.internal.ignoreType",
    parent___parent___internal___mediaType = "parent.parent.internal.mediaType",
    parent___parent___internal___owner = "parent.parent.internal.owner",
    parent___parent___internal___type = "parent.parent.internal.type",
    parent___children = "parent.children",
    parent___children___id = "parent.children.id",
    parent___children___parent___id = "parent.children.parent.id",
    parent___children___parent___children = "parent.children.parent.children",
    parent___children___children = "parent.children.children",
    parent___children___children___id = "parent.children.children.id",
    parent___children___children___children = "parent.children.children.children",
    parent___children___internal___content = "parent.children.internal.content",
    parent___children___internal___contentDigest = "parent.children.internal.contentDigest",
    parent___children___internal___description = "parent.children.internal.description",
    parent___children___internal___fieldOwners = "parent.children.internal.fieldOwners",
    parent___children___internal___ignoreType = "parent.children.internal.ignoreType",
    parent___children___internal___mediaType = "parent.children.internal.mediaType",
    parent___children___internal___owner = "parent.children.internal.owner",
    parent___children___internal___type = "parent.children.internal.type",
    parent___internal___content = "parent.internal.content",
    parent___internal___contentDigest = "parent.internal.contentDigest",
    parent___internal___description = "parent.internal.description",
    parent___internal___fieldOwners = "parent.internal.fieldOwners",
    parent___internal___ignoreType = "parent.internal.ignoreType",
    parent___internal___mediaType = "parent.internal.mediaType",
    parent___internal___owner = "parent.internal.owner",
    parent___internal___type = "parent.internal.type",
    children = "children",
    children___id = "children.id",
    children___parent___id = "children.parent.id",
    children___parent___parent___id = "children.parent.parent.id",
    children___parent___parent___children = "children.parent.parent.children",
    children___parent___children = "children.parent.children",
    children___parent___children___id = "children.parent.children.id",
    children___parent___children___children = "children.parent.children.children",
    children___parent___internal___content = "children.parent.internal.content",
    children___parent___internal___contentDigest = "children.parent.internal.contentDigest",
    children___parent___internal___description = "children.parent.internal.description",
    children___parent___internal___fieldOwners = "children.parent.internal.fieldOwners",
    children___parent___internal___ignoreType = "children.parent.internal.ignoreType",
    children___parent___internal___mediaType = "children.parent.internal.mediaType",
    children___parent___internal___owner = "children.parent.internal.owner",
    children___parent___internal___type = "children.parent.internal.type",
    children___children = "children.children",
    children___children___id = "children.children.id",
    children___children___parent___id = "children.children.parent.id",
    children___children___parent___children = "children.children.parent.children",
    children___children___children = "children.children.children",
    children___children___children___id = "children.children.children.id",
    children___children___children___children = "children.children.children.children",
    children___children___internal___content = "children.children.internal.content",
    children___children___internal___contentDigest = "children.children.internal.contentDigest",
    children___children___internal___description = "children.children.internal.description",
    children___children___internal___fieldOwners = "children.children.internal.fieldOwners",
    children___children___internal___ignoreType = "children.children.internal.ignoreType",
    children___children___internal___mediaType = "children.children.internal.mediaType",
    children___children___internal___owner = "children.children.internal.owner",
    children___children___internal___type = "children.children.internal.type",
    children___internal___content = "children.internal.content",
    children___internal___contentDigest = "children.internal.contentDigest",
    children___internal___description = "children.internal.description",
    children___internal___fieldOwners = "children.internal.fieldOwners",
    children___internal___ignoreType = "children.internal.ignoreType",
    children___internal___mediaType = "children.internal.mediaType",
    children___internal___owner = "children.internal.owner",
    children___internal___type = "children.internal.type",
    internal___content = "internal.content",
    internal___contentDigest = "internal.contentDigest",
    internal___description = "internal.description",
    internal___fieldOwners = "internal.fieldOwners",
    internal___ignoreType = "internal.ignoreType",
    internal___mediaType = "internal.mediaType",
    internal___owner = "internal.owner",
    internal___type = "internal.type",
  }

  type DirectoryFilterInput = {
    readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
    readonly absolutePath: Maybe<StringQueryOperatorInput>;
    readonly relativePath: Maybe<StringQueryOperatorInput>;
    readonly extension: Maybe<StringQueryOperatorInput>;
    readonly size: Maybe<IntQueryOperatorInput>;
    readonly prettySize: Maybe<StringQueryOperatorInput>;
    readonly modifiedTime: Maybe<DateQueryOperatorInput>;
    readonly accessTime: Maybe<DateQueryOperatorInput>;
    readonly changeTime: Maybe<DateQueryOperatorInput>;
    readonly birthTime: Maybe<DateQueryOperatorInput>;
    readonly root: Maybe<StringQueryOperatorInput>;
    readonly dir: Maybe<StringQueryOperatorInput>;
    readonly base: Maybe<StringQueryOperatorInput>;
    readonly ext: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
    readonly dev: Maybe<IntQueryOperatorInput>;
    readonly mode: Maybe<IntQueryOperatorInput>;
    readonly nlink: Maybe<IntQueryOperatorInput>;
    readonly uid: Maybe<IntQueryOperatorInput>;
    readonly gid: Maybe<IntQueryOperatorInput>;
    readonly rdev: Maybe<IntQueryOperatorInput>;
    readonly ino: Maybe<FloatQueryOperatorInput>;
    readonly atimeMs: Maybe<FloatQueryOperatorInput>;
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
    readonly atime: Maybe<DateQueryOperatorInput>;
    readonly mtime: Maybe<DateQueryOperatorInput>;
    readonly ctime: Maybe<DateQueryOperatorInput>;
    readonly birthtime: Maybe<DateQueryOperatorInput>;
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type DirectoryGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<DirectoryEdge>;
    readonly nodes: ReadonlyArray<Directory>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type DirectorySortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type File = Node & {
    readonly sourceInstanceName: Scalars["String"];
    readonly absolutePath: Scalars["String"];
    readonly relativePath: Scalars["String"];
    readonly extension: Scalars["String"];
    readonly size: Scalars["Int"];
    readonly prettySize: Scalars["String"];
    readonly modifiedTime: Scalars["Date"];
    readonly accessTime: Scalars["Date"];
    readonly changeTime: Scalars["Date"];
    readonly birthTime: Scalars["Date"];
    readonly root: Scalars["String"];
    readonly dir: Scalars["String"];
    readonly base: Scalars["String"];
    readonly ext: Scalars["String"];
    readonly name: Scalars["String"];
    readonly relativeDirectory: Scalars["String"];
    readonly dev: Scalars["Int"];
    readonly mode: Scalars["Int"];
    readonly nlink: Scalars["Int"];
    readonly uid: Scalars["Int"];
    readonly gid: Scalars["Int"];
    readonly rdev: Scalars["Int"];
    readonly ino: Scalars["Float"];
    readonly atimeMs: Scalars["Float"];
    readonly mtimeMs: Scalars["Float"];
    readonly ctimeMs: Scalars["Float"];
    readonly atime: Scalars["Date"];
    readonly mtime: Scalars["Date"];
    readonly ctime: Scalars["Date"];
    /** @deprecated Use `birthTime` instead */
    readonly birthtime: Maybe<Scalars["Date"]>;
    /** @deprecated Use `birthTime` instead */
    readonly birthtimeMs: Maybe<Scalars["Float"]>;
    /** Copy file to static directory and return public url to it */
    readonly publicURL: Maybe<Scalars["String"]>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly childCollectionJson: Maybe<CollectionJson>;
    readonly childInstitutionJson: Maybe<InstitutionJson>;
    readonly childObjectJson: Maybe<ObjectJson>;
    readonly childImageJson: Maybe<ImageJson>;
  };

  type File_modifiedTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type File_accessTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type File_changeTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type File_birthTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type File_atimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type File_mtimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type File_ctimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type FileConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<FileEdge>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly group: ReadonlyArray<FileGroupConnection>;
  };

  type FileConnection_distinctArgs = {
    field: FileFieldsEnum;
  };

  type FileConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: FileFieldsEnum;
  };

  type FileEdge = {
    readonly next: Maybe<File>;
    readonly node: File;
    readonly previous: Maybe<File>;
  };

  enum FileFieldsEnum {
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
    parent___id = "parent.id",
    parent___parent___id = "parent.parent.id",
    parent___parent___parent___id = "parent.parent.parent.id",
    parent___parent___parent___children = "parent.parent.parent.children",
    parent___parent___children = "parent.parent.children",
    parent___parent___children___id = "parent.parent.children.id",
    parent___parent___children___children = "parent.parent.children.children",
    parent___parent___internal___content = "parent.parent.internal.content",
    parent___parent___internal___contentDigest = "parent.parent.internal.contentDigest",
    parent___parent___internal___description = "parent.parent.internal.description",
    parent___parent___internal___fieldOwners = "parent.parent.internal.fieldOwners",
    parent___parent___internal___ignoreType = "parent.parent.internal.ignoreType",
    parent___parent___internal___mediaType = "parent.parent.internal.mediaType",
    parent___parent___internal___owner = "parent.parent.internal.owner",
    parent___parent___internal___type = "parent.parent.internal.type",
    parent___children = "parent.children",
    parent___children___id = "parent.children.id",
    parent___children___parent___id = "parent.children.parent.id",
    parent___children___parent___children = "parent.children.parent.children",
    parent___children___children = "parent.children.children",
    parent___children___children___id = "parent.children.children.id",
    parent___children___children___children = "parent.children.children.children",
    parent___children___internal___content = "parent.children.internal.content",
    parent___children___internal___contentDigest = "parent.children.internal.contentDigest",
    parent___children___internal___description = "parent.children.internal.description",
    parent___children___internal___fieldOwners = "parent.children.internal.fieldOwners",
    parent___children___internal___ignoreType = "parent.children.internal.ignoreType",
    parent___children___internal___mediaType = "parent.children.internal.mediaType",
    parent___children___internal___owner = "parent.children.internal.owner",
    parent___children___internal___type = "parent.children.internal.type",
    parent___internal___content = "parent.internal.content",
    parent___internal___contentDigest = "parent.internal.contentDigest",
    parent___internal___description = "parent.internal.description",
    parent___internal___fieldOwners = "parent.internal.fieldOwners",
    parent___internal___ignoreType = "parent.internal.ignoreType",
    parent___internal___mediaType = "parent.internal.mediaType",
    parent___internal___owner = "parent.internal.owner",
    parent___internal___type = "parent.internal.type",
    children = "children",
    children___id = "children.id",
    children___parent___id = "children.parent.id",
    children___parent___parent___id = "children.parent.parent.id",
    children___parent___parent___children = "children.parent.parent.children",
    children___parent___children = "children.parent.children",
    children___parent___children___id = "children.parent.children.id",
    children___parent___children___children = "children.parent.children.children",
    children___parent___internal___content = "children.parent.internal.content",
    children___parent___internal___contentDigest = "children.parent.internal.contentDigest",
    children___parent___internal___description = "children.parent.internal.description",
    children___parent___internal___fieldOwners = "children.parent.internal.fieldOwners",
    children___parent___internal___ignoreType = "children.parent.internal.ignoreType",
    children___parent___internal___mediaType = "children.parent.internal.mediaType",
    children___parent___internal___owner = "children.parent.internal.owner",
    children___parent___internal___type = "children.parent.internal.type",
    children___children = "children.children",
    children___children___id = "children.children.id",
    children___children___parent___id = "children.children.parent.id",
    children___children___parent___children = "children.children.parent.children",
    children___children___children = "children.children.children",
    children___children___children___id = "children.children.children.id",
    children___children___children___children = "children.children.children.children",
    children___children___internal___content = "children.children.internal.content",
    children___children___internal___contentDigest = "children.children.internal.contentDigest",
    children___children___internal___description = "children.children.internal.description",
    children___children___internal___fieldOwners = "children.children.internal.fieldOwners",
    children___children___internal___ignoreType = "children.children.internal.ignoreType",
    children___children___internal___mediaType = "children.children.internal.mediaType",
    children___children___internal___owner = "children.children.internal.owner",
    children___children___internal___type = "children.children.internal.type",
    children___internal___content = "children.internal.content",
    children___internal___contentDigest = "children.internal.contentDigest",
    children___internal___description = "children.internal.description",
    children___internal___fieldOwners = "children.internal.fieldOwners",
    children___internal___ignoreType = "children.internal.ignoreType",
    children___internal___mediaType = "children.internal.mediaType",
    children___internal___owner = "children.internal.owner",
    children___internal___type = "children.internal.type",
    internal___content = "internal.content",
    internal___contentDigest = "internal.contentDigest",
    internal___description = "internal.description",
    internal___fieldOwners = "internal.fieldOwners",
    internal___ignoreType = "internal.ignoreType",
    internal___mediaType = "internal.mediaType",
    internal___owner = "internal.owner",
    internal___type = "internal.type",
    childCollectionJson___institution_uri = "childCollectionJson.institution_uri",
    childCollectionJson___title = "childCollectionJson.title",
    childCollectionJson___uri = "childCollectionJson.uri",
    childCollectionJson___rights___holder = "childCollectionJson.rights.holder",
    childCollectionJson___rights___statements = "childCollectionJson.rights.statements",
    childCollectionJson___id = "childCollectionJson.id",
    childCollectionJson___parent___id = "childCollectionJson.parent.id",
    childCollectionJson___parent___parent___id = "childCollectionJson.parent.parent.id",
    childCollectionJson___parent___parent___children = "childCollectionJson.parent.parent.children",
    childCollectionJson___parent___children = "childCollectionJson.parent.children",
    childCollectionJson___parent___children___id = "childCollectionJson.parent.children.id",
    childCollectionJson___parent___children___children = "childCollectionJson.parent.children.children",
    childCollectionJson___parent___internal___content = "childCollectionJson.parent.internal.content",
    childCollectionJson___parent___internal___contentDigest = "childCollectionJson.parent.internal.contentDigest",
    childCollectionJson___parent___internal___description = "childCollectionJson.parent.internal.description",
    childCollectionJson___parent___internal___fieldOwners = "childCollectionJson.parent.internal.fieldOwners",
    childCollectionJson___parent___internal___ignoreType = "childCollectionJson.parent.internal.ignoreType",
    childCollectionJson___parent___internal___mediaType = "childCollectionJson.parent.internal.mediaType",
    childCollectionJson___parent___internal___owner = "childCollectionJson.parent.internal.owner",
    childCollectionJson___parent___internal___type = "childCollectionJson.parent.internal.type",
    childCollectionJson___children = "childCollectionJson.children",
    childCollectionJson___children___id = "childCollectionJson.children.id",
    childCollectionJson___children___parent___id = "childCollectionJson.children.parent.id",
    childCollectionJson___children___parent___children = "childCollectionJson.children.parent.children",
    childCollectionJson___children___children = "childCollectionJson.children.children",
    childCollectionJson___children___children___id = "childCollectionJson.children.children.id",
    childCollectionJson___children___children___children = "childCollectionJson.children.children.children",
    childCollectionJson___children___internal___content = "childCollectionJson.children.internal.content",
    childCollectionJson___children___internal___contentDigest = "childCollectionJson.children.internal.contentDigest",
    childCollectionJson___children___internal___description = "childCollectionJson.children.internal.description",
    childCollectionJson___children___internal___fieldOwners = "childCollectionJson.children.internal.fieldOwners",
    childCollectionJson___children___internal___ignoreType = "childCollectionJson.children.internal.ignoreType",
    childCollectionJson___children___internal___mediaType = "childCollectionJson.children.internal.mediaType",
    childCollectionJson___children___internal___owner = "childCollectionJson.children.internal.owner",
    childCollectionJson___children___internal___type = "childCollectionJson.children.internal.type",
    childCollectionJson___internal___content = "childCollectionJson.internal.content",
    childCollectionJson___internal___contentDigest = "childCollectionJson.internal.contentDigest",
    childCollectionJson___internal___description = "childCollectionJson.internal.description",
    childCollectionJson___internal___fieldOwners = "childCollectionJson.internal.fieldOwners",
    childCollectionJson___internal___ignoreType = "childCollectionJson.internal.ignoreType",
    childCollectionJson___internal___mediaType = "childCollectionJson.internal.mediaType",
    childCollectionJson___internal___owner = "childCollectionJson.internal.owner",
    childCollectionJson___internal___type = "childCollectionJson.internal.type",
    childInstitutionJson___name = "childInstitutionJson.name",
    childInstitutionJson___uri = "childInstitutionJson.uri",
    childInstitutionJson___rights___holder = "childInstitutionJson.rights.holder",
    childInstitutionJson___rights___statements = "childInstitutionJson.rights.statements",
    childInstitutionJson___id = "childInstitutionJson.id",
    childInstitutionJson___parent___id = "childInstitutionJson.parent.id",
    childInstitutionJson___parent___parent___id = "childInstitutionJson.parent.parent.id",
    childInstitutionJson___parent___parent___children = "childInstitutionJson.parent.parent.children",
    childInstitutionJson___parent___children = "childInstitutionJson.parent.children",
    childInstitutionJson___parent___children___id = "childInstitutionJson.parent.children.id",
    childInstitutionJson___parent___children___children = "childInstitutionJson.parent.children.children",
    childInstitutionJson___parent___internal___content = "childInstitutionJson.parent.internal.content",
    childInstitutionJson___parent___internal___contentDigest = "childInstitutionJson.parent.internal.contentDigest",
    childInstitutionJson___parent___internal___description = "childInstitutionJson.parent.internal.description",
    childInstitutionJson___parent___internal___fieldOwners = "childInstitutionJson.parent.internal.fieldOwners",
    childInstitutionJson___parent___internal___ignoreType = "childInstitutionJson.parent.internal.ignoreType",
    childInstitutionJson___parent___internal___mediaType = "childInstitutionJson.parent.internal.mediaType",
    childInstitutionJson___parent___internal___owner = "childInstitutionJson.parent.internal.owner",
    childInstitutionJson___parent___internal___type = "childInstitutionJson.parent.internal.type",
    childInstitutionJson___children = "childInstitutionJson.children",
    childInstitutionJson___children___id = "childInstitutionJson.children.id",
    childInstitutionJson___children___parent___id = "childInstitutionJson.children.parent.id",
    childInstitutionJson___children___parent___children = "childInstitutionJson.children.parent.children",
    childInstitutionJson___children___children = "childInstitutionJson.children.children",
    childInstitutionJson___children___children___id = "childInstitutionJson.children.children.id",
    childInstitutionJson___children___children___children = "childInstitutionJson.children.children.children",
    childInstitutionJson___children___internal___content = "childInstitutionJson.children.internal.content",
    childInstitutionJson___children___internal___contentDigest = "childInstitutionJson.children.internal.contentDigest",
    childInstitutionJson___children___internal___description = "childInstitutionJson.children.internal.description",
    childInstitutionJson___children___internal___fieldOwners = "childInstitutionJson.children.internal.fieldOwners",
    childInstitutionJson___children___internal___ignoreType = "childInstitutionJson.children.internal.ignoreType",
    childInstitutionJson___children___internal___mediaType = "childInstitutionJson.children.internal.mediaType",
    childInstitutionJson___children___internal___owner = "childInstitutionJson.children.internal.owner",
    childInstitutionJson___children___internal___type = "childInstitutionJson.children.internal.type",
    childInstitutionJson___internal___content = "childInstitutionJson.internal.content",
    childInstitutionJson___internal___contentDigest = "childInstitutionJson.internal.contentDigest",
    childInstitutionJson___internal___description = "childInstitutionJson.internal.description",
    childInstitutionJson___internal___fieldOwners = "childInstitutionJson.internal.fieldOwners",
    childInstitutionJson___internal___ignoreType = "childInstitutionJson.internal.ignoreType",
    childInstitutionJson___internal___mediaType = "childInstitutionJson.internal.mediaType",
    childInstitutionJson___internal___owner = "childInstitutionJson.internal.owner",
    childInstitutionJson___internal___type = "childInstitutionJson.internal.type",
    childObjectJson___collection_uris = "childObjectJson.collection_uris",
    childObjectJson___descriptions = "childObjectJson.descriptions",
    childObjectJson___image_uris = "childObjectJson.image_uris",
    childObjectJson___institution_uri = "childObjectJson.institution_uri",
    childObjectJson___subjects = "childObjectJson.subjects",
    childObjectJson___title = "childObjectJson.title",
    childObjectJson___uri = "childObjectJson.uri",
    childObjectJson___rights___holder = "childObjectJson.rights.holder",
    childObjectJson___rights___statements = "childObjectJson.rights.statements",
    childObjectJson___id = "childObjectJson.id",
    childObjectJson___parent___id = "childObjectJson.parent.id",
    childObjectJson___parent___parent___id = "childObjectJson.parent.parent.id",
    childObjectJson___parent___parent___children = "childObjectJson.parent.parent.children",
    childObjectJson___parent___children = "childObjectJson.parent.children",
    childObjectJson___parent___children___id = "childObjectJson.parent.children.id",
    childObjectJson___parent___children___children = "childObjectJson.parent.children.children",
    childObjectJson___parent___internal___content = "childObjectJson.parent.internal.content",
    childObjectJson___parent___internal___contentDigest = "childObjectJson.parent.internal.contentDigest",
    childObjectJson___parent___internal___description = "childObjectJson.parent.internal.description",
    childObjectJson___parent___internal___fieldOwners = "childObjectJson.parent.internal.fieldOwners",
    childObjectJson___parent___internal___ignoreType = "childObjectJson.parent.internal.ignoreType",
    childObjectJson___parent___internal___mediaType = "childObjectJson.parent.internal.mediaType",
    childObjectJson___parent___internal___owner = "childObjectJson.parent.internal.owner",
    childObjectJson___parent___internal___type = "childObjectJson.parent.internal.type",
    childObjectJson___children = "childObjectJson.children",
    childObjectJson___children___id = "childObjectJson.children.id",
    childObjectJson___children___parent___id = "childObjectJson.children.parent.id",
    childObjectJson___children___parent___children = "childObjectJson.children.parent.children",
    childObjectJson___children___children = "childObjectJson.children.children",
    childObjectJson___children___children___id = "childObjectJson.children.children.id",
    childObjectJson___children___children___children = "childObjectJson.children.children.children",
    childObjectJson___children___internal___content = "childObjectJson.children.internal.content",
    childObjectJson___children___internal___contentDigest = "childObjectJson.children.internal.contentDigest",
    childObjectJson___children___internal___description = "childObjectJson.children.internal.description",
    childObjectJson___children___internal___fieldOwners = "childObjectJson.children.internal.fieldOwners",
    childObjectJson___children___internal___ignoreType = "childObjectJson.children.internal.ignoreType",
    childObjectJson___children___internal___mediaType = "childObjectJson.children.internal.mediaType",
    childObjectJson___children___internal___owner = "childObjectJson.children.internal.owner",
    childObjectJson___children___internal___type = "childObjectJson.children.internal.type",
    childObjectJson___internal___content = "childObjectJson.internal.content",
    childObjectJson___internal___contentDigest = "childObjectJson.internal.contentDigest",
    childObjectJson___internal___description = "childObjectJson.internal.description",
    childObjectJson___internal___fieldOwners = "childObjectJson.internal.fieldOwners",
    childObjectJson___internal___ignoreType = "childObjectJson.internal.ignoreType",
    childObjectJson___internal___mediaType = "childObjectJson.internal.mediaType",
    childObjectJson___internal___owner = "childObjectJson.internal.owner",
    childObjectJson___internal___type = "childObjectJson.internal.type",
    childImageJson___id = "childImageJson.id",
    childImageJson___parent___id = "childImageJson.parent.id",
    childImageJson___parent___parent___id = "childImageJson.parent.parent.id",
    childImageJson___parent___parent___children = "childImageJson.parent.parent.children",
    childImageJson___parent___children = "childImageJson.parent.children",
    childImageJson___parent___children___id = "childImageJson.parent.children.id",
    childImageJson___parent___children___children = "childImageJson.parent.children.children",
    childImageJson___parent___internal___content = "childImageJson.parent.internal.content",
    childImageJson___parent___internal___contentDigest = "childImageJson.parent.internal.contentDigest",
    childImageJson___parent___internal___description = "childImageJson.parent.internal.description",
    childImageJson___parent___internal___fieldOwners = "childImageJson.parent.internal.fieldOwners",
    childImageJson___parent___internal___ignoreType = "childImageJson.parent.internal.ignoreType",
    childImageJson___parent___internal___mediaType = "childImageJson.parent.internal.mediaType",
    childImageJson___parent___internal___owner = "childImageJson.parent.internal.owner",
    childImageJson___parent___internal___type = "childImageJson.parent.internal.type",
    childImageJson___children = "childImageJson.children",
    childImageJson___children___id = "childImageJson.children.id",
    childImageJson___children___parent___id = "childImageJson.children.parent.id",
    childImageJson___children___parent___children = "childImageJson.children.parent.children",
    childImageJson___children___children = "childImageJson.children.children",
    childImageJson___children___children___id = "childImageJson.children.children.id",
    childImageJson___children___children___children = "childImageJson.children.children.children",
    childImageJson___children___internal___content = "childImageJson.children.internal.content",
    childImageJson___children___internal___contentDigest = "childImageJson.children.internal.contentDigest",
    childImageJson___children___internal___description = "childImageJson.children.internal.description",
    childImageJson___children___internal___fieldOwners = "childImageJson.children.internal.fieldOwners",
    childImageJson___children___internal___ignoreType = "childImageJson.children.internal.ignoreType",
    childImageJson___children___internal___mediaType = "childImageJson.children.internal.mediaType",
    childImageJson___children___internal___owner = "childImageJson.children.internal.owner",
    childImageJson___children___internal___type = "childImageJson.children.internal.type",
    childImageJson___internal___content = "childImageJson.internal.content",
    childImageJson___internal___contentDigest = "childImageJson.internal.contentDigest",
    childImageJson___internal___description = "childImageJson.internal.description",
    childImageJson___internal___fieldOwners = "childImageJson.internal.fieldOwners",
    childImageJson___internal___ignoreType = "childImageJson.internal.ignoreType",
    childImageJson___internal___mediaType = "childImageJson.internal.mediaType",
    childImageJson___internal___owner = "childImageJson.internal.owner",
    childImageJson___internal___type = "childImageJson.internal.type",
    childImageJson___uri = "childImageJson.uri",
    childImageJson___derived_image_uris = "childImageJson.derived_image_uris",
    childImageJson___exact_dimensions___height = "childImageJson.exact_dimensions.height",
    childImageJson___exact_dimensions___width = "childImageJson.exact_dimensions.width",
    childImageJson___max_dimensions___height = "childImageJson.max_dimensions.height",
    childImageJson___max_dimensions___width = "childImageJson.max_dimensions.width",
  }

  type FileFilterInput = {
    readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
    readonly absolutePath: Maybe<StringQueryOperatorInput>;
    readonly relativePath: Maybe<StringQueryOperatorInput>;
    readonly extension: Maybe<StringQueryOperatorInput>;
    readonly size: Maybe<IntQueryOperatorInput>;
    readonly prettySize: Maybe<StringQueryOperatorInput>;
    readonly modifiedTime: Maybe<DateQueryOperatorInput>;
    readonly accessTime: Maybe<DateQueryOperatorInput>;
    readonly changeTime: Maybe<DateQueryOperatorInput>;
    readonly birthTime: Maybe<DateQueryOperatorInput>;
    readonly root: Maybe<StringQueryOperatorInput>;
    readonly dir: Maybe<StringQueryOperatorInput>;
    readonly base: Maybe<StringQueryOperatorInput>;
    readonly ext: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
    readonly dev: Maybe<IntQueryOperatorInput>;
    readonly mode: Maybe<IntQueryOperatorInput>;
    readonly nlink: Maybe<IntQueryOperatorInput>;
    readonly uid: Maybe<IntQueryOperatorInput>;
    readonly gid: Maybe<IntQueryOperatorInput>;
    readonly rdev: Maybe<IntQueryOperatorInput>;
    readonly ino: Maybe<FloatQueryOperatorInput>;
    readonly atimeMs: Maybe<FloatQueryOperatorInput>;
    readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
    readonly atime: Maybe<DateQueryOperatorInput>;
    readonly mtime: Maybe<DateQueryOperatorInput>;
    readonly ctime: Maybe<DateQueryOperatorInput>;
    readonly birthtime: Maybe<DateQueryOperatorInput>;
    readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
    readonly publicURL: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly childCollectionJson: Maybe<CollectionJsonFilterInput>;
    readonly childInstitutionJson: Maybe<InstitutionJsonFilterInput>;
    readonly childObjectJson: Maybe<ObjectJsonFilterInput>;
    readonly childImageJson: Maybe<ImageJsonFilterInput>;
  };

  type FileGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<FileEdge>;
    readonly nodes: ReadonlyArray<File>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type FileSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type FloatQueryOperatorInput = {
    readonly eq: Maybe<Scalars["Float"]>;
    readonly ne: Maybe<Scalars["Float"]>;
    readonly gt: Maybe<Scalars["Float"]>;
    readonly gte: Maybe<Scalars["Float"]>;
    readonly lt: Maybe<Scalars["Float"]>;
    readonly lte: Maybe<Scalars["Float"]>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["Float"]>>>;
  };

  type ImageJson = Node & {
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly uri: Maybe<Scalars["String"]>;
    readonly derived_image_uris: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly exact_dimensions: Maybe<ImageJsonExact_dimensions>;
    readonly max_dimensions: Maybe<ImageJsonMax_dimensions>;
  };

  type ImageJsonConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ImageJsonEdge>;
    readonly nodes: ReadonlyArray<ImageJson>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly group: ReadonlyArray<ImageJsonGroupConnection>;
  };

  type ImageJsonConnection_distinctArgs = {
    field: ImageJsonFieldsEnum;
  };

  type ImageJsonConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ImageJsonFieldsEnum;
  };

  type ImageJsonEdge = {
    readonly next: Maybe<ImageJson>;
    readonly node: ImageJson;
    readonly previous: Maybe<ImageJson>;
  };

  type ImageJsonExact_dimensions = {
    readonly height: Maybe<Scalars["Int"]>;
    readonly width: Maybe<Scalars["Int"]>;
  };

  type ImageJsonExact_dimensionsFilterInput = {
    readonly height: Maybe<IntQueryOperatorInput>;
    readonly width: Maybe<IntQueryOperatorInput>;
  };

  enum ImageJsonFieldsEnum {
    id = "id",
    parent___id = "parent.id",
    parent___parent___id = "parent.parent.id",
    parent___parent___parent___id = "parent.parent.parent.id",
    parent___parent___parent___children = "parent.parent.parent.children",
    parent___parent___children = "parent.parent.children",
    parent___parent___children___id = "parent.parent.children.id",
    parent___parent___children___children = "parent.parent.children.children",
    parent___parent___internal___content = "parent.parent.internal.content",
    parent___parent___internal___contentDigest = "parent.parent.internal.contentDigest",
    parent___parent___internal___description = "parent.parent.internal.description",
    parent___parent___internal___fieldOwners = "parent.parent.internal.fieldOwners",
    parent___parent___internal___ignoreType = "parent.parent.internal.ignoreType",
    parent___parent___internal___mediaType = "parent.parent.internal.mediaType",
    parent___parent___internal___owner = "parent.parent.internal.owner",
    parent___parent___internal___type = "parent.parent.internal.type",
    parent___children = "parent.children",
    parent___children___id = "parent.children.id",
    parent___children___parent___id = "parent.children.parent.id",
    parent___children___parent___children = "parent.children.parent.children",
    parent___children___children = "parent.children.children",
    parent___children___children___id = "parent.children.children.id",
    parent___children___children___children = "parent.children.children.children",
    parent___children___internal___content = "parent.children.internal.content",
    parent___children___internal___contentDigest = "parent.children.internal.contentDigest",
    parent___children___internal___description = "parent.children.internal.description",
    parent___children___internal___fieldOwners = "parent.children.internal.fieldOwners",
    parent___children___internal___ignoreType = "parent.children.internal.ignoreType",
    parent___children___internal___mediaType = "parent.children.internal.mediaType",
    parent___children___internal___owner = "parent.children.internal.owner",
    parent___children___internal___type = "parent.children.internal.type",
    parent___internal___content = "parent.internal.content",
    parent___internal___contentDigest = "parent.internal.contentDigest",
    parent___internal___description = "parent.internal.description",
    parent___internal___fieldOwners = "parent.internal.fieldOwners",
    parent___internal___ignoreType = "parent.internal.ignoreType",
    parent___internal___mediaType = "parent.internal.mediaType",
    parent___internal___owner = "parent.internal.owner",
    parent___internal___type = "parent.internal.type",
    children = "children",
    children___id = "children.id",
    children___parent___id = "children.parent.id",
    children___parent___parent___id = "children.parent.parent.id",
    children___parent___parent___children = "children.parent.parent.children",
    children___parent___children = "children.parent.children",
    children___parent___children___id = "children.parent.children.id",
    children___parent___children___children = "children.parent.children.children",
    children___parent___internal___content = "children.parent.internal.content",
    children___parent___internal___contentDigest = "children.parent.internal.contentDigest",
    children___parent___internal___description = "children.parent.internal.description",
    children___parent___internal___fieldOwners = "children.parent.internal.fieldOwners",
    children___parent___internal___ignoreType = "children.parent.internal.ignoreType",
    children___parent___internal___mediaType = "children.parent.internal.mediaType",
    children___parent___internal___owner = "children.parent.internal.owner",
    children___parent___internal___type = "children.parent.internal.type",
    children___children = "children.children",
    children___children___id = "children.children.id",
    children___children___parent___id = "children.children.parent.id",
    children___children___parent___children = "children.children.parent.children",
    children___children___children = "children.children.children",
    children___children___children___id = "children.children.children.id",
    children___children___children___children = "children.children.children.children",
    children___children___internal___content = "children.children.internal.content",
    children___children___internal___contentDigest = "children.children.internal.contentDigest",
    children___children___internal___description = "children.children.internal.description",
    children___children___internal___fieldOwners = "children.children.internal.fieldOwners",
    children___children___internal___ignoreType = "children.children.internal.ignoreType",
    children___children___internal___mediaType = "children.children.internal.mediaType",
    children___children___internal___owner = "children.children.internal.owner",
    children___children___internal___type = "children.children.internal.type",
    children___internal___content = "children.internal.content",
    children___internal___contentDigest = "children.internal.contentDigest",
    children___internal___description = "children.internal.description",
    children___internal___fieldOwners = "children.internal.fieldOwners",
    children___internal___ignoreType = "children.internal.ignoreType",
    children___internal___mediaType = "children.internal.mediaType",
    children___internal___owner = "children.internal.owner",
    children___internal___type = "children.internal.type",
    internal___content = "internal.content",
    internal___contentDigest = "internal.contentDigest",
    internal___description = "internal.description",
    internal___fieldOwners = "internal.fieldOwners",
    internal___ignoreType = "internal.ignoreType",
    internal___mediaType = "internal.mediaType",
    internal___owner = "internal.owner",
    internal___type = "internal.type",
    uri = "uri",
    derived_image_uris = "derived_image_uris",
    exact_dimensions___height = "exact_dimensions.height",
    exact_dimensions___width = "exact_dimensions.width",
    max_dimensions___height = "max_dimensions.height",
    max_dimensions___width = "max_dimensions.width",
  }

  type ImageJsonFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly uri: Maybe<StringQueryOperatorInput>;
    readonly derived_image_uris: Maybe<StringQueryOperatorInput>;
    readonly exact_dimensions: Maybe<ImageJsonExact_dimensionsFilterInput>;
    readonly max_dimensions: Maybe<ImageJsonMax_dimensionsFilterInput>;
  };

  type ImageJsonGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ImageJsonEdge>;
    readonly nodes: ReadonlyArray<ImageJson>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type ImageJsonMax_dimensions = {
    readonly height: Maybe<Scalars["Int"]>;
    readonly width: Maybe<Scalars["Int"]>;
  };

  type ImageJsonMax_dimensionsFilterInput = {
    readonly height: Maybe<IntQueryOperatorInput>;
    readonly width: Maybe<IntQueryOperatorInput>;
  };

  type ImageJsonSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ImageJsonFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type InstitutionJson = Node & {
    readonly name: Scalars["String"];
    readonly uri: Scalars["String"];
    readonly rights: Maybe<InstitutionJsonRights>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type InstitutionJsonConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<InstitutionJsonEdge>;
    readonly nodes: ReadonlyArray<InstitutionJson>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly group: ReadonlyArray<InstitutionJsonGroupConnection>;
  };

  type InstitutionJsonConnection_distinctArgs = {
    field: InstitutionJsonFieldsEnum;
  };

  type InstitutionJsonConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: InstitutionJsonFieldsEnum;
  };

  type InstitutionJsonEdge = {
    readonly next: Maybe<InstitutionJson>;
    readonly node: InstitutionJson;
    readonly previous: Maybe<InstitutionJson>;
  };

  enum InstitutionJsonFieldsEnum {
    name = "name",
    uri = "uri",
    rights___holder = "rights.holder",
    rights___statements = "rights.statements",
    id = "id",
    parent___id = "parent.id",
    parent___parent___id = "parent.parent.id",
    parent___parent___parent___id = "parent.parent.parent.id",
    parent___parent___parent___children = "parent.parent.parent.children",
    parent___parent___children = "parent.parent.children",
    parent___parent___children___id = "parent.parent.children.id",
    parent___parent___children___children = "parent.parent.children.children",
    parent___parent___internal___content = "parent.parent.internal.content",
    parent___parent___internal___contentDigest = "parent.parent.internal.contentDigest",
    parent___parent___internal___description = "parent.parent.internal.description",
    parent___parent___internal___fieldOwners = "parent.parent.internal.fieldOwners",
    parent___parent___internal___ignoreType = "parent.parent.internal.ignoreType",
    parent___parent___internal___mediaType = "parent.parent.internal.mediaType",
    parent___parent___internal___owner = "parent.parent.internal.owner",
    parent___parent___internal___type = "parent.parent.internal.type",
    parent___children = "parent.children",
    parent___children___id = "parent.children.id",
    parent___children___parent___id = "parent.children.parent.id",
    parent___children___parent___children = "parent.children.parent.children",
    parent___children___children = "parent.children.children",
    parent___children___children___id = "parent.children.children.id",
    parent___children___children___children = "parent.children.children.children",
    parent___children___internal___content = "parent.children.internal.content",
    parent___children___internal___contentDigest = "parent.children.internal.contentDigest",
    parent___children___internal___description = "parent.children.internal.description",
    parent___children___internal___fieldOwners = "parent.children.internal.fieldOwners",
    parent___children___internal___ignoreType = "parent.children.internal.ignoreType",
    parent___children___internal___mediaType = "parent.children.internal.mediaType",
    parent___children___internal___owner = "parent.children.internal.owner",
    parent___children___internal___type = "parent.children.internal.type",
    parent___internal___content = "parent.internal.content",
    parent___internal___contentDigest = "parent.internal.contentDigest",
    parent___internal___description = "parent.internal.description",
    parent___internal___fieldOwners = "parent.internal.fieldOwners",
    parent___internal___ignoreType = "parent.internal.ignoreType",
    parent___internal___mediaType = "parent.internal.mediaType",
    parent___internal___owner = "parent.internal.owner",
    parent___internal___type = "parent.internal.type",
    children = "children",
    children___id = "children.id",
    children___parent___id = "children.parent.id",
    children___parent___parent___id = "children.parent.parent.id",
    children___parent___parent___children = "children.parent.parent.children",
    children___parent___children = "children.parent.children",
    children___parent___children___id = "children.parent.children.id",
    children___parent___children___children = "children.parent.children.children",
    children___parent___internal___content = "children.parent.internal.content",
    children___parent___internal___contentDigest = "children.parent.internal.contentDigest",
    children___parent___internal___description = "children.parent.internal.description",
    children___parent___internal___fieldOwners = "children.parent.internal.fieldOwners",
    children___parent___internal___ignoreType = "children.parent.internal.ignoreType",
    children___parent___internal___mediaType = "children.parent.internal.mediaType",
    children___parent___internal___owner = "children.parent.internal.owner",
    children___parent___internal___type = "children.parent.internal.type",
    children___children = "children.children",
    children___children___id = "children.children.id",
    children___children___parent___id = "children.children.parent.id",
    children___children___parent___children = "children.children.parent.children",
    children___children___children = "children.children.children",
    children___children___children___id = "children.children.children.id",
    children___children___children___children = "children.children.children.children",
    children___children___internal___content = "children.children.internal.content",
    children___children___internal___contentDigest = "children.children.internal.contentDigest",
    children___children___internal___description = "children.children.internal.description",
    children___children___internal___fieldOwners = "children.children.internal.fieldOwners",
    children___children___internal___ignoreType = "children.children.internal.ignoreType",
    children___children___internal___mediaType = "children.children.internal.mediaType",
    children___children___internal___owner = "children.children.internal.owner",
    children___children___internal___type = "children.children.internal.type",
    children___internal___content = "children.internal.content",
    children___internal___contentDigest = "children.internal.contentDigest",
    children___internal___description = "children.internal.description",
    children___internal___fieldOwners = "children.internal.fieldOwners",
    children___internal___ignoreType = "children.internal.ignoreType",
    children___internal___mediaType = "children.internal.mediaType",
    children___internal___owner = "children.internal.owner",
    children___internal___type = "children.internal.type",
    internal___content = "internal.content",
    internal___contentDigest = "internal.contentDigest",
    internal___description = "internal.description",
    internal___fieldOwners = "internal.fieldOwners",
    internal___ignoreType = "internal.ignoreType",
    internal___mediaType = "internal.mediaType",
    internal___owner = "internal.owner",
    internal___type = "internal.type",
  }

  type InstitutionJsonFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly uri: Maybe<StringQueryOperatorInput>;
    readonly rights: Maybe<InstitutionJsonRightsFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type InstitutionJsonGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<InstitutionJsonEdge>;
    readonly nodes: ReadonlyArray<InstitutionJson>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type InstitutionJsonRights = {
    readonly holder: Scalars["String"];
    readonly statements: ReadonlyArray<Scalars["String"]>;
  };

  type InstitutionJsonRightsFilterInput = {
    readonly holder: Maybe<StringQueryOperatorInput>;
    readonly statements: Maybe<StringQueryOperatorInput>;
  };

  type InstitutionJsonSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<InstitutionJsonFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type Internal = {
    readonly content: Maybe<Scalars["String"]>;
    readonly contentDigest: Scalars["String"];
    readonly description: Maybe<Scalars["String"]>;
    readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly ignoreType: Maybe<Scalars["Boolean"]>;
    readonly mediaType: Maybe<Scalars["String"]>;
    readonly owner: Scalars["String"];
    readonly type: Scalars["String"];
  };

  type InternalFilterInput = {
    readonly content: Maybe<StringQueryOperatorInput>;
    readonly contentDigest: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly fieldOwners: Maybe<StringQueryOperatorInput>;
    readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
    readonly mediaType: Maybe<StringQueryOperatorInput>;
    readonly owner: Maybe<StringQueryOperatorInput>;
    readonly type: Maybe<StringQueryOperatorInput>;
  };

  type IntQueryOperatorInput = {
    readonly eq: Maybe<Scalars["Int"]>;
    readonly ne: Maybe<Scalars["Int"]>;
    readonly gt: Maybe<Scalars["Int"]>;
    readonly gte: Maybe<Scalars["Int"]>;
    readonly lt: Maybe<Scalars["Int"]>;
    readonly lte: Maybe<Scalars["Int"]>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["Int"]>>>;
  };

  /** Node Interface */
  type Node = {
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type NodeFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type NodeFilterListInput = {
    readonly elemMatch: Maybe<NodeFilterInput>;
  };

  type ObjectJson = Node & {
    readonly collection_uris: ReadonlyArray<Scalars["String"]>;
    readonly descriptions: Maybe<ReadonlyArray<Scalars["String"]>>;
    readonly image_uris: Maybe<ReadonlyArray<Scalars["String"]>>;
    readonly institution_uri: Scalars["String"];
    readonly subjects: Maybe<ReadonlyArray<Scalars["String"]>>;
    readonly title: Scalars["String"];
    readonly uri: Scalars["String"];
    readonly rights: Maybe<ObjectJsonRights>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type ObjectJsonConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ObjectJsonEdge>;
    readonly nodes: ReadonlyArray<ObjectJson>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly group: ReadonlyArray<ObjectJsonGroupConnection>;
  };

  type ObjectJsonConnection_distinctArgs = {
    field: ObjectJsonFieldsEnum;
  };

  type ObjectJsonConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: ObjectJsonFieldsEnum;
  };

  type ObjectJsonEdge = {
    readonly next: Maybe<ObjectJson>;
    readonly node: ObjectJson;
    readonly previous: Maybe<ObjectJson>;
  };

  enum ObjectJsonFieldsEnum {
    collection_uris = "collection_uris",
    descriptions = "descriptions",
    image_uris = "image_uris",
    institution_uri = "institution_uri",
    subjects = "subjects",
    title = "title",
    uri = "uri",
    rights___holder = "rights.holder",
    rights___statements = "rights.statements",
    id = "id",
    parent___id = "parent.id",
    parent___parent___id = "parent.parent.id",
    parent___parent___parent___id = "parent.parent.parent.id",
    parent___parent___parent___children = "parent.parent.parent.children",
    parent___parent___children = "parent.parent.children",
    parent___parent___children___id = "parent.parent.children.id",
    parent___parent___children___children = "parent.parent.children.children",
    parent___parent___internal___content = "parent.parent.internal.content",
    parent___parent___internal___contentDigest = "parent.parent.internal.contentDigest",
    parent___parent___internal___description = "parent.parent.internal.description",
    parent___parent___internal___fieldOwners = "parent.parent.internal.fieldOwners",
    parent___parent___internal___ignoreType = "parent.parent.internal.ignoreType",
    parent___parent___internal___mediaType = "parent.parent.internal.mediaType",
    parent___parent___internal___owner = "parent.parent.internal.owner",
    parent___parent___internal___type = "parent.parent.internal.type",
    parent___children = "parent.children",
    parent___children___id = "parent.children.id",
    parent___children___parent___id = "parent.children.parent.id",
    parent___children___parent___children = "parent.children.parent.children",
    parent___children___children = "parent.children.children",
    parent___children___children___id = "parent.children.children.id",
    parent___children___children___children = "parent.children.children.children",
    parent___children___internal___content = "parent.children.internal.content",
    parent___children___internal___contentDigest = "parent.children.internal.contentDigest",
    parent___children___internal___description = "parent.children.internal.description",
    parent___children___internal___fieldOwners = "parent.children.internal.fieldOwners",
    parent___children___internal___ignoreType = "parent.children.internal.ignoreType",
    parent___children___internal___mediaType = "parent.children.internal.mediaType",
    parent___children___internal___owner = "parent.children.internal.owner",
    parent___children___internal___type = "parent.children.internal.type",
    parent___internal___content = "parent.internal.content",
    parent___internal___contentDigest = "parent.internal.contentDigest",
    parent___internal___description = "parent.internal.description",
    parent___internal___fieldOwners = "parent.internal.fieldOwners",
    parent___internal___ignoreType = "parent.internal.ignoreType",
    parent___internal___mediaType = "parent.internal.mediaType",
    parent___internal___owner = "parent.internal.owner",
    parent___internal___type = "parent.internal.type",
    children = "children",
    children___id = "children.id",
    children___parent___id = "children.parent.id",
    children___parent___parent___id = "children.parent.parent.id",
    children___parent___parent___children = "children.parent.parent.children",
    children___parent___children = "children.parent.children",
    children___parent___children___id = "children.parent.children.id",
    children___parent___children___children = "children.parent.children.children",
    children___parent___internal___content = "children.parent.internal.content",
    children___parent___internal___contentDigest = "children.parent.internal.contentDigest",
    children___parent___internal___description = "children.parent.internal.description",
    children___parent___internal___fieldOwners = "children.parent.internal.fieldOwners",
    children___parent___internal___ignoreType = "children.parent.internal.ignoreType",
    children___parent___internal___mediaType = "children.parent.internal.mediaType",
    children___parent___internal___owner = "children.parent.internal.owner",
    children___parent___internal___type = "children.parent.internal.type",
    children___children = "children.children",
    children___children___id = "children.children.id",
    children___children___parent___id = "children.children.parent.id",
    children___children___parent___children = "children.children.parent.children",
    children___children___children = "children.children.children",
    children___children___children___id = "children.children.children.id",
    children___children___children___children = "children.children.children.children",
    children___children___internal___content = "children.children.internal.content",
    children___children___internal___contentDigest = "children.children.internal.contentDigest",
    children___children___internal___description = "children.children.internal.description",
    children___children___internal___fieldOwners = "children.children.internal.fieldOwners",
    children___children___internal___ignoreType = "children.children.internal.ignoreType",
    children___children___internal___mediaType = "children.children.internal.mediaType",
    children___children___internal___owner = "children.children.internal.owner",
    children___children___internal___type = "children.children.internal.type",
    children___internal___content = "children.internal.content",
    children___internal___contentDigest = "children.internal.contentDigest",
    children___internal___description = "children.internal.description",
    children___internal___fieldOwners = "children.internal.fieldOwners",
    children___internal___ignoreType = "children.internal.ignoreType",
    children___internal___mediaType = "children.internal.mediaType",
    children___internal___owner = "children.internal.owner",
    children___internal___type = "children.internal.type",
    internal___content = "internal.content",
    internal___contentDigest = "internal.contentDigest",
    internal___description = "internal.description",
    internal___fieldOwners = "internal.fieldOwners",
    internal___ignoreType = "internal.ignoreType",
    internal___mediaType = "internal.mediaType",
    internal___owner = "internal.owner",
    internal___type = "internal.type",
  }

  type ObjectJsonFilterInput = {
    readonly collection_uris: Maybe<StringQueryOperatorInput>;
    readonly descriptions: Maybe<StringQueryOperatorInput>;
    readonly image_uris: Maybe<StringQueryOperatorInput>;
    readonly institution_uri: Maybe<StringQueryOperatorInput>;
    readonly subjects: Maybe<StringQueryOperatorInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly uri: Maybe<StringQueryOperatorInput>;
    readonly rights: Maybe<ObjectJsonRightsFilterInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type ObjectJsonGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<ObjectJsonEdge>;
    readonly nodes: ReadonlyArray<ObjectJson>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type ObjectJsonRights = {
    readonly holder: Scalars["String"];
    readonly statements: ReadonlyArray<Scalars["String"]>;
  };

  type ObjectJsonRightsFilterInput = {
    readonly holder: Maybe<StringQueryOperatorInput>;
    readonly statements: Maybe<StringQueryOperatorInput>;
  };

  type ObjectJsonSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<ObjectJsonFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type PageInfo = {
    readonly currentPage: Scalars["Int"];
    readonly hasPreviousPage: Scalars["Boolean"];
    readonly hasNextPage: Scalars["Boolean"];
    readonly itemCount: Scalars["Int"];
    readonly pageCount: Scalars["Int"];
    readonly perPage: Maybe<Scalars["Int"]>;
    readonly totalCount: Scalars["Int"];
  };

  type Query = {
    readonly file: Maybe<File>;
    readonly allFile: FileConnection;
    readonly directory: Maybe<Directory>;
    readonly allDirectory: DirectoryConnection;
    readonly sitePage: Maybe<SitePage>;
    readonly allSitePage: SitePageConnection;
    readonly site: Maybe<Site>;
    readonly allSite: SiteConnection;
    readonly collectionJson: Maybe<CollectionJson>;
    readonly allCollectionJson: CollectionJsonConnection;
    readonly institutionJson: Maybe<InstitutionJson>;
    readonly allInstitutionJson: InstitutionJsonConnection;
    readonly objectJson: Maybe<ObjectJson>;
    readonly allObjectJson: ObjectJsonConnection;
    readonly imageJson: Maybe<ImageJson>;
    readonly allImageJson: ImageJsonConnection;
    readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
    readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
    readonly sitePlugin: Maybe<SitePlugin>;
    readonly allSitePlugin: SitePluginConnection;
  };

  type Query_fileArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    ino: Maybe<FloatQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    birthtime: Maybe<DateQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    publicURL: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    childCollectionJson: Maybe<CollectionJsonFilterInput>;
    childInstitutionJson: Maybe<InstitutionJsonFilterInput>;
    childObjectJson: Maybe<ObjectJsonFilterInput>;
    childImageJson: Maybe<ImageJsonFilterInput>;
  };

  type Query_allFileArgs = {
    filter: Maybe<FileFilterInput>;
    sort: Maybe<FileSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_directoryArgs = {
    sourceInstanceName: Maybe<StringQueryOperatorInput>;
    absolutePath: Maybe<StringQueryOperatorInput>;
    relativePath: Maybe<StringQueryOperatorInput>;
    extension: Maybe<StringQueryOperatorInput>;
    size: Maybe<IntQueryOperatorInput>;
    prettySize: Maybe<StringQueryOperatorInput>;
    modifiedTime: Maybe<DateQueryOperatorInput>;
    accessTime: Maybe<DateQueryOperatorInput>;
    changeTime: Maybe<DateQueryOperatorInput>;
    birthTime: Maybe<DateQueryOperatorInput>;
    root: Maybe<StringQueryOperatorInput>;
    dir: Maybe<StringQueryOperatorInput>;
    base: Maybe<StringQueryOperatorInput>;
    ext: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    relativeDirectory: Maybe<StringQueryOperatorInput>;
    dev: Maybe<IntQueryOperatorInput>;
    mode: Maybe<IntQueryOperatorInput>;
    nlink: Maybe<IntQueryOperatorInput>;
    uid: Maybe<IntQueryOperatorInput>;
    gid: Maybe<IntQueryOperatorInput>;
    rdev: Maybe<IntQueryOperatorInput>;
    ino: Maybe<FloatQueryOperatorInput>;
    atimeMs: Maybe<FloatQueryOperatorInput>;
    mtimeMs: Maybe<FloatQueryOperatorInput>;
    ctimeMs: Maybe<FloatQueryOperatorInput>;
    atime: Maybe<DateQueryOperatorInput>;
    mtime: Maybe<DateQueryOperatorInput>;
    ctime: Maybe<DateQueryOperatorInput>;
    birthtime: Maybe<DateQueryOperatorInput>;
    birthtimeMs: Maybe<FloatQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allDirectoryArgs = {
    filter: Maybe<DirectoryFilterInput>;
    sort: Maybe<DirectorySortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_sitePageArgs = {
    path: Maybe<StringQueryOperatorInput>;
    component: Maybe<StringQueryOperatorInput>;
    internalComponentName: Maybe<StringQueryOperatorInput>;
    componentChunkName: Maybe<StringQueryOperatorInput>;
    matchPath: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
    context: Maybe<SitePageContextFilterInput>;
    pluginCreator: Maybe<SitePluginFilterInput>;
    pluginCreatorId: Maybe<StringQueryOperatorInput>;
    componentPath: Maybe<StringQueryOperatorInput>;
  };

  type Query_allSitePageArgs = {
    filter: Maybe<SitePageFilterInput>;
    sort: Maybe<SitePageSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_siteArgs = {
    buildTime: Maybe<DateQueryOperatorInput>;
    siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
    port: Maybe<IntQueryOperatorInput>;
    host: Maybe<StringQueryOperatorInput>;
    polyfill: Maybe<BooleanQueryOperatorInput>;
    pathPrefix: Maybe<StringQueryOperatorInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allSiteArgs = {
    filter: Maybe<SiteFilterInput>;
    sort: Maybe<SiteSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_collectionJsonArgs = {
    institution_uri: Maybe<StringQueryOperatorInput>;
    title: Maybe<StringQueryOperatorInput>;
    uri: Maybe<StringQueryOperatorInput>;
    rights: Maybe<CollectionJsonRightsFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allCollectionJsonArgs = {
    filter: Maybe<CollectionJsonFilterInput>;
    sort: Maybe<CollectionJsonSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_institutionJsonArgs = {
    name: Maybe<StringQueryOperatorInput>;
    uri: Maybe<StringQueryOperatorInput>;
    rights: Maybe<InstitutionJsonRightsFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allInstitutionJsonArgs = {
    filter: Maybe<InstitutionJsonFilterInput>;
    sort: Maybe<InstitutionJsonSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_objectJsonArgs = {
    collection_uris: Maybe<StringQueryOperatorInput>;
    descriptions: Maybe<StringQueryOperatorInput>;
    image_uris: Maybe<StringQueryOperatorInput>;
    institution_uri: Maybe<StringQueryOperatorInput>;
    subjects: Maybe<StringQueryOperatorInput>;
    title: Maybe<StringQueryOperatorInput>;
    uri: Maybe<StringQueryOperatorInput>;
    rights: Maybe<ObjectJsonRightsFilterInput>;
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
  };

  type Query_allObjectJsonArgs = {
    filter: Maybe<ObjectJsonFilterInput>;
    sort: Maybe<ObjectJsonSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_imageJsonArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    uri: Maybe<StringQueryOperatorInput>;
    derived_image_uris: Maybe<StringQueryOperatorInput>;
    exact_dimensions: Maybe<ImageJsonExact_dimensionsFilterInput>;
    max_dimensions: Maybe<ImageJsonMax_dimensionsFilterInput>;
  };

  type Query_allImageJsonArgs = {
    filter: Maybe<ImageJsonFilterInput>;
    sort: Maybe<ImageJsonSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_siteBuildMetadataArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    buildTime: Maybe<DateQueryOperatorInput>;
  };

  type Query_allSiteBuildMetadataArgs = {
    filter: Maybe<SiteBuildMetadataFilterInput>;
    sort: Maybe<SiteBuildMetadataSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Query_sitePluginArgs = {
    id: Maybe<StringQueryOperatorInput>;
    parent: Maybe<NodeFilterInput>;
    children: Maybe<NodeFilterListInput>;
    internal: Maybe<InternalFilterInput>;
    resolve: Maybe<StringQueryOperatorInput>;
    name: Maybe<StringQueryOperatorInput>;
    version: Maybe<StringQueryOperatorInput>;
    pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs: Maybe<StringQueryOperatorInput>;
    browserAPIs: Maybe<StringQueryOperatorInput>;
    ssrAPIs: Maybe<StringQueryOperatorInput>;
    pluginFilepath: Maybe<StringQueryOperatorInput>;
    packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  };

  type Query_allSitePluginArgs = {
    filter: Maybe<SitePluginFilterInput>;
    sort: Maybe<SitePluginSortInput>;
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
  };

  type Site = Node & {
    readonly buildTime: Maybe<Scalars["Date"]>;
    readonly siteMetadata: Maybe<SiteSiteMetadata>;
    readonly port: Maybe<Scalars["Int"]>;
    readonly host: Maybe<Scalars["String"]>;
    readonly polyfill: Maybe<Scalars["Boolean"]>;
    readonly pathPrefix: Maybe<Scalars["String"]>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
  };

  type Site_buildTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type SiteBuildMetadata = Node & {
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly buildTime: Maybe<Scalars["Date"]>;
  };

  type SiteBuildMetadata_buildTimeArgs = {
    formatString: Maybe<Scalars["String"]>;
    fromNow: Maybe<Scalars["Boolean"]>;
    difference: Maybe<Scalars["String"]>;
    locale: Maybe<Scalars["String"]>;
  };

  type SiteBuildMetadataConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  };

  type SiteBuildMetadataConnection_distinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SiteBuildMetadataFieldsEnum;
  };

  type SiteBuildMetadataEdge = {
    readonly next: Maybe<SiteBuildMetadata>;
    readonly node: SiteBuildMetadata;
    readonly previous: Maybe<SiteBuildMetadata>;
  };

  enum SiteBuildMetadataFieldsEnum {
    id = "id",
    parent___id = "parent.id",
    parent___parent___id = "parent.parent.id",
    parent___parent___parent___id = "parent.parent.parent.id",
    parent___parent___parent___children = "parent.parent.parent.children",
    parent___parent___children = "parent.parent.children",
    parent___parent___children___id = "parent.parent.children.id",
    parent___parent___children___children = "parent.parent.children.children",
    parent___parent___internal___content = "parent.parent.internal.content",
    parent___parent___internal___contentDigest = "parent.parent.internal.contentDigest",
    parent___parent___internal___description = "parent.parent.internal.description",
    parent___parent___internal___fieldOwners = "parent.parent.internal.fieldOwners",
    parent___parent___internal___ignoreType = "parent.parent.internal.ignoreType",
    parent___parent___internal___mediaType = "parent.parent.internal.mediaType",
    parent___parent___internal___owner = "parent.parent.internal.owner",
    parent___parent___internal___type = "parent.parent.internal.type",
    parent___children = "parent.children",
    parent___children___id = "parent.children.id",
    parent___children___parent___id = "parent.children.parent.id",
    parent___children___parent___children = "parent.children.parent.children",
    parent___children___children = "parent.children.children",
    parent___children___children___id = "parent.children.children.id",
    parent___children___children___children = "parent.children.children.children",
    parent___children___internal___content = "parent.children.internal.content",
    parent___children___internal___contentDigest = "parent.children.internal.contentDigest",
    parent___children___internal___description = "parent.children.internal.description",
    parent___children___internal___fieldOwners = "parent.children.internal.fieldOwners",
    parent___children___internal___ignoreType = "parent.children.internal.ignoreType",
    parent___children___internal___mediaType = "parent.children.internal.mediaType",
    parent___children___internal___owner = "parent.children.internal.owner",
    parent___children___internal___type = "parent.children.internal.type",
    parent___internal___content = "parent.internal.content",
    parent___internal___contentDigest = "parent.internal.contentDigest",
    parent___internal___description = "parent.internal.description",
    parent___internal___fieldOwners = "parent.internal.fieldOwners",
    parent___internal___ignoreType = "parent.internal.ignoreType",
    parent___internal___mediaType = "parent.internal.mediaType",
    parent___internal___owner = "parent.internal.owner",
    parent___internal___type = "parent.internal.type",
    children = "children",
    children___id = "children.id",
    children___parent___id = "children.parent.id",
    children___parent___parent___id = "children.parent.parent.id",
    children___parent___parent___children = "children.parent.parent.children",
    children___parent___children = "children.parent.children",
    children___parent___children___id = "children.parent.children.id",
    children___parent___children___children = "children.parent.children.children",
    children___parent___internal___content = "children.parent.internal.content",
    children___parent___internal___contentDigest = "children.parent.internal.contentDigest",
    children___parent___internal___description = "children.parent.internal.description",
    children___parent___internal___fieldOwners = "children.parent.internal.fieldOwners",
    children___parent___internal___ignoreType = "children.parent.internal.ignoreType",
    children___parent___internal___mediaType = "children.parent.internal.mediaType",
    children___parent___internal___owner = "children.parent.internal.owner",
    children___parent___internal___type = "children.parent.internal.type",
    children___children = "children.children",
    children___children___id = "children.children.id",
    children___children___parent___id = "children.children.parent.id",
    children___children___parent___children = "children.children.parent.children",
    children___children___children = "children.children.children",
    children___children___children___id = "children.children.children.id",
    children___children___children___children = "children.children.children.children",
    children___children___internal___content = "children.children.internal.content",
    children___children___internal___contentDigest = "children.children.internal.contentDigest",
    children___children___internal___description = "children.children.internal.description",
    children___children___internal___fieldOwners = "children.children.internal.fieldOwners",
    children___children___internal___ignoreType = "children.children.internal.ignoreType",
    children___children___internal___mediaType = "children.children.internal.mediaType",
    children___children___internal___owner = "children.children.internal.owner",
    children___children___internal___type = "children.children.internal.type",
    children___internal___content = "children.internal.content",
    children___internal___contentDigest = "children.internal.contentDigest",
    children___internal___description = "children.internal.description",
    children___internal___fieldOwners = "children.internal.fieldOwners",
    children___internal___ignoreType = "children.internal.ignoreType",
    children___internal___mediaType = "children.internal.mediaType",
    children___internal___owner = "children.internal.owner",
    children___internal___type = "children.internal.type",
    internal___content = "internal.content",
    internal___contentDigest = "internal.contentDigest",
    internal___description = "internal.description",
    internal___fieldOwners = "internal.fieldOwners",
    internal___ignoreType = "internal.ignoreType",
    internal___mediaType = "internal.mediaType",
    internal___owner = "internal.owner",
    internal___type = "internal.type",
    buildTime = "buildTime",
  }

  type SiteBuildMetadataFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly buildTime: Maybe<DateQueryOperatorInput>;
  };

  type SiteBuildMetadataGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
    readonly nodes: ReadonlyArray<SiteBuildMetadata>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type SiteBuildMetadataSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SiteConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly group: ReadonlyArray<SiteGroupConnection>;
  };

  type SiteConnection_distinctArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SiteFieldsEnum;
  };

  type SiteEdge = {
    readonly next: Maybe<Site>;
    readonly node: Site;
    readonly previous: Maybe<Site>;
  };

  enum SiteFieldsEnum {
    buildTime = "buildTime",
    siteMetadata___author___name = "siteMetadata.author.name",
    siteMetadata___author___url = "siteMetadata.author.url",
    siteMetadata___author___email = "siteMetadata.author.email",
    siteMetadata___description = "siteMetadata.description",
    siteMetadata___gitHubUrl = "siteMetadata.gitHubUrl",
    siteMetadata___keywords = "siteMetadata.keywords",
    siteMetadata___title = "siteMetadata.title",
    port = "port",
    host = "host",
    polyfill = "polyfill",
    pathPrefix = "pathPrefix",
    id = "id",
    parent___id = "parent.id",
    parent___parent___id = "parent.parent.id",
    parent___parent___parent___id = "parent.parent.parent.id",
    parent___parent___parent___children = "parent.parent.parent.children",
    parent___parent___children = "parent.parent.children",
    parent___parent___children___id = "parent.parent.children.id",
    parent___parent___children___children = "parent.parent.children.children",
    parent___parent___internal___content = "parent.parent.internal.content",
    parent___parent___internal___contentDigest = "parent.parent.internal.contentDigest",
    parent___parent___internal___description = "parent.parent.internal.description",
    parent___parent___internal___fieldOwners = "parent.parent.internal.fieldOwners",
    parent___parent___internal___ignoreType = "parent.parent.internal.ignoreType",
    parent___parent___internal___mediaType = "parent.parent.internal.mediaType",
    parent___parent___internal___owner = "parent.parent.internal.owner",
    parent___parent___internal___type = "parent.parent.internal.type",
    parent___children = "parent.children",
    parent___children___id = "parent.children.id",
    parent___children___parent___id = "parent.children.parent.id",
    parent___children___parent___children = "parent.children.parent.children",
    parent___children___children = "parent.children.children",
    parent___children___children___id = "parent.children.children.id",
    parent___children___children___children = "parent.children.children.children",
    parent___children___internal___content = "parent.children.internal.content",
    parent___children___internal___contentDigest = "parent.children.internal.contentDigest",
    parent___children___internal___description = "parent.children.internal.description",
    parent___children___internal___fieldOwners = "parent.children.internal.fieldOwners",
    parent___children___internal___ignoreType = "parent.children.internal.ignoreType",
    parent___children___internal___mediaType = "parent.children.internal.mediaType",
    parent___children___internal___owner = "parent.children.internal.owner",
    parent___children___internal___type = "parent.children.internal.type",
    parent___internal___content = "parent.internal.content",
    parent___internal___contentDigest = "parent.internal.contentDigest",
    parent___internal___description = "parent.internal.description",
    parent___internal___fieldOwners = "parent.internal.fieldOwners",
    parent___internal___ignoreType = "parent.internal.ignoreType",
    parent___internal___mediaType = "parent.internal.mediaType",
    parent___internal___owner = "parent.internal.owner",
    parent___internal___type = "parent.internal.type",
    children = "children",
    children___id = "children.id",
    children___parent___id = "children.parent.id",
    children___parent___parent___id = "children.parent.parent.id",
    children___parent___parent___children = "children.parent.parent.children",
    children___parent___children = "children.parent.children",
    children___parent___children___id = "children.parent.children.id",
    children___parent___children___children = "children.parent.children.children",
    children___parent___internal___content = "children.parent.internal.content",
    children___parent___internal___contentDigest = "children.parent.internal.contentDigest",
    children___parent___internal___description = "children.parent.internal.description",
    children___parent___internal___fieldOwners = "children.parent.internal.fieldOwners",
    children___parent___internal___ignoreType = "children.parent.internal.ignoreType",
    children___parent___internal___mediaType = "children.parent.internal.mediaType",
    children___parent___internal___owner = "children.parent.internal.owner",
    children___parent___internal___type = "children.parent.internal.type",
    children___children = "children.children",
    children___children___id = "children.children.id",
    children___children___parent___id = "children.children.parent.id",
    children___children___parent___children = "children.children.parent.children",
    children___children___children = "children.children.children",
    children___children___children___id = "children.children.children.id",
    children___children___children___children = "children.children.children.children",
    children___children___internal___content = "children.children.internal.content",
    children___children___internal___contentDigest = "children.children.internal.contentDigest",
    children___children___internal___description = "children.children.internal.description",
    children___children___internal___fieldOwners = "children.children.internal.fieldOwners",
    children___children___internal___ignoreType = "children.children.internal.ignoreType",
    children___children___internal___mediaType = "children.children.internal.mediaType",
    children___children___internal___owner = "children.children.internal.owner",
    children___children___internal___type = "children.children.internal.type",
    children___internal___content = "children.internal.content",
    children___internal___contentDigest = "children.internal.contentDigest",
    children___internal___description = "children.internal.description",
    children___internal___fieldOwners = "children.internal.fieldOwners",
    children___internal___ignoreType = "children.internal.ignoreType",
    children___internal___mediaType = "children.internal.mediaType",
    children___internal___owner = "children.internal.owner",
    children___internal___type = "children.internal.type",
    internal___content = "internal.content",
    internal___contentDigest = "internal.contentDigest",
    internal___description = "internal.description",
    internal___fieldOwners = "internal.fieldOwners",
    internal___ignoreType = "internal.ignoreType",
    internal___mediaType = "internal.mediaType",
    internal___owner = "internal.owner",
    internal___type = "internal.type",
  }

  type SiteFilterInput = {
    readonly buildTime: Maybe<DateQueryOperatorInput>;
    readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
    readonly port: Maybe<IntQueryOperatorInput>;
    readonly host: Maybe<StringQueryOperatorInput>;
    readonly polyfill: Maybe<BooleanQueryOperatorInput>;
    readonly pathPrefix: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
  };

  type SiteGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SiteEdge>;
    readonly nodes: ReadonlyArray<Site>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type SitePage = Node & {
    readonly path: Scalars["String"];
    readonly component: Scalars["String"];
    readonly internalComponentName: Scalars["String"];
    readonly componentChunkName: Scalars["String"];
    readonly matchPath: Maybe<Scalars["String"]>;
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly isCreatedByStatefulCreatePages: Maybe<Scalars["Boolean"]>;
    readonly context: Maybe<SitePageContext>;
    readonly pluginCreator: Maybe<SitePlugin>;
    readonly pluginCreatorId: Maybe<Scalars["String"]>;
    readonly componentPath: Maybe<Scalars["String"]>;
  };

  type SitePageConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly group: ReadonlyArray<SitePageGroupConnection>;
  };

  type SitePageConnection_distinctArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SitePageFieldsEnum;
  };

  type SitePageContext = {
    readonly collection: Maybe<SitePageContextCollection>;
    readonly institution: Maybe<SitePageContextInstitution>;
    readonly collections: Maybe<
      ReadonlyArray<Maybe<SitePageContextCollections>>
    >;
  };

  type SitePageContextCollection = {
    readonly institution_uri: Maybe<Scalars["String"]>;
    readonly rights: Maybe<SitePageContextCollectionRights>;
    readonly title: Maybe<Scalars["String"]>;
    readonly uri: Maybe<Scalars["String"]>;
  };

  type SitePageContextCollectionFilterInput = {
    readonly institution_uri: Maybe<StringQueryOperatorInput>;
    readonly rights: Maybe<SitePageContextCollectionRightsFilterInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly uri: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextCollectionRights = {
    readonly holder: Maybe<Scalars["String"]>;
    readonly statements: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  };

  type SitePageContextCollectionRightsFilterInput = {
    readonly holder: Maybe<StringQueryOperatorInput>;
    readonly statements: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextCollections = {
    readonly institution_uri: Maybe<Scalars["String"]>;
    readonly rights: Maybe<SitePageContextCollectionsRights>;
    readonly title: Maybe<Scalars["String"]>;
    readonly uri: Maybe<Scalars["String"]>;
  };

  type SitePageContextCollectionsFilterInput = {
    readonly institution_uri: Maybe<StringQueryOperatorInput>;
    readonly rights: Maybe<SitePageContextCollectionsRightsFilterInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
    readonly uri: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextCollectionsFilterListInput = {
    readonly elemMatch: Maybe<SitePageContextCollectionsFilterInput>;
  };

  type SitePageContextCollectionsRights = {
    readonly holder: Maybe<Scalars["String"]>;
    readonly statements: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  };

  type SitePageContextCollectionsRightsFilterInput = {
    readonly holder: Maybe<StringQueryOperatorInput>;
    readonly statements: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextFilterInput = {
    readonly collection: Maybe<SitePageContextCollectionFilterInput>;
    readonly institution: Maybe<SitePageContextInstitutionFilterInput>;
    readonly collections: Maybe<SitePageContextCollectionsFilterListInput>;
  };

  type SitePageContextInstitution = {
    readonly name: Maybe<Scalars["String"]>;
    readonly rights: Maybe<SitePageContextInstitutionRights>;
    readonly uri: Maybe<Scalars["String"]>;
  };

  type SitePageContextInstitutionFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly rights: Maybe<SitePageContextInstitutionRightsFilterInput>;
    readonly uri: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextInstitutionRights = {
    readonly holder: Maybe<Scalars["String"]>;
    readonly statements: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  };

  type SitePageContextInstitutionRightsFilterInput = {
    readonly holder: Maybe<StringQueryOperatorInput>;
    readonly statements: Maybe<StringQueryOperatorInput>;
  };

  type SitePageEdge = {
    readonly next: Maybe<SitePage>;
    readonly node: SitePage;
    readonly previous: Maybe<SitePage>;
  };

  enum SitePageFieldsEnum {
    path = "path",
    component = "component",
    internalComponentName = "internalComponentName",
    componentChunkName = "componentChunkName",
    matchPath = "matchPath",
    id = "id",
    parent___id = "parent.id",
    parent___parent___id = "parent.parent.id",
    parent___parent___parent___id = "parent.parent.parent.id",
    parent___parent___parent___children = "parent.parent.parent.children",
    parent___parent___children = "parent.parent.children",
    parent___parent___children___id = "parent.parent.children.id",
    parent___parent___children___children = "parent.parent.children.children",
    parent___parent___internal___content = "parent.parent.internal.content",
    parent___parent___internal___contentDigest = "parent.parent.internal.contentDigest",
    parent___parent___internal___description = "parent.parent.internal.description",
    parent___parent___internal___fieldOwners = "parent.parent.internal.fieldOwners",
    parent___parent___internal___ignoreType = "parent.parent.internal.ignoreType",
    parent___parent___internal___mediaType = "parent.parent.internal.mediaType",
    parent___parent___internal___owner = "parent.parent.internal.owner",
    parent___parent___internal___type = "parent.parent.internal.type",
    parent___children = "parent.children",
    parent___children___id = "parent.children.id",
    parent___children___parent___id = "parent.children.parent.id",
    parent___children___parent___children = "parent.children.parent.children",
    parent___children___children = "parent.children.children",
    parent___children___children___id = "parent.children.children.id",
    parent___children___children___children = "parent.children.children.children",
    parent___children___internal___content = "parent.children.internal.content",
    parent___children___internal___contentDigest = "parent.children.internal.contentDigest",
    parent___children___internal___description = "parent.children.internal.description",
    parent___children___internal___fieldOwners = "parent.children.internal.fieldOwners",
    parent___children___internal___ignoreType = "parent.children.internal.ignoreType",
    parent___children___internal___mediaType = "parent.children.internal.mediaType",
    parent___children___internal___owner = "parent.children.internal.owner",
    parent___children___internal___type = "parent.children.internal.type",
    parent___internal___content = "parent.internal.content",
    parent___internal___contentDigest = "parent.internal.contentDigest",
    parent___internal___description = "parent.internal.description",
    parent___internal___fieldOwners = "parent.internal.fieldOwners",
    parent___internal___ignoreType = "parent.internal.ignoreType",
    parent___internal___mediaType = "parent.internal.mediaType",
    parent___internal___owner = "parent.internal.owner",
    parent___internal___type = "parent.internal.type",
    children = "children",
    children___id = "children.id",
    children___parent___id = "children.parent.id",
    children___parent___parent___id = "children.parent.parent.id",
    children___parent___parent___children = "children.parent.parent.children",
    children___parent___children = "children.parent.children",
    children___parent___children___id = "children.parent.children.id",
    children___parent___children___children = "children.parent.children.children",
    children___parent___internal___content = "children.parent.internal.content",
    children___parent___internal___contentDigest = "children.parent.internal.contentDigest",
    children___parent___internal___description = "children.parent.internal.description",
    children___parent___internal___fieldOwners = "children.parent.internal.fieldOwners",
    children___parent___internal___ignoreType = "children.parent.internal.ignoreType",
    children___parent___internal___mediaType = "children.parent.internal.mediaType",
    children___parent___internal___owner = "children.parent.internal.owner",
    children___parent___internal___type = "children.parent.internal.type",
    children___children = "children.children",
    children___children___id = "children.children.id",
    children___children___parent___id = "children.children.parent.id",
    children___children___parent___children = "children.children.parent.children",
    children___children___children = "children.children.children",
    children___children___children___id = "children.children.children.id",
    children___children___children___children = "children.children.children.children",
    children___children___internal___content = "children.children.internal.content",
    children___children___internal___contentDigest = "children.children.internal.contentDigest",
    children___children___internal___description = "children.children.internal.description",
    children___children___internal___fieldOwners = "children.children.internal.fieldOwners",
    children___children___internal___ignoreType = "children.children.internal.ignoreType",
    children___children___internal___mediaType = "children.children.internal.mediaType",
    children___children___internal___owner = "children.children.internal.owner",
    children___children___internal___type = "children.children.internal.type",
    children___internal___content = "children.internal.content",
    children___internal___contentDigest = "children.internal.contentDigest",
    children___internal___description = "children.internal.description",
    children___internal___fieldOwners = "children.internal.fieldOwners",
    children___internal___ignoreType = "children.internal.ignoreType",
    children___internal___mediaType = "children.internal.mediaType",
    children___internal___owner = "children.internal.owner",
    children___internal___type = "children.internal.type",
    internal___content = "internal.content",
    internal___contentDigest = "internal.contentDigest",
    internal___description = "internal.description",
    internal___fieldOwners = "internal.fieldOwners",
    internal___ignoreType = "internal.ignoreType",
    internal___mediaType = "internal.mediaType",
    internal___owner = "internal.owner",
    internal___type = "internal.type",
    isCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
    context___collection___institution_uri = "context.collection.institution_uri",
    context___collection___rights___holder = "context.collection.rights.holder",
    context___collection___rights___statements = "context.collection.rights.statements",
    context___collection___title = "context.collection.title",
    context___collection___uri = "context.collection.uri",
    context___institution___name = "context.institution.name",
    context___institution___rights___holder = "context.institution.rights.holder",
    context___institution___rights___statements = "context.institution.rights.statements",
    context___institution___uri = "context.institution.uri",
    context___collections = "context.collections",
    context___collections___institution_uri = "context.collections.institution_uri",
    context___collections___rights___holder = "context.collections.rights.holder",
    context___collections___rights___statements = "context.collections.rights.statements",
    context___collections___title = "context.collections.title",
    context___collections___uri = "context.collections.uri",
    pluginCreator___id = "pluginCreator.id",
    pluginCreator___parent___id = "pluginCreator.parent.id",
    pluginCreator___parent___parent___id = "pluginCreator.parent.parent.id",
    pluginCreator___parent___parent___children = "pluginCreator.parent.parent.children",
    pluginCreator___parent___children = "pluginCreator.parent.children",
    pluginCreator___parent___children___id = "pluginCreator.parent.children.id",
    pluginCreator___parent___children___children = "pluginCreator.parent.children.children",
    pluginCreator___parent___internal___content = "pluginCreator.parent.internal.content",
    pluginCreator___parent___internal___contentDigest = "pluginCreator.parent.internal.contentDigest",
    pluginCreator___parent___internal___description = "pluginCreator.parent.internal.description",
    pluginCreator___parent___internal___fieldOwners = "pluginCreator.parent.internal.fieldOwners",
    pluginCreator___parent___internal___ignoreType = "pluginCreator.parent.internal.ignoreType",
    pluginCreator___parent___internal___mediaType = "pluginCreator.parent.internal.mediaType",
    pluginCreator___parent___internal___owner = "pluginCreator.parent.internal.owner",
    pluginCreator___parent___internal___type = "pluginCreator.parent.internal.type",
    pluginCreator___children = "pluginCreator.children",
    pluginCreator___children___id = "pluginCreator.children.id",
    pluginCreator___children___parent___id = "pluginCreator.children.parent.id",
    pluginCreator___children___parent___children = "pluginCreator.children.parent.children",
    pluginCreator___children___children = "pluginCreator.children.children",
    pluginCreator___children___children___id = "pluginCreator.children.children.id",
    pluginCreator___children___children___children = "pluginCreator.children.children.children",
    pluginCreator___children___internal___content = "pluginCreator.children.internal.content",
    pluginCreator___children___internal___contentDigest = "pluginCreator.children.internal.contentDigest",
    pluginCreator___children___internal___description = "pluginCreator.children.internal.description",
    pluginCreator___children___internal___fieldOwners = "pluginCreator.children.internal.fieldOwners",
    pluginCreator___children___internal___ignoreType = "pluginCreator.children.internal.ignoreType",
    pluginCreator___children___internal___mediaType = "pluginCreator.children.internal.mediaType",
    pluginCreator___children___internal___owner = "pluginCreator.children.internal.owner",
    pluginCreator___children___internal___type = "pluginCreator.children.internal.type",
    pluginCreator___internal___content = "pluginCreator.internal.content",
    pluginCreator___internal___contentDigest = "pluginCreator.internal.contentDigest",
    pluginCreator___internal___description = "pluginCreator.internal.description",
    pluginCreator___internal___fieldOwners = "pluginCreator.internal.fieldOwners",
    pluginCreator___internal___ignoreType = "pluginCreator.internal.ignoreType",
    pluginCreator___internal___mediaType = "pluginCreator.internal.mediaType",
    pluginCreator___internal___owner = "pluginCreator.internal.owner",
    pluginCreator___internal___type = "pluginCreator.internal.type",
    pluginCreator___resolve = "pluginCreator.resolve",
    pluginCreator___name = "pluginCreator.name",
    pluginCreator___version = "pluginCreator.version",
    pluginCreator___pluginOptions___fonts = "pluginCreator.pluginOptions.fonts",
    pluginCreator___pluginOptions___fonts___family = "pluginCreator.pluginOptions.fonts.family",
    pluginCreator___pluginOptions___fonts___variants = "pluginCreator.pluginOptions.fonts.variants",
    pluginCreator___pluginOptions___outputPath = "pluginCreator.pluginOptions.outputPath",
    pluginCreator___pluginOptions___emitSchema___C__Users_minor_projects_personal_paradicms_gui_generic__gatsby_graphql_schema_graphql = "pluginCreator.pluginOptions.emitSchema.C__Users_minor_projects_personal_paradicms_gui_generic__gatsby_graphql_schema_graphql",
    pluginCreator___pluginOptions___codegen = "pluginCreator.pluginOptions.codegen",
    pluginCreator___pluginOptions___name = "pluginCreator.pluginOptions.name",
    pluginCreator___pluginOptions___path = "pluginCreator.pluginOptions.path",
    pluginCreator___pluginOptions___projectRoot = "pluginCreator.pluginOptions.projectRoot",
    pluginCreator___pluginOptions___configDir = "pluginCreator.pluginOptions.configDir",
    pluginCreator___pluginOptions___pathCheck = "pluginCreator.pluginOptions.pathCheck",
    pluginCreator___nodeAPIs = "pluginCreator.nodeAPIs",
    pluginCreator___browserAPIs = "pluginCreator.browserAPIs",
    pluginCreator___ssrAPIs = "pluginCreator.ssrAPIs",
    pluginCreator___pluginFilepath = "pluginCreator.pluginFilepath",
    pluginCreator___packageJson___name = "pluginCreator.packageJson.name",
    pluginCreator___packageJson___description = "pluginCreator.packageJson.description",
    pluginCreator___packageJson___version = "pluginCreator.packageJson.version",
    pluginCreator___packageJson___main = "pluginCreator.packageJson.main",
    pluginCreator___packageJson___license = "pluginCreator.packageJson.license",
    pluginCreator___packageJson___dependencies = "pluginCreator.packageJson.dependencies",
    pluginCreator___packageJson___dependencies___name = "pluginCreator.packageJson.dependencies.name",
    pluginCreator___packageJson___dependencies___version = "pluginCreator.packageJson.dependencies.version",
    pluginCreator___packageJson___devDependencies = "pluginCreator.packageJson.devDependencies",
    pluginCreator___packageJson___devDependencies___name = "pluginCreator.packageJson.devDependencies.name",
    pluginCreator___packageJson___devDependencies___version = "pluginCreator.packageJson.devDependencies.version",
    pluginCreator___packageJson___peerDependencies = "pluginCreator.packageJson.peerDependencies",
    pluginCreator___packageJson___peerDependencies___name = "pluginCreator.packageJson.peerDependencies.name",
    pluginCreator___packageJson___peerDependencies___version = "pluginCreator.packageJson.peerDependencies.version",
    pluginCreator___packageJson___keywords = "pluginCreator.packageJson.keywords",
    pluginCreatorId = "pluginCreatorId",
    componentPath = "componentPath",
  }

  type SitePageFilterInput = {
    readonly path: Maybe<StringQueryOperatorInput>;
    readonly component: Maybe<StringQueryOperatorInput>;
    readonly internalComponentName: Maybe<StringQueryOperatorInput>;
    readonly componentChunkName: Maybe<StringQueryOperatorInput>;
    readonly matchPath: Maybe<StringQueryOperatorInput>;
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
    readonly context: Maybe<SitePageContextFilterInput>;
    readonly pluginCreator: Maybe<SitePluginFilterInput>;
    readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
    readonly componentPath: Maybe<StringQueryOperatorInput>;
  };

  type SitePageGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SitePageEdge>;
    readonly nodes: ReadonlyArray<SitePage>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type SitePageSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SitePlugin = Node & {
    readonly id: Scalars["ID"];
    readonly parent: Maybe<Node>;
    readonly children: ReadonlyArray<Node>;
    readonly internal: Internal;
    readonly resolve: Maybe<Scalars["String"]>;
    readonly name: Maybe<Scalars["String"]>;
    readonly version: Maybe<Scalars["String"]>;
    readonly pluginOptions: Maybe<SitePluginPluginOptions>;
    readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly pluginFilepath: Maybe<Scalars["String"]>;
    readonly packageJson: Maybe<SitePluginPackageJson>;
  };

  type SitePluginConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly distinct: ReadonlyArray<Scalars["String"]>;
    readonly group: ReadonlyArray<SitePluginGroupConnection>;
  };

  type SitePluginConnection_distinctArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnection_groupArgs = {
    skip: Maybe<Scalars["Int"]>;
    limit: Maybe<Scalars["Int"]>;
    field: SitePluginFieldsEnum;
  };

  type SitePluginEdge = {
    readonly next: Maybe<SitePlugin>;
    readonly node: SitePlugin;
    readonly previous: Maybe<SitePlugin>;
  };

  enum SitePluginFieldsEnum {
    id = "id",
    parent___id = "parent.id",
    parent___parent___id = "parent.parent.id",
    parent___parent___parent___id = "parent.parent.parent.id",
    parent___parent___parent___children = "parent.parent.parent.children",
    parent___parent___children = "parent.parent.children",
    parent___parent___children___id = "parent.parent.children.id",
    parent___parent___children___children = "parent.parent.children.children",
    parent___parent___internal___content = "parent.parent.internal.content",
    parent___parent___internal___contentDigest = "parent.parent.internal.contentDigest",
    parent___parent___internal___description = "parent.parent.internal.description",
    parent___parent___internal___fieldOwners = "parent.parent.internal.fieldOwners",
    parent___parent___internal___ignoreType = "parent.parent.internal.ignoreType",
    parent___parent___internal___mediaType = "parent.parent.internal.mediaType",
    parent___parent___internal___owner = "parent.parent.internal.owner",
    parent___parent___internal___type = "parent.parent.internal.type",
    parent___children = "parent.children",
    parent___children___id = "parent.children.id",
    parent___children___parent___id = "parent.children.parent.id",
    parent___children___parent___children = "parent.children.parent.children",
    parent___children___children = "parent.children.children",
    parent___children___children___id = "parent.children.children.id",
    parent___children___children___children = "parent.children.children.children",
    parent___children___internal___content = "parent.children.internal.content",
    parent___children___internal___contentDigest = "parent.children.internal.contentDigest",
    parent___children___internal___description = "parent.children.internal.description",
    parent___children___internal___fieldOwners = "parent.children.internal.fieldOwners",
    parent___children___internal___ignoreType = "parent.children.internal.ignoreType",
    parent___children___internal___mediaType = "parent.children.internal.mediaType",
    parent___children___internal___owner = "parent.children.internal.owner",
    parent___children___internal___type = "parent.children.internal.type",
    parent___internal___content = "parent.internal.content",
    parent___internal___contentDigest = "parent.internal.contentDigest",
    parent___internal___description = "parent.internal.description",
    parent___internal___fieldOwners = "parent.internal.fieldOwners",
    parent___internal___ignoreType = "parent.internal.ignoreType",
    parent___internal___mediaType = "parent.internal.mediaType",
    parent___internal___owner = "parent.internal.owner",
    parent___internal___type = "parent.internal.type",
    children = "children",
    children___id = "children.id",
    children___parent___id = "children.parent.id",
    children___parent___parent___id = "children.parent.parent.id",
    children___parent___parent___children = "children.parent.parent.children",
    children___parent___children = "children.parent.children",
    children___parent___children___id = "children.parent.children.id",
    children___parent___children___children = "children.parent.children.children",
    children___parent___internal___content = "children.parent.internal.content",
    children___parent___internal___contentDigest = "children.parent.internal.contentDigest",
    children___parent___internal___description = "children.parent.internal.description",
    children___parent___internal___fieldOwners = "children.parent.internal.fieldOwners",
    children___parent___internal___ignoreType = "children.parent.internal.ignoreType",
    children___parent___internal___mediaType = "children.parent.internal.mediaType",
    children___parent___internal___owner = "children.parent.internal.owner",
    children___parent___internal___type = "children.parent.internal.type",
    children___children = "children.children",
    children___children___id = "children.children.id",
    children___children___parent___id = "children.children.parent.id",
    children___children___parent___children = "children.children.parent.children",
    children___children___children = "children.children.children",
    children___children___children___id = "children.children.children.id",
    children___children___children___children = "children.children.children.children",
    children___children___internal___content = "children.children.internal.content",
    children___children___internal___contentDigest = "children.children.internal.contentDigest",
    children___children___internal___description = "children.children.internal.description",
    children___children___internal___fieldOwners = "children.children.internal.fieldOwners",
    children___children___internal___ignoreType = "children.children.internal.ignoreType",
    children___children___internal___mediaType = "children.children.internal.mediaType",
    children___children___internal___owner = "children.children.internal.owner",
    children___children___internal___type = "children.children.internal.type",
    children___internal___content = "children.internal.content",
    children___internal___contentDigest = "children.internal.contentDigest",
    children___internal___description = "children.internal.description",
    children___internal___fieldOwners = "children.internal.fieldOwners",
    children___internal___ignoreType = "children.internal.ignoreType",
    children___internal___mediaType = "children.internal.mediaType",
    children___internal___owner = "children.internal.owner",
    children___internal___type = "children.internal.type",
    internal___content = "internal.content",
    internal___contentDigest = "internal.contentDigest",
    internal___description = "internal.description",
    internal___fieldOwners = "internal.fieldOwners",
    internal___ignoreType = "internal.ignoreType",
    internal___mediaType = "internal.mediaType",
    internal___owner = "internal.owner",
    internal___type = "internal.type",
    resolve = "resolve",
    name = "name",
    version = "version",
    pluginOptions___fonts = "pluginOptions.fonts",
    pluginOptions___fonts___family = "pluginOptions.fonts.family",
    pluginOptions___fonts___variants = "pluginOptions.fonts.variants",
    pluginOptions___outputPath = "pluginOptions.outputPath",
    pluginOptions___emitSchema___C__Users_minor_projects_personal_paradicms_gui_generic__gatsby_graphql_schema_graphql = "pluginOptions.emitSchema.C__Users_minor_projects_personal_paradicms_gui_generic__gatsby_graphql_schema_graphql",
    pluginOptions___codegen = "pluginOptions.codegen",
    pluginOptions___name = "pluginOptions.name",
    pluginOptions___path = "pluginOptions.path",
    pluginOptions___projectRoot = "pluginOptions.projectRoot",
    pluginOptions___configDir = "pluginOptions.configDir",
    pluginOptions___pathCheck = "pluginOptions.pathCheck",
    nodeAPIs = "nodeAPIs",
    browserAPIs = "browserAPIs",
    ssrAPIs = "ssrAPIs",
    pluginFilepath = "pluginFilepath",
    packageJson___name = "packageJson.name",
    packageJson___description = "packageJson.description",
    packageJson___version = "packageJson.version",
    packageJson___main = "packageJson.main",
    packageJson___license = "packageJson.license",
    packageJson___dependencies = "packageJson.dependencies",
    packageJson___dependencies___name = "packageJson.dependencies.name",
    packageJson___dependencies___version = "packageJson.dependencies.version",
    packageJson___devDependencies = "packageJson.devDependencies",
    packageJson___devDependencies___name = "packageJson.devDependencies.name",
    packageJson___devDependencies___version = "packageJson.devDependencies.version",
    packageJson___peerDependencies = "packageJson.peerDependencies",
    packageJson___peerDependencies___name = "packageJson.peerDependencies.name",
    packageJson___peerDependencies___version = "packageJson.peerDependencies.version",
    packageJson___keywords = "packageJson.keywords",
  }

  type SitePluginFilterInput = {
    readonly id: Maybe<StringQueryOperatorInput>;
    readonly parent: Maybe<NodeFilterInput>;
    readonly children: Maybe<NodeFilterListInput>;
    readonly internal: Maybe<InternalFilterInput>;
    readonly resolve: Maybe<StringQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
    readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
    readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
    readonly browserAPIs: Maybe<StringQueryOperatorInput>;
    readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
    readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
    readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
  };

  type SitePluginGroupConnection = {
    readonly totalCount: Scalars["Int"];
    readonly edges: ReadonlyArray<SitePluginEdge>;
    readonly nodes: ReadonlyArray<SitePlugin>;
    readonly pageInfo: PageInfo;
    readonly field: Scalars["String"];
    readonly fieldValue: Maybe<Scalars["String"]>;
  };

  type SitePluginPackageJson = {
    readonly name: Maybe<Scalars["String"]>;
    readonly description: Maybe<Scalars["String"]>;
    readonly version: Maybe<Scalars["String"]>;
    readonly main: Maybe<Scalars["String"]>;
    readonly license: Maybe<Scalars["String"]>;
    readonly dependencies: Maybe<
      ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>
    >;
    readonly devDependencies: Maybe<
      ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>
    >;
    readonly peerDependencies: Maybe<
      ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>
    >;
    readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  };

  type SitePluginPackageJsonDependencies = {
    readonly name: Maybe<Scalars["String"]>;
    readonly version: Maybe<Scalars["String"]>;
  };

  type SitePluginPackageJsonDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
  };

  type SitePluginPackageJsonDevDependencies = {
    readonly name: Maybe<Scalars["String"]>;
    readonly version: Maybe<Scalars["String"]>;
  };

  type SitePluginPackageJsonDevDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDevDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
  };

  type SitePluginPackageJsonFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
    readonly main: Maybe<StringQueryOperatorInput>;
    readonly license: Maybe<StringQueryOperatorInput>;
    readonly dependencies: Maybe<
      SitePluginPackageJsonDependenciesFilterListInput
    >;
    readonly devDependencies: Maybe<
      SitePluginPackageJsonDevDependenciesFilterListInput
    >;
    readonly peerDependencies: Maybe<
      SitePluginPackageJsonPeerDependenciesFilterListInput
    >;
    readonly keywords: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependencies = {
    readonly name: Maybe<Scalars["String"]>;
    readonly version: Maybe<Scalars["String"]>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly version: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
  };

  type SitePluginPluginOptions = {
    readonly fonts: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsFonts>>>;
    readonly outputPath: Maybe<Scalars["String"]>;
    readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
    readonly codegen: Maybe<Scalars["Boolean"]>;
    readonly name: Maybe<Scalars["String"]>;
    readonly path: Maybe<Scalars["String"]>;
    readonly projectRoot: Maybe<Scalars["String"]>;
    readonly configDir: Maybe<Scalars["String"]>;
    readonly pathCheck: Maybe<Scalars["Boolean"]>;
  };

  type SitePluginPluginOptionsEmitSchema = {
    readonly C__Users_minor_projects_personal_paradicms_gui_generic__gatsby_graphql_schema_graphql: Maybe<
      Scalars["Boolean"]
    >;
  };

  type SitePluginPluginOptionsEmitSchemaFilterInput = {
    readonly C__Users_minor_projects_personal_paradicms_gui_generic__gatsby_graphql_schema_graphql: Maybe<
      BooleanQueryOperatorInput
    >;
  };

  type SitePluginPluginOptionsFilterInput = {
    readonly fonts: Maybe<SitePluginPluginOptionsFontsFilterListInput>;
    readonly outputPath: Maybe<StringQueryOperatorInput>;
    readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
    readonly codegen: Maybe<BooleanQueryOperatorInput>;
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly path: Maybe<StringQueryOperatorInput>;
    readonly projectRoot: Maybe<StringQueryOperatorInput>;
    readonly configDir: Maybe<StringQueryOperatorInput>;
    readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePluginPluginOptionsFonts = {
    readonly family: Maybe<Scalars["String"]>;
    readonly variants: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  };

  type SitePluginPluginOptionsFontsFilterInput = {
    readonly family: Maybe<StringQueryOperatorInput>;
    readonly variants: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsFontsFilterListInput = {
    readonly elemMatch: Maybe<SitePluginPluginOptionsFontsFilterInput>;
  };

  type SitePluginSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  type SiteSiteMetadata = {
    readonly author: SiteSiteMetadataAuthor;
    readonly description: Scalars["String"];
    readonly gitHubUrl: Scalars["String"];
    readonly keywords: Scalars["String"];
    readonly title: Scalars["String"];
  };

  type SiteSiteMetadataAuthor = {
    readonly name: Scalars["String"];
    readonly url: Scalars["String"];
    readonly email: Scalars["String"];
  };

  type SiteSiteMetadataAuthorFilterInput = {
    readonly name: Maybe<StringQueryOperatorInput>;
    readonly url: Maybe<StringQueryOperatorInput>;
    readonly email: Maybe<StringQueryOperatorInput>;
  };

  type SiteSiteMetadataFilterInput = {
    readonly author: Maybe<SiteSiteMetadataAuthorFilterInput>;
    readonly description: Maybe<StringQueryOperatorInput>;
    readonly gitHubUrl: Maybe<StringQueryOperatorInput>;
    readonly keywords: Maybe<StringQueryOperatorInput>;
    readonly title: Maybe<StringQueryOperatorInput>;
  };

  type SiteSortInput = {
    readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
    readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
  };

  enum SortOrderEnum {
    ASC = "ASC",
    DESC = "DESC",
  }

  type StringQueryOperatorInput = {
    readonly eq: Maybe<Scalars["String"]>;
    readonly ne: Maybe<Scalars["String"]>;
    readonly in: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly nin: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
    readonly regex: Maybe<Scalars["String"]>;
    readonly glob: Maybe<Scalars["String"]>;
  };

  type PagesQueryQueryVariables = Exact<{[key: string]: never}>;

  type PagesQueryQuery = {
    readonly allSitePage: {
      readonly nodes: ReadonlyArray<Pick<SitePage, "path">>;
    };
  };

  type IndexPageQueryVariables = Exact<{[key: string]: never}>;

  type IndexPageQuery = {
    readonly allInstitutionJson: {
      readonly nodes: ReadonlyArray<Pick<InstitutionJson, "name" | "uri">>;
    };
  };
}
