const loginPage = require("../OOP/loginOject");

describe("login platform", () => {
  it("verify login page", async () => {
    await loginPage.openFormLogin.click();
    await loginPage.inputField.email.setValue("test@test.com");
    await loginPage.inputField.password.setValue("123456789");
    await loginPage.buttonClick.click();
    await browser.pause(5000);
  });
});
