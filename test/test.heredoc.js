"use strict";


var heredoc = require('../')

require('should')


describe('heredoc', function() {

  var text

  before(function() {
    text = heredoc(function () {/*
within this comment block,
any text
will
  be
    treated
      as
  pre-formatted
    multiline text
(kinda like html <pre>)
    */})
  })

  it('should be able to define string in function', function() {
    var lines = text.split('\n')

    lines[0].should.equal('within this comment block,')
    lines[lines.length - 2].should.equal('(kinda like html <pre>)')
  })
})
