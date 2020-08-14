import {TestData} from "./TestData";
import {CollectionOverviewPage} from "../support/pages/CollectionOverviewPage";

describe("Collection overview", () => {
  const page = new CollectionOverviewPage({
    collectionUri: TestData.collection.uri,
    institutionUri: TestData.institution.uri,
  });

  beforeEach(() => page.visit());

  it("should show the collection name in the frame", () => {
    page.frame.cardTitle.should("have.text", TestData.collection.name);
  });

  it("should have breadcrumbs to the collection", () => {
    page.frame.breadcrumbItem(1).should("have.text", "Home");
    page.frame.breadcrumbItem(2).should("have.text", "Institutions");
    page.frame.breadcrumbItem(3).should("have.text", TestData.institution.name);
    page.frame.breadcrumbItem(4).should("have.text", "Collections");
    page.frame.breadcrumbItem(5).should("have.text", TestData.collection.name);
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
