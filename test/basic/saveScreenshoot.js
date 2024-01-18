describe("Learning API", () => {
  it("should be take screen shot ", async () => {
    const wdiodemoapp = await $("~wdiodemoapp");
    const Form_ICON_HOME_SCREEN = "~Forms";

    await wdiodemoapp.click();
    await browser.pause(3000);
    $(Form_ICON_HOME_SCREEN).click();
    await browser.pause(2000);
    await browser.saveScreenshot("./screenshot/testsave1.png");
  });
});
