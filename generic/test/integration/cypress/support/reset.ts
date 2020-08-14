export const reset = () => {
  cy.request("/api/test/reset");
};
