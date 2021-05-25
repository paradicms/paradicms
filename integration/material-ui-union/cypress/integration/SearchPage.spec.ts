import {SearchPage} from "../support/pages/SearchPage";
import {Object} from "@paradicms/models";
import {TestData} from "../support/TestData";

const OBJECTS_PER_PAGE = 10;

describe("Search results", () => {
  let objects: readonly Object[];
  const page = new SearchPage("Lorem");

  before(() => {
    TestData.fixture.then(testData => {
      objects = testData.objects
        .concat()
        .sort((left, right) => left.uri.localeCompare(right.uri));
    });
  });

  beforeEach(() => page.visit());

  it("should show the search text in the frame", () => {
    page.queryText.should("have.text", page.text);
  });

  // it("should have breadcrumbs to the search", () => {
  //   page.frame.breadcrumbItem(1).should("have.text", "Home");
  //   page.frame.breadcrumbItem(2).should("have.text", "Search" + page.text);
  // });

  it("should have all objects", () => {
    // for (const object of objects.slice(0, OBJECTS_PER_PAGE)) {
    //   page.objectsGallery.getObjectLink({object, stripTrailingSlash: true});
    // }
    // page.objectsGallery.startObjectIndex.should("have.text", "1");
    // page.objectsGallery.endObjectIndex.should(
    //   "have.text",
    //   OBJECTS_PER_PAGE.toString()
    // );
    page.objectsCount.should("have.text", objects.length.toString());
  });

  it("should unselect one subject and see one fewer object", () => {
    page.objectFacets.subject.toggleOpen();
    const object = objects[0];
    page.objectFacets.subject.toggleValue("Subject 0");
    page.objectsGallery.getObjectLink({object}).should("not.exist");
    // page.objectsGallery.startObjectIndex.should("have.text", "1");
    // page.objectsGallery.endObjectIndex.should(
    //   "have.text",
    //   OBJECTS_PER_PAGE.toString()
    // );
    page.objectsCount.should("not.have.text", objects.length.toString());
  });
});
