import {HomePage} from "../support/pages/HomePage";
import {PrivacyPage} from "../support/pages/PrivacyPage";

describe("Privacy page", () => {
  const homePage = new HomePage();
  const privacyPage = new PrivacyPage();

  it("should visit the page directly", () => {
    privacyPage.visit();
    privacyPage.frame.cardTitle.should("have.text", "Privacy");
  });

  it("should get to the page from the frame", () => {
    homePage.visit();
    homePage.frame.footer.privacyLink.click();
    cy.url().should("eq", privacyPage.absoluteUrl);
  });
});
