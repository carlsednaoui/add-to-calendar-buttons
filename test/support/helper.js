var chai   = require('chai')
  , Ouical = require('../../src/ouical')
  , chai_webdriver = require('chai-webdriver')
  , sw = require('selenium-webdriver');

var driver = new sw.Builder()
  .withCapabilities(sw.Capabilities.chrome())
  .build()

chai.use(chai_webdriver(driver));

global.should = chai.should();
global.Ouical = Ouical;
global.driver = driver;
