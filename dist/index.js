
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./test-full-stack.cjs.production.min.js')
} else {
  module.exports = require('./test-full-stack.cjs.development.js')
}
