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
    ouical.start.format().should.equal('2014-01-01T00:00:00-05:00')
    should.not.exist(ouical.duration)
    ouical.end.format().should.equal('2014-01-02T00:00:00-05:00')
    ouical.address.should.equal('test address')
    ouical.description.should.equal('test description')

  it 'should calculate endTime from startTime and duration', ->
    ouical = new Ouical
      start: '1/1/2014 00:00'
      duration: 30

    ouical.end.format().should.equal('2014-01-01T00:30:00-05:00')


  it.skip 'should handle timezones when passed', ->
    ouical = new Ouical
      start: '1/1/2014 00:00'
      duration: 30
      zone: '-07:00'

    ouical.end.format().should.equal('2014-01-01T00:30:00-07:00')
