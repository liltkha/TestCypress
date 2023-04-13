import { signupPage } from "../pages/SignUp";
import { SignupData } from "../utils/data";
import { data } from "../utils/data";

describe("SignUp", () => {
  it("Verify sign up functionality with valid credentials", () => {
    signupPage.visit();
    signupPage.getFirstName(SignupData.FirstName);
    signupPage.getLastName(SignupData.LastName);
    signupPage.getAddress(SignupData.Address);
    signupPage.getCity(SignupData.City);
    signupPage.getState(SignupData.State);
    signupPage.getZipCode(SignupData.ZipCode);
    signupPage.getPhone(SignupData.Phone);
    signupPage.getSSN(SignupData.SSN);
    signupPage.getUsername(SignupData.Username);
    signupPage.getPassword(SignupData.Password);
    signupPage.getConfirm(SignupData.Confirm);

    signupPage.register();
    cy.url().should("include", SignupData.successfulSignUp);
    //add assertions
  });

  it("Verify sign up functionality with empty credentials", () => {
    signupPage.visit();
    signupPage.getFirstName(data.emptyString);
    signupPage.getLastName(data.emptyString);
    signupPage.getAddress(data.emptyString);
    signupPage.getCity(data.emptyString);
    signupPage.getState(data.emptyString);
    signupPage.getZipCode(data.emptyString);
    signupPage.getPhone(data.emptyString);
    signupPage.getSSN(data.emptyString);
    signupPage.getUsername(data.emptyString);
    signupPage.getPassword(data.emptyString);
    signupPage.getConfirm(data.emptyString);
    signupPage.register();
    cy.url().should("include", SignupData.successfulSignUp);
  });

  it("Verify sign up functionality with username and password and empty credentials", () => {
    signupPage.visit();
    signupPage.getFirstName(data.emptyString);
    signupPage.getLastName(data.emptyString);
    signupPage.getAddress(data.emptyString);
    signupPage.getCity(data.emptyString);
    signupPage.getState(data.emptyString);
    signupPage.getZipCode(data.emptyString);
    signupPage.getPhone(data.emptyString);
    signupPage.getSSN(data.emptyString);
    signupPage.getUsername(SignupData.Username);
    signupPage.getPassword(SignupData.Password);
    signupPage.getConfirm(SignupData.Confirm);
    signupPage.register();
    cy.url().should("include", SignupData.successfulSignUp);
  });
});
