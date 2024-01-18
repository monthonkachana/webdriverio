describe("form platform", () => {
  it("hadle toggle switch ", async () => {
    const toggleSwitch = $("~switch");
    const wdiodemoapp = await $("~wdiodemoapp");
    const Form_ICON_HOME_SCREEN = "~Forms";
    await browser.pause(2500);
    await wdiodemoapp.click();
    await browser.pause(2000);
    $(Form_ICON_HOME_SCREEN).click();
    await browser.pause(3000);
    await toggleSwitch.click();
  });
});
