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

  // Make sure basic info is passed in
  if (!(title && start)) {
    console.log('Add some details');
    return false;
  }

  // Create the calendar
  var myCalendar = addToCalendar({
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

  var embedTextArea = document.createElement('textarea');
  embedTextArea.setAttribute('rows', 10);
  embedTextArea.setAttribute('cols', 80);
  document.getElementById('html-result').innerHTML += '<p class="instructions">Copy and paste this code:</p>';


  var calendarStyleNode = document.getElementById('add-to-calendar-css');
	var calendarCSS = (calendarStyleNode)?calendarStyleNode.textContent:'/* error */';
	var calendarJS = 'function closeCalenderOnMouseDown(e){var n=function(){setTimeout(function(){e.checked=!1},750),document.removeEventListener("mousedown",n)};document.addEventListener("mousedown",n)}';
  
  myCalendar.innerHTML += ('<style type="text/css">' + calendarCSS + '</style>');
	myCalendar.innerHTML += ('<script>' + calendarJS + '</script>');
	document.getElementById('html-result').appendChild(embedTextArea).value = myCalendar.innerHTML;

  return false;
};