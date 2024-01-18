describe("register platform", () => {
  it("go to register page ", async () => {
    // const wdiodemoapp = await $("~wdiodemoapp");
    const LOGIN_ICON_HOME_SCREEN = "~Login";
    const SING_UP = "~button-sign-up-container";
    const SING_EMAIL = "~input-email";
    const SING_PASSWORD = "~input-password";
    const SING_PASSWORD_REPARE = "~input-repeat-password";
    const BUTTON_SING_UP = "~button-SIGN UP";

    // await browser.pause(1000);
    // await wdiodemoapp.click();
    await browser.pause(1000);
    $(LOGIN_ICON_HOME_SCREEN).click();
    await browser.pause(1000);
    $(SING_UP).click();
    await browser.pause(1000);
    $(SING_EMAIL).setValue("A123@a.com");
    // await browser.pause(1000);
    $(SING_PASSWORD).setValue("123456789");
    // await browser.pause(1000);
    $(SING_PASSWORD_REPARE).setValue("123456789");
    await browser.pause(2000);
    $(BUTTON_SING_UP).click();
    await browser.pause(4000);
  });
});
