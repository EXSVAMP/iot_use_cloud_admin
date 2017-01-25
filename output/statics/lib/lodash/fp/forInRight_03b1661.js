var convert = require('lib/lodash/fp/convert'),
    func = convert('forInRight', require('lib/lodash/forInRight'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
