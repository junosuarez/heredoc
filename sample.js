var heredoc = require('./index')
var str = heredoc(function () {/*
within this comment block,
any text
will
  be
    treated
      as
  pre-formatted
    multiline text
(kinda like html <pre>)
and can also parse params sent to it like this {param1} and this {param2}
*/}, {param1:"test1", param2:"test2"})
console.log(str)
