import {Config, browser} from "protractor";

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

export let config: Config = {
  framework: "jasmine",
    capabilities: {
      browserName: "chrome"
    },
    specs: ['./specs/*.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      },
      summary: {
        displayDuration: true
      }
    }));
  }
}
