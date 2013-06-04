var createAddToCalendarLinks = function(params) {

  var msInMinutes = 60 * 1000;

  var formatTime = function(date) {
    return date.toISOString().replace(/[-:]|(\.\d{3})/g, '');
  };

  var GENERATORS = function(event) {
    var startTime = formatTime(event.start);
    var endTime = formatTime(new Date(event.start.getTime() + (event.duration * msInMinutes)));

    var google = function(event) {
      var href = encodeURI([
        'https://www.google.com/calendar/render',
        '?action=TEMPLATE',
        '&text=' + (event.title || ''),
        '&dates=' + (startTime || ''),
        '/' + (endTime || ''),
        '&details=' + (event.description || ''),
        '&location=' + (event.address || ''),
        '&sprop=&sprop=name:'
      ].join(''));
      return '<a class="icon-google" target="_blank" href="' + href + '">Google Calendar</a>';
    };

    var yahoo = function(event) {
      // Yahoo dates are crazy, we need to convert the duration from minutes to hh:mm
      var yahooHourDuration = event.duration < 600 ? '0' + Math.floor((event.duration / 60)) : Math.floor((event.duration / 60));
      var yahooMinuteDuration = event.duration % 60 < 10 ? '0' + event.duration % 60 : event.duration % 60;
      var yahooEventDuration = yahooHourDuration + yahooMinuteDuration;

      var href = encodeURI([
        'http://calendar.yahoo.com/?v=60&view=d&type=20',
        '&title=' + (event.title || ''),
        '&st=' + (formatTime(new Date(event.start - (event.start.getTimezoneOffset() * msInMinutes))) || ''), // Remove timezone from event time
        '&dur=' + (yahooEventDuration || ''),
        '&desc=' + (event.description || ''),
        '&in_loc=' + (event.address || '')
      ].join(''));
      return '<a class="icon-yahoo" target="_blank" href="' + href + '">Yahoo! Calendar</a>';
    };

    var ics = function(event, eClass, calendarName) {
      var href = encodeURI(
      'data:text/calendar;charset=utf8,' + [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      'URL:' + document.URL,
      'DTSTART:' + (startTime || ''),
      'DTEND:' + (endTime || ''),
      'SUMMARY:' + (event.title || ''),
      'DESCRIPTION:' + (event.description || ''),
      'LOCATION:' + (event.address || ''),
      'END:VEVENT',
      'END:VCALENDAR'].join('\n'));
      return '<a class="' + eClass + '" target="_blank" href="' + href + '">' + calendarName + ' Calendar</a>';
    };

    var ical = function(event) {
      return ics(event, 'icon-ical', 'iCal');
    };

    var outlook = function(event) {
      return ics(event, 'icon-outlook', 'Outlook');
    };

    return {
      google: google(event),
      yahoo: yahoo(event),
      ical: ical(event),
      outlook: outlook(event)
    };
  };

  var result = document.createElement('div');
  var randomID = Math.floor(Math.random() * 1000000); // Generate a 6-digit random ID

  // Make sure we have the necessary event data, such as start time and event duration
  if (params.data && params.data.start && params.data.duration) {

    result.innerHTML = '<label for="add-to-calendar-checkbox '+ randomID + '" class="add-to-calendar-checkbox" id="add-to-calendar-checkbox-label">+ Add to my Calendar</label>' ;
    result.innerHTML += '<input name="add-to-calendar-checkbox" class="add-to-calendar-checkbox" id="add-to-calendar-checkbox '+ randomID + '" type="checkbox">';

    var generatedCalendars = GENERATORS(params.data);

    Object.keys(generatedCalendars).forEach(function(services) {
      result.innerHTML += generatedCalendars[services];
    });

  } else {
    console.log('Event details missing.');
    return;
  }

  // Add Class and ID to div if either one is passed as an option
  result.className = 'add-to-calendar' + ((params.options && params.options.class) ? (' ' + params.options.class) : '');
  result.id = 'add-to-calendar-' + randomID + ((params.options &&  params.options.id) ? (' ' + params.options.id) : '');

  return result;
};