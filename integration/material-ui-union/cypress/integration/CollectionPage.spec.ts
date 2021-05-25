import {CollectionPage} from "../support/pages/CollectionPage";
import {Collection, Institution, Object} from "@paradicms/models";
import {TestData} from "../support/TestData";

const OBJECTS_PER_COLLECTION = 25;
const OBJECTS_PER_PAGE = 10;

describe("Collection page", () => {
  let collection: Collection;
  let institution: Institution;
  let objects: readonly Object[];
  let page: CollectionPage;

  before(() => {
    TestData.fixture.then(testData => {
      institution = testData.institutions[0];
      const institutionCollections = testData.collections.filter(
        collection => collection.institutionUri === institution.uri
      );
      collection = testData.collectionsByInstitutionUri[institution.uri]![0];
      page = new CollectionPage({
        collectionUri: collection.uri,
        institutionUri: institution.uri,
      });
      objects = testData.objectsByCollectionUri[collection.uri]!;
    });
  });

  beforeEach(() => page.visit());

  it("should show the collection name in the frame", () => {
    page.collectionTitle.should("have.text", collection.title);
  });

  it("should have breadcrumbs to the collection", () => {
    page.frame.breadcrumbItem(1).should("have.text", "Home");
    page.frame.breadcrumbItem(2).should("have.text", "Institutions");
    page.frame.breadcrumbItem(3).should("have.text", institution.name);
    page.frame.breadcrumbItem(4).should("have.text", "Collections");
    page.frame.breadcrumbItem(5).should("have.text", collection.title);
  });

  it("should have all objects", () => {
    for (const object of objects.slice(0, OBJECTS_PER_PAGE)) {
      page.objectsGallery
        .getObjectLink({object, stripTrailingSlash: true})
        .should("have.text", object.title);
    }
    // page.objectsGallery.startObjectIndex.should("have.text", "1");
    // page.objectsGallery.endObjectIndex.should(
    //   "have.text",
    //   OBJECTS_PER_PAGE.toString()
    // );
    page.objectsCount.should("have.text", objects.length.toString());
  });

  it("should unselect one subject and see one fewer object", () => {
    page.objectFacets.creator.toggleOpen();
    page.objectFacets.creator.toggleValue("Creator 0");
    page.objectsGallery
      .getObjectLink({object: objects[0], stripTrailingSlash: true})
      .should("not.exist");
    // page.objectsGallery.startObjectIndex.should("have.text", "1");
    // page.objectsGallery.endObjectIndex.should(
    //   "have.text",
    //   OBJECTS_PER_PAGE.toString()
    // );
    page.objectsCount.should(
      "have.text",
      (OBJECTS_PER_COLLECTION - 5).toString()
    );
  });
});
