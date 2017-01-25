var convert = require('lib/lodash/fp/convert'),
    func = convert('assignIn', require('lib/lodash/assignIn'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
