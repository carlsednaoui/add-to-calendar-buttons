mock =
  title: 'test title'
  start: '1/1/2014 13:00'
  end: '1/2/2014 16:00'
  address: 'test address'
  description: 'test description'

describe 'basic', ->

  it 'should work', ->
    ouical = new Ouical
    ouical.title.should.be.empty
    ouical.description.should.be.empty

  it 'should accept params', ->
    ouical = new Ouical
      title: 'test title'
      start: '1/1/2014 00:00'
      duration: 30
      end: '1/2/2014 00:00'
      address: 'test address'
      description: 'test description'

    ouical.title.should.equal('test title')
    ouical.start.format('MM-DD-YYYY hh:mm').should.equal('01-01-2014 12:00')
    should.not.exist(ouical.duration)
    ouical.end.format('MM-DD-YYYY hh:mm').should.equal('01-02-2014 12:00')
    ouical.address.should.equal('test address')
    ouical.description.should.equal('test description')

  it 'should calculate endTime from startTime and duration', ->
    ouical = new Ouical
      start: '1/1/2014 00:00'
      duration: 30

    ouical.start.format('MM-DD-YYYY hh:mm').should.equal('01-01-2014 12:00')
    ouical.end.format('MM-DD-YYYY hh:mm').should.equal('01-01-2014 12:30')

  it 'should return a list of links', ->
    ouical = new Ouical(mock)
    console.log ouical.links().ics
    ouical.links().should.be.an('object')

  it 'should check google output', ->
    ouical = new Ouical(mock)
    ouical.links().google.should.equal('https://www.google.com/calendar/render?action=TEMPLATE&text=test%20title&dates=20140101T130000Z/20140102T160000Z&details=test%20description&location=test%20address&sprop=&sprop=name:')

  it 'should check yahoo output', ->
    ouical = new Ouical(mock)
    ouical.links().yahoo.should.equal('http://calendar.yahoo.com/?v=60&view=d&type=20&title=test%20title&st=20140101T130000Z&dur=1620&desc=test%20description&in_loc=test%20address')

  it.skip 'should check ics output', ->
    ouical = new Ouical(mock)
