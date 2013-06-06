document.getElementById('calendar-generator').onsubmit = function() {

  // Get values for the calendar
  var title       = document.getElementById('event-title').value;
  var startString = document.getElementById('start-time').value;
  var start       = new Date(startString.replace(/-/g, ",").replace(/T/, " "));
  var endString   = document.getElementById('end-time').value;
  var end         = new Date(endString.replace(/-/g, ",").replace(/T/, " "));
  var address     = document.getElementById('event-address').value;
  var description = document.getElementById('event-description').value;

  var eventId     = document.getElementById('event-id').value;
  var eventClass  = document.getElementById('event-class').value;

  // Create the calendar
  var createCalendar = getAddToCalendar();
  var myCalendar = createCalendar({
    options: {
      class: eventClass,
      id: eventId
    },
    data: {
      title: title,
      start: start,
      end: end,
      address: address,
      description: description
    }
  });

  // Add the calendar result and an example
  document.getElementById('live-example').appendChild(myCalendar);
  var html = document.getElementById('live-example').innerHTML;

  var embedTextArea = document.createElement('textarea');
  embedTextArea.setAttribute('rows', 10);
  embedTextArea.setAttribute('cols', 80);

  document.getElementById('html-result').innerHTML += "Copy and paste this code:";
  document.getElementById('html-result').appendChild(embedTextArea).value = myCalendar.innerHTML;

  return false;
};