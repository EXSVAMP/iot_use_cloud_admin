var convert = require('lib/lodash/fp/convert'),
    func = convert('thru', require('lib/lodash/thru'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
