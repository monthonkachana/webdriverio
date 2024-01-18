const chromeOject = require("../pageOjects/chromeOject");

describe("class page ojects model demo", () => {
  it("click into platform chrome by class", async () => {
    await browser.pause(3000);
    await chromeOject.openChrome.click();
    await browser.pause(3000);

    const classText = await chromeOject.classText.getText();
    expect(classText).toBe("Search or dtype URL");
  });
});
