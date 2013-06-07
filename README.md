# OuiCal

A simple JS script that enables you to add an "add to calendar" button to your events.

Call 'createAddToCalendarLinks' with your event info, pass in any optional parameters such as a class and/ or id and boom! Insert your add-to-calendar div wherever you'd like.

The only fields that are mandatory are:

  - Start time
  - End time (or event duration, in minutes)
  - Event tile

## Example

    var myCalendar = createCalendar({
      options: {
        class: 'my-class',
        
        // You need to pass an ID. If you don't, one will be generated for you.
        id: 'my-id'
      },
      data: {
        // Event title
        title: 'Get on the front page of HN',

        // Event start date
        start: new Date('June 15, 2013 19:00'),
        
        // Event duration (IN MINUTES)
        duration: 120,

        // You can also choose to set an end time. 
        // If an end time is set, this will take precedence over duration.
        end: new Date('June 15, 2013 23:00'),     

        // Event Address
        address: 'The internet',

        // Event Description
        description: 'Get on the front page of HN, then prepare for world domination.'
      }
    });

    document.querySelector('#place-where-i-want-this-calendar').appendChild(myCalendar);

[Here is the live example](http://carlsednaoui.github.io/ouical/example.html)

## GitHub Project Page
[Official Project Page](http://carlsednaoui.github.io/ouical/)

## License
[MIT](http://opensource.org/licenses/MIT)