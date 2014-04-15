var Ouical;

Ouical = (function() {
  function Ouical(opts) {
    if (opts == null) {
      opts = {};
    }
    this.title = opts.title || '';
    this.start = opts.start;
    this.duration = opts.duration;
    this.end = opts.end;
    this.address = opts.address;
    this.description = opts.description || '';
  }

  return Ouical;

})();

module.exports = Ouical;
