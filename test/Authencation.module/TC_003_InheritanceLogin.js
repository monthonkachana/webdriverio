const inheritanceLogin = require("../OOP/inheritanceLogin");
const loginPage = require("../OOP/loginOject");

describe("login platform", () => {
  it("verify login ", async () => {
    await loginPage.openFormLogin.click();
    await inheritanceLogin.Text
    await loginPage.inputField.email.setValue("test@test.com");
    await loginPage.inputField.password.setValue("123456789");
    await loginPage.buttonClick.click();
    await browser.pause(3000);
  });
});