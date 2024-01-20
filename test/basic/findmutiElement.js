// const { expect } = require("chai");

describe("Find-Muti-Elements", () => {
  it.only("test suit1", async () => {
    const chromeApp = await $("~Chrome");
    const className = await $("~android.widget.EditText");
    const text = className.getText();
    console.log(text);

    await browser.pause(3000);
    chromeApp.click();
    await browser.pause(3000);
    expect(await className.getText()).toHaveText("Search");
  });
});
// it("test suite 2", async () => {
//   const wdiodemoapp = await $("~wdiodemoapp");
//   const expectedList = [
//     "WEBDRIVER",
//     "Demo app for the appium-boilerplate",
//     "Support",
//   ];
//   const actualList = [];
//   const ListValues = await $$("android.view.ViewGroup");

//   await browser.pause(3000);
//   await wdiodemoapp.click();
//   await browser.pause(3000);
//   for (const ele of ListValues) {
//     actualList.push(await ele.getText());
//   }
//   await browser.pause(3000);
//   await expect(actualList).toEqual(expectedList);
// });
// it("test suite3", async () => {
//   const wdiodemoapp = await $("~wdiodemoapp");
//   const expectedListtwo = [
//     "Home",
//     "Webview",
//     "Login",
//     "Form",
//     "Swape",
//     "Drag",
//   ];
//   await browser.pause(3000);
//   await wdiodemoapp.click();
//   await browser.pause(3000);
// });
