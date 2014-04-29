var Ouical, moment;

moment = require('moment');

Ouical = (function() {
  var googleGenerator, icsGenerator, yahooGenerator;

  function Ouical(opts) {
    var duration;
    if (opts == null) {
      opts = {};
    }
    this.title = opts.title || '';
    this.start = moment(opts.start, 'MM-DD-YYYY hh:mm');
    this.address = opts.address;
    this.description = opts.description || '';
    if (opts.end) {
      this.end = moment(opts.end, 'MM-DD-YYYY hh:mm');
    } else {
      duration = moment.duration(opts.duration, 'minutes');
      this.end = moment(this.start).add(duration);
    }
  }

  Ouical.prototype.links = function() {
    return {
      google: googleGenerator.call(this),
      yahoo: yahooGenerator.call(this),
      ics: icsGenerator.call(this)
    };
  };

  googleGenerator = function() {
    return encodeURI("https://www.google.com/calendar/render" + "?action=TEMPLATE" + ("&text=" + this.title) + ("&dates=" + (this.start.format('YYYYMMDDTHHmmss')) + "Z/" + (this.end.format('YYYYMMDDTHHmmss')) + "Z") + ("&details=" + this.description) + ("&location=" + this.address) + "&sprop=&sprop=name:");
  };

  yahooGenerator = function() {
    var duration;
    duration = this.end.diff(this.start, 'minutes');
    return encodeURI("http://calendar.yahoo.com/?v=60&view=d&type=20" + ("&title=" + this.title) + ("&st=" + (this.start.format('YYYYMMDDTHHmmss')) + "Z") + ("&dur=" + duration) + ("&desc=" + this.description) + ("&in_loc=" + this.address));
  };

  icsGenerator = function() {
    return encodeURI("data:text/calendar;charset=utf8," + ["BEGIN:VCALENDAR", "VERSION:2.0", "BEGIN:VEVENT", "URL:" + (document.URL || ''), "DTSTART:" + this.start, "DTEND:" + this.end, "SUMMARY:" + this.title, "DESCRIPTION:" + this.description, "LOCATION:" + this.address, "END:VEVENT", "END:VCALENDAR"].join('\n'));
  };

  return Ouical;

})();

module.exports = Ouical;
