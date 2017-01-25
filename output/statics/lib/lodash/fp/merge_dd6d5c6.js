var convert = require('lib/lodash/fp/convert'),
    func = convert('merge', require('lib/lodash/merge'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
