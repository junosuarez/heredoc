function heredoc(fn) {
  return fn.toString().split('\n').slice(1,-1).join('\n') + '\n'
}

module.exports = heredoc
