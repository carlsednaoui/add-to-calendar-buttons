var chai   = require('chai')
  , Ouical = require('../../src/ouical');

// just call should. use it in your tests
global.should = chai.should();

// make OuiCal available globally
global.Ouical = Ouical;
