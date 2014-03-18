window.addToCalendar = function(options) {

  var msInMinute = 1000*60;

  function stripDate(date) {
    return date instanceof Date ? date.toISOString().split('.')[0].replace(/([-:.])/g,'') : '';
  }

  var GENERATORS = (function() {
    var google = function(params) {
      params || (params = {});
      var start = stripDate(params.start);
      var end = start && ('duration' in params) && stripDate(new Date(+params.start+params.duration*msInMinute));
      var href = encodeURI([
        'http://www.google.com/calendar/event?',
        'action=TEMPLATE',
        '&text=' + (params.title || ''),
        '&dates=' + start,
        '/' + end,
        '&details=' + (params.description || ''),
        '&location=' + (params.address || ''),
        '&sprop=&sprop=name:'
      ].join(''));
      return '<a class="icon-google" target="_blank" href="' + href + '">Google Calendar</a>';
    };
    var yahoo = function(params) {
      params || (params = {});
      var start = stripDate(params.start);
      // not sure if you  have to pad this duration for yahoo
      var duration = ('duration' in params) && (params.duration/60|0)+''+(params.duration%60);
      var href = encodeURI([
          'http://calendar.yahoo.com/?',
          'v=60&view=d&type=20',
          '&title=' + (params.title || ''),
          '&st=' + start,
          '&dur=' + duration,
          '&desc=' + (params.description || ''),
          '&in_loc=' + (params.address || '')
        ].join(''));
      return '<a class="icon-yahoo" target="_blank" href="' + href + '">Yahoo! Calendar</a>';
    };
    var vcal = function(name, icon, params) {
      params || (params = {});
      var start = stripDate(params.start);
      var end = start && ('duration' in params) && stripDate(new Date(+params.start+params.duration*msInMinute));
      var href = encodeURI(
          'data:text/calendar;charset=utf8,' + [
            'BEGIN:VCALENDAR',
            'VERSION:2.0',
            'BEGIN:VEVENT',
            'URL:' + document.URL,
            'DTSTART:' + start,
            'DTEND:' + end,
            'SUMMARY:' + (params.title || ''),
            'DESCRIPTION:' + (params.description || ''),
            'LOCATION:' + (params.address || ''),
            'END:VEVENT',
            'END:VCALENDAR'
          ].join('\n')
        );
      return '<a class="' + icon + '" target="_blank" href="' + href + '">' + name + '</a>';
    };
    var ical = function(params) {
      return vcal('iCal Calendar', 'icon-calendar-2', params);
    };
    var outlook = function(params) {
      return vcal('Outlook Calendar', 'icon-calendar', params);
    };
    return {
      google: google,
      yahoo: yahoo,
      ical: ical,
      outlook: outlook
    };
  }());

  var container = document.createElement('div');
  container.className = 'add-to-calendar' + ('class' in options ? ((' ') + options.class) : '');
  'id' in options && (container.id = options.id);
  var randId = 'add-to-calendar-toggle-' + ((Math.random()*100000)|0);
  var html =
    '<label class="add-to-calendar-label icon-plus" for="'+randId+'">Add to my calendar</label>' +
    '<input class="add-to-calendar-toggle" type="checkbox" id="'+randId+'">';
  (options.services || Object.keys(GENERATORS)).forEach(function(services) {
    html += GENERATORS[services](options.data);
  });
  container.innerHTML = html;
  return container;

};