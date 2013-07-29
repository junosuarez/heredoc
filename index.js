!function (root) {

  function heredoc(fn) {
    return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
  }

  heredoc.strip = function(fn) {
    var text = this(fn)
    var i = 0

    while (text.charAt(i++) === ' ') ;

    var indent = new RegExp('^ {' + (i - 1) + '}', 'mg')

    return i > 0 ? text.replace(indent, '') : text
  }

  if (typeof exports === 'object')
    module.exports = heredoc

  else if (typeof define === 'function' && define.amd)
    define(function() {
      return heredoc
    })

  else
    root.heredoc = heredoc
}(this)
