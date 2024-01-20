describe("Learning API", () => {
  it("should be Swipe Screen Vertically ", async () => {
    const Form_ICON_HOME_SCREEN = "~Forms";
    const BUTTON_ICON_ACTIVE = "~button-Active";
    const FORM_HEADER = "~Forms-screen";
    //setting swipe Horizontal
    const { height } = driver.getWindowSize();

    const anchorPercentage = 50;
    const startPointPercentage = 90;
    const endPointPercentage = 10;

    const anchor = (height * anchorPercentage) / 100;
    const startPoint = (height * startPointPercentage) / 100;
    const endPoint = (height * endPointPercentage) / 100;

    await $(Form_ICON_HOME_SCREEN).click();
    await $(FORM_HEADER).click();

    driver.touchPerform([
      {
        action: "press",
        options: {
          x: anchor,
          y: startPoint,
        },
      },
      {
        action: "wait",
        options: {
          ms: 1000,
        },
      },
      {
        action: "moveTo",
        options: {
          x: anchor,
          y: endPoint,
        },
      },
      {
        action: "release",
        options: {},
      },
    ]);

    await $(BUTTON_ICON_ACTIVE).click();
    await browser.pause(3000);
  });
});
