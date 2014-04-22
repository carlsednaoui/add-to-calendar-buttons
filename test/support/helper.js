var chai   = require('chai')
  , Ouical = require('../../src/ouical');

// just call should. use it in your tests
chai.should();

// make OuiCal available globally
global.Ouical = Ouical;
