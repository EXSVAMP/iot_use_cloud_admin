var convert = require('lib/lodash/fp/convert'),
    func = convert('hasIn', require('lib/lodash/hasIn'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
