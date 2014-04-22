moment = require 'moment'

class Ouical
  constructor: (opts = {}) ->
    @title = opts.title || ''
    @start = opts.start
    @duration = opts.duration
    @end = opts.end
    @address = opts.address
    @description = opts.description || ''

  links: ->


module.exports = Ouical
