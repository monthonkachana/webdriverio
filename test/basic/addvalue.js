describe("login platform", () => {
  it("verify login page", async () => {
    const wdiodemoapp = await $("~wdiodemoapp");
    const LOGIN_ICON_HOME_SCREEN = "~Login";
    const EMAIL_TXT_FIELD = "~input-email";

    await browser.pause(1500);
    await wdiodemoapp.click();
    await browser.pause(1500);
    $(LOGIN_ICON_HOME_SCREEN).click();
    await browser.pause(1500);
    $(EMAIL_TXT_FIELD).addValue("a@a");
    await browser.pause(1500);
    $(EMAIL_TXT_FIELD).addValue(".com");
    await browser.pause(1500);
    $(EMAIL_TXT_FIELD).setValue("new@new.com");
    await browser.pause(3000);
    //clear text filed
    $(EMAIL_TXT_FIELD).clearValue();
    await browser.pause(3000);
  });
});
