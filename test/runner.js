'use strict'
/* globals mocha */

if (typeof mocha !== 'undefined') mocha.setup('bdd')

require('./test.heredoc')
require('./test.heredoc.strip')

if (typeof mocha !== 'undefined') mocha.run()
