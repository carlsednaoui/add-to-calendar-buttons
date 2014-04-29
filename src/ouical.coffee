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

  links: ->
    google: googleGenerator.call(this)
    yahoo: yahooGenerator.call(this)
    ics: icsGenerator.call(this)


  googleGenerator = ->
    encodeURI(
      "https://www.google.com/calendar/render" +
      "?action=TEMPLATE" +
      "&text=#{@title}" +
      "&dates=#{@start.format('YYYYMMDDTHHmmss')}Z/#{@end.format('YYYYMMDDTHHmmss')}Z" +
      "&details=#{@description}" +
      "&location=#{@address}" +
      "&sprop=&sprop=name:"
    )

  yahooGenerator = ->
    duration = @end.diff(@start, 'minutes')
    encodeURI(
      "http://calendar.yahoo.com/?v=60&view=d&type=20" +
      "&title=#{@title}" +
      "&st=#{@start.format('YYYYMMDDTHHmmss')}Z" +
      "&dur=#{duration}" +
      "&desc=#{@description}" +
      "&in_loc=#{@address}"
    )

  # used for ical and outlook
  icsGenerator = ->
    encodeURI(
      "data:text/calendar;charset=utf8," + [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "BEGIN:VEVENT",
        # "URL:#{document.URL || ''}",
        "DTSTART:#{@start}",
        "DTEND:#{@end}",
        "SUMMARY:#{@title}",
        "DESCRIPTION:#{@description}",
        "LOCATION:#{@address}",
        "END:VEVENT",
        "END:VCALENDAR"
      ].join('\n'))

module.exports = Ouical
