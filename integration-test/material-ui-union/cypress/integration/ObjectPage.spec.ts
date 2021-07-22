import {ObjectPage} from "../support/pages/ObjectPage";
import {Institution, Object} from "@paradicms/models";
import {TestData} from "../support/TestData";

describe("Object page", () => {
  let institution: Institution;
  let object: Object;
  let page: ObjectPage;

  before(() => {
    TestData.fixture.then(testData => {
      institution = testData.institutions[0];
      object = testData.objectsByInstitutionUri[institution.uri]![0];
      page = new ObjectPage({
        institutionUri: institution.uri,
        objectTitle: object.title,
        objectUri: object.uri,
      });
    });
  });

  beforeEach(() => page.visit());

  it("should show the object title in the frame", () => {
    page.frame.cardTitle.should("have.text", "Object - " + object.title);
  });

  it("should have breadcrumbs to the object", () => {
    page.frame.breadcrumbItem(1).should("have.text", "Home");
    page.frame.breadcrumbItem(2).should("have.text", "Institutions");
    page.frame.breadcrumbItem(3).should("have.text", institution.name);
    page.frame.breadcrumbItem(4).should("have.text", "Objects");
    page.frame.breadcrumbItem(5).should("have.text", object.title);
  });

  // it("should have the subject", () => {
  //   page.subjects.should("have.text", object.subject);
  // });

  it("should have an image in the thumbnail", () => {
    page.carouselThumbnail;
  });
});
