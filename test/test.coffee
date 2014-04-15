should = require 'should'
Ouical = require '../src/ouical'

describe 'basic', ->

  it 'should work', ->
    ouical = new Ouical
    ouical.title.should.be.empty
    ouical.description.should.be.empty

  it 'should accept params', ->
    ouical = new Ouical(
      title: 'test title'
      start: 'test start'
      duration: 'test duration'
      end: 'test end'
      address: 'test address'
      description: 'test description'
    )

    ouical.title.should.equal('test title')
    ouical.start.should.equal('test start')
    ouical.duration.should.equal('test duration')
    ouical.end.should.equal('test end')
    ouical.address.should.equal('test address')
    ouical.description.should.equal('test description')

