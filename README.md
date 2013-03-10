# heredoc
multiline strings for javascript

## installation

    $ npm install heredoc

## usage

this technique takes advantage of `Function.prototype.toString()`

    var heredoc = require('heredoc')
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
    */})
    console.log(str)

## AMD

`heredoc` defines itself as an AMD module for use in AMD environments.

## kudos

thanks to @izs - I first saw this technique when reading through npm source. I find it to be much neater than lots of manual string concatenation.

## license
AS-IS