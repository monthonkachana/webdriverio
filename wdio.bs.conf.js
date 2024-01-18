require("dotenv").config();
exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || "maxxis_6DH7ot",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "xPLfmzjSbr1dBsMspEqu",
  hostname: "hub.browserstack.com",
  services: [
    [
      "browserstack",
      {
        app: "bs://72a95a73652b7ea5c08129fcf7ba938f26dd2d7d",
        browserstackLocal: true,
      },
    ],
  ],
  specs: ["./test/specs/**/*.js"],
  capabilities: [
    {
      "bstack:options": {
        deviceName: "Samsung Galaxy S22 Ultra",
        platformVersion: "12.0",
        platformName: "android",
      },
    },
    {
      "bstack:options": {
        deviceName: "Google Pixel 7 Pro",
        platformVersion: "13.0",
        platformName: "android",
      },
    },
    {
      "bstack:options": {
        deviceName: "OnePlus 9",
        platformVersion: "11.0",
        platformName: "android",
      },
    },
  ],
  commonCapabilities: {
    "bstack:options": {
      projectName: "BrowserStack Sample",
      buildName: "bstack-demo",
      debug: true,
      networkLogs: true,
    },
  },
  maxInstances: 10,
};
