# OuiCal

A simple JS script that enables you to add an "add to calendar" button for your events.

Call 'createAddToCalendarLinks' with your event info, pass in any optional parameters such as a class and/ or id and boom! Insert your add-to-calendar div wherever you'd like. 

Here is an example:

    createAddToCalendarLinks({
      options: {
        class: 'my-class',
        id: 'my-id'
      },
      data: {
        title: 'Billiard & Drinks',               // Event title
        start: new Date('June 15, 2013 19:00'),   // Event start date
        duration: 120,                            // Event duration (IN MINUTES)
        address: '714 Moon Street, New York',
        description: 'Get together with coworkers and shoot some pool.'
      }
    });