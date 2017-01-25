var convert = require('lib/lodash/fp/convert'),
    func = convert('forOwnRight', require('lib/lodash/forOwnRight'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
