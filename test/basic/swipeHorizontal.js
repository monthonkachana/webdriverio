// describe("Learning API", () => {
//   it("should be Swipe Screen from right and left ", async () => {
//     const Form_ICON_Swipe_SCREEN = "~Swipe";
//     const FORM_HEADER = "~Swipe-screen";
//     //setting swipe Horizontal from right and left
//     const { height, width } = driver.getWindowSize();

//     const anchorPercentage = 50;
//     const startPointPercentage = 90;
//     const endPointPercentage = 10;

//     const anchor = (height * anchorPercentage) / 100;
//     const startPoint = (width * startPointPercentage) / 100;
//     const endPoint = (width * endPointPercentage) / 100;

//     await $(Form_ICON_Swipe_SCREEN).click();
//     await $(FORM_HEADER).click();

//     for (let t = 0; t < 5; t++) {
//       driver.touchPerform([
//         {
//           action: "press",
//           options: {
//             x: startPoint,
//             y: anchor,
//           },
//         },
//         {
//           action: "wait",
//           options: {
//             ms: 1000,
//           },
//         },
//         {
//           action: "moveTo",
//           options: {
//             x: endPoint,
//             y: anchor,
//           },
//         },
//         {
//           action: "release",
//           options: {},
//         },
//       ]);
//     }
//     await browser.pause(3000);
//   });
// });


describe("Learning API", () => {
  it("should be Swipe Screen from right and left ", async () => {
    // Assuming you have initialized the WebDriver instance as 'driver'
    // Replace 'driver' with your actual WebDriver instance

    const Form_ICON_Swipe_SCREEN = "~Swipe";
    const FORM_HEADER = "~Swipe-screen";

    // Make sure to use the correct WebDriver method to get window size
    const { height, width } = browser.getWindowSize();

    const anchorPercentage = 50;
    const startPointPercentage = 90;
    const endPointPercentage = 10;

    const anchor = (height * anchorPercentage) / 100;
    const startPoint = (width * startPointPercentage) / 100;
    const endPoint = (width * endPointPercentage) / 100;

    // Use appropriate WebDriver commands to interact with elements
    await $(Form_ICON_Swipe_SCREEN).click();
    await $(FORM_HEADER).click();

    for (let t = 0; t < 5; t++) {
      // Replace 'driver.touchPerform' with the correct method for your WebDriver
      browser.touchPerform([
        {
          action: "press",
          options: {
            x: startPoint,
            y: anchor,
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
            x: endPoint,
            y: anchor,
          },
        },
        {
          action: "release",
          options: {},
        },
      ]);
    }

    await browser.pause(3000);
  });
});
