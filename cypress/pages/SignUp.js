class SignupPage {
  visit() {
    // cy.visit(Cypress.env("globalUrl"));
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
  }

  getFirstName(value) {
    return cy.get(".input").eq(2).type(value);
  }

  getLastName(value) {
    return cy.get(".input").eq(3).type(value);
  }

  getAddress(value) {
    return cy.get(".input").eq(4).type(value);
  }

  getCity(value) {
    return cy.get(".input").eq(5).type(value);
  }

  getState(value) {
    return cy.get(".input").eq(6).type(value);
  }

  getZipCode(value) {
    return cy.get(".input").eq(7).type(value);
  }

  getPhone(value) {
    return cy.get(".input").eq(8).type(value);
  }

  getSSN(value) {
    return cy.get(".input").eq(9).type(value);
  }

  getUsername(value) {
    return cy.get(".input").eq(10).type(value);
  }

  getPassword(value) {
    return cy.get(".input").eq(11).type(value);
  }

  getConfirm(value) {
    return cy.get(".input").eq(12).type(value);
  }

  register() {
    const button = cy.get('[colspan="2"] > .button');
    button.click();
  }
}

export const signupPage = new SignupPage();
