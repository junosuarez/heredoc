"use strict";


var heredoc = require('../')

require('should')


describe('heredoc.strip', function() {

  var text

  before(function() {
    text = heredoc.strip(function() {/*
      <body>
        <p>indented strings are fine.</p>
        <p>the preceding spaces will be shrinked.</p>
      </body>
    */})
  })

  it('should be able to define text in indented style', function() {
    var lines = text.split('\n')

    lines[0].should.equal('<body>')
    lines[1].should.match(/^  [^ ]/)
    lines[lines.length - 2].should.equal('</body>')
  })
})