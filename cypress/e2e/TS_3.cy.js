import { footerHome } from "../pages/Footer";
import { homeAttributes } from "../utils/data";
import { aboutUsAttributes } from "../utils/data";
import { footerAboutUs } from "../pages/Footer";

describe("Footer panel", () => {
  it("Verify footer panel(home) functionality ", () => {
    footerHome.visit();
    footerHome.getHome();
    cy.url().should("include", homeAttributes.successHome);
  
    footerHome.getATMservices().should("contain", homeAttributes.ATMservices);
    footerHome
      .getWithdrawFunds()
      .should("contain", homeAttributes.withdrawFunds);
    footerHome
      .getTransferFunds()
      .should("contain", homeAttributes.transferFunds);
    footerHome
      .getCheckBalances()
      .should("contain", homeAttributes.checkBalances);

    footerHome.getMakeDeposits();

    footerHome
      .getOnlineServices()
      .should("contain", homeAttributes.onlineServices);

    footerHome.getBillPay().should("contain", homeAttributes.billPay);
    footerHome.getDate().click().type(Cypress.moment().format('MMM DD, YYYY'));
    // footerHome.getDate().should("contain", homeAttributes.date);
    // footerHome
    //   .getParaBankIsNowRe_Opened()
    //   .should("contain", homeAttributes.paraBankIsNowRe_Opened);
    footerHome
      .getNewOnlineBillPay()
      .should("contain", homeAttributes.newOnlineBillPay);
    footerHome
      .getNewOnlineAccountTransfers()
      .should("contain", homeAttributes.newOnlineAccountTransfers);
  });

  it('"Verify footer panel(About Us) functionality "', () => {
    footerAboutUs.visit();
    footerAboutUs.getAboutus();
    cy.url().should("include", aboutUsAttributes.successAboutUs);

    footerAboutUs.getAboutusPanel().should('contain', aboutUsAttributes.verifyaboutUs);
  });
});