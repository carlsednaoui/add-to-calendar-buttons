path = require 'path'

describe 'browser', ->

  it 'loads a page', (done) ->
    driver.get("file://#{path.resolve('example/index.html')}").then(done)
