const path = require("path");
const { config } = require("./wdio.conf");

config.port = 4723;

config.specs = ["./test/specs/**/*.js"];
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "13",
    "appium:deviceName": "realme UI version",
    // "appium:app": "android.wdio.native.app.v1.0.8.apk",
    "appium:automationName": "UIAutomator2",
  },
];
exports.config = config;
