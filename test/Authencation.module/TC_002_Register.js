const registerOject = require("../OOP/registerOject");

describe("register platform", () => {
  it("go to register page ", async () => {
    await registerOject.openformsingup.login.click();
    await registerOject.openformsingup.singup.click();
    await registerOject.inputFieldRegis.singEmail.setValue("test@test.com");
    await registerOject.inputFieldRegis.singPassword.setValue("123456789");
    await registerOject.inputFieldRegis.singPasswordRepare.setValue(
      "123456789"
    );
    await registerOject.buttonClick.click();
    await browser.pause(3000);
  });
});
