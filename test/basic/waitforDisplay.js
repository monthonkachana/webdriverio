describe("Learning API", () => {
  it("should be", async () => {
    const wdiodemoapp = await $("~wdiodemoapp");
    const LOGIN_ICON_HOME_SCREEN = "~Login";
    const Form_ICON_HOME_SCREEN = "~Forms";

    await wdiodemoapp.click();
    await browser.pause(3000);
    await browser.$(LOGIN_ICON_HOME_SCREEN).click();
    await browser.pause(3000);
    const formsIcon = await browser.$(Form_ICON_HOME_SCREEN);
    // Wait for the element to be displayed
    await formsIcon.waitForDisplayed({ timeout: 7000 });
    await browser.pause(2000);
    await formsIcon.click();
  });
});
