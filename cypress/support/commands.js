import { loginPage } from "../pages/SignIn";
import { data } from "../utils/data";
import { validationMessages } from "../utils/messages";
// -- This is a parent command --
Cypress.Commands.add('login', (username="Username", password="Password") => {
    loginPage.visit();
    //read once more about should assertion
    loginPage
      .getloginForm()
      .should("contain", username)
      .and("contain", password);
    loginPage.getUsername(username);
    loginPage.getPassword(password);
    loginPage.submit().then(($button) => {
      expect($button).to.have.css('background-color','rgb(202, 129, 37)');
      expect($button).to.have.value('Log In')
    });
    loginPage.submit().click();
    //read about expect and then function
    //cy.get(".error").then(($error) => {
    //  expect($error).to.contain(validationMessages.loginError);
   // });
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { 

//  })
//
//
// -- This will overwrite an existing command --
//  Cypress.Commands.overwrite('visit', (originalFn, url, options) => { 


//  })