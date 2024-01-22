const chromeOject = require("../OOP/chromeOject");

describe("class page ojects model demo", () => {
  it("click into platform chrome by class", async () => {
    await browser.pause(3000);
    await chromeOject.openChrome.click();
    await browser.pause(3000);

    const classText = await chromeOject.classText.getText();
    expect(classText).toBe("Search or dtype URL");
  });
});

// npx wdio run wdio.android.conf.js --spec .\test\basic\classdemo.js