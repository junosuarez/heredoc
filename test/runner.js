'use strict'

mocha.setup('bdd')

require('./test.heredoc')
require('./test.heredoc.strip')

mocha.run()
