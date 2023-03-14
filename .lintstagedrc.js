const rules = require('@unconfig/lint-staged-config/vue3.js')

module.exports = {
  ...rules,
  '*.vue': ['eslint --fix'],
  '*.{scss,less,html}': ['prettier --write'],
}
