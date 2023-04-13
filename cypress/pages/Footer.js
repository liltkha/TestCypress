class FooterHome {
  visit() {
    // cy.visit(Cypress.env("globalUrl")); 
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
  }

  getHome() {
    const home = cy.get("#footerPanel > :nth-child(1) > :nth-child(1) > a");
    return home.click();
  }

  getATMservices() {
    return cy.get(".captionone");
  }
  getWithdrawFunds() {
    return cy.get("ul.services > :nth-child(2) > a");
  }
  getTransferFunds() {
    return cy.get("ul.services > :nth-child(3) > a");
  }
  getCheckBalances() {
    return cy.get("ul.services > :nth-child(4) > a");
  }
  getMakeDeposits() {
    return cy.get("ul.services > :nth-child(5) > a");
  }
  getOnlineServices() {
    return cy.get(".captiontwo");
  }
  getBillPay() {
    return cy.get(".servicestwo > :nth-child(2) > a");
  }
  getAccountHistory() {
    cy.get(".servicestwo > :nth-child(3) > a");
  }
  getTransferFunds2() {
    cy.get(".servicestwo > :nth-child(4) > a");
  }
  getDate() {
    return cy.get(".captionthree");
  }
  getParaBankIsNowRe_Opened() {
    return cy.get(".events > :nth-child(2) > a");
  }
  getNewOnlineBillPay() {
    return cy.get(".events > :nth-child(3) > a");
  }
  getNewOnlineAccountTransfers() {
    return cy.get(".events > :nth-child(4) > a");
  }
}

export const footerHome = new FooterHome();

class FooterAboutUs {
  visit() {
    // cy.visit(Cypress.env("globalUrl"));
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
  }

  getAboutus() {
    const aboutUs = cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a');
    return aboutUs.click();
  }

  getAboutusPanel() {
    return cy.get('#rightPanel');
  }
}
export const footerAboutUs = new FooterAboutUs();
