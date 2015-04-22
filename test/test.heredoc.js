var heredoc = require('../')
var chai = require('chai')
chai.should()

describe('heredoc', function() {

  it('should be able to define string in function', function() {
    var text = heredoc(function () {/*
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
    var lines = text.split('\n')

    lines[0].should.equal('within this comment block,')
    lines[lines.length - 2].should.equal('(kinda like html <pre>)')
  })
})

  it('should be able to define string in function with params parsed in it', function() {
    var text = heredoc(function () {/*
within this comment block,
any text
will
  be
    treated
      as
  pre-formatted
    multiline text
(kinda like html <pre>)
and the params sent should be parsed like this: {param1} and this: {param2}
    */}, {param1:"test1", param2:"test2"})
    var lines = text.split('\n')

    lines[0].should.equal('within this comment block,')
    lines[lines.length - 3].should.equal('(kinda like html <pre>)')
    lines[lines.length-1].should.equal('and the params sent should be parsed like this: test1 and this: test2')
  })
})
