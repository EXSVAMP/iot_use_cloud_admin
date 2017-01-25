var convert = require('lib/lodash/fp/convert'),
    func = convert('templateSettings', require('lib/lodash/templateSettings'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
