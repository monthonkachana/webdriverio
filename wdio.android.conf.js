const path = require("path");
const { config } = require("./wdio.conf");

config.port = 4723;

config.specs = ["./test/specs/**/*.js"];
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "13",
    "appium:deviceName": "realme UI version",
    "appium:app":
      "C:/Users/areat/OneDrive/Desktop/android.wdio.native.app.v1.0.8.apk",
    "appium:automationName": "UIAutomator2",
  },
  // {
  //   platformName: "Android",
  //   "appium:platformVersion": "11",
  //   "appium:deviceName": "emulator-5554",
  //   "appium:automationName": "UIAutomator2",
  //   "appium:app":
  //     "C:\\Users\\areat\\OneDrive\\Desktop\\webdriverio\\apk\\android.wdio.native.app.v1.0.8.apk",
  // },
];
exports.config = config;
