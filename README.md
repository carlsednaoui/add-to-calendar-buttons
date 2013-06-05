# OuiCal

A simple JS script that enables you to add an "add to calendar" button to your events.

Call 'createAddToCalendarLinks' with your event info, pass in any optional parameters such as a class and/ or id and boom! Insert your add-to-calendar div wherever you'd like.

## Example

    createAddToCalendarLinks({
      options: {
        class: 'my-class',
        id: 'my-id'
      },
      data: {
        title: 'Billiard And Drinks',             // Event title
        start: new Date('June 15, 2013 19:00'),   // Event start date
        duration: 120,                            // Event duration (IN MINUTES)
        end: new Date('June 15, 2013 23:00'),     // You can also choose to set an end time.
                                                  // If an end time is set, this will take precedence over duration
        address: '714 Moon Street, New York',
        description: 'Get together with coworkers and shoot some pool.'
      }
    });

[Here is the live example](http://carlsednaoui.github.io/ouical/example.html)

## GitHub Project Page
[Official Project Page](http://carlsednaoui.github.io/ouical/)

## License
[MIT](http://opensource.org/licenses/MIT)