!function (root) {

  function heredoc(fn) {
    return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
  }

  var stripPattern = /^[ \t]*(?=[^\s]+)/mg
  // normalizes leading indentation https://github.com/jden/heredoc/pull/6
  heredoc.strip = function(fn) {
    var text = heredoc(fn)

    var indentLen = text.match(stripPattern)
                                 .reduce(function (min, line) {
      return Math.min(min, line.length)
    }, Infinity)

    var indent = new RegExp('^[ \\t]{' + indentLen + '}', 'mg')
    return indentLen > 0
      ? text.replace(indent, '')
      : text
  }

  // support AMD
  if (typeof exports === 'object') {
    module.exports = heredoc
  }
  else if (typeof define === 'function' && define.amd) {
    define(function() {
      return heredoc
    })
  }
  else {
    root.heredoc = heredoc
  }
}(this)
