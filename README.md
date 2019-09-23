# OuiCal2

A simple JS library that enables you to add an "add to calendar" button for your upcoming events.

## Inspiration

This project was inspired by [Eventbrite's](http://www.eventbrite.com/) add to calendar feature (which should have been open sourced #justSayin). 

Later, it was adjusted to look and behave more like [AddToCalendar](https://addtocalendar.com), which suddenly became a commercial tool, and very expensive too #justSayin.

## How to use it?

### Method 1

Call 'addToCalendar' with your event info, pass in any optional parameters such as a class and/ or id and boom! Insert your add-to-calendar div wherever you'd like.

The only fields that are mandatory are:

  - Event title
  - Start time

#### Example

    var myCalendar = addToCalendar({
      options: {
        class: 'my-class',
        
        // You can pass an ID. If you don't, one will be generated for you
        id: 'my-id'
      },
      data: {
        // Event title
        title: 'Get on the front page of HN',

        // Event start date
        start: new Date('June 15, 2013 19:00'),
        
        // Event timezone. Will convert the given time to that zone
        timezone: America/Los_Angeles,          

        // Event duration (IN MINUTES)
        duration: 120,

        // You can also choose to set an end time
        // If an end time is set, this will take precedence over duration
        // end: new Date('June 15, 2013 23:00'), 
        
        // You can also choose to set 'all day'
        // If this is set, this will override end time, duration and timezone
        // allday:true,

        // Event Address
        address: 'The internet',

        // Event Description
        description: 'Get on the front page of HN, then prepare for world domination.'
      }
    });

    document.querySelector('#place-where-I-want-this-calendar').appendChild(myCalendar);

### Method 2
  
Write your events data in several hidden HTML tags with the right classnames, and wrap them in a div. Then call 'createCalendar' with the outer div and boom! The calendar is appended to your wrapping div.
The only fields that are mandatory are:

  - Event title
  - Start time
  
  
#### Example  

    <div title="Add to Calendar" class="add-to-calendar">
      <span class="start">12/18/2018 08:00 AM</span>
      <span class="timezone">America/Los_Angeles</span>
      <!--span class="end">12/18/2018 10:00 AM</span-->
      <!--span class="duration">60</span-->
      <!--span class="allday">true</span-->
      <span class="title">Summary of the event</span>
      <span class="description">Description of the event</span>
      <span class="location">Location of the event</span>
    </div>
    
    
### method 3

If you are ony interested in the data, call 'addToCalendarData' with your event info, pass in any optional parameters as described in method #1. An object with some html links is returned.


#### Example

    var caldata = addToCalendarData({
      data: {
        // Event title
        title: 'Get on the front page of HN',

        // Event start date
        start: new Date('June 15, 2013 19:00'),
        
        //.. and the rest was optional.
        
      }
    });
    console.log(caldata);


## Demo

[Here is a live example](https://commonpike.github.io/add-to-calendar-buttons/example.html)



## Calendar Generator
Need to generate an add-to-calendar widget on the fly? No problem, [go here](https://commonpike.github.io/add-to-calendar-buttons/generator/generator.html).

## GitHub Project Page
[Official Project Page](http://commonpike.github.io/ouical/)

## License
[MIT](http://opensource.org/licenses/MIT)
