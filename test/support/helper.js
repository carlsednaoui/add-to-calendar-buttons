var chai          = require('chai')
  , Ouical        = require('../../src/ouical')
  , chaiWebdriver = require('chai-webdriver')
  , sw            = require('selenium-webdriver');

// just call should. use it in your tests
global.should = chai.should();

// make OuiCal available globally
global.Ouical = Ouical;

// enable chai webdriver
var driver = new sw.Builder()
  .withCapabilities(sw.Capabilities.chrome())
  .build();

chai.use(chaiWebdriver(driver));
global.driver = driver;
