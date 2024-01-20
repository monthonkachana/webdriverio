describe("login platform", () => {
  it("verify login page", async () => {
    // const wdiodemoapp = await $("~wdiodemoapp");
    const LOGIN_ICON_HOME_SCREEN = "~Login";
    const EMAIL_TXT_FIELD = "~input-email";
    const PASSWORD_TXT_FIELD = "~input-password";
    const LOGIN_BTN = "~button-LOGIN";

    // await browser.pause(3000);
    // await wdiodemoapp.click();
    await $(LOGIN_ICON_HOME_SCREEN).click();
    await $(EMAIL_TXT_FIELD).setValue("a@a.com");
    await $(PASSWORD_TXT_FIELD).setValue("123456789");
    await $(LOGIN_BTN).click();
    await browser.pause(3000);
  });
});
