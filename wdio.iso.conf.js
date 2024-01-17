const path = require("path");
const { config } = require("./wdio.index.conf");

config.port = 4724;

config.specs = ["./test/specs/**/*.js"];
config.capabilities = [{}];
exports.config = config;
