!function (root) {
  
  function heredoc(fn) {
    return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
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
