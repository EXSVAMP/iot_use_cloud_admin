var convert = require('lib/lodash/fp/convert'),
    func = convert('isTypedArray', require('lib/lodash/isTypedArray'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
