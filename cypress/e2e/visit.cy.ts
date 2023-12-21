describe("When rendered", () => {
  it("Then it should show a input field and once the user types a username it should show a profile", () => {
    cy.visit("https://mvst-github-challenge-diana-vidal.netlify.app/");

    cy.get(".field").type("dvidaal");

    cy.get("form").submit();

    cy.get(".user-profile").should("exist");
  });
});
