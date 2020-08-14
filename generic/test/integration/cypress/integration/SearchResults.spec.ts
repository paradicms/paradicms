import {TestData} from "./TestData";
import {SearchResultsPage} from "../support/pages/SearchResultsPage";

describe("Search results", () => {
  const page = new SearchResultsPage("Test");

  beforeEach(() => page.visit());

  it("should show the search text in the frame", () => {
    page.frame.cardTitle.should("have.text", "Search: " + page.text);
  });

  it("should have breadcrumbs to the search", () => {
    page.frame.breadcrumbItem(1).should("have.text", "Home");
    page.frame.breadcrumbItem(2).should("have.text", "Search: " + page.text);
  });

  it("should have all objects", () => {
    page.objectsGallery.getObjects(TestData.objects.slice(0, 20));
    page.objectsGallery.startObjectIndex.should("have.text", "1");
    page.objectsGallery.endObjectIndex.should("have.text", "20");
    page.objectsGallery.objectsCount.should(
      "have.text",
      TestData.objects.length.toString()
    );
  });

  it("should unselect one subject and see one fewer object", () => {
    page.objectFacets.subject.toggleOpen();
    page.objectFacets.subject.toggleValue(TestData.object.subject);
    page.objectsGallery.getObjects(TestData.objects.slice(1, 21));
    page.objectsGallery.startObjectIndex.should("have.text", "1");
    page.objectsGallery.endObjectIndex.should("have.text", "20");
    page.objectsGallery.objectsCount.should("have.text", "99");
  });
});
