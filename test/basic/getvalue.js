describe("form platform", () => {
  it("get value ", async () => {
    const wdiodemoapp = await $("~wdiodemoapp");
    const Form_ICON_HOME_SCREEN = "~Forms";
    const classText = $("~android.widget.EditText");
    await browser.pause(2500);
    await wdiodemoapp.click();
    await browser.pause(2000);
    $(Form_ICON_HOME_SCREEN).click();
    await browser.pause(1500);
    expect(classText).toBe("SingUp");
  });
});
