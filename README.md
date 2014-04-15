# OuiCal

A simple JS library that enables you to add an "add to calendar" button for your upcoming events.

### Installation

Download the script from the [build](build) folder and add it to your page.

### Usage

#### Options
Event title    
`title: 'Get on the front page of HN'`

Event start date    
`start: new Date('June 15, 2013 19:00')`

Event duration (IN MINUTES)    
`duration: 120`

You can also choose to set an end time    
If an end time is set, this will take precedence over duration    
`end: new Date('June 15, 2013 23:00')`

Event Address    
`address: 'The internet'`

Event Description    
`description: 'Get on the front page of HN, then prepare for world domination.'`


#### Basic

##### Example

```js
ouical.links({
  title: 'Get on the front page of HN'
, start: new Date('June 15, 2013 19:00')
, end: new Date('June 15, 2013 23:00')
, address: 'The internet'
, description: 'Get on the front page of HN'
});
```

Returns    
```js
{
  gcal: google-calendar-link
, ical: ical-link
, yahoo: yahoo-mail-link
}
```


#### Intermediate

By default it will return a `<ul>` with `<li>`'s. You can also pass an underscore template.

// Template    
Takes a string. Pass an underscore template, or the ID of an element that contains an underscore template.

##### Example

```js
ouical.html({
  title: 'Get on the front page of HN'
, start: new Date('June 15, 2013 19:00')
, end: new Date('June 15, 2013 23:00')
, address: 'The internet'
, description: 'Get on the front page of HN'
, template: '#calendar-invite-template'
})
```

Returns    
```html
<ul>
  <li>link1</li>
  <li>link2</li>
  <li>link3</li>
</ul>
```

#### Advanced

// Element    
This is the element to which you want to bind ouical.

```js
ouical.component({
  title: 'Get on the front page of HN'
, start: new Date('June 15, 2013 19:00')
, end: new Date('June 15, 2013 23:00')
, address: 'The internet'
, description: 'Get on the front page of HN'
, template: '#calendar-invite-template'
, element:  '#calendar-invite-button'
})
```

### Libraries to consider

- [http://underscorejs.org/#template](http://underscorejs.org/#template)
- [http://momentjs.com/](http://momentjs.com/)


### Inspiration

This project was inspired by [Eventbrite's](http://www.eventbrite.com/) add to calendar feature (which should have been open sourced #justSayin).
