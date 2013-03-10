(function (root, factory) {
  if (typeof exports === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define(function() {
      return factory();
    });
  else
    root.heredoc = factory();
}(this, function() {
  return function(fn) {
    return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
  }
}));
