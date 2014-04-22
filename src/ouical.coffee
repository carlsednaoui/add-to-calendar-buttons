moment = require 'moment'

class Ouical
  constructor: (opts = {}) ->
    @title = opts.title || ''
    @start = moment(opts.start, 'MM-DD-YYYY hh:mm')
    @address = opts.address
    @description = opts.description || ''

    # calculate @end via opts.duration
    if opts.end
      @end = moment(opts.end, 'MM-DD-YYYY hh:mm')
    else
      duration = moment.duration(opts.duration, 'minutes')
      @end = moment(@start).add(duration)

    # handle timezone
    if opts.zone
      console.log @start.format()
      @start = @start.zone(opts.zone)
      console.log @start.format()

      @end = @end.zone(opts.zone)

      


  # links: ->

  # googleGenerator = ->
  #   encodeURI([
  #     'https://www.google.com/calendar/render',
  #     '?action=TEMPLATE',
  #     '&text=' + (event.title || ''),
  #     '&dates=' + (startTime || ''),
  #     '/' + (endTime || ''),
  #     '&details=' + (event.description || ''),
  #     '&location=' + (event.address || ''),
  #     '&sprop=&sprop=name:'
  #   ].join(''))

  # yahooGenerator = ->
  #   encodeURI([
  #     'http://calendar.yahoo.com/?v=60&view=d&type=20',
  #     '&title=' + (event.title || ''),
  #     '&st=' + st,
  #     '&dur=' + (yahooEventDuration || ''),
  #     '&desc=' + (event.description || ''),
  #     '&in_loc=' + (event.address || '')
  #   ].join(''))

  # # used for ical and outlook
  # icsGenerator = ->
  #   encodeURI(
  #     'data:text/calendar;charset=utf8,' + [
  #     'BEGIN:VCALENDAR',
  #     'VERSION:2.0',
  #     'BEGIN:VEVENT',
  #     'URL:' + document.URL,
  #     'DTSTART:' + (startTime || ''),
  #     'DTEND:' + (endTime || ''),
  #     'SUMMARY:' + (event.title || ''),
  #     'DESCRIPTION:' + (event.description || ''),
  #     'LOCATION:' + (event.address || ''),
  #     'END:VEVENT',
  #     'END:VCALENDAR'].join('\n'))


module.exports = Ouical
