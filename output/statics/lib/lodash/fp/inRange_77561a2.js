var convert = require('lib/lodash/fp/convert'),
    func = convert('inRange', require('lib/lodash/inRange'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
